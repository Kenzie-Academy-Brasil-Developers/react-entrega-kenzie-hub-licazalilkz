import { ModalProvider } from "./context/modalContext"
import { UserProvide } from "./context/userContext"
import { RouterMain } from "./router/routerMain"

function App() {
  return (
    <>
      <UserProvide>
        <ModalProvider>
          <RouterMain/>
        </ModalProvider>
      </UserProvide>
    </>
  )
}

export default App