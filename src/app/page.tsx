import Image from "next/image";
import Hero from "../components/organisms/sections/homepage/hero";
import CategoriesSection from "@/components/organisms/sections/homepage/CategoriesSection";
import ProductsOfferSection from "@/components/organisms/sections/homepage/ProductsOffersSection";
import PromotionBannerCard from "@/components/molecules/banners/PromotionBannerCard";
import PromotionBannerHoverCard from "@/components/molecules/banners/PromotionBannerHoverCard";
import FestivalCTABanner from "@/components/molecules/banners/FestivalCTABanner";
import ShopInstagramSection from "@/components/organisms/sections/common/ShopInstagramSection";
import StoreFeaturesSection from "@/components/organisms/sections/common/StoreFeaturesSection";
import NewsInsightSection from "@/components/organisms/sections/blogs/NewsInsightSection";
import CustomerTestimonialSection from "@/components/organisms/sections/common/CustomerTestimonialSection";

const categories = [
  { title: "Women", imageUrl: "/demo-images/cls-circle5.jpg", productCount: 120 },
  { title: "Men", imageUrl: "/demo-images/cls-circle1.jpg", productCount: 90 },
  { title: "Accessories", imageUrl: "/demo-images/cls-circle3.jpg", productCount: 45 },
  { title: "Child", imageUrl: "/demo-images/cls-circle4.jpg", productCount: 90 },
  { title: "Accessories", imageUrl: "/demo-images/cls-circle2.jpg", productCount: 45 },
  { title: "Watches", imageUrl: "/demo-images/cls-circle2.jpg", productCount: 45 },


];

const images = [
  "/demo-images/cls-circle1.jpg",
  "/demo-images/cls-circle2.jpg",
  "/demo-images/cls-circle3.jpg",
  "/demo-images/cls-circle4.jpg",
  "/demo-images/cls-circle5.jpg"
];
export default function Home() {
  return (
    <main className=" min-h-screen  ">
      <Hero />
      <CategoriesSection categories={categories} />

      <ProductsOfferSection />

      <section className="pb-12 lg:pb-16 xl:pb-20 2xl:pb-24">

        <div className="grid grid-cols-2 gap-5 max-w-7xl  mx-auto">
          <PromotionBannerCard
            image="/demo-images/banner-cls1.jpg"
            title="Summer Collection 2026"
            description="Discover lightweight styles perfect for the new season."
            href="/shop/summer"
          />

          <PromotionBannerHoverCard
            image="/demo-images/banner-cls2.jpg"
            title="Summer Collection 2026"
            description="Discover lightweight styles perfect for the new season."
            buttonText="Shop Now"
            href="/shop/summer"
          />
        </div>

      </section>

      <section>
        <FestivalCTABanner
          title="Limited-Time Deals On!"
          description="Up to 50% Off Selected Styles. Don't Miss Out."
          image="/demo-images/img-countdown1.png"
          buttonText="Buy Now"
          buttonHref="/sale"
          targetDate="2026-03-01T00:00:00"
        />
      </section>

      <CustomerTestimonialSection />

      <NewsInsightSection />
      <ShopInstagramSection />
      <StoreFeaturesSection />

     
    </main>
  );
}