import { Route, Routes } from "react-router-dom";

import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";
import Sign_in from "./routes/Sign-in/Sign_in";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="shop" element={<h1>SHOP!</h1>} />
        <Route path="sign_in" element={<Sign_in />} />
      </Route>
    </Routes>
  );
}

export default App;