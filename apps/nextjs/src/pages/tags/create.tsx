import { type NextPage } from "next";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { api } from "~/utils/api";
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

const tagCreateFormSchema = z.object({
  name: z.string().min(1).max(25),
  description: z.string().min(1).max(255),
});

const CreateTagPage: NextPage = () => {
  const { mutate: createMutation } = api.tag.create.useMutation({
    onSuccess: () => {
      // TODO: Toast and redirect
    },
    onError: () => {
      // TODO: Toast
    },
  });

  const form = useForm<z.infer<typeof tagCreateFormSchema>>({
    resolver: zodResolver(tagCreateFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof tagCreateFormSchema>) {
    createMutation(values);
  }

  return (
    <main className="mx-auto my-10 max-w-3xl">
      <h1 className="text-3xl font-bold">Create a tag</h1>
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, odio
        quas repellat architecto obcaecati reiciendis in eligendi, maiores unde
        rem reprehenderit ad consequuntur? Illo, provident! Voluptatibus
        explicabo nostrum corporis perspiciatis?
      </p>
      <hr className="my-8" />
      <Form {...form}>
        {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tag name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>The name of your tag</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tag description</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormDescription>Short description of your tag</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Create</Button>
        </form>
      </Form>
    </main>
  );
};

export default CreateTagPage;
