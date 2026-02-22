import Navbar from "./components/Navbar";
import AdminNavbar from "./components/AdminNavbar";
import AdminRouter from "./routes/AdminRoute";
import Router from "./routes/AppRoute";

import { TodoProvider } from "./context/Context";
import './App.css';
import { useLocation } from 'react-router-dom';
function App() {
   const location = useLocation();
   
  return (
    <TodoProvider>
    {(location.pathname === '/admin-login' || location.pathname === '/admin-register' || location.pathname === '/material' || location.pathname === '/add-material') ? <AdminNavbar /> : <Navbar />}

      <AdminRouter />
      <Router />
    </TodoProvider>
  );
}

export default App;
