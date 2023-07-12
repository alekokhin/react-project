import {
  Button,
  Step,
  StepLabel,
  Stepper,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../theme/ThemeContext";

const Registration = () => {
  const steps = ["full-name", "email", "description"];
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();
  const { isDark } = useContext(ThemeContext);

  const theme = createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
    },
  });

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexDirection: "column",
          alignItems: "center",
          height: "300px",
        }}
      >
        <ThemeProvider theme={theme}  >
          <Stepper activeStep={activeStep} style={{width:"100%"}}>
            {steps.map((label, index) => (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div style={{display:"flex",alignItems:"center", height:"200px"}} >
            <Outlet />
          </div>
        </ThemeProvider>

        <div style={{display:"flex", width:"160px",justifyContent:"space-evenly"}}>
          {activeStep > 0 && (
            <Button 
              variant="contained"
              color="primary"
              onClick={() => {
                setActiveStep(activeStep - 1);
                navigate(-1);
              }}
            >
              back
            </Button>
          )}
          <Button 
            variant="contained"
            color="primary"
            onClick={() => {
              if (activeStep === steps.length - 1) {
                navigate("/finish");
              } else {
                setActiveStep(activeStep + 1);
                navigate(`${steps[activeStep + 1]}`);
              }
            }}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </div>
    </>
  );
};

export default Registration;
