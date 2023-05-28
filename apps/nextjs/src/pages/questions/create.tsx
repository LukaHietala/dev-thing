import { type NextPage } from "next";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

const questionCreateFormSchema = z.object({
  title: z.string().min(1).max(100),
  content: z.string().min(1).max(1000),
});

const CreateQuestion: NextPage = () => {
  const form = useForm<z.infer<typeof questionCreateFormSchema>>({
    resolver: zodResolver(questionCreateFormSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  function onSubmit(values: z.infer<typeof questionCreateFormSchema>) {
    console.log(values);
  }
  return (
    <main className="mx-auto my-10 max-w-3xl">
      <h1 className="text-3xl font-bold">Create a question</h1>
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, odio
        quas repellat architecto obcaecati reiciendis in eligendi, maiores unde
        rem reprehenderit ad consequuntur? Illo, provident! Voluptatibus
        explicabo nostrum corporis perspiciatis?
      </p>
      <hr className="my-8" />
      <Form {...form}>
        <form onSubmit={void form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Question title</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                  The title of your question helps people quickly understand
                  what your question is about so they can answer it.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="content"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Question content</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormDescription>
                  The content of your question helps people quickly understand
                  what your question is about so they can answer it.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Ask</Button>
        </form>
      </Form>
    </main>
  );
};

export default CreateQuestion;
