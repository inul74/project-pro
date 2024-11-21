import { Metadata } from "next";
import { AuthCard } from "@/components/auth/AuthCard";

export const metadata: Metadata = {
  title: "Sign up",
  description: "Sign up",
};

const SignUp = () => {
  return <AuthCard />;
};

export default SignUp;
