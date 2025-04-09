import { Menubar, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Menubar className="bg-blue-300 justify-end gap-10">
        <MenubarMenu>
          <Link to="/">
            <MenubarTrigger>Home</MenubarTrigger>
          </Link>
          <Link to="/about">
            <MenubarTrigger>About</MenubarTrigger>
          </Link>
          <Link to="/featured">
            <MenubarTrigger>Featured</MenubarTrigger>
          </Link>
          <Link to="/products">
            <MenubarTrigger>Products</MenubarTrigger>
          </Link>
          <Link to="/contact">
            <MenubarTrigger>Contact</MenubarTrigger>
          </Link>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};

export default Navbar;
