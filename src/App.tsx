import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddTask from "./components/AddTask";
import Home from "./components/Home";
import TaskList from "./components/TaskList";
import TaskDetails from "./components/TaskDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<TaskList />} />
            <Route path="/add" element={<AddTask />} />
            <Route path="/task/:taskId" element={<TaskDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
