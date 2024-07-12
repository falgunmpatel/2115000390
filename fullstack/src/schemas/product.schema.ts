import { z } from "zod";

export const sortTypeSchema = z.enum(["asc", "desc"]);

export const sortViaSchema = z.enum([
  "price",
  "rating",
  "name",
  "discount",
  "availability",
]);

export const companiesSchema = z.enum(["AMZ", "FLP", "SNP", "MYN", "AZO"]);

export const catogoriesSchema = z.enum([
  "Phone",
  "Computer",
  "TV",
  "Earphone",
  "Tablet",
  "Charger",
  "Mouse",
  "Keypad",
  "Bluetooth",
  "Pendrive",
  "Remote",
  "Speaker",
  "Headset",
  "Laptop",
  "PC",
]);

const productSchema = z.object({
  company: companiesSchema,
  category: catogoriesSchema,
  sortType: sortTypeSchema,
  sortVia: sortViaSchema,
});

export default productSchema;
