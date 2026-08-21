'use client';

import { Button, Description, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import Link from 'next/link';
import { User, ArrowRight } from 'lucide-react';
// import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { useState } from 'react';

export default function Register() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data: res, error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });
    console.log("Registration response:", res, error);

    if (error) {
      toast.error(error.message || "Registration failed!");
      setLoading(false);
      return;
    }

    if (res) {
      toast.success("Registration Successful!");
      router.push("/login");
      setLoading(false);
    }
  };

  // const handleGoogleRegister = async () => {
  //   setLoading(true);
  //   await authClient.signIn.social({
  //     provider: "google",
  //     callbackURL: "/",
  //   });
    
  // };

  return (
    <div className="min-h-[80vh] flex flex-col bg-slate-50 dark:bg-slate-950 py-12">
      <div className="grow flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] border border-slate-200 dark:border-slate-700 shadow-2xl space-y-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

            <div className="text-center space-y-2 relative">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                Join <span className="text-green-600">BookBridge</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                Create your account to start exploring and sharing your favorite books with the community.
              </p>
            </div>

            <Form onSubmit={onSubmit} className="space-y-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1"
                >
                  Full Name
                </label>
                <Input
                  id="name"
                  required
                  placeholder="Enter your name"
                  name="name"
                  startContent={<User className="w-5 h-5 text-slate-400" />}
                  className="w-full h-14 rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-600 transition-all duration-300"
                />
              </div>

              {/* Email */}
              <TextField
                isRequired
                name="email"
                type="email"
                validate={(value) => {
                  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                    return "Please enter a valid email address";
                  }
                  return null;
                }}
                className="w-full"
              >
                <Label className="text-slate-700 dark:text-slate-300 font-semibold">
                  Email
                </Label>
                <Input
                  placeholder="john@example.com"
                  className="w-full h-12 rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-600"
                />
                <FieldError />
              </TextField>

              {/* Profile Image URL */}
              <div className="space-y-2">
                <label
                  htmlFor="image"
                  className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1"
                >
                  Profile Image URL
                </label>
                <Input
                  id="image"
                  placeholder="https://images.unsplash.com/..."
                  type="url"
                  name="image"
                  startContent={<User className="w-5 h-5 text-slate-400" />}
                  className="w-full h-14 rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-blue-600 transition-all duration-300"
                />
              </div>

              {/* Password */}
              <TextField
                isRequired
                minLength={6}
                name="password"
                type="password"
                validate={(value) => {
                  if (value.length < 6) {
                    return "Password must be at least 6 characters";
                  }
                  if (!/[A-Z]/.test(value)) {
                    return "Password must contain at least one uppercase letter";
                  }
                  if (!/[a-z]/.test(value)) return "Must contain at least one lowercase letter";
                  if (!/[0-9]/.test(value)) {
                    return "Password must contain at least one number";
                  }
                  return null;
                }}
                className="w-full"
              >
                <Label className="text-slate-700 dark:text-slate-300 font-semibold">
                  Password
                </Label>
                <Input
                  placeholder="Enter your password"
                  className="w-full h-12 rounded-2xl border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:border-green-600"
                />
                <Description className="text-slate-400 dark:text-slate-500 text-xs">
                  Must be at least 6 characters with 1 uppercase, 1 lowercase, and 1 number
                </Description>
                <FieldError />
              </TextField>

              {/* Create Account Button - always blue */}
              <Button
                type="submit"
                // isLoading={loading}
                className="w-full h-14 text-lg font-black rounded-2xl shadow-xl shadow-green-600/20 group bg-green-600 text-white hover:bg-green-700"
              >
                Create Account{" "}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              {/* Google Button */}
              <div className="space-y-4 pt-2">
                <Button
                  type="button"
                //   onClick={handleGoogleRegister}
                  variant="bordered"
                  className="w-full h-12 font-semibold rounded-2xl border-slate-200 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors gap-3"
                >
                  <Image
                    width={20}
                    height={20}
                    src="https://www.google.com/favicon.ico"
                    className="w-5 h-5"
                    alt="Google"
                  />
                  Sign Up with Google
                </Button>
              </div>
            </Form>

            <div className="text-center pt-2">
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-green-600 font-black hover:underline underline-offset-4 transition-all"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}