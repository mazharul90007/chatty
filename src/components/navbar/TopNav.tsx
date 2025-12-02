import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button } from "@heroui/button";
import Link from "next/link";
import { GiMatchTip } from "react-icons/gi";

export default function TopNav() {
  return (
    <Navbar
      maxWidth="xl"
      className="bg-linear-to-r from-purple-400 to-purple-600"
      classNames={{
        item: ["text-xl", "text-white", "uppercase"],
      }}
    >
      <NavbarBrand>
        <GiMatchTip size={40} className="text-gray-200" />
        <div className="font-bold text-3xl text-gray-200">
          <span>Chatty</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Link href={"/"}>Matches</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={"/lists"}>Lists</Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={"/messages"}>Messages</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Link href={"/login"}>
          <Button color="default" variant="bordered" className="text-white">
            Login
          </Button>
        </Link>
        <Link href={"/register"}>
          <Button color="default" variant="bordered" className="text-white">
            SignUp
          </Button>
        </Link>
      </NavbarContent>
    </Navbar>
  );
}
