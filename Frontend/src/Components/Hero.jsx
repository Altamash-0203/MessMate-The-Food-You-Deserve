function Hero() {
  return (
    <section className = "bg-gray-100 ">
      <div className="flex justify-between">
        <div className="">
          <h1 className="font-bold text-4xl">Digitalize Your Daily Meal Experience</h1>
          <p className="font-semibold text-sm">Choose from fresh, healthy options every day with ease.</p>
          <div className="p-4">
            <button className="bg-red-700 text-white rounded-full p-2 mr-4">Get Started</button>
            <button className="bg-red-700 text-white rounded-full p-2">Watch Demo</button>
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
  )
}

export default Hero