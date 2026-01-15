import React from "react";
import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>
          <p className="text-slate-500 mt-2">
            Don't have an account?{" "}
            <Link 
              to="/signUp" 
              className="text-blue-600 font-semibold hover:underline decoration-2 underline-offset-4"
            >
              Sign Up
            </Link>
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
 
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 ml-1">Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com" 
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 ml-1">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
            />
          </div>

          <button 
            type="submit" 
            className="w-full py-4 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-100 transition-all transform active:scale-[0.98]"
          >
            SignIn
          </button>
        </form>
      </div>

      {/* Back to Home Link */}
      <Link to="/" className="mt-8 text-slate-500 hover:text-slate-800 flex items-center gap-2 transition-colors">
        <span>←</span> Back to home
      </Link>
    </div>
  );
}