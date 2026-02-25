"use client";

export default function AccountLoginForm() {
  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Your name/Email"
        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-black"
      />
      <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition">
        Login
      </button>
    </div>
  );
}