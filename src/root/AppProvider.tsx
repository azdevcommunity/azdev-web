import {FC, ReactNode, useEffect} from "react"
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"
import store from "../app/store"
import useTheme from "../features/hooks/useTheme.ts";


interface Props {
    children: ReactNode
}

const AppProvider: FC<Props> = ({children}) => {

    const [, , setTheme] = useTheme();
    useEffect(() => setTheme(), [])

    return (
        <BrowserRouter>
            <Provider store={store}>
                {children}
            </Provider>
        </BrowserRouter>
    )
}

export default AppProvider