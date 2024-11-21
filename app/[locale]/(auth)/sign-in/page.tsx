import { Metadata } from "next";
import { AuthCard } from "@/components/auth/AuthCard";

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in",
};

const SignIn = () => {
  return <AuthCard signInCard />;
};

export default SignIn;
