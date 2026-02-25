"use client";

export default function CreditCardForm() {
  return (
    <div className="space-y-4 border border-gray-100 rounded-xl p-6 bg-gray-50">
      <input placeholder="Name On Card*" className="input" />
      <input placeholder="Card Numbers*" className="input" />

      <div className="grid grid-cols-2 gap-4">
        <input type="date" className="input" />
        <input placeholder="CVV*" className="input" />
      </div>

      <label className="flex items-center gap-2 text-sm text-gray-600">
        <input type="checkbox" className="accent-black" />
        Save Card Details
      </label>
    </div>
  );
}