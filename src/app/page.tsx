import { Button } from "@heroui/button";
import { FaRegSmile } from "react-icons/fa";
import { auth, signOut } from "../auth";
export default async function Home() {
  const session = await auth();
  return (
    <div className="text-center">
      <h2 className="text-3xl">Hello</h2>
      <h3 className="text-2xl font-semibold">User Session data: </h3>
      {session ? (
        <div>
          <pre>{JSON.stringify(session, null, 2)}</pre>
          <form
            action={async () => {
              "use server";

              await signOut({ redirectTo: "/" });
            }}
          >
            <Button
              type="submit"
              color="primary"
              variant="bordered"
              startContent={<FaRegSmile size={20} />}
            >
              LogOut
            </Button>
          </form>
        </div>
      ) : (
        <div>Not signed in</div>
      )}
    </div>
  );
}
