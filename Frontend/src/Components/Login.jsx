const Login = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold">MessMate</h2>
     <h1>Welcome Back</h1>
     <form action="" className="flex">
        <label htmlFor="">Login</label>
        <input className = "border rounded-full" type="email" name="email" placeholder="email" />
        <input className = "border rounded-full" type="password" name="password" placeholder="Password"/>
        <button type="submit">Login</button>
     </form>
    </div>
  );
};

export default Login;
