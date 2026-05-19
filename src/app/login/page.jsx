'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Lock, LogIn } from 'lucide-react';
import {
  Form,
  TextField,
  Label,
  Input,
  FieldError,
  Button,
} from '@heroui/react';

export default function LoginForm() {
  const onSubmit = e => {
    e.preventDefault();
   const formData = Object.fromEntries(new FormData(e.currentTarget).entries());
   console.log(formData);

   
  };

  return (
    <section className="w-full min-h-screen bg-[#070B13] text-slate-100 py-16 px-4 flex items-center justify-center">
      <div className="max-w-[480px] w-full bg-[#0E131F]/50 border border-slate-800/50 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-md">
        {/* Title Block */}
        <div className="text-center mb-8 space-y-2">
          <h1 className="text-3xl font-black text-white tracking-tight">
            Welcome Back
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 font-light">
            Enter your details to access your DriveFleet driver panel
          </p>
        </div>

        {/* HeroUI-Managed Form Component */}
        <Form className="flex flex-col gap-5 w-full" onSubmit={onSubmit}>
          {/* Email Address Field */}
          <TextField
            isRequired
            name="email"
            type="email"
            validate={value => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return 'Please enter a valid email address';
              }
              return null;
            }}
          >
            <Label className="text-xs font-bold text-slate-400 tracking-wide mb-1 block">
              Email Address
            </Label>
            <div className="relative w-full">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 z-10" />
              <Input
                placeholder="driver@example.com"
                className="w-full bg-[#111726]/80 border border-slate-800/80 rounded-xl py-1 pl-11 pr-4 text-sm text-slate-200 placeholder-slate-600 focus-within:border-[#10B981]/50 transition-colors"
              />
            </div>
            <FieldError className="text-xs text-red-400 mt-1" />
          </TextField>

          {/* Password Field */}
          <TextField isRequired name="password" type="password">
            <Label className="text-xs font-bold text-slate-400 tracking-wide mb-1 block">
              Password
            </Label>
            <div className="relative w-full">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 z-10" />
              <Input
                placeholder="••••••••••••••••"
                className="w-full bg-[#111726]/80 border border-slate-800/80 rounded-xl py-1 pl-11 pr-4 text-sm text-slate-200 placeholder-slate-600 focus-within:border-[#10B981]/50 transition-colors"
              />
            </div>
            <FieldError className="text-xs text-red-400 mt-1" />
          </TextField>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#10B981] hover:bg-[#0fA774] text-[#070B13] font-bold text-sm sm:text-base py-6 rounded-xl transition-all shadow-[0_4px_20px_rgba(16,185,129,0.25)] hover:shadow-[0_4px_25px_rgba(16,185,129,0.45)] cursor-pointer mt-2"
          >
            <LogIn className="w-4 h-4 sm:w-5 h-5 stroke-[2.5]" />
            Access Driver Panel
          </Button>
        </Form>

        {/* Separator Section */}
        <div className="relative my-6 text-center">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[1px] bg-slate-800" />
          <span className="relative bg-[#0b0f19] px-3 text-[10px] font-extrabold uppercase tracking-widest text-slate-500">
            Or Continue With
          </span>
        </div>

        {/* Google Authentication Button */}
        <button className="w-full flex items-center justify-center gap-2.5 bg-[#141B2B] hover:bg-[#1C253B] border border-slate-800 text-slate-200 text-sm font-bold py-3.5 rounded-xl transition-colors cursor-pointer">
          <svg
            className="w-4 h-4 shrink-0"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              fill="#EA4335"
            />
          </svg>
          Sign in with Google
        </button>

        {/* Toggle to Create Account */}
        <p className="text-center text-xs text-slate-400 font-light mt-6">
          Don't have a driver account?{' '}
          <Link
            href="/register"
            className="text-[#10B981] hover:underline font-semibold ml-1"
          >
            Create Account
          </Link>
        </p>
      </div>
    </section>
  );
}
