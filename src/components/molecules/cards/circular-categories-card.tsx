import Image from "next/image";

interface CategoryCardProps {
  imageUrl: string;
  title: string;
  productCount: number;
  href?: string; // optional link
}

export default function CategoryCard({
  imageUrl,
  title,
  productCount,
  href,
}: CategoryCardProps) {
  const content = (
    <div className="flex flex-col items-center justify-between ">
      <div className="relative w-40 md:w-48 h-40 md:h-48 2xl:w-54 2xl:h-54 border border-gray-200 rounded-full overflow-hidden group">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-100 transition-colors duration-300 group-hover:text-black">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 transition-colors duration-300 group-hover:text-gray-700">
          {productCount} Products
        </p>
      </div>
    </div>
  );

  // Wrap in link if href is provided
  return href ? (
    <a href={href} className="transition-all duration-300 ">
      {content}
    </a>
  ) : (
    content
  );
}