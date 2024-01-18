import {FC, ReactNode, useEffect} from "react"
import {Provider} from "react-redux"
import {BrowserRouter} from "react-router-dom"
import store from "../app/store"
import useTheme from "../features/hooks/useTheme.ts";
import {NextUIProvider} from "@nextui-org/react";

interface Props {
    children: ReactNode
}

const AppProvider: FC<Props> = ({children}) => {

    const [, , setTheme] = useTheme();
    useEffect(() => setTheme(), [setTheme])

    return (
        <BrowserRouter>
            <NextUIProvider>
                <Provider store={store}>
                    {children}
                </Provider>
            </NextUIProvider>
        </BrowserRouter>
    )
}

export default AppProvider