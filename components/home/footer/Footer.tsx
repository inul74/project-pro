import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { te } from "date-fns/locale";
import { text } from "stream/consumers";

export const Footer = () => {
  return (
    <footer className="w-full bg-background border-t border-border mt-52 px-6">
      <div className="container py-6 sm:py-12 max-w-screen-2xl border-t border-border flex flex-col-reverse sm:flex-row sm:justify-between items-center gap-4">
        <div className="text-center space-y-0.5 sm:text-left">
          <p className="font-semibold sm:text-lg">
            Made with <span className="text-primary">love</span>
          </p>
          <p className="text-muted-foreground">@ 2024 ProjectPro.</p>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Link
            href={"/"}
            target="_blank"
            className={buttonVariants({ variant: "destructive", size: "icon" })}
          >
            <img src="/github-logo.svg" alt="Github" />
          </Link>
          <Link
            href={"/"}
            target="_blank"
            className={buttonVariants({ variant: "destructive", size: "icon" })}
          >
            {" "}
            <img src="/linkedin-logo.svg" alt="Linkedin" />
          </Link>
          <Link
            href={"/"}
            target="_blank"
            className={buttonVariants({ variant: "destructive", size: "icon" })}
          >
            <img src="/instagram-logo.svg" alt="Instagram" />
          </Link>
        </div>
      </div>
    </footer>
  );
};
