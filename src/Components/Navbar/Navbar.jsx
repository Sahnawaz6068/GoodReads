import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/book-salf.png";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/Slice/AuthSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

   const handleLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <img 
              className="h-14 w-14 md:h-18 md:w-18 object-contain transition-transform group-hover:rotate-12 rounded-full" 
              src={logo} 
              alt="Logo" 
            />
            <span className="text-xl md:text-2xl font-bold text-slate-800 tracking-tight">
              BookShelf
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/shelf" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Shelves</Link>
            <Link to="/dashboard" className="text-slate-600 hover:text-blue-600 font-medium transition-colors">Dashboard</Link>
            <button onClick={handleLogout} className="bg-red-50 text-red-600 px-4 py-2 rounded-lg font-medium hover:bg-red-100 transition-all">
              Logout
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link 
              to="/shelf" 
              className="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              My Shelves
            </Link>
            <Link 
              to="/dashboard" 
              className="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <div className="pt-4 border-t border-slate-100">
              <button 
                className="w-full text-left px-4 py-3 text-base font-medium text-red-600 hover:bg-red-50 rounded-xl"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;