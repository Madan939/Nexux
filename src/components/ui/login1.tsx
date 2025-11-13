"use client"
import Link from "next/link";
import { Button } from "./button";
import { Input } from "./input";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { error } from "console";
import { p } from "motion/react-client";
import { cn } from "@/lib/utils";

interface Login1Props {
  heading?: string;
  logo: {
    url: string;
    src: string;
    alt: string;
    title?: string;
  };
  buttonText?: string;
  googleText?: string;
  signupText?: string;
  signupUrl?: string;
}

const Login1 = ({
  heading = "Login",
  logo = {
    url: "/",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-wordmark.svg",
    alt: "logo",
    title: "Nexux",
  },
  buttonText = "Login"
}: Login1Props) => {
  const router = useRouter();

  const [loginDetails, setLoginDetails] = useState({email: "", password: "", Emailerror: "", passwordError: ""})

  const handleLogin = () => {

    if(loginDetails.email === "admin" && loginDetails.password === "admin"){
      router.push("/admin/dashboard")
    } else {
      setLoginDetails({...loginDetails, Emailerror: "Email or Passowrd is not valid!", passwordError: "Email or Passowrd is not valid!"})
    }
  }

 const handleEmailChange = (value: string) => {
  setLoginDetails({
    ...loginDetails,
    email: value,
    Emailerror: value.trim() === "" ? "This field is required!" : ""
  });
};

const handlePasswordChange = (value: string) => {
  setLoginDetails({
    ...loginDetails,
    password: value,
    passwordError: value.trim() === "" ? "This field is required!" : ""
  });
};

  return (
    <section className="bg-transparent h-screen">
      <div className="flex h-full items-center justify-center">
        {/* Logo */}
          <div className="min-w-sm space-y-6 border-muted bg-background flex w-full max-w-sm flex-col items-center gap-y-4 rounded-md border px-6 py-8 shadow-md">
             <Link href="/" >
            <img
              src={logo.src}
              alt={logo.alt}
              title={logo.title}
              className="h-10 dark:invert"
            />
          </Link>
            {heading && <h1 className="text-2xl font-bold">{heading}</h1>}
            <div className="flex flex-col w-full gap-4">
              <div className="flex flex-col">
            <Input
              type="email"
              placeholder="Email"
              value={loginDetails.email}
              onChange={(e) => handleEmailChange(e.target.value)}
              className={cn("text-sm py-5", {"border border-red-500": loginDetails.Emailerror})}
              required
            />
            {loginDetails.Emailerror &&<p className="text-xs text-destructive">{loginDetails.Emailerror}</p> }
            </div>
            <div className="flex flex-col">
            <Input
              type="password"
              placeholder="Password"
              value={loginDetails.password}
              onChange={(e) => handlePasswordChange(e.target.value) }
              className={cn("text-sm py-5", {"border border-red-500": loginDetails.passwordError})}
              required
            />
            {loginDetails.passwordError &&<p className="text-xs text-destructive">{loginDetails.passwordError}</p> }
            </div>

            </div>
            <Button onClick={handleLogin} type="submit" className="w-full text-lg cursor-pointer">
              {buttonText}
            </Button>
          </div>
        
      </div>
    </section>
  );
};

export { Login1 };
