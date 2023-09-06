import { useState } from "react";
import { Button } from "../ui/button";
import logo from "../../assets/logo.png";
import { navLinks } from "@/constants/index.js";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../ui/sheet";
import { Menu } from "lucide-react";

const MainContent = () => {
  const [active, setActive] = useState("");
  return (
    <>
      {/* Mobile Hamburger */}
      <div className="flex">
        <Sheet>
          <SheetTrigger>
            <Menu className="h-6 w-6 sm:hidden" />
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <SheetClose asChild>
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "" : "text-muted-foreground"
                    } text-sm font-medium  transition-colors hover:text-primary`}
                    onClick={() => {
                      setActive(link.title);
                    }}
                  >
                    <a href={`#${link.id}`}>{`${link.title}`}</a>
                  </li>
                </SheetClose>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>

      {/* Logo */}
      <div className="hidden sm:flex">
        <Button
          variant="ghost"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-7 h-7 object-contain" />
          <p className="pl-1 text-muted-foreground truncate">Kerry Chow</p>
        </Button>
      </div>

      {/* Navigation Redirects */}
      <ul className="list-none hidden sm:flex gap-10 px-10">
        {navLinks.map((link) => (
          <li
            key={link.id}
            className={`${
              active === link.title ? "" : "text-muted-foreground"
            } text-sm font-medium  transition-colors hover:text-primary`}
            onClick={() => setActive(link.title)}
          >
            <a href={`#${link.id}`}>{`${link.title}`}</a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MainContent;
