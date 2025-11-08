import { Dashboard } from "@/components/dashboard";
import { Sidebar } from "@/components/side-bar";
import { Welcome } from "@/components/welcome";

export const App = () => {
  return (
    <div className="flex bg-gray-50 h-screen overflow-hidden">
      <Sidebar />
      <main className="flex w-full">
        <Welcome />
        <Dashboard />
      </main>
    </div>
  );
};
