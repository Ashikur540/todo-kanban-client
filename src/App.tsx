import { Toaster } from "sonner";
import "./App.css";
import KanbanBoard from "./pages/Home";

function App() {
  return (
    <>
      <KanbanBoard />
      <Toaster />
    </>
  );
}

export default App;
