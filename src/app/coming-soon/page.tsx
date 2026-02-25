"use client";

import { useEffect, useState } from "react";

export default function ComingSoonPage() {
    const launchDate = new Date("2026-12-31T00:00:00").getTime();

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = launchDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [launchDate]);

    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-900 px-4 text-center overflow-hidden">

            {/* Animated Background Blur Circles */}
            <div className="absolute w-72 h-72 bg-gray-200 rounded-full blur-3xl opacity-40 animate-pulse top-10 left-10"></div>
            <div className="absolute w-72 h-72 bg-gray-300 rounded-full blur-3xl opacity-40 animate-pulse bottom-10 right-10"></div>

            {/* Content */}
            <div className="relative z-10 animate-fadeIn">

                <h2 className="text-xl font-semibold mb-6 tracking-wider">
                    AZUMI
                </h2>

                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Coming Soon
                </h1>

                <p className="text-gray-600 max-w-md mb-10">
                    We’re working hard to bring something amazing.
                    Stay tuned for our grand launch!
                </p>

                {/* Countdown */}
                <div className="flex gap-6 mb-12 flex-wrap justify-center">
                    <TimeBox value={timeLeft.days} label="Days" />
                    <TimeBox value={timeLeft.hours} label="Hours" />
                    <TimeBox value={timeLeft.minutes} label="Minutes" />
                    <TimeBox value={timeLeft.seconds} label="Seconds" />
                </div>

                {/* Email Subscribe */}
                <div className="flex w-full max-w-md shadow-md rounded-md overflow-hidden bg-white">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 px-4 py-3 outline-none"
                    />
                    <button className="bg-black text-white px-6 py-3 hover:bg-gray-800 hover:scale-105 transition-all duration-300">
                        Notify Me
                    </button>
                </div>

                <p className="text-sm text-gray-500 mt-12">
                    © 2026 Azumi. All rights reserved.
                </p>
            </div>

            {/* Custom Animation */}
            <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

        </div>
    );
}

function TimeBox({ value, label }: { value: number; label: string }) {
    return (
        <div className="bg-white shadow-lg rounded-lg px-6 py-4 w-24 transform transition-all duration-300 hover:scale-110">
            <div className="text-2xl font-bold text-black animate-bounce">
                {value}
            </div>
            <p className="text-sm text-gray-500 mt-1">{label}</p>
        </div>
    );
}