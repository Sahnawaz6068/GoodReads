import React, { useState, useRef } from "react";
import logo from "../Assets/Images/book-salf.png";
import { Link } from "react-router-dom";

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const textRef = useRef(null);

  const handleMouseMove = (e) => {
    if (textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      // Calculate position as percentages
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePos({ x, y });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center">
      <nav className="w-full p-6 flex justify-start">
        <div className="flex items-center gap-2 group cursor-pointer">
          <img className="h-12 w-12 object-contain transition-transform group-hover:rotate-12" src={logo} alt="Logo" />
          <span className="text-2xl font-bold text-slate-800 tracking-tight">BookShelf</span>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="flex-1 flex flex-col lg:flex-row items-center justify-center px-6 max-w-7xl mx-auto gap-12 lg:gap-24">
        
        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          {/* Dynamic Text Effect Section */}
          <h1 
            ref={textRef}
            onMouseMove={handleMouseMove}
            className="text-5xl lg:text-7xl font-extrabold leading-tight cursor-default select-none bg-clip-text text-transparent transition-colors duration-300"
            style={{
              backgroundColor: '#0f172a', // Base color (Slate 900)
              backgroundImage: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, #2563eb 0%, #0f172a 35%)`,
              WebkitBackgroundClip: 'text',
            }}
          >
            Your personal library, <br />
          </h1>

          <p className="text-xl text-slate-600 max-w-xl mx-auto lg:mx-0">
            The social network for bookworms. Track your reading, share reviews, 
            and discover your next favorite story with a global community.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-4">
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1 active:scale-95 text-lg">
              <Link to="/signup">Register</Link>
            </button>
            <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-all text-lg hover:-translate-y-1 active:scale-95">
              <Link to="/signin">Signin</Link>
            </button>
          </div>
        </div>

        {/* Decorative Element */}
        <div className="flex-1 w-full max-w-md lg:max-w-none">
          <div className="relative">
            <div className="aspect-square bg-blue-100 rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform rotate-3 hover:rotate-0 transition-transform duration-500">
               <img 
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800" 
                alt="Featured Book" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;