/* ============================= */
/* Types */
/* ============================= */

export type TabKey = "newArrivals" | "bestSeller" | "onSale";

export type Product = {
    image: string;
    title: string;
    price: string;
    orignalprice?: string;
    discount?: string;

    // NEW
    sizes?: string[];
    colors?: string[];
    saleEnd?: string;
};

/* ============================= */
/* Data */
/* ============================= */

export const productsData: Record<TabKey, Product[]> = {
    newArrivals: [
        {
            image: "/demo-images/products/product (1).webp",
            title: "Stylish Sneakers",
            price: "79.99",
            discount: "32",
            sizes: ["S", "M", "L", "XL"],
            colors: ["#000000", "#ff0000", "#2563eb"],
            saleEnd: "2026-03-01T00:00:00",
        },
        {
            image: "/demo-images/products/product (2).webp",
            title: "Classic Watch",
            price: "149.99",
            orignalprice: "230",
            sizes: ["M", "L"],
            colors: ["#111111", "#c0c0c0"],
        },
        {
            image: "/demo-images/products/product (3).webp",
            title: "Zebra Pant",
            price: "29.99",
            orignalprice: "40",
            discount: "32",
            sizes: ["S", "M", "L"],
            colors: ["#000000", "#ffffff"],
        },
        {
            image: "/demo-images/products/product (1).webp",
            title: "Stylish Sneakers",
            orignalprice: "100",
            price: "79.99",
            sizes: ["M", "L", "XL"],
            colors: ["#2563eb", "#22c55e"],
        },
    ],

    bestSeller: [
        {
            image: "/demo-images/products/product (3).webp",
            title: "Zebra Pant",
            price: "29.99",
            sizes: ["S", "M"],
            colors: ["#000000"],
        },
        {
            image: "/demo-images/products/product (1).webp",
            title: "Stylish Sneakers",
            price: "79.99",
            discount: "32",
            sizes: ["S", "M", "L", "XL"],
            colors: ["#000000", "#ff0000"],
            saleEnd: "2026-02-28T00:00:00",
        },
        {
            image: "/demo-images/products/product (2).webp",
            title: "Classic Watch",
            price: "149.99",
            orignalprice: "230",
            colors: ["#000000", "#c0c0c0", "#8b5cf6"],
        },
    ],

    onSale: [
        {
            image: "/demo-images/products/product (1).webp",
            title: "Stylish Sneakers",
            price: "79.99",
            discount: "32",
            sizes: ["S", "M", "L", "XL"],
            colors: ["#000000", "#ff0000"],
            saleEnd: "2026-02-27T00:00:00",
        },
        {
            image: "/demo-images/products/product (3).webp",
            title: "Zebra Pant",
            price: "29.99",
            orignalprice: "40",
            discount: "32",
            sizes: ["M", "L"],
            colors: ["#000000", "#ffffff"],
            saleEnd: "2026-02-25T00:00:00",
        },
        {
            image: "/demo-images/products/product (2).webp",
            title: "Classic Watch",
            orignalprice: "170",
            price: "149.99",
            colors: ["#111111"],
        },
    ],
};