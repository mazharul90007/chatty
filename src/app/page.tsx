import { Button } from "@heroui/button";
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";
export default function Home() {
  return (
    <div className="text-center">
      <h2 className="text-3xl">Hello</h2>
      <Link href={"/members"}>
        <Button
          color="primary"
          variant="bordered"
          startContent={<FaRegSmile size={20} />}
        >
          Click Me
        </Button>
      </Link>
    </div>
  );
}
