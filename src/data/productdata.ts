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
        },
        {
            image: "/demo-images/products/product (2).webp",
            title: "Classic Watch",
            price: "149.99",
            orignalprice: "230",
        },
        {
            image: "/demo-images/products/product (3).webp",
            title: "Zebra Pent",
            price: "29.99",
            orignalprice: "40",
            discount: "32",
        },
        {
            image: "/demo-images/products/product (1).webp",
            title: "Stylish Sneakers",
            orignalprice: "100",
            price: "79.99",
        },
        {
            image: "/demo-images/products/product (2).webp",
            title: "Classic Watch",
            orignalprice: "170",
            price: "149.99",
        },
        {
            image: "/demo-images/products/product (3).webp",
            title: "Zebra Pent",
            price: "29.99",
        },
        {
            image: "/demo-images/products/product (1).webp",
            title: "Stylish Sneakers",
            price: "79.99",
            discount: "32",
        },
        {
            image: "/demo-images/products/product (2).webp",
            title: "Classic Watch",
            price: "149.99",
            orignalprice: "230",
        },
        {
            image: "/demo-images/products/product (1).webp",
            title: "Stylish Sneakers",
            orignalprice: "100",
            price: "79.99",
        },
    ],

    bestSeller: [
        {
            image: "/demo-images/products/product (3).webp",
            title: "Zebra Pent",
            price: "29.99",
        },
        {
            image: "/demo-images/products/product (1).webp",
            title: "Stylish Sneakers",
            price: "79.99",
            discount: "32",
        },
        {
            image: "/demo-images/products/product (2).webp",
            title: "Classic Watch",
            price: "149.99",
            orignalprice: "230",
        },
        {
            image: "/demo-images/products/product (1).webp",
            title: "Stylish Sneakers",
            orignalprice: "100",
            price: "79.99",
        },
        {
            image: "/demo-images/products/product (3).webp",
            title: "Zebra Pent",
            price: "29.99",
            orignalprice: "40",
        },
    ],

    onSale: [
        {
            image: "/demo-images/products/product (1).webp",
            title: "Stylish Sneakers",
            price: "79.99",
            discount: "32",
        },
        {
            image: "/demo-images/products/product (3).webp",
            title: "Zebra Pent",
            price: "29.99",
            orignalprice: "40",
            discount: "32",
        },
        {
            image: "/demo-images/products/product (2).webp",
            title: "Classic Watch",
            orignalprice: "170",
            price: "149.99",
        },
        {
            image: "/demo-images/products/product (2).webp",
            title: "Classic Watch",
            price: "149.99",
            orignalprice: "230",
        },
        {
            image: "/demo-images/products/product (1).webp",
            title: "Stylish Sneakers",
            orignalprice: "100",
            price: "79.99",
        },
    ],
};