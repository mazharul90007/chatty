"use client";

import { NavbarItem } from "@heroui/navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  href: string;
  label?: string;
};

export default function NavLink({ href, label }: Props) {
  const pathname = usePathname();
  return (
    <NavbarItem isActive={pathname === href}>
      <Link href={href}>{label}</Link>
    </NavbarItem>
  );
}
