import { Button } from "@mui/material";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../theme/ThemeContext";
import { IconButton } from "@mui/material";
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded";
import WbSunnyRoundedIcon from "@mui/icons-material/WbSunnyRounded";
const Home = () => {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div style ={{display:"flex", justifyContent:"space-between",alignItems:"center"}} >
        <div style={{display:"flex"}}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/")}
          >
            home
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/registration/full-name")}
          >
            registration
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate("/todos")}
          >
            todo
          </Button>
        </div>
        <div>
          <IconButton
            color="inherit"
            onClick={toggleTheme}
            style={{ float: "right" }}
          >
            {isDark ? <WbSunnyRoundedIcon /> : <NightsStayRoundedIcon />}
          </IconButton>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Home;
