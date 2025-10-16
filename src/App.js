import Navbar from "./components/Navbar";
import Router from "./Routes";
import { TodoProvider } from "./context/Context";

function App() {
  return (
    <TodoProvider>
      <Navbar />
      <Router />
    </TodoProvider>
  );
}

export default App;
