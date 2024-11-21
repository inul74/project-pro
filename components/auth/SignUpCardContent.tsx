"use client";

import { useForm } from "react-hook-form";
import { CardContent } from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { signUpSchema, SignUpSchema } from "@/schema/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProviderSignInBtns } from "./ProviderSignInBtns";
import { useState } from "react";
import { Input } from "../ui/input";
import { useTranslations } from "next-intl";
import { Button } from "../ui/button";
import { LoadingState } from "../ui/loading-state";

export const SignUpCardContent = () => {
  const t = useTranslations("AUTH");
  const m = useTranslations("MESSAGES");
  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      username: "",
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  return (
    <CardContent>
      <Form {...form}>
        <form className="space-y-7">
          <ProviderSignInBtns disabled={isLoading} onLoading={setIsLoading} />
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
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder={t("USERNAME")} {...field} />
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
              className="w-full font-bold bg-black/70 text-white dark:bg-white/10 hover:bg-black/80 hover:dark:bg-white/20"
              type="submit"
            >
              {isLoading ? (
                <LoadingState loadingText={m("PENDING.LOADING")} />
              ) : (
                t("SIGN_UP.SUBMIT_BTN")
              )}
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              {t("SIGN_UP.TERMS.FIRST")}{" "}
              <span className="font-bold">{t("SIGN_UP.TERMS.SECOND")}</span>
            </p>
          </div>
        </form>
      </Form>
    </CardContent>
  );
};
