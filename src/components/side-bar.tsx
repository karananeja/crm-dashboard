import {
  BarChart3,
  Bell,
  Calendar,
  Folder,
  HelpCircle,
  LayoutDashboard,
  Mail,
  Moon,
  Power,
  Settings,
  Sun,
  Users,
} from "lucide-react";

import { cn } from "@/lib/utils";

const navigationItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Users, label: "Users" },
  { icon: Folder, label: "Files" },
  { icon: Mail, label: "Mail" },
  { icon: BarChart3, label: "Analytics" },
  { icon: Settings, label: "Settings" },
  { icon: Calendar, label: "Calendar" },
  { icon: Bell, label: "Notifications" },
  { icon: HelpCircle, label: "Help" },
  { icon: Users, label: "Team" },
  { icon: Power, label: "Logout" },
  { icon: Sun, label: "Light Mode" },
  { icon: Moon, label: "Dark Mode" },
];

export function Sidebar() {
  return (
    <div className="flex flex-col items-center bg-white py-6 border-r w-20 h-screen">
      {/* Logo */}
      <div className="flex justify-center items-center bg-blue-600 mb-8 rounded-[1.25rem] size-12">
        <span className="font-bold text-white text-xl">C</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col flex-1 gap-2">
        {navigationItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <button
              key={index}
              className={cn(
                "relative flex justify-center items-center hover:bg-[#c6c8fb]/20 rounded-lg size-12 transition-colors cursor-pointer",
                item.active && "bg-[#c6c8fb]/20"
              )}
              aria-label={item.label}
            >
              <Icon className={cn("size-4", item.active && "text-[#c6c8fb]")} />

              {item.active && (
                <span className="-right-4 bottom-0 absolute border border-[#c6c8fb] h-full text-sm" />
              )}
            </button>
          );
        })}
      </nav>

      {/* User Avatar */}
      <div className="mt-auto">
        <div className="flex justify-center items-center bg-gray-300 rounded-lg size-8" />
      </div>
    </div>
  );
}
