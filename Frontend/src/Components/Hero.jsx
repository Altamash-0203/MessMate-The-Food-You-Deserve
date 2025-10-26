function Hero() {
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
              <button className="bg-red-500 text-white font-bold w-40 rounded-3xl p-2 mr-4 shadow-x hover:bg-red-600 " >
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
    </div>
  );
}

export default Hero;
