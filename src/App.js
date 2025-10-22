import Navbar from "./components/Navbar";
import Router from "./Routes";
import { TodoProvider } from "./context/Context";
import './App.css';

function App() {
  return (
    <TodoProvider>
      <Navbar />
      <Router />
    </TodoProvider>
  );
}

export default App;
