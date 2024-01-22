import AppProvider from "./AppProvider"
import {Route, Routes} from "react-router-dom";
import SignIn from "../features/pages/signin/SignIn.tsx";
import MainLayout from "../features/layout/main/MainLayout.tsx";
import HomePage from "../features/pages/home/HomePage.tsx";
import PostDetailPage from "../features/pages/post/PostDetailPage.tsx";

const App = () => {

    return (
        <AppProvider>
            <Routes>
                <Route path={"/"} element={<SignIn/>}/>
                <Route path={"/"} element={<MainLayout/>}>
                    <Route path={"/home"} element={<HomePage/>}/>
                    <Route path={"post"} element={<PostDetailPage/>}/>
                </Route>
            </Routes>
        </AppProvider>
    )
}


export default App