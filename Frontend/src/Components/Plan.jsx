import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarWeek,
  faCalendarDays,
  faCalendarAlt,
  faUtensils,
  faClock,
  faHeadset,
  faPercent,
  faCheckCircle,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";

function plans() {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1594046243098-0fceea9d451e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470')] min-h-screen bg-cover bg-center bg-no-repeat mx-auto px-4 py-6">
      {/* <div className=" mx-auto px-4 py-6 bg-yellow-500 "> */}

      <PricingSection />
    </div>
  );
}

function PricingSection() {
  const plans = [
    {
      title: "Weekly",
      price: "₹499/week",
      meals: "7 meals",
      discount: null,
      button: "Start Weekly",
    },
    {
      title: "Monthly",
      price: "₹1,999/month",
      meals: "28 meals",
      discount: "10% off",
      button: "Start Monthly",
      featured: true,
    },
    {
      title: "Yearly",
      price: "₹20,999/year",
      meals: "336 meals",
      discount: "15% off",
      button: "Start Yearly",
    },
  ];

  return (
    <section className="text-center my-12 w-2/3 mx-auto">
      <h2 className="text-3xl font-bold mb-8">Choose Your Plan</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`bg-white rounded-lg shadow-md p-6 border hover:border-red-500 transition ease-in-out duration-300  hover:bg-red-500 hover:text-white`}
          >
            <div className="flex items-center justify-center mb-4">
              <FontAwesomeIcon
                icon={
                  plan.title === "Weekly"
                    ? faCalendarWeek
                    : plan.title === "Monthly"
                    ? faCalendarDays
                    : faCalendarAlt
                }
                className="text-3xl"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-lg font-bold text-green-800 mb-4">
              {plan.price}
            </p>
            <ul className="text-black mb-4 space-y-1">
              <li className="flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faUtensils} />
                <span>{plan.meals}</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faCheckCircle} />
                <span>Flexible</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faListAlt} />
                <span>4–5 options</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faClock} />
                <span>30 min delivery</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faHeadset} />
                <span>24/7 support</span>
              </li>
              {plan.discount && (
                <li className="text-green-600 font-semibold flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon={faPercent} />
                  <span>{plan.discount}</span>
                </li>
              )}
            </ul>
            <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-black transition">
              {plan.button}
            </button>
          </div>
        ))}
      </div>

      <section className="flex flex-col align-center justify-center p-8">
        <div className="flex flex-row justify-evenly text-bold m-8">
          <p className="font-extrabold text-xl">Secure Payments</p>
          <p className="font-extrabold text-xl">Instant Delivery</p>
        </div>
        <div className="flex flex-row justify-evenly  ">
          <p className="border font-bold rounded-full bg-gray-200 text-red-900 p-2 pl-16 pr-16">
            FAQ <br />
            100% Satisfaction Guarantee
          </p>

          <p className="border font-bold rounded-full bg-gray-200 text-red-900 p-2 pl-16 pr-16">
            How to a week ?<br /> how to cancel ?
          </p>

          <p className="border font-bold rounded-full bg-gray-200 text-red-900 p-2 pl-16 pr-16">
            Delivery Area ? <br /> Payment methods
          </p>
        </div>
      </section>
    </section>
  );
}

export default plans;
