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
    

      <AdminRouter />
      <Router />
    </TodoProvider>
  );
}

export default App;
