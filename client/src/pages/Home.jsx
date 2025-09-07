import React from "react";
import { useNavigate } from "react-router-dom";
import { TrendingUp, Sparkles, Car, Coins } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative">
      {/* Blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse" />
        <div className="absolute top-[30%] right-[5%] w-64 h-64 bg-blue-500 rounded-full opacity-20 blur-3xl animate-pulse delay-200" />
        <div className="absolute bottom-[10%] left-[40%] w-64 h-64 bg-pink-500 rounded-full opacity-20 blur-3xl animate-pulse delay-500" />
      </div>

      {/* Navbar */}
      <header className="relative z-10 w-full bg-white/5 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex justify-center items-center">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              AI Price Predictor
            </h1>
          </div>
          
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* Hero */}
        <section className="pt-20 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-purple-400/30 rounded-full mb-6">
            <TrendingUp className="w-4 h-4 text-purple-300" />
            <span className="text-sm text-purple-200">AI-Powered Predictions</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-4">
            Your Personal AI Price <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Prediction Tool
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Harness the power of machine learning to make informed decisions.
            Our platform provides accurate predictions for{" "}
            <span className="text-purple-400 font-semibold">used car resale values</span> and{" "}
            <span className="text-yellow-400 font-semibold">gold price forecasts</span> based on real-time data.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => handleNavClick("/car-price")}
              className="min-w-[200px] px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl shadow hover:shadow-purple-500/30 transform transition hover:-translate-y-1"
            >
              <div className="flex justify-center items-center gap-2">
                <Car className="w-5 h-5" />
                <span className="font-semibold">Predict Car Price</span>
              </div>
            </button>
            <button
              onClick={() => handleNavClick("/gold-price")}
              className="min-w-[200px] px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black rounded-xl shadow hover:shadow-yellow-500/30 transform transition hover:-translate-y-1"
            >
              <div className="flex justify-center items-center gap-2">
                <Coins className="w-5 h-5" />
                <span className="font-semibold">Predict Gold Price</span>
              </div>
            </button>
          </div>
        </section>

        {/* Features */}
        <section className="grid md:grid-cols-3 gap-6 mb-20">
          <FeatureCard
            title="Real-time Analysis"
            description="Get instant predictions based on current market trends and data."
            icon={<TrendingUp className="w-6 h-6 text-white" />}
            bg="from-purple-500 to-pink-500"
            color="text-purple-200"
          />
          <FeatureCard
            title="AI-Powered"
            description="Advanced ML algorithms ensure high accuracy for all predictions."
            icon={<Sparkles className="w-6 h-6 text-white" />}
            bg="from-blue-500 to-purple-500"
            color="text-blue-200"
          />
          <FeatureCard
            title="Multi-Asset"
            description="Supports price prediction for cars, gold, and more assets."
            icon={<Car className="w-6 h-6 text-white" />}
            bg="from-yellow-500 to-orange-500"
            color="text-yellow-200"
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 text-center py-6 border-t border-white/10 backdrop-blur-md">
        <p className="text-gray-400">
          Made with <span className="text-red-400">❤️</span> by{" "}
          <span className="text-purple-400 font-semibold">Shrish</span> |
          <span className="text-pink-400"> CSE (AI/ML)</span>
        </p>
      </footer>
    </div>
  );
};

const FeatureCard = ({ title, description, icon, bg, color }) => (
  <div className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition">
    <div className={`w-12 h-12 ${`bg-gradient-to-r ${bg}`} rounded-xl flex items-center justify-center mb-4 mx-auto`}>
      {icon}
    </div>
    <h3 className={`text-xl font-semibold mb-2 ${color}`}>{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default Home;
