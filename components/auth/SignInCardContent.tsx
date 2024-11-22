"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { LoadingState } from "@/components/ui/loading-state";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, SignInSchema } from "@/schema/signInSchema";
import { ProviderSignInBtns } from "./ProviderSignInBtns";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

export const SignInCardContent = () => {
  const t = useTranslations("AUTH");
  const m = useTranslations("MESSAGES");
  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const onSubmit = async (data: SignInSchema) => {
    setIsLoading(true);

    try {
      const account = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (!account) throw new Error("Something went wrong");

      if (account.error) {
        toast({
          title: m(account.error),
          variant: "destructive",
        });
      } else {
        toast({
          title: m("SUCCESS.SIGN_IN"),
        });
        router.push("/onboarding");
        router.refresh();
      }
    } catch (err) {
      let errMsg = m("ERRORS.DEFAULT");
      if (typeof err === "string") {
        errMsg = err;
      } else if (err instanceof Error) {
        errMsg = m(err.message);
      }
      toast({
        title: errMsg,
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  return (
    <CardContent>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
          <ProviderSignInBtns signInCard onLoading={setIsLoading} />
          <div className="space-y-1.5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={t("EMAIL")} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder={t("PASSWORD")}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="space-y-2">
            <Button
              disabled={isLoading}
              className="w-full font-bold bg-black/80 text-white dark:bg-white/10 hover:bg-black/70 hover:dark:bg-white/20"
              type="submit"
            >
              {isLoading ? (
                <LoadingState loadingText={m("PENDING.LOADING")} />
              ) : (
                t("SIGN_IN.SUBMIT_BTN")
              )}
            </Button>
          </div>
        </form>
      </Form>
    </CardContent>
  );
};
