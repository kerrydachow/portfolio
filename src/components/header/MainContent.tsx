import { useState } from "react";
import { Button } from "../ui/button";
import logoDarkMode from "../../assets/logo-white.png";
import logoLightMode from "../../assets/logo.png";
import { navLinks } from "@/constants/index.js";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "../ui/sheet";
import { Menu } from "lucide-react";

const MainContent = () => {
  const [active, setActive] = useState("");
  return (
    <>
      {/* Mobile Hamburger */}
      <div className="flex">
        <Sheet modal={false}>
          <SheetTrigger>
            <Menu className="h-6 w-6 md:hidden" />
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <ul className="flex flex-col gap-5">
              {navLinks.map((link) => (
                <SheetClose key={link.id} asChild>
                  <a
                    className={`${
                      active === link.title ? "" : "text-muted-foreground"
                    } text-sm font-medium  transition-colors hover:text-primary`}
                    onClick={() => {
                      setActive(link.title);
                    }}
                    href={`#${link.id}`}
                  >
                    {`${link.title}`}
                  </a>
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
          <div>
            <img
              src={logoDarkMode}
              alt={"logo-white"}
              className="w-7 h-7 object-contain absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
            />
            <img
              src={logoLightMode}
              alt={"logo-dark"}
              className="w-7 h-7 object-contain rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
            />
          </div>
          <p className="pl-1  truncate">Kerry Chow</p>
        </Button>
      </div>

      {/* Navigation Redirects */}
      <ul className="list-none hidden md:flex gap-10 px-10">
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
