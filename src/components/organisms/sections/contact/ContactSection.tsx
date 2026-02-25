import ContactForm from "@/components/molecules/contact/ContactForm";
import ContactInfoItem from "@/components/molecules/contact/ContactInfoItem";

export default function ContactSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-5 items-start">
        
        {/* LEFT SIDE - FORM */}
        <div className="bg-gray-50 p-4 border border-gray-200 rounded-2xl">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-500 mb-10">
            Use the form below to get in touch with the sales team
          </p>

          <ContactForm />
        </div>

        {/* RIGHT SIDE - INFO */}
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 space-y-8">
          <h3 className="text-lg font-semibold text-gray-900">
            Information
          </h3>

          <ContactInfoItem title="Phone:">
            +1 666 234 8888
          </ContactInfoItem>

          <ContactInfoItem title="Email:">
            themesflat@gmail.com
          </ContactInfoItem>

          <ContactInfoItem title="Address:">
            2163 Phillips Gap Rd,<br />
            West Jefferson, North Carolina,<br />
            United States
          </ContactInfoItem>

          <ContactInfoItem title="Open Time:">
            <div>
              <p>Mon - Sat: 7:30am - 8:00pm PST</p>
              <p>Sunday: 9:00am - 5:00pm PST</p>
            </div>
          </ContactInfoItem>
        </div>
      </div>
    </section>
  );
}