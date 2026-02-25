"use client";

import PaymentConfirmationDetails from "@/components/molecules/payment/PaymentConfirmationDetails";

interface PaymentConfirmationCardProps {
  status?: "success" | "failure";
}

export default function PaymentConfirmationCard({
  status = "success",
}: PaymentConfirmationCardProps) {
  const isFailure = status === "failure";

  return (
    <div className="w-full max-w-3xl mx-auto bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
      
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          {isFailure ? "Payment Failure" : "Payment Confirmation"}
        </h2>

        {isFailure && (
          <p className="text-sm text-gray-500 mt-3">
            Hey there. We tried to charge your card but something went wrong.
            Please update your payment method below to continue.
          </p>
        )}
      </div>

      {/* Success Details */}
      {!isFailure && (
        <div>
          <PaymentConfirmationDetails label="Date" value="01/01/2024" />
          <PaymentConfirmationDetails label="Payment method" value="Visa" />
          <PaymentConfirmationDetails label="Card number" value="**** **** **** 9999" />
          <PaymentConfirmationDetails label="Cardholder name" value="Themesflat" />
          <PaymentConfirmationDetails label="Email" value="info@fashionshop.com" />
          <PaymentConfirmationDetails label="Phone" value="(212) 555-1234" />

          <div className="flex justify-between items-center py-4">
            <span className="text-base font-medium text-gray-900">
              Subtotal
            </span>
            <span className="text-base font-semibold text-gray-900">
              $188.00 USD
            </span>
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        {isFailure ? (
          <>
            <button className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition">
              Update Payment Method
            </button>

            <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition">
              Contact Support
            </button>
          </>
        ) : (
          <>
            <button className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition">
              Cancel Payment
            </button>

            <button className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition">
              Confirm Payment
            </button>
          </>
        )}
      </div>
    </div>
  );
}