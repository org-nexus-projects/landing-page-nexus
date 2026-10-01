import React from "react";
import {
  LineChart,
  BookText,
  Calendar,
  FileText,
  Settings,
  Clock,
  Download,
  HelpCircle,
} from "lucide-react";
import { cn } from "#lib/utils";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
}

const SidebarItem = ({ icon, label, to, active }: SidebarItemProps) => {
  return (
    <li>
      <Link
        to={to}
        className={cn(
          "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors",
          active
            ? "bg-blue-50 text-blue-600"
            : "text-gray-600 hover:bg-blue-50 hover:text-blue-600",
        )}
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );
};

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <aside className="hidden lg:block w-60 h-[calc(100vh-64px)] border-r bg-white p-3 sticky top-16">
      <nav>
        <ul className="space-y-1">
          <SidebarItem
            icon={<LineChart size={20} />}
            label="Desempenho"
            to="/"
            active={currentPath === "/"}
          />
          <SidebarItem
            icon={<BookText size={20} />}
            label="Disciplinas"
            to="/courses"
            active={currentPath === "/courses"}
          />
          <SidebarItem
            icon={<Calendar size={20} />}
            label="Calendário"
            to="/calendar"
            active={currentPath === "/calendar"}
          />
          <SidebarItem
            icon={<FileText size={20} />}
            label="Materiais"
            to="/materials"
            active={currentPath === "/materials"}
          />
          <SidebarItem
            icon={<Clock size={20} />}
            label="Histórico"
            to="/history"
            active={currentPath === "/history"}
          />
          <SidebarItem
            icon={<Download size={20} />}
            label="Downloads"
            to="/downloads"
            active={currentPath === "/downloads"}
          />
          <SidebarItem
            icon={<HelpCircle size={20} />}
            label="Suporte"
            to="/support"
            active={currentPath === "/support"}
          />
          <SidebarItem
            icon={<Settings size={20} />}
            label="Configurações"
            to="/settings"
            active={currentPath === "/settings"}
          />
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
