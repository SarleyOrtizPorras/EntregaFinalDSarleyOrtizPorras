const products = [
    { id:1, image: "https://mac-center.com/cdn/shop/products/IMG-6206251_823x.jpg?v=1661520210", category:'Iphone', title: "Iphone"},
    { id:2, image: "https://images.samsung.com/is/image/samsung/p6pim/co/feature/164091379/co-feature-minimalist-design-with-striking-style-532569297?$FB_TYPE_B_JPG$",category:'Samsung', title: "Samsung"},
    { id:3, image: "https://i.blogs.es/379ae8/nokiac21plus/450_1000.webp",category:'Nokia', title: "Nokia"}, 
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1000)
    })
}