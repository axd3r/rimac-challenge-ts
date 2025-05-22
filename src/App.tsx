import { RouterProvider } from "react-router-dom";
import Router from "./navigation/Router";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <RouterProvider router={Router} />
    </>
  )
}

export default App;
