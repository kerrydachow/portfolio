import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
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
          <div className="flex">
            {icons.map((icon) => (
              <TooltipProvider key={icon.name}>
                <Tooltip delayDuration={100}>
                  <TooltipTrigger>
                    <div className="p-1">
                      <img
                        className="object-contain h-10 w-10 hover:scale-125"
                        src={`${icon.icon}`}
                        alt={icon.name}
                      />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent side={"bottom"}>
                    <p>{icon.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default SkillsCard;
