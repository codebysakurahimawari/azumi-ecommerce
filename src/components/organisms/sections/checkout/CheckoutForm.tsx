"use client";

import LoginPrompt from "@/components/molecules/checkout/LoginPrompt";
import AccountLoginForm from "@/components/molecules/checkout/AccountLoginForm";
import BillingForm from "@/components/molecules/checkout/BillingForm";
import PaymentMethodSelector from "@/components/molecules/checkout/PaymentMethodSelector";

export default function CheckoutForm() {
  return (
    <div className="max-w-5xl rounded-2xl border-gray-200 mx-auto space-y-12 border p-8">
      
      <LoginPrompt />
      <AccountLoginForm />

      <div className="border-t border-gray-100 pt-10">
        <BillingForm />
      </div>

      <div className="border-t border-gray-100 pt-10">
        <PaymentMethodSelector />
      </div>

    </div>
  );
}