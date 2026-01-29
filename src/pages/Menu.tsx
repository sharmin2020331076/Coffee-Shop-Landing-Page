import { useState } from "react";
import { ProductModal } from "../components/ProductModal";

// Define the Product interface locally or import it if shared
interface Product {
    id: number;
    image: string;
    name: string;
    rating: number;
    price: number;
}

export function Menu(){
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const openModal = (product: Product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    const products = {
        All: [
            { id: 1, image: "/photo/dessert1.jpg", name: "Dark Irish Cheesecake", rating: 4, price: 7.99 },
            { id: 2, image: "/photo/dessert2.jpg", name: "Naked dark chocolate cake", rating: 3, price: 6.99 },
            { id: 3, image: "/photo/dessert3.jpg", name: "Double Chocolate Fruit cake", rating: 5, price: 8.49 },
            { id: 4, image: "/photo/dessert4.jpg", name: "Dark Chocolate Cheesecake", rating: 4, price: 7.49 },
            { id: 5, image: "/photo/cold1.jpg", name: "Iced Cappuccino", rating: 4 ,price: 5.99},
            { id: 6, image: "/photo/cold2.jpg", name: "Cold Brew Coffee", rating: 3 ,price: 4.99},
            { id: 7, image: "/photo/cold3.jpg", name: "Iced Latte", rating: 5 , price: 6.49},
            { id: 8, image: "/photo/cold4.jpg", name: "Iced Americano", rating: 3 , price: 3.99},
            { id: 9, image: "/photo/hot1.jpg", name: "Espresso", rating: 5 , price: 2.99},
            { id: 10, image: "/photo/hot2.jpg", name: "Cappuccino", rating: 5 , price: 4.49},
            { id: 11, image: "/photo/hot3.jpg", name: "Latte", rating: 5 , price: 4.99},
            { id: 12, image: "/photo/hot4.jpg", name: "Americano", rating: 5 , price: 3.49}
        ],
        Desserts: [
            { id: 1, image: "/photo/dessert1.jpg", name: "Dark Irish Cheesecake", rating: 4 , price: 7.99},
            { id: 2, image: "/photo/dessert2.jpg", name: "Naked dark chocolate cake", rating: 3 , price: 6.99},
            { id: 3, image: "/photo/dessert3.jpg", name: "Double Chocolate Fruit cake", rating: 5 , price: 8.49},
            { id: 4, image: "/photo/dessert4.jpg", name: "Dark Chocolate Cheesecake", rating: 4 , price: 7.49}
        ],
        "Cold Coffee": [
            { id: 1, image: "/photo/cold1.jpg", name: "Iced Cappuccino", rating: 4 , price: 5.99},
            { id: 2, image: "/photo/cold2.jpg", name: "Cold Brew Coffee", rating: 3 , price: 4.99},
            { id: 3, image: "/photo/cold3.jpg", name: "Iced Latte", rating: 5 , price: 6.49},
            { id: 4, image: "/photo/cold4.jpg", name: "Iced Americano", rating: 3 , price: 3.99}
        ],
        "Hot Coffee": [
            { id: 1, image: "/photo/hot1.jpg", name: "Espresso", rating: 5 , price: 2.99},
            { id: 2, image: "/photo/hot2.jpg", name: "Cappuccino", rating: 5 , price: 4.49},
            { id: 3, image: "/photo/hot3.jpg", name: "Latte", rating: 5 , price: 4.99},
            { id: 4, image: "/photo/hot4.jpg", name: "Americano", rating: 5 , price: 3.49}
        ]
    };

    return (
        <div className="w-full py-12 px-4 sm:px-8 relative">
            {/* Top Products Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold text-coffee text-center mb-8">All The Items We Serve</h2>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-3 sm:gap-4 mb-8 flex-wrap">
                {["All", "Desserts", "Cold Coffee", "Hot Coffee"].map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all ${
                            activeFilter === filter
                                ? "bg-coffee text-[#f1a437] border-2 border-coffee"
                                : "bg-amber-100 text-coffee border-2 border-coffee"
                        }`}
                    >
                        {filter}
                    </button>
                ))}
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {products[activeFilter as keyof typeof products].map((product) => (
                    <div 
                        key={product.id} 
                        onClick={() => openModal(product)}
                        className="bg-white/50 backdrop-blur-3xl rounded-lg overflow-hidden ring-0 hover:ring-amber-500 transition-all duration-300 cursor-pointer"
                    >
                        {/* Product Image */}
                        <div className="relative overflow-hidden h-48 sm:h-56">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>

                        {/* Product Info */}
                        <div className="p-4 sm:p-5 grid grid-cols-2 items-center">
                            {/* Star Rating */}
                            <div className="flex flex-col justify-start">
                                <div className="flex gap-1 mb-2">
                                {[...Array(product.rating)].map((_, i) => (
                                    <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#fb9200]" viewBox="0 0 20 20">
                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                    </svg>
                                ))}
                                 
                            </div> 

                            {/* Product Name */}
                            <h3 className="text-coffee font-semibold text-sm sm:text-base mb-3">{product.name}</h3>
                            </div>


                            <div  className="flex flex-col items-end gap-4">
                                {/* Price Text */}
                            <span className="text-[#e68600] font-bold text-sm sm:text-base mb-2">
                                    ${product.price.toFixed(2)}
                                </span>
                                {/* Cart Icon */}
                                <span className="mb-3 hover:scale-110 transition-transform cursor-pointer">
                                    <img src="/icons/cart.png" alt="Cart" className="w-5 h-5 sm:w-6 sm:h-6"/>
                                </span>
                            </div>


                        </div>
                    </div>
                ))}
            </div>

            {/* Details Modal */}
            <ProductModal 
                product={selectedProduct} 
                isOpen={!!selectedProduct} 
                onClose={closeModal} 
            />
        </div>
    );
}