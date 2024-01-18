import AppProvider from "./AppProvider"
import {Route, Routes} from "react-router-dom";
import SignIn from "../features/pages/signin/SignIn.tsx";
import MainLayout from "../features/layout/main/MainLayout.tsx";
import HomePage from "../features/pages/home/HomePage.tsx";

const App = () => {

    return (
        <AppProvider>
            <Routes>
                <Route path={"/"} element={<SignIn/>}/>
                <Route path={"/home"} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                </Route>
            </Routes>
        </AppProvider>
    )
}


export default App