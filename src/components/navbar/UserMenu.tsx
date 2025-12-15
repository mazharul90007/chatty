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
import { Button } from "@heroui/button";
import { useTransition } from "react";
import { signOutUser } from "@/src/app/actions/authActions";

type Props = {
  user: Session["user"];
  signOutAction: () => Promise<void>;
};

export default function UserMenu({ user, signOutAction }: Props) {
  const [, startTransition] = useTransition();
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
          <DropdownItem
            key={"logout"}
            color="danger"
            onPress={async () => signOutUser()}
          >
            LogOut
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
}
