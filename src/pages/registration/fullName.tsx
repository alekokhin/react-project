import { TextField, TextareaAutosize } from "@mui/material";

export const FullName = () => {
  return (
    <>
      <div>
        <TextField type="text" label="Name" variant="outlined" />
        <TextField type="text" label="Surname" variant="outlined" />
      </div>
    </>
  );
};
export const Email = () => {
  return (
    <>
      <TextField label="email" variant="outlined" type="email" />
    </>
  );
};
export const Description = () => {
  return (
    <>
      <TextareaAutosize
        placeholder="Enter your text here"
        style={{ width: "50%", height: "200px", fontSize: "18px" }}
      />
    </>
  );
};
export const Finish = () => {
  return (
    <div>
      <h1>finish registration</h1>
    </div>
  );
};
