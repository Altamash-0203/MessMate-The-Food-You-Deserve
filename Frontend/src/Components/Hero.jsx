import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Plan from "./Plan.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faFire,
  faLeaf,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

function Hero() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(
          "https://www.themealdb.com/api/json/v1/1/search.php?s="
        );
        const data = await response.json();
        // Add random prices between 149 and 399
        const mealsWithPrices = data.meals.slice(0, 6).map((meal) => ({
          ...meal,
          price: Math.floor(Math.random() * (399 - 149 + 1) + 149),
        }));
        setMeals(mealsWithPrices);
      } catch (error) {
        console.error("Error fetching meals:", error);
      }
      setLoading(false);
    };

    fetchMeals();
  }, []);

  return (
    <div>
      <section className="bg-gray-100 mt-5 ">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center items-center text-center">
            <h1 className="font-bold text-6xl">
              Digitalize Your <span className="text-red-700">Daily Meal</span>{" "}
              Experience
            </h1>
            <p className="font-semibold text-lg pt-4">
              Healthy , tasty and ready in minutes
            </p>
            <div className="p-4">
              <button className="bg-red-500 text-white font-bold w-40 rounded-3xl p-2 mr-4 shadow-x hover:bg-red-600 ">
                Explore Plans
              </button>
            </div>
          </div>

          <div className="">
            <img
              className="rounded-lg h-80 w-120"
              src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?q=80&w=1200&auto=format&fit=crop"
              alt="Colorful healthy bowl"
            />
          </div>
        </div>
      </section>

      <section className="flex justify-evenly mt-8">
        <div className="border border-gray-100 bg-gray-100 shadow-xs hover:shadow-xl rounded-xl flex flex-col gap-4 p-12 pl-20 pr-20">
          <h2 className="font-extrabold">Healthy Option</h2>
          <p>
            Nutritious meals <br /> tailored to your needs
          </p>
        </div>

        <div className="border border-gray-100 bg-gray-100 shadow-xs hover:shadow-xl rounded-xl flex flex-col gap-4 p-12 pl-20 pr-20">
          <h2 className="font-extrabold">Fast Delivery</h2>
          <p>
            30 minutes from <br /> order to the door{" "}
          </p>
        </div>

        <div className="border border-gray-100 bg-gray-100 shadow-xs hover:shadow-xl rounded-xl flex flex-col gap-4 p-12 pl-20 pr-20">
          <h2 className="font-extrabold">Personalized Menu</h2>
          <p>Choose what you love/p</p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Today's <span className="text-red-600">Special Menu</span>
            </h2>
            <p className="text-lg text-gray-600">
              Discover our handpicked selection of delicious meals
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {meals.map((meal) => (
                <div
                  key={meal.idMeal}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300"
                >
                  <div className="relative">
                    <img
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                      <FontAwesomeIcon icon={faFire} className="mr-1" />
                      Trending
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {meal.strMeal}
                    </h3>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center text-gray-600">
                          <FontAwesomeIcon icon={faClock} className="mr-1" />
                          <span>30 min</span>
                        </div>
                        <div className="flex items-center text-yellow-500">
                          <FontAwesomeIcon icon={faStar} className="mr-1" />
                          <span>4.5</span>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FontAwesomeIcon icon={faLeaf} className="mr-1" />
                        <span>{meal.strCategory}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="text-2xl font-bold text-red-600">
                        ₹{meal.price}
                      </div>
                      <div className="text-sm text-gray-500">Free Delivery</div>
                    </div>

                    <button className="w-full bg-red-500 text-white py-2 rounded-lg font-semibold hover:bg-red-600 transform hover:-translate-y-1 transition-all duration-200">
                      Order Now • ₹{meal.price}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transform hover:-translate-y-1 transition-all duration-200 inline-flex items-center">
              <Link to='/plan'>
              View Full Menu
              </Link>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
