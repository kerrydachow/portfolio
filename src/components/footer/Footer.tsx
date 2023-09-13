import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";
import { infoLinks } from "@/constants/index.js";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@radix-ui/react-tooltip";

const Footer = () => {
  return (
    <footer className="dark:bg-gray-800 bg-black h-96 mt-10">
      <div className="container p-24 gap-10 flex flex-col items-center text-white dark:text-black">
        <div className="flex flex-row justify-between gap-10">
          <TooltipProvider>
            <Tooltip delayDuration={100}>
              <TooltipTrigger>
                <div className="my-3 mx-2 hover:scale-125 transition duration-500">
                  <a target="_blank" href={infoLinks.github}>
                    <GitHubLogoIcon className="h-[48px] w-[48px] text-white" />
                  </a>
                </div>
              </TooltipTrigger>
              <TooltipContent className="tooltip-inverted" side={"bottom"}>
                <p className="tooltip-text-inverted">GitHub</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip delayDuration={100}>
              <TooltipTrigger>
                <div className="my-3 mx-2 hover:scale-125 transition duration-500">
                  <a target="_blank" href={infoLinks.linkedin}>
                    <LinkedInLogoIcon className="h-[48px] w-[48px] text-white" />
                  </a>
                </div>
              </TooltipTrigger>
              <TooltipContent className="tooltip-inverted" side={"bottom"}>
                <p className="tooltip-text-inverted">LinkedIn</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip delayDuration={100}>
              <TooltipTrigger>
                <div className="my-3 mx-2 hover:scale-125 transition duration-500">
                  <a target="_blank" href={infoLinks.resume}>
                    <ReaderIcon className="h-[48px] w-[48px] text-white" />
                  </a>
                </div>
              </TooltipTrigger>
              <TooltipContent className="tooltip-inverted" side={"bottom"}>
                <p className="tooltip-text-inverted">Resume</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div>
          <p className="text-white">&copy; 2023 Kerry Chow</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
