import { Cross1Icon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { ImagesListType } from "react-spring-lightbox";
import { Button } from "../ui/button";

type LightboxHeaderProps = {
  galleryTitle?: string;
  images: ImagesListType;
  currentIndex: number;
  onClose?: () => void;
};

const LightboxHeader = ({
  images,
  currentIndex,
  onClose,
}: LightboxHeaderProps) => {
  return (
    <div className="m-10 flex items-center justify-between">
      <Button
        variant="secondary"
        size="icon"
        onClick={onClose}
        className={`group rounded-full`}
      >
        <Cross1Icon className="group-hover:rotate-90 group-hover:stroke-current transition duration-500" />
      </Button>
      <div className="bg-slate-200/50 dark:bg-slate-700/50 tracking-wider px-2 py-1 rounded-lg">
        <p className="text-md">
          {currentIndex + 1} / {images.length}
        </p>
      </div>

      <div className="h-10 w-10" />
    </div>
  );
};

export default LightboxHeader;
