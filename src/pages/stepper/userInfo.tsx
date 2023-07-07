import { TextField,Button,ButtonBase,ButtonGroup, Stepper, Step, StepLabel    } from "@mui/material";
import React, { useState } from "react";
import { get } from "../../requests/get";

const steps = ["Step 1", "Step 2", "Step 3"];

const UserInfo = () => {

    const [activeStep, setActiveStep] = useState(0);

    const handleClick = async () => {
        try {
          const res = await get("http://192.168.100.21:8080/api/v0.1/getTestJson");
          console.log(res)
        } catch (error) {
          console.log("Error:", error);
        }
      };

 
  return (
    <>
      <div>
      <TextField label="Name" variant="outlined" />
      <TextField label="Surname" variant="outlined" />
     
    </div>
    <br />
    <div>
      <Button color="inherit">Inherit Color</Button>
      <Button color="primary">Primary Color</Button>
      <Button color="secondary">Secondary Color</Button>
      <Button color="error">Error Color</Button>
    </div>
    <br />
    <div>
      <Button variant="text">Text Button</Button>
      <Button variant="outlined">Outlined Button</Button>
      <Button variant="contained">Contained Button</Button>
     
    </div>
    <br />
    <div>
      <Button variant="contained" color="primary">
        Primary Button
      </Button>
      <Button variant="outlined" color="primary">
        Secondary Button
      </Button>
      <Button variant="text" color="inherit">
        Text Button
      </Button>
    </div>
    <br />
    <ButtonGroup variant="contained" color="primary">
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </ButtonGroup>
    <br />
    <br />
    <ButtonBase >
      <div>
        <h3>Click Me</h3>
        <p>ButtonBase Example</p>
      </div>
    </ButtonBase>
    <br />
    <br />
    <div>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <div>
        {activeStep === steps.length ? (
          <div>
            <p>All steps completed</p>
            <Button onClick={() => setActiveStep(0)}>Reset</Button>
          </div>
        ) : (
          <div>
            <p>Step {activeStep + 1}</p>
            <Button disabled={activeStep === 0} onClick={()=>setActiveStep(activeStep-1)}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={()=>setActiveStep(activeStep+1)}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        )}
      </div>
    </div>
    <Button variant="contained" color="primary" onClick={handleClick}>
        Get
      </Button>
    </>
  );
};
export default UserInfo;
