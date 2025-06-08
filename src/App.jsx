
import DraggableTaskList from "./Components/DraggableTasksList";

function App() {
  const tasks = [
    {
      id: "task001",
      title: "Design Landing Page",
      startDate: "2025-06-08T06:06:00.000Z",
      dueDate: "2025-06-10T00:00:00.000Z",
    },
    {
      id: "task002",
      title: "Build Login API",
      startDate: "2025-06-07T08:00:00.000Z",
      dueDate: "2025-06-10T00:00:00.000Z",
    },
    {
      id: "task003",
      title: "Setup MongoDB Schema",
      startDate: "2025-06-09T09:00:00.000Z",
      dueDate: "2025-06-12T00:00:00.000Z",
    },

    {
      id: "task004",

      title: "Create Project Dashboard",

      startDate: "2025-06-10T08:00:00.000Z",
      dueDate: "2025-06-12T00:00:00.000Z",
    },
    {
      id: "task005",
      title: "Write Unit Tests",
      startDate: "2025-06-07T13:00:00.000Z",
      dueDate: "2025-06-08T00:00:00.000Z",
    },
    {
      id: "task006",

      title: "Design Email Templates",

      startDate: "2025-06-11T16:00:00.000Z",
      dueDate: "2025-06-13T00:00:00.000Z",
    },
    {
      id: "task007",
      title: "Implement Logout Flow",
      startDate: "2025-06-08T19:00:00.000Z",
      dueDate: "2025-06-11T00:00:00.000Z",
    },
    {
      id: "task008",
      title: "Optimize Load Time",
      startDate: "2025-06-12T00:00:00.000Z",
      dueDate: "2025-06-13T00:00:00.000Z",
    },
    {
      id: "task009",
      title: "Refactor Redux Store",

      startDate: "2025-06-09T14:59:00.000Z",
      dueDate: "2025-06-10T00:00:00.000Z",
    },
    {
      id: "task010",

      title: "Deploy to Production",
      startDate: "2025-06-13T23:00:00.000Z",
      dueDate: "2025-06-13T00:00:00.000Z",
    },
  ];

  return <DraggableTaskList initialTasks={tasks} />;
}

export default App;
