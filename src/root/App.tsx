import AppProvider from "./AppProvider"
import {Route, Routes} from "react-router-dom";
import HomeLayout from "../features/layout/home/HomeLayout.tsx";
import HomePage from "../features/pages/home/HomePage.tsx";


const App = () => {
     return (
        <AppProvider>
             <Routes>
                 <Route path={"/"} element={<HomeLayout/>}>
                     <Route index element={<HomePage/>}/>
                 </Route>
             </Routes>
        </AppProvider>
    )
}

export default App