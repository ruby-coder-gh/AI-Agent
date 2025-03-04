import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

import { UserContextProvider } from './context/user.context';

const App = () => {
    return (
        <UserContextProvider>
            <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
            </Routes>
            </Router>
        </UserContextProvider>
  );
};

export default App;
