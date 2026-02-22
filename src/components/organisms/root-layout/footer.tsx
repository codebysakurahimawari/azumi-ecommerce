"use client";

import Link from "next/link";
import Image from "next/image";
import FooterNewsletter from "@/components/molecules/common/FooterNewsletter";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function MainFooter() {
  return (
    <footer className="bg-[#f8f8f8] py-12 mt-12 lg:mt-16 m-4 rounded-2xl pb-4  border border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 px-6">

        {/* Logo */}
       

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Contact */}
          <div className="flex flex-col col-span-2 gap-4 text-sm">
            <div>
          <Link href="/">
            <Image
              src="/site-logo.svg" // replace with your logo
              alt="Site Logo"
              width={140}
              height={40}
              className="object-contain"
            />
          </Link>
        </div>

            <div className="flex items-start gap-3 text-gray-600">
              <MapPin size={18} className="mt-1" />
              <p>549 Oak St.Crystal Lake, IL 60014</p>
            </div>

            <Link
              href="#"
              className="font-medium hover:text-blue-400 transition mt-3"
            >
              GET DIRECTION
            </Link>

            <div className="flex items-center gap-3 text-gray-600">
              <Mail size={18} />
              <span>themesflat@gmail.com</span>
            </div>

            <div className="flex items-center gap-3 text-gray-600">
              <Phone size={18} />
              <span>315-666-6688</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <Link href="#" className="hover:text-blue-400 transition border border-gray-200 rounded-full p-2">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition border border-gray-200 rounded-full p-2">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition border border-gray-200 rounded-full p-2">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-400 transition border border-gray-200 rounded-full p-2">
                <Youtube size={20} />
              </Link>
            </div>
          </div>

          {/* Information */}
          <div className="flex flex-col col-span-1 gap-5 text-sm">
            <h3 className="text-h5 font-semibold">Information</h3>

            <div className="flex flex-col gap-3">
              <Link href="#" className="hover:text-blue-400 transition">About Us</Link>
              <Link href="#" className="hover:text-blue-400 transition">Our Stories</Link>
              <Link href="#" className="hover:text-blue-400 transition">Size Guide</Link>
              <Link href="#" className="hover:text-blue-400 transition">Contact us</Link>
              <Link href="#" className="hover:text-blue-400 transition">Career</Link>
            </div>
          </div>

          {/* Customer Services */}
          <div className="flex flex-col col-span-1 gap-5 text-sm">
            <h3 className="text-h5 font-semibold">Customer Services</h3>

            <div className="flex flex-col gap-3">
              <Link href="#" className="hover:text-blue-400 transition">Shipping</Link>
              <Link href="#" className="hover:text-blue-400 transition">Return & Refund</Link>
              <Link href="#" className="hover:text-blue-400 transition">Privacy Policy</Link>
              <Link href="#" className="hover:text-blue-400 transition">Terms & Conditions</Link>
              <Link href="#" className="hover:text-blue-400 transition">Orders FAQs</Link>
              <Link href="#" className="hover:text-blue-400 transition">My Wishlist</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-2">
            <FooterNewsletter />
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>

      </div>
    </footer>
  );
}