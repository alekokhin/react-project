import { Button, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Finish } from "./fullName";

function Registration() {
  const steps = ["full-name", "email", "description"];
  const [activeStep, setActiveStep] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    navigate(`${steps[activeStep + 1]}`);
  };

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
    navigate(`${steps[activeStep - 1]}`);
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Outlet />
      <div>
        {/* Switch between steps */}
        {activeStep > 0 && (
          <Button variant="contained" color="primary" onClick={handlePrev}>
            Previous
          </Button>
        )}
        <Button
  variant="contained"
  color="primary"
  onClick={() => {
    if (activeStep === steps.length-1 ) {
      // Handle finish action
      // Replace <Finish /> with the appropriate finish action/component
      // For example: navigate('/thank-you') or perform a form submission
      navigate("finish")
    } else {
      handleNext();
    }
  }}
>
  {activeStep === steps.length - 1 ? "Finish" : "Next"}
</Button>

      </div>
    </div>
  );
}

export default Registration;
