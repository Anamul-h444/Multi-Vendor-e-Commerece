import React, { useState } from "react";
import Router from "./router/Router";
import PublicRoutes from "./router/routes/PublicRoutes";

const App = () => {
  const [allRoutes, setAllRoutes] = useState([...PublicRoutes]);

  return <Router allRoutes={allRoutes} />;
};

export default App;
