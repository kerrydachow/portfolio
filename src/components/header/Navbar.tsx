import { ModeToggle } from "../ModeToggle";
import MainContent from "./MainContent";
import { infoLinks } from "@/constants/index.js";
import { Github, Linkedin } from "lucide-react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <>
      <div className="flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <MainContent />
            <div className="ml-auto flex items-center">
              {/* Github */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  window.open(infoLinks.github);
                }}
              >
                <Github className="h-[1.2rem] w-[1.2rem] transition-all" />
              </Button>

              {/* LinkedIn */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                  window.open(infoLinks.linkedin);
                }}
              >
                <Linkedin className="h-[1.2rem] w-[1.2rem] transition-all" />
              </Button>

              {/* Toggle Dark/Light Mode */}
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
