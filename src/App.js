//import Login from './views/login/Login'
import NavBarVertical from "./layouts/Navigation/NavBarVertical";
import "./App.css";
import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Home from "./views/home/Home";
import Calendar from "./views/calendar/Calendar";
import Login from './views/login/Login'
import Enrollment from './views/enrollment/Enrollment'

function App() {
  return (
    <div className="App">
      <NavBarVertical>
        <Box
          component="main"
          sx={{
            backgroundColor: "#ddf7ff",
            paddingLeft: "8px",
            paddingTop: "10px",
            marginLeft: "10px",
            marginTop: "10PX",
            marginRight: "10px",
            width: "100vw",
            height: "97vh",
            borderRadius: "5px",
          }}
        >
          <Routes>Enrollment
            <Route index path="/perfil" element={<Home />} />
            <Route index path="/calendario" element={<Calendar />} />
            <Route index path="/login" element={<Login />} />
            <Route index path="/matricula" element={<Enrollment />} />
          </Routes>
        </Box>
      </NavBarVertical>
    </div>
  );
}

export default App;
