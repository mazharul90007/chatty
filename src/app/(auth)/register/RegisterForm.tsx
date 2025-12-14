"use client";

import { Card, CardBody, CardHeader } from "@heroui/card";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import { GiPadlock } from "react-icons/gi";
import { useForm } from "react-hook-form";
import {
  registerSchema,
  RegisterSchema,
} from "@/src/lib/schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerUser } from "../../actions/authActions";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterSchema>({
    // resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: RegisterSchema) => {
    const result = await registerUser(data);

    if (result.status === "success") {
      console.log("User register successfully");
    } else {
      if (Array.isArray(result.error)) {
        result.error.forEach((e) => {
          const fieldName = e.path[0] as keyof RegisterSchema;
          setError(fieldName, { type: "manual", message: e.message });
        });
      } else {
        setError("root", { type: "manual", message: result.error });
      }
    }
  };

  return (
    <Card className="w-2/5 mx-auto">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center text-secondary">
          <div className="flex flex-row gap-2 items-center">
            <GiPadlock size={30} />
            <h1 className="text-2xl font-bold">SignUp</h1>
          </div>
          <p className="text-neutral-500">Welcome to Chatty</p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              label="Name"
              variant="bordered"
              {...register("name")}
              defaultValue=""
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
            />
            <Input
              label="Email"
              variant="bordered"
              {...register("email")}
              defaultValue=""
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
            />
            <Input
              label="Password"
              variant="bordered"
              type="password"
              {...register("password")}
              defaultValue=""
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message}
            />
            {errors.root && (
              <p className="text-danger text-sm">{errors.root.message}</p>
            )}
            <Button
              isLoading={isSubmitting}
              isDisabled={!isValid}
              fullWidth
              color="secondary"
              type="submit"
            >
              SignUp
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
}
