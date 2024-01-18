import AppProvider from "./AppProvider"
import {Route, Routes} from "react-router-dom";
import SignIn from "../features/pages/home/SignIn.tsx";
import DashBoard from "./DashBoard.tsx";

const App = () => {

    return (
        <DashBoard>
            <AppProvider>
                <Routes>
                    <Route path={"/"} element={<SignIn/>}/>
                </Routes>
            </AppProvider>
        </DashBoard>
    )
}


export default App