const Signin = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <form className="bg-gray-800 p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">Sign In</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full p-2 mb-4 bg-gray-700 border border-gray-600 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 bg-gray-700 border border-gray-600 rounded"
        />
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Signin;
