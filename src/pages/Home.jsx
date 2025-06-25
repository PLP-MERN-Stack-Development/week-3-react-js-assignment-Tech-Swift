import TaskManager from "../components/TaskManager";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Welcome to Tech-Swift Task Manager</h1>
      <TaskManager />
    </div>
  );
}
