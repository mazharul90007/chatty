import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import { Button } from "@heroui/button";
import Link from "next/link";
import { GiMatchTip } from "react-icons/gi";
import NavLink from "./NavLink";

export default function TopNav() {
  return (
    <Navbar
      maxWidth="xl"
      className="bg-linear-to-r from-purple-400 to-purple-600"
      classNames={{
        item: [
          "text-xl",
          "text-white",
          "uppercase",
          "data-[active=true]:text-yellow-200",
        ],
      }}
    >
      <NavbarBrand>
        <GiMatchTip size={40} className="text-gray-200" />
        <div className="font-bold text-3xl text-gray-200">
          <span>Chatty</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavLink href="/members" label="Matches" />
        <NavLink href="/lists" label="Lists" />
        <NavLink href="/messages" label="Messages" />
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
