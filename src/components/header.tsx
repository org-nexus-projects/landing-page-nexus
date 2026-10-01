import React from "react";
import { Bell, Search } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "#components/ui/avatar";
import { Input } from "#components/ui/input";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm border-b py-2 px-4 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <div className="text-primary font-bold text-2xl">
              <span className="flex items-center">
                <svg
                  className="w-7 h-7 text-primary mr-1"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M21.4 5.6L12 0 2.6 5.6V18.4L12 24l9.4-5.6V5.6z" />
                  <path fill="#fff" d="M12 15V8l-5 3v7l5 3 5-3v-7l-5-3z" />
                </svg>
                UFABC
                <span className="text-edu-light-blue font-light">next</span>
              </span>
            </div>
          </div>
          <div className="relative hidden md:block md:w-64 lg:w-96">
            <Input
              placeholder="Buscar disciplinas, professores..."
              className="pl-9 pr-4 py-2 w-full rounded-full bg-gray-50"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative text-gray-600 hover:text-primary transition">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              2
            </span>
          </button>
          <div className="flex items-center gap-2">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium">João Silva</p>
              <p className="text-xs text-muted-foreground">RA: 11122233344</p>
            </div>
            <Avatar className="h-9 w-9 border">
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary text-primary-foreground">
                JS
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
