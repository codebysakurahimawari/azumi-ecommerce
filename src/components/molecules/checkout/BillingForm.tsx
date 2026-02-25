"use client";

export default function BillingForm() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium text-gray-900">Information</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input placeholder="First Name*" className="input" />
        <input placeholder="Last Name*" className="input" />
      </div>

      <input placeholder="Email Address*" className="input" />
      <input placeholder="Phone Number*" className="input" />

      <select className="input">
        <option>Choose Country/Region</option>
      </select>

      <input placeholder="Town/City*" className="input" />
      <input placeholder="Street,..." className="input" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <select className="input">
          <option>Choose State</option>
        </select>
        <input placeholder="Postal Code*" className="input" />
      </div>

      <textarea
        placeholder="Write note..."
        rows={4}
        className="input"
      />
    </div>
  );
}