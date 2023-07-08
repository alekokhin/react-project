import React, { useState } from "react";
import { Button } from "@mui/material";
import { get } from "../../requests/get";
import { useNavigate } from "react-router-dom";

const Home = () => {
const navigate = useNavigate()

  return (
    <div>
      <Button variant="contained" color="inherit" onClick={()=>navigate('/registration/full-name')}>registration</Button>     
    </div>
  );
};

export default Home;
