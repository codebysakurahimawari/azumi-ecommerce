import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

export default function PillButton({
  text,
  onClick,
  variant = "black", // "black" or "white"
}: {
  text: string;
 
  onClick?: () => void;
  variant?: "black" | "red";
}) {
  const baseClasses =
    "group flex items-center w-fit gap-2 px-12 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden cursor-pointer";
  let styleClasses = "";
  if (variant === "black") {
    styleClasses = "bg-black text-white";
  } else if (variant === "red") {
    styleClasses = "bg-white text-black";
  }

  let hoverBgColor = "";
  if (variant === "black") {
    hoverBgColor = "bg-white";
  } else if (variant === "red") {
    hoverBgColor = "bg-red-600";
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${styleClasses}`}
    >
      <span className="relative z-10 transition-colors duration-300 group-hover:text-white text-md">
        {text}
      </span>
    
        <span className="w-6 h-6 relative z-10 transition-colors duration-300 group-hover:text-white">
     <ArrowUpRight />
        </span>
     
      <span
        className={`absolute inset-0 transform translate-y-full transition-all duration-300 ${hoverBgColor} group-hover:translate-y-0`}
      />
    </button>
  );
}