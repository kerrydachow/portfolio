import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../../components/ui/card";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

type SkillsCardProps = {
  index: number;
  title: string;
  description: string;
  icons: Array<{ name: string; icon: string }>;
};

const SkillsCard = ({ index, title, description, icons }: SkillsCardProps) => {
  return (
    <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
      <Card className="">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Technologies
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              {icons.map((icon) => (
                <TooltipProvider key={icon.name}>
                  <Tooltip delayDuration={100}>
                    <TooltipTrigger>
                      <div className="p-2 mt-5">
                        <img
                          className="object-contain h-10 w-10 hover:scale-125 transition duration-500"
                          src={`${icon.icon}`}
                          alt={icon.name}
                        />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="tooltip"side={"bottom"}>
                      <p className="tooltip-text">{icon.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillsCard;
