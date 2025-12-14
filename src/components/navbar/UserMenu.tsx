"use client";

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownSection,
  DropdownTrigger,
} from "@heroui/dropdown";
import { Avatar } from "@heroui/avatar";
import { Session } from "next-auth";
import Link from "next/link";
import { signOutUser } from "@/src/app/actions/authActions";
import { Button } from "@heroui/button";

type Props = {
  user: Session["user"];
};

export default function UserMenu({ user }: Props) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          isBordered
          as="button"
          className="transition-transform"
          color="secondary"
          name={user?.name || "user avatar"}
          size="sm"
          src={user?.image || "/images/user.png"}
        />
      </DropdownTrigger>
      <DropdownMenu variant="flat" aria-label="User actions menu">
        <DropdownSection showDivider>
          <DropdownItem
            key={"signInAs"}
            isReadOnly
            as="span"
            className="h-14 flex flex-row"
            aria-label="username"
          >
            Signed in as {user?.name}
          </DropdownItem>
          <DropdownItem key={"editProfile"}>
            <Link href={"/members/edit"}>Edit Profile</Link>
          </DropdownItem>
          <form action={signOutUser}>
            <DropdownItem key={"logout"} color="danger">
              <Button type="submit" className="w-full text-left">
                Log Out
              </Button>
            </DropdownItem>
          </form>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
