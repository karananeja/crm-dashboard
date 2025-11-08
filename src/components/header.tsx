import { CirclePlus, Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex justify-between items-center">
      <div className="flex gap-4">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Menu"
          className="bg-gray-200"
        >
          <Menu />
        </Button>
        <h1 className="font-semibold text-gray-900 text-2xl">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          aria-label="Search"
          className="bg-gray-200"
        >
          <Search className="size-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Notifications"
          className="bg-gray-200"
        >
          <CirclePlus className="size-5" />
        </Button>
      </div>
    </header>
  );
}
