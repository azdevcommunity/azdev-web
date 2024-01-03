import { FC } from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import store from "../app/store"


interface Props {
  children: React.ReactNode
}

const AppProvider: FC<Props> = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        {children}
      </Provider>
    </BrowserRouter>
  )
}

export default AppProvider