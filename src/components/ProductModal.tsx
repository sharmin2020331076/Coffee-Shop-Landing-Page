import Button from "./Button";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { createPortal } from "react-dom";

interface Product {
    id: number;
    image: string;
    name: string;
    rating: number;
    price: number;
}

interface ProductModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
    const modalRef = useRef(null);
    const [count, setCount] = useState(1);
    const [isAdded, setIsAdded] = useState(false);

    // Reset count when product changes or modal opens
    useEffect(() => {
        if (isOpen) {
            setCount(1);
            setIsAdded(false);
        }
    }, [isOpen, product]);

    const handleIncrement = () => setCount((prev) => prev + 1);
    const handleDecrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));
    const handleAddToCart = () => {
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000); // Reset after 2s
    };

    useGSAP(() => {
        if (isOpen && product) {
            gsap.from(modalRef.current, {
                scale: 0.8,
                opacity: 0,
                duration: 0.4,
                ease: "back.out(1.7)"
            });
        }
    }, [isOpen, product]);

    if (!isOpen || !product) return null;

    return createPortal(
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div 
                ref={modalRef}
                className="relative bg-[#fffbf2] rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden flex flex-col md:flex-row"
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-10 p-1.5 bg-white/80 rounded-full hover:bg-white transition-colors"
                >
                    <svg className="w-5 h-5 text-coffee" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Left Side - Image */}
                <div className="w-full md:w-5/12 h-48 md:h-auto relative bg-[#f8f0e3]">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover object-center"
                    />
                </div>

                {/* Right Side - Details */}
                <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-center space-y-4">
                    <div>
                        <div className="flex gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className={`w-4 h-4 sm:w-5 sm:h-5 ${i < product.rating ? 'fill-[#fb9200]' : 'fill-gray-300'}`}
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                            ))}
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-coffee font-sans mb-1">{product.name}</h2>
                        <span className="text-xl font-bold text-[#e68600]">${(product.price * count).toFixed(2)}</span>
                    </div>

                    <p className="text-coffee/80 text-sm md:text-base leading-relaxed line-clamp-3">
                        Indulge in the premium taste of our {product.name.toLowerCase()}.
                        Crafted with the finest ingredients to bring you a moment of pure bliss.
                    </p>

                    <div className="pt-2 flex items-center gap-3">
                        <div className="flex items-center border border-coffee/20 rounded-full px-3 py-1.5 gap-3">
                            <button onClick={handleDecrement} className="text-coffee font-bold text-lg hover:text-[#e68600]">-</button>
                            <span className="text-coffee font-bold text-base w-4 text-center">{count}</span>
                            <button onClick={handleIncrement} className="text-coffee font-bold text-lg hover:text-[#e68600]">+</button>
                        </div>
                        <div onClick={handleAddToCart}>
                            <Button 
                                text={isAdded ? "Added!" : "Add to Cart"} 
                                height="40px" 
                                width="140px" 
                                variant="solid" 
                                background={isAdded ? "#166534" : "var(--color-coffee)"} 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
