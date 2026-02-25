"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <form className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your Name*
        </label>
        <input
          type="text"
          required
          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/80 transition"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your Email*
        </label>
        <input
          type="email"
          required
          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/80 transition"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Your Message*
        </label>
        <textarea
          required
          rows={5}
          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black/80 transition resize-none"
          placeholder="Write your message..."
        />
      </div>

      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition w-full"
      >
        Send Message
      </button>
    </form>
  );
}