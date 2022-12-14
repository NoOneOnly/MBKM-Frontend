import { Routes, Route } from "react-router-dom";
import DashLayout from "./components/DashLayout";
import Layout from './components/Layout'
import Login from "./features/auth/Login";
import Public from './components/Public'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        <Route path="dash" element={<DashLayout />}>


        </Route>

      </Route>
    </Routes>
  );
}

export default App;
