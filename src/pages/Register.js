export const Register = () => {
  return (
    <div className="w-screen h-screen bg-gray-500 flex items-center">
      <div className="w-3/4 h-3/4 flex">
        <div className="flex flex-1 flex-col justify-center">
          <h3 className="mb-2 text-5xl font-bold text-blue-600">Fakebook</h3>
          <span className="text-2xl">Connect with friends.</span>
        </div>
        <div className="flex flex-1 flex-col justify-center">
          <div className="h-96 p-5 bg-white rounded-xl flex flex-col justify-between">
            <input
              placeholder="Username"
              className="h-12 p-5 focus:outline-none"
            />
            <input
              placeholder="Email"
              className="h-12 p-5 focus:outline-none"
            />
            <input
              placeholder="Password"
              className="h-12 p-5 focus:outline-none"
            />
            <input
              placeholder="Password Again"
              className="h-12 p-5 focus:outline-none"
            />
            <button className="h-12 rounded-xl border-0 bg-blue-600 text-white text-xl">Sign Up</button>
            <button className="w-2/4 self-center h-12 rounded-xl border-0 bg-black text-white text-xl font-bold">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};
