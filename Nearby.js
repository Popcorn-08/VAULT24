import React, { useState } from "react";
import "./Nearby.css";

function Nearby() {

    const [openCategory, setOpenCategory] = useState("");
    const [openOption, setOpenOption] = useState("");
    const [showFilters, setShowFilters] = useState(false);

    const [petrolType, setPetrolType] = useState("");
    const [restaurantType, setRestaurantType] = useState("");

    const toggleCategory = (category) => {
        if (openCategory === category) {
            setOpenCategory("");
            setOpenOption("");
        } else {
            setOpenCategory(category);
            setOpenOption("");
        }
    };

    const toggleOption = (option) => {
        if (openOption === option) {
            setOpenOption("");
        } else {
            setOpenOption(option);
        }
    };

    const petrolPlaces = [
        {
            name: "Indian Oil",
            distance: "1.2 km",
            rating: "4.7",
            reviews: "86"
        },
        {
            name: "Bharat Petroleum",
            distance: "2.1 km",
            rating: "4.5",
            reviews: "64"
        },
        {
            name: "HP Petrol Pump",
            distance: "3.4 km",
            rating: "4.6",
            reviews: "92"
        }
    ];

    const restaurantPlaces = [
        {
            name: "Family Restaurant",
            distance: "1.4 km",
            rating: "4.8",
            reviews: "124"
        },
        {
            name: "Food Corner",
            distance: "2.3 km",
            rating: "4.6",
            reviews: "89"
        },
        {
            name: "Spice Restaurant",
            distance: "3.1 km",
            rating: "4.5",
            reviews: "76"
        }
    ];

    return (
        <div className="nearby-page">

            <div className="nearby-header">
                <h1>Nearby Places</h1>
                <p>Find useful places around you quickly.</p>
            </div>


            <section className="important-section">

                <div className="section-heading">
                    <h2>Important Places</h2>
                    <p>Quick access to important places near you.</p>
                </div>

                <div className="important-grid">

                    <div className="important-card">
                        <div className="place-icon">🚔</div>
                        <div>
                            <h3>Police</h3>
                            <p>Police stations nearby</p>
                        </div>
                    </div>

                    <div className="important-card">
                        <div className="place-icon">🏥</div>
                        <div>
                            <h3>Hospital</h3>
                            <p>Hospitals nearby</p>
                        </div>
                    </div>

                    <div className="important-card">
                        <div className="place-icon">🚑</div>
                        <div>
                            <h3>Ambulance</h3>
                            <p>Emergency ambulance</p>
                        </div>
                    </div>

                    <div className="important-card">
                        <div className="place-icon">🛡️</div>
                        <div>
                            <h3>Cyber Fraud</h3>
                            <p>Cyber help nearby</p>
                        </div>
                    </div>

                </div>

            </section>


            <section className="categories-section">

                <div className="categories-top">

                    <div>
                        <h2>Categories</h2>
                        <p>Choose a category to find nearby places.</p>
                    </div>

                    <div className="filter-dropdown">

                        <button
                            className="filter-main-btn"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <i className="bi bi-funnel-fill"></i>
                            Filters
                            <i className={
                                showFilters
                                    ? "bi bi-chevron-up"
                                    : "bi bi-chevron-down"
                            }></i>
                        </button>

                        {showFilters && (

                            <div className="filter-menu">

                                <button>
                                    📍 Nearest
                                </button>

                                <button>
                                    ⭐ Top Rated
                                </button>

                                <button>
                                    💬 Most Reviewed
                                </button>

                            </div>

                        )}

                    </div>

                </div>


                <div className="category-box">

                    <div
                        className="category-header"
                        onClick={() => toggleCategory("daily")}
                    >
                        <h3>🛒 Daily Needs</h3>

                        <i className={
                            openCategory === "daily"
                                ? "bi bi-chevron-up"
                                : "bi bi-chevron-down"
                        }></i>
                    </div>

                    {openCategory === "daily" && (

                        <div className="category-content">

                            <button>🛒 Grocery Store</button>
                            <button>🥬 Bhaji Mandi</button>
                            <button>🏪 Market</button>
                            <button>💊 Medical</button>
                            <button>🖨️ Xerox</button>
                            <button>💻 Cyber Cafe</button>

                        </div>

                    )}

                </div>


                <div className="category-box">

                    <div
                        className="category-header"
                        onClick={() => toggleCategory("travel")}
                    >
                        <h3>🚗 Travel</h3>

                        <i className={
                            openCategory === "travel"
                                ? "bi bi-chevron-up"
                                : "bi bi-chevron-down"
                        }></i>
                    </div>

                    {openCategory === "travel" && (

                        <div className="category-content">

                            <button
                                onClick={() => toggleOption("petrol")}
                            >
                                ⛽ Petrol Pump

                                <i className={
                                    openOption === "petrol"
                                        ? "bi bi-chevron-up"
                                        : "bi bi-chevron-down"
                                }></i>
                            </button>

                            <button>🚌 PMPML</button>
                            <button>🚌 ST Stand</button>
                            <button>🚇 Metro</button>
                            <button>🚆 Railway</button>
                            <button>✈️ Airport</button>
                            <button>🚕 Taxi / Cab</button>


                            {openOption === "petrol" && (

                                <div className="option-area">

                                    <div className="option-buttons">

                                        <button
                                            className={
                                                petrolType === "Petrol"
                                                    ? "selected-option"
                                                    : ""
                                            }
                                            onClick={() => setPetrolType("Petrol")}
                                        >
                                            Petrol
                                        </button>

                                        <button
                                            className={
                                                petrolType === "Diesel"
                                                    ? "selected-option"
                                                    : ""
                                            }
                                            onClick={() => setPetrolType("Diesel")}
                                        >
                                            Diesel
                                        </button>

                                        <button
                                            className={
                                                petrolType === "CNG"
                                                    ? "selected-option"
                                                    : ""
                                            }
                                            onClick={() => setPetrolType("CNG")}
                                        >
                                            CNG
                                        </button>

                                    </div>


                                    {petrolType && (

                                        <div className="places-area">

                                            <h3>
                                                Nearby {petrolType} Pumps
                                            </h3>

                                            {petrolPlaces.map((place, index) => (

                                                <div
                                                    className="place-card"
                                                    key={index}
                                                >

                                                    <div className="place-card-left">

                                                        <div className="place-card-icon">
                                                            ⛽
                                                        </div>

                                                        <div>
                                                            <h4>{place.name}</h4>

                                                            <p>
                                                                📍 {place.distance}
                                                            </p>
                                                        </div>

                                                    </div>

                                                    <div className="place-rating">

                                                        <span>
                                                            ⭐ {place.rating}
                                                        </span>

                                                        <small>
                                                            💬 {place.reviews} Vault24 Reviews
                                                        </small>

                                                    </div>

                                                </div>

                                            ))}

                                        </div>

                                    )}

                                </div>

                            )}

                        </div>

                    )}

                </div>


                <div className="category-box">

                    <div
                        className="category-header"
                        onClick={() => toggleCategory("eating")}
                    >
                        <h3>🍴 Eating</h3>

                        <i className={
                            openCategory === "eating"
                                ? "bi bi-chevron-up"
                                : "bi bi-chevron-down"
                        }></i>
                    </div>

                    {openCategory === "eating" && (

                        <div className="category-content">

                            <button>☕ Cafe</button>
                            <button>🍔 Fast Food</button>
                            <button>🍽️ Restaurant</button>

                            <button
                                onClick={() => toggleOption("family")}
                            >
                                👨‍👩‍👧 Family Restaurant

                                <i className={
                                    openOption === "family"
                                        ? "bi bi-chevron-up"
                                        : "bi bi-chevron-down"
                                }></i>
                            </button>


                            {openOption === "family" && (

                                <div className="option-area">

                                    <div className="option-buttons">

                                        <button
                                            className={
                                                restaurantType === "Veg"
                                                    ? "selected-option"
                                                    : ""
                                            }
                                            onClick={() => setRestaurantType("Veg")}
                                        >
                                            🥗 Veg
                                        </button>

                                        <button
                                            className={
                                                restaurantType === "Non-Veg"
                                                    ? "selected-option"
                                                    : ""
                                            }
                                            onClick={() => setRestaurantType("Non-Veg")}
                                        >
                                            🍗 Non-Veg
                                        </button>

                                    </div>


                                    {restaurantType && (

                                        <div className="places-area">

                                            <h3>
                                                Nearby {restaurantType} Restaurants
                                            </h3>

                                            {restaurantPlaces.map((place, index) => (

                                                <div
                                                    className="place-card"
                                                    key={index}
                                                >

                                                    <div className="place-card-left">

                                                        <div className="place-card-icon">
                                                            🍽️
                                                        </div>

                                                        <div>
                                                            <h4>{place.name}</h4>

                                                            <p>
                                                                📍 {place.distance}
                                                            </p>
                                                        </div>

                                                    </div>

                                                    <div className="place-rating">

                                                        <span>
                                                            ⭐ {place.rating}
                                                        </span>

                                                        <small>
                                                            💬 {place.reviews} Vault24 Reviews
                                                        </small>

                                                    </div>

                                                </div>

                                            ))}

                                        </div>

                                    )}

                                </div>

                            )}

                            <button>🥡 Takeaway</button>

                        </div>

                    )}

                </div>


                <div className="category-box">

                    <div
                        className="category-header"
                        onClick={() => toggleCategory("fitness")}
                    >
                        <h3>🏃 Fitness & Outdoor</h3>

                        <i className={
                            openCategory === "fitness"
                                ? "bi bi-chevron-up"
                                : "bi bi-chevron-down"
                        }></i>
                    </div>

                    {openCategory === "fitness" && (

                        <div className="category-content">

                            <button>🏋️ Gym</button>
                            <button>🌳 Park</button>
                            <button>🌲 Garden</button>
                            <button>🏟️ Ground</button>
                            <button>🏊 Swimming Pool</button>

                        </div>

                    )}

                </div>


                <div className="category-box">

                    <div
                        className="category-header"
                        onClick={() => toggleCategory("worship")}
                    >
                        <h3>🛕 Worship</h3>

                        <i className={
                            openCategory === "worship"
                                ? "bi bi-chevron-up"
                                : "bi bi-chevron-down"
                        }></i>
                    </div>

                    {openCategory === "worship" && (

                        <div className="category-content">

                            <button>🛕 Temple</button>
                            <button>🕌 Mosque</button>
                            <button>⛪ Church</button>
                            <button>🛐 Gurudwara</button>

                        </div>

                    )}

                </div>


                <div className="category-box">

                    <div
                        className="category-header"
                        onClick={() => toggleCategory("services")}
                    >
                        <h3>🔧 Services</h3>

                        <i className={
                            openCategory === "services"
                                ? "bi bi-chevron-up"
                                : "bi bi-chevron-down"
                        }></i>
                    </div>

                    {openCategory === "services" && (

                        <div className="category-content">

                            <button>📱 Mobile Repair</button>
                            <button>💻 Computer Repair</button>
                            <button>🔌 Electronics Repair</button>
                            <button>🖨️ Xerox</button>
                            <button>🔑 Locksmith</button>
                            <button>🧵 Tailor</button>
                            <button>💇 Salon</button>

                        </div>

                    )}

                </div>


                <div className="category-box">

                    <div
                        className="category-header"
                        onClick={() => toggleCategory("stay")}
                    >
                        <h3>🏨 Stay</h3>

                        <i className={
                            openCategory === "stay"
                                ? "bi bi-chevron-up"
                                : "bi bi-chevron-down"
                        }></i>
                    </div>

                    {openCategory === "stay" && (

                        <div className="category-content">

                            <button>🏨 Hotel</button>
                            <button>🛏️ Lodge</button>
                            <button>🏠 Guest House</button>

                        </div>

                    )}

                </div>


                <div className="category-box">

                    <div
                        className="category-header"
                        onClick={() => toggleCategory("shopping")}
                    >
                        <h3>🛍️ Shopping</h3>

                        <i className={
                            openCategory === "shopping"
                                ? "bi bi-chevron-up"
                                : "bi bi-chevron-down"
                        }></i>
                    </div>

                    {openCategory === "shopping" && (

                        <div className="category-content">

                            <button>👕 Clothing</button>
                            <button>👟 Shoes</button>
                            <button>📱 Electronics</button>
                            <button>🛒 Supermarket</button>
                            <button>💍 Jewellery</button>
                            <button>🎁 Gift Shop</button>

                        </div>

                    )}

                </div>

            </section>

        </div>
    );
}

export default Nearby;