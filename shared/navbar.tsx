import LocaleSwitcher from "@/components/local-switcher";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import React from "react";
import { NavProject } from "./nav-projects";
import { Link } from "@/i18n/routing";

const Navbar = () => {
  return (
    <nav className="px-4 py-4  flex md:flex-col justify-between items-center">
      <Button
        variant="outline"
        className="w-12 h-12 hover:bg-green-500 hover:text-white font-bold text-sm cursor-default"
      >
        π
      </Button>
      <div className="md:mt-4">
        <Link href="/pomodoro">
          <Button variant="outline" className="w-12 h-12">
            🍅
          </Button>
        </Link>
      </div>

      <div className=" mt-auto flex gap-2 md:flex-col">
        <NavProject />
        <ModeToggle />
        <LocaleSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
