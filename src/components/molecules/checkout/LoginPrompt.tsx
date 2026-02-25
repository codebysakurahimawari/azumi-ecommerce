"use client";

import Link from "next/link";

export default function LoginPrompt() {
  return (
    <div className=" text-gray-600">
      Already have an account?{" "}
      <Link
        href="/login"
        className="text-black  font-medium hover:underline"
      >
        Login here
      </Link>
    </div>
  );
}