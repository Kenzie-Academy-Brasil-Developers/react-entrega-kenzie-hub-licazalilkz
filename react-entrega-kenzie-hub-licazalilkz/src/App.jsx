import { UserProvide } from "./context/userContext"
import { RouterMain } from "./router/routerMain"

function App() {
  return (
    <>
      <UserProvide>
        <RouterMain/>
      </UserProvide>
    </>
  )
}

export default App