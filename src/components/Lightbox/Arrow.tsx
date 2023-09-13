import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";

type ArrowButtonProps = {
  position: "left" | "right";
  onClick?: () => void;
  disabled: boolean;
};

const ArrowButton = ({ position, onClick, disabled }: ArrowButtonProps) => {
  return (
    !disabled ? (
      <Button
        variant="secondary"
        size="icon"
        onClick={onClick}
        className={`z-50 rounded-full group absolute ${
          position === "left" ? "left-2 xl:left-10" : "right-2 xl:right-10"
        }`}
      >
        {position === "left" && (
          <ChevronLeft className="group-hover:scale-125 transition duration-500" />
        )}
        {position === "right" && (
          <ChevronRight className="group-hover:scale-125 transition duration-500" />
        )}
      </Button>
    ) : (
      <Button
        variant="link"
        size="icon"
        className={`z-50 rounded-full group absolute ${
          position === "left" ? "left-2 xl:left-10" : "right-2 xl:right-10"
        }`}
      >
        {position === "left" && (
          <ChevronLeft className="text-gray-300 dark:text-gray-700" />
        )}
        {position === "right" && (
          <ChevronRight className="text-gray-300 dark:text-gray-700" />
        )}
      </Button>
    ) 

  );
};

export default ArrowButton;
