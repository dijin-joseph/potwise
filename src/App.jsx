import "./App.css";
import { Routes, Route, Navigate } from "react-router";
import Navbar from "./components/layout/Navbar.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import IncomeSetup from "./pages/IncomeSetup/IncomeSetup.jsx";

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-layout">
        <Navbar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/income/setup" element={<IncomeSetup />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
