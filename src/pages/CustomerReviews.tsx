import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const reviews = [
    {
        name: "Jane Adams",
        role: "Visual Designer",
        rating: 5,
        text: "I dropped by in hopes to cappuccino after seeing reviews, after 10 days here we did not have high expectations, but if the cappuccino was served, i would be just so splendid, great peace with perfectly normal prices that i recommend.",
        image: "/icons/avatar1.png"
    },
    {
        name: "Sam Williams",
        role: "Entrepreneur",
        rating: 5,
        text: "I've been ordering beans from you for ten years, the quality of the product is consistently hight. I'm grateful for the care that is apparently put into the roasts and the excellent customer service. your beans give way to the best cups of coffee.",
        image: "/icons/avatar2.png"
    },
    {
        name: "Angela Gonzales",
        role: "Manager",
        rating: 5,
        text: "I've been ordering beans from you for ten years, the quality of the product is consistently hight. I'm grateful for the care that is apparently put into the roasts and the excellent customer service. your beans give way to the best cups of coffee.",
        image: "/icons/avatar3.png"
    },
    {
        name: "Michael Chen",
        role: "Developer",
        rating: 4,
        text: "The ambiance is perfect for coding sessions. The wifi is fast, and the coffee keeps me going. Highly recommend the cold brew!",
        image: "/icons/avatar1.png"
    },
    {
        name: "Sarah Miller",
        role: "Writer",
        rating: 5,
        text: "A hidden gem! I wrote my last two chapters here. The staff knows my order by heart now. It feels like a second home.",
        image: "/icons/avatar2.png"
    },
    {
        name: "David Wilson",
        role: "Coffee Enthusiast",
        rating: 5,
        text: "As someone who roasts their own beans, I can appreciate the quality here. Top-notch selection and brewing methods.",
        image: "/icons/avatar3.png"
    },
    {
        name: "Emily Davis",
        role: "Student",
        rating: 5,
        text: "Great place to study! It gets a bit busy, but the noise level is just right. Love the pastries too.",
        image: "/icons/avatar1.png"
    },
    {
        name: "James Moore",
        role: "Freelancer",
        rating: 4,
        text: "Good coffee, good vibes. Sometimes hard to find a seat, but worth the wait. The espresso is consistently good.",
        image: "/icons/avatar2.png"
    },
    {
        name: "Jessica Taylor",
        role: "Artist",
        rating: 5,
        text: "The latte art is always Instagram-worthy! But more importantly, it tastes amazing. My favorite spot in the city.",
        image: "/icons/avatar3.png"
    }
];

// Helper component for Star Rating
const StarRating = ({ rating }: { rating: number }) => {
    return (
        <div className="flex space-x-0.5">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};

export function CustomerReviews() {
    const container = useRef<HTMLDivElement>(null);
    const [currentPage, setCurrentPage] = useState(0);

    const itemsPerPage = 3;
    const displayedReviews = reviews.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    useGSAP(() => {
        gsap.from(".review-header", {
            scrollTrigger: {
                trigger: ".review-header",
                start: "top 85%",
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        });

        gsap.from(".review-card", {
            scrollTrigger: {
                trigger: ".review-container",
                start: "top 80%",
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out"
        });
    }, { scope: container });

    return (
        <div className="p-4 sm:p-8 lg:p-16">
            <section ref={container} className="w-full py-4 lg:py-8 bg-[#EADDD0]/30 rounded-2xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">

                    {/* Header */}
                    <div className="review-header text-center mb-16 space-y-2">
                        <p className="font-handwriting text-xl sm:text-2xl text-gray-700 italic font-medium">Come and join</p>
                        <h2 className="text-2xl sm:text-2xl lg:text-3xl font-bold text-coffee uppercase">
                            Our Happy Customers
                        </h2>
                    </div>

                    {/* Review Cards Grid */}
                    <div className="review-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {displayedReviews.map((review, index) => (
                            <div
                                key={index}
                                className="review-card bg-coffee p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 flex flex-col items-start h-full"
                            >
                                <div className="flex w-full justify-between items-start mb-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                                            {/* Using placeholder initials if image fails or isn't real */}
                                            <img
                                                src={review.image}
                                                alt={review.name}
                                                onError={(e) => {
                                                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${review.name.replace(" ", "+")}&background=random`
                                                }}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-100 text-sm sm:text-base">{review.name}</h4>
                                            <p className="text-xs text-gray-400 font-medium">{review.role}</p>
                                        </div>
                                    </div>
                                    <StarRating rating={review.rating} />
                                </div>

                                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
                                    {review.text}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Dots (Visual only for now as requested design implies a carousel/slider look) */}
                    {/* Pagination Dots */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {[0, 1, 2].map((index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${currentPage === index ? "bg-[#361402]" : "bg-gray-300 hover:bg-gray-400"
                                    }`}
                                aria-label={`Go to page ${index + 1}`}
                            />
                        ))}
                    </div>

                </div>
            </section>
        </div>
    );
}

