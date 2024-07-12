"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import productSchema from "@/schemas/product.schema";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ProductForm() {
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      company: "AMZ",
      category: "Phone",
    },
  });

  function onSubmit(values: z.infer<typeof productSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <FormControl>
                <RadioGroup defaultValue="AMZ">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="AMZ" id="AMZ" />
                    <Label htmlFor="AMZ"> Amazon</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="FLP" id="FLP" />
                    <Label htmlFor="FLP"> Flipkart</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="SNP" id="SNP" />
                    <Label htmlFor="SNP"> Snapdeal</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="MYN" id="MYN" />
                    <Label htmlFor="MYN"> Myntra</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="AZO" id="AZO" />
                    <Label htmlFor="AZO"> Ajio</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <FormControl>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Phone">Phone</SelectItem>
                    <SelectItem value="Computer">Computer</SelectItem>
                    <SelectItem value="TV">TV</SelectItem>
                    <SelectItem value="Earphone">Earphone</SelectItem>
                    <SelectItem value="Tablet">Tablet</SelectItem>
                    <SelectItem value="Charger">Charger</SelectItem>
                    <SelectItem value="Mouse">Mouse</SelectItem>
                    <SelectItem value="Keypad">Keypad</SelectItem>
                    <SelectItem value="Bluetooth">Bluetooth</SelectItem>
                    <SelectItem value="Pendrive">Pendrive</SelectItem>
                    <SelectItem value="Remote">Remote</SelectItem>
                    <SelectItem value="Speaker">Speaker</SelectItem>
                    <SelectItem value="Headset">Headset</SelectItem>
                    <SelectItem value="Laptop">Laptop</SelectItem>
                    <SelectItem value="PC">PC</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
