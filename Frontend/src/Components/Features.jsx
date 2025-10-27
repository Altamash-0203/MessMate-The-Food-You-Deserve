import React from "react";
import { Link } from "react-router-dom";
import Plan from "./Plan.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUtensils,
  faLeaf,
  faMobileScreen,
  faMoneyBillWave,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";

function Features() {
  const features = [
    {
      icon: faClock,
      title: "Quick Delivery",
      description:
        "Get your meals delivered within 30 minutes of ordering. Hot and fresh, right to your doorstep.",
    },
    {
      icon: faUtensils,
      title: "Menu Variety",
      description:
        "Choose from a wide range of daily rotating menus. Different cuisines to satisfy your cravings.",
    },
    {
      icon: faLeaf,
      title: "Healthy & Fresh",
      description:
        "All meals prepared with fresh ingredients. Options for vegetarian, low-carb, and balanced diets.",
    },
    {
      icon: faMobileScreen,
      title: "Easy Ordering",
      description:
        "Simple mobile-friendly interface. Order your next meal in just a few taps.",
    },
    {
      icon: faMoneyBillWave,
      title: "Flexible Plans",
      description:
        "Choose from daily, weekly, or monthly subscription plans. Pay as you go or save with long-term plans.",
    },
    {
      icon: faCalendarCheck,
      title: "Meal Planning",
      description:
        "Plan your meals in advance. Schedule deliveries according to your routine.",
    },
  ];

  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1594046243098-0fceea9d451e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470')] min-h-screen bg-cover bg-center bg-no-repeat p-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Why Choose <span className="text-red-600">MessMate</span>?
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience the perfect blend of convenience, quality, and
            affordability
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-red-100 text-red-600 mb-6">
                    <FontAwesomeIcon icon={feature.icon} size="2x" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300">
           <Link to='/plan'>
           Get Started Today
           </Link> 
          </button>
        </div>
      </div>
    </div>
  );
}

export default Features;
