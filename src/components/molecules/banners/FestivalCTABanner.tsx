"use client";

import PillButton from "@/components/atoms/buttons/primary-section-button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface EventCTABannerProps {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
  buttonText?: string;
  buttonHref?: string;
  targetDate?: string; // Optional countdown
  backgroundClass?: string;
  className?: string;
  onExpire?: () => void;
}

export default function EventCTABanner({
  title,
  description,
  image,
  imageAlt = "Promotion Banner",
  buttonText = "Shop Now",
  buttonHref = "/shop",
  targetDate,
  backgroundClass = "bg-[#f7f7f7]",
  className = "",
  onExpire,
}: EventCTABannerProps) {
  const calculateTimeLeft = () => {
    if (!targetDate) return null;

    const difference = +new Date(targetDate) - +new Date();

    if (difference <= 0) {
      if (onExpire) onExpire();
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    if (!targetDate) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = ["days", "hours", "minutes", "seconds"] as const;

  return (
    <section className={`${backgroundClass} ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 items-center max-w-7xl mx-auto px-6 xl:px-0 gap-8">

        {/* Column 1 - Text */}
        <div className="flex flex-col gap-3">
          <h2 className="text-h2 !font-medium leading-tight">
            {title}
          </h2>

          <p className="text-body text-gray-600">
            {description}
          </p>

          <Link href={buttonHref}>
            <PillButton text={buttonText} variant="black" />
          </Link>
        </div>

        {/* Column 2 - Image */}
        <div className="relative w-full h-[280px] md:h-[350px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-contain"
          />
        </div>

        {/* Column 3 - Countdown (Optional) */}
        {targetDate && timeLeft && (
          <div className="flex flex-wrap md:justify-center items-center">
            {timeUnits.map((unit, index) => (
              <div key={unit} className="flex items-center gap-2">

                <div className="text-center min-w-[80px]">
                  <div className="text-2xl md:text-5xl font-semibold mb-1 tabular-nums">
                    {String(timeLeft[unit]).padStart(2, "0")}
                  </div>
                  <div className="text-xs uppercase tracking-wide text-gray-500">
                    {unit}
                  </div>
                </div>

                {index < timeUnits.length - 1 && (
                  <span className="text-3xl md:text-5xl font-semibold">
                    :
                  </span>
                )}
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}