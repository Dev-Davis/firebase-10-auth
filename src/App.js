import Login from "./Components/Auth/Login/Login";
import Register from "./Components/Auth/Register/Register";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";

import { AuthProvider } from "./Contexts/AuthContext/AuthContext";
import { useRoutes } from "react-router-dom";

const App = () => {
  const routes = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
  ];

  let routesElement = useRoutes(routes);

  return (
    <AuthProvider>
      <Navbar />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  )
}

export default App;
