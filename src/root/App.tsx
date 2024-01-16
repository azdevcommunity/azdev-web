import AppProvider from "./AppProvider"
import {Route, Routes} from "react-router-dom";
import HomePage from "../features/pages/home/HomePage.tsx";
import DashBoard from "./DashBoard.tsx";


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