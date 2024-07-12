import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SidebarIcon } from "lucide-react";
import { ProductForm } from "../forms/ProductForm";

const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <SidebarIcon />
      </SheetTrigger>
      <SheetContent className="w-full sm:w-64">
        <ProductForm />
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
