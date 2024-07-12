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
import axios from "axios";
import { Input } from "../ui/input";
import { useEffect } from "react";

export function ProductForm({
  setProducts,
}: {
  setProducts: React.Dispatch<React.SetStateAction<any[]>>;
}) {
  const form = useForm<z.infer<typeof productSchema>>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      company: "AMZ",
      category: "Phone",
      sortType: "asc",
      sortVia: "price",
      min: 1,
      max: 100000,
    },
  });

  async function onSubmit(values: z.infer<typeof productSchema>) {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/categories/${values.category}/product?n=10&min=${values.min}&max=${values.max}&sort=${values.sortVia}&sortType=${values.sortType}`
      );
      console.log(response);
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    onSubmit(form.getValues());
  }, []);

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
        <FormField
          control={form.control}
          name="sortType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sort Type</FormLabel>
              <FormControl>
                <RadioGroup defaultValue="asc" {...field}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="asc" id="asc" />
                    <Label htmlFor="asc"> Ascending</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="desc" id="desc" />
                    <Label htmlFor="desc"> Descending</Label>
                  </div>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sortVia"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sort Via</FormLabel>
              <FormControl>
                <Select {...field}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort Via" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price">Price</SelectItem>
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="discount">Discount</SelectItem>
                    <SelectItem value="availability">Availability</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="min"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Min Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  className="w-[180px] p-2 border border-gray-300 rounded-md"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="max"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Max Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  className="w-[180px] p-2 border border-gray-300 rounded-md"
                />
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
