import React from 'react';

function plans() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
    
      <PricingSection />
      
      
    </div>
  );
}


function PricingSection() {
  const plans = [
    {
      title: 'Weekly',
      price: '₹499/week',
      meals: '7 meals',
      discount: null,
      button: 'Start Weekly',
    },
    {
      title: 'Monthly',
      price: '₹1,999/month',
      meals: '28 meals',
      discount: '10% off',
      button: 'Start Monthly',
      featured: true,
    },
    {
      title: 'Yearly',
      price: '₹20,999/year',
      meals: '336 meals',
      discount: '15% off',
      button: 'Start Yearly',
    },
  ];

  return (
    <section className="text-center my-12">
      <h2 className="text-3xl font-bold mb-8">Choose Your Plan</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div
            key={plan.title}
            className={`bg-white rounded-lg shadow-md p-6 border ${
              plan.featured ? 'border-red-500' : 'border-gray-200'
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-lg font-bold text-gray-800 mb-4">{plan.price}</p>
            <ul className="text-gray-600 mb-4 space-y-1">
              <li>{plan.meals}</li>
              <li>Flexible</li>
              <li>4–5 options</li>
              <li>30 min delivery</li>
              <li>24/7 support</li>
              {plan.discount && (
                <li className="text-green-600 font-semibold">{plan.discount}</li>
              )}
            </ul>
            <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}



export default plans;