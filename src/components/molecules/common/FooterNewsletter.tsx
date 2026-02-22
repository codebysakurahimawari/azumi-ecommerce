"use client";

import { useState } from "react";

export default function FooterNewsletter() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col gap-5">
      <h3 className="text-h4 font-semibold">Newsletter</h3>

      <p className="text-sm text-gray-600 leading-relaxed">
        Sign up for our newsletter and get 10% off your first purchase
      </p>

      <div className="flex border border-gray-300 rounded-full overflow-hidden focus-within:border-black transition">
        <input
          type="email"
          placeholder="Enter your e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 px-5 py-3 text-sm outline-none bg-transparent"
        />
        <button className="bg-black text-white px-6 text-sm font-medium hover:bg-gray-800 transition">
          Subscribe
        </button>
      </div>

      <p className="text-xs text-gray-500 leading-relaxed">
        By clicking subscribe, you agree to the Terms of Service and Privacy Policy.
      </p>
    </div>
  );
}