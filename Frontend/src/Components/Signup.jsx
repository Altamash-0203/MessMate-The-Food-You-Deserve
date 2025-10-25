import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="bg-[url('https://images.unsplash.com/photo-1594046243098-0fceea9d451e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470')] min-h-screen bg-cover bg-center bg-no-repeat p-24">
      <div className="p-8 w-1/3 mx-auto text-center flex gap-20 flex-col bg-yellow-500 rounded-xl  shadow-xl">
        <div>
          <h2 className="text-2xl font-extrabold text-red-700">
            <span className="text-black">Mess</span>
            <span className="text-red-500">Mate</span>
          </h2>
          <h1 className="text-4xl font-extrabold">Start Fresh</h1>
        </div>
        <form action="" className="flex flex-col gap-16">
          {/* <label htmlFor="">SingUp</label> */}
          <input
            className="border-0 border-b-2 focus:outline-none foucs:border-b-white text-gray-700 p-2"
            type="email"
            name="email"
            placeholder="email"
          />
          <input
            className="border-0 border-b-2 focus:outline-none foucs:border-b-white text-gray-700 p-2"
            type="password"
            name="password"
            placeholder="Password"
          />
          <button
            className="bg-black text-white p-2 rounded-full"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        <small>
          Already have an account ? <Link to="/login">Login</Link>
        </small>
      </div>
    </div>
  );
};

export default SignUp;
