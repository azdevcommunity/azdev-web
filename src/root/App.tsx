import AppProvider from "./AppProvider"
import {Route, Routes} from "react-router-dom";
import HomeLayout from "../features/layout/home/HomeLayout.tsx";
import HomePage from "../features/pages/home/HomePage.tsx";
import LoginPage from "../features/pages/login/LoginPage.tsx";
import DashBoard from "./DashBoard.tsx";
import RegisterPage from "../features/pages/register/RegisterPage.tsx";


const App = () => (
    <DashBoard>
        <AppProvider>
            <Routes>
                <Route path={"/"} element={<HomePage/>}/>
            </Routes>
        </AppProvider>
    </DashBoard>
);


export default App