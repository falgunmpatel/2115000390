import { z } from "zod";

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
  Companies: companiesSchema,
  Categories: catogoriesSchema,
});

export default productSchema;
