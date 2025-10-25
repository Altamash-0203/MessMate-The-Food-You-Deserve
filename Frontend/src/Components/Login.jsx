import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="p-8 w-1/2 mx-auto text-center flex gap-20 flex-col bg-gray-100 rounded-xl mt-20">
      <div>
        <h2 className="text-2xl font-extrabold text-red-700">
          <span className="text-black">Mess</span>
          <span className="text-red-500">Mate</span>
        </h2>
        <h1 className="text-4xl font-extrabold">Welcome Back</h1>
      </div>
      <form action="" className="flex flex-col gap-16">
        {/* <label htmlFor="">Login</label> */}
        <input
          className="border-2 foucs:border-white outline-black  rounded-full text-gray-700 p-2"
          type="email"
          name="email"
          placeholder="email"
        />
        <input
          className="border-2 focus:border-white outline-black rounded-full text-gray-700 p-2"
          type="password"
          name="password"
          placeholder="Password"
        />
        <button className="bg-black text-white p-2 rounded-full" type="submit">
          Login
        </button>
      </form>

      <small>
        New to MessMate ? <Link to="/signup">Sign Up</Link>
      </small>
    </div>
  );
};

export default Login;
