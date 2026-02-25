"use client";

interface PaymentConfirmationDetailsProps {
  label: string;
  value: string;
}

export default function PaymentConfirmationDetails({
  label,
  value,
}: PaymentConfirmationDetailsProps) {
  return (
    <div className="flex justify-between items-center py-3 border-b border-gray-100">
      <span className="text-sm text-gray-500">{label}</span>
      <span className="text-sm font-medium text-gray-900 text-right">
        {value}
      </span>
    </div>
  );
}