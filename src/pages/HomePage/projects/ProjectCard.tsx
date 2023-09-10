import { useState } from "react";
import {
  ChevronDownIcon,
  CircleIcon,
  GitHubLogoIcon,
  ExternalLinkIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Dialog } from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@radix-ui/react-tooltip";

import Lightbox from "@/components/Lightbox";

type ProjectCardProps = {
  title: string;
  description: string;
  longDescription: string;
  link: string;
  techStack: Array<{ name: string; color: string }>;
  updated: string;
  images: Array<{ src: string; alt: string }>;
};

const ProjectCard = (project: ProjectCardProps) => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentImageIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {/* Display details in a Card */}
      <Card>
        <CardHeader className="grid grid-cols-[1fr_50px] items-start gap-4 space-y-0">
          <div className="space-y-1 ">
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
          </div>
          <div className="flex ml-auto items-center space-x-1 rounded-md text-secondary-foreground">
            <TooltipProvider>
              <Tooltip delayDuration={100}>
                <TooltipTrigger>
                  <a href={project.link} target="_blank">
                    <Button
                      variant="secondary"
                      className="px-2 shadow-none z-30"
                    >
                      <GitHubLogoIcon className="h-4 w-4 text-secondary-foreground" />
                    </Button>
                  </a>
                </TooltipTrigger>
                <TooltipContent side={"bottom"}>
                  <div className="tooltip">
                    <p className=" tooltip-text">
                      View Repository
                    </p>
                    <ExternalLinkIcon className="text-white dark:text-black"/>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardHeader>
        <CardContent onClick={() => setIsLightboxOpen(true)}>
          <div className="relative group cursor-pointer ">
            <div className="w-full h-[300px] rounded-2xl overflow-hidden ">
              <img
                src={project.images[0].src}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500 "
              />
            </div>
            <div className="flex justify-center rounded-2xl items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center opacity-0 group-hover:opacity-100">
              <div className="flex-row text-center">
                <h1 className="text-gray-50 font-bold text-lg">More Photos</h1>
                <ChevronDownIcon className="m-auto text-gray-200 font-medium text-sm" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex flex-wrap items-center">
              {project.techStack.map((tech, index) => (
                <div key={`tech-${index}`} className="flex items-center mr-5">
                  <CircleIcon
                    color={tech.color}
                    className={`mr-1 h-3 w-3 pr`}
                  />
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </CardFooter>
      </Card>
      {/** Addtional Details for Project */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="w-full">
          <DialogHeader>
            <DialogTitle>{project.title}</DialogTitle>
            <DialogDescription>{project.longDescription}</DialogDescription>
          </DialogHeader>
          <div className="w-96 rounded-2xl overflow-hidden "></div>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setIsDialogOpen(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Lightbox
        currentImageIndex={currentImageIndex}
        setCurrentIndex={setCurrentIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        images={project.images}
      />
    </>
  );
};

export default ProjectCard;
