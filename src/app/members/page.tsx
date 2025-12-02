import { Button } from "@heroui/button";
import Link from "next/link";

export default function Members() {
  return (
    <div>
      <h2>This is Members Page</h2>
      <Link href={"/"}>
        <Button color="success" variant="bordered">
          Go Home
        </Button>
      </Link>
    </div>
  );
}
