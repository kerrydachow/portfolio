import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../../utils/motion";
import { SectionWrapper } from "@/hoc";
import { ReloadIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name required" }).max(50),
  email: z.string().email(),
  message: z.string().min(1, { message: "Message required" }),
});

const Contact = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (event: z.infer<typeof formSchema>) => {
    await fetch("https://formsubmit.co/ajax/0dae8a0a181af951e1e789d887a3bb1d", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(event),
    })
      .then(() => {
        form.reset();
        toast({
          description: "Your message has been sent!",
        });
      })
      .catch(() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        });
      });
  };

  return (
    <>
      <Toaster />
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] uppercase tracking-wider">
          Like what I do?
        </p>
        <h2 className=" font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Let's Connect
        </h2>
      </motion.div>
      <motion.div variants={fadeIn("up", "", 0.1, 1)} className="mt-4">
        <Form {...form}>
          <form target="_blank" onSubmit={form.handleSubmit(onSubmit)}>
            <Card>
              <CardHeader>
                <CardTitle>Contact Me</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Type your name here." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="m@example.com." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Type your message here."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
              <CardFooter>
                {form.formState.isSubmitting ? (
                  <Button disabled>
                    <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                    Sending
                  </Button>
                ) : (
                  <Button disabled={form.formState.isSubmitting} type="submit">
                    Send
                  </Button>
                )}
              </CardFooter>
            </Card>
          </form>
        </Form>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
