import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { SidebarIcon } from "lucide-react";
import { ProductForm } from "../forms/ProductForm";

const Sidebar = ({
  setProducts,
}: {
  setProducts: React.Dispatch<React.SetStateAction<any[]>>;
}) => {
  return (
    <Sheet>
      <SheetTrigger>
        <SidebarIcon />
      </SheetTrigger>
      <SheetContent className="w-full sm:w-64">
        <ProductForm setProducts={setProducts} />
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
