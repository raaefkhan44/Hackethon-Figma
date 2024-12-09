import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Signup() {
  return (
    <div className="">
  <Header/>
     

      {/* Signup Section */}
      <main className="flex-grow bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 shadow-lg rounded-lg max-w-md w-full">
          <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input type="text" className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input type="email" className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input type="password" className="w-full border border-gray-300 rounded px-3 py-2" />
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="h-4 w-4 text-yellow-500" />
              <label htmlFor="remember" className="ml-2 text-sm">Remember me</label>
            </div>
            <button className="w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600">
              Sign Up
              
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm">Or sign up with:</p>
            <div className="flex justify-center gap-4 mt-2">
              <button className="bg-gray-100 p-2 rounded">
                <img src="/icons/google-icon.png" alt="Google" width="24" />
              </button>
              <button className="bg-gray-100 p-2 rounded">
                <img src="/icons/apple-icon.png" alt="Apple" width="24" />
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}