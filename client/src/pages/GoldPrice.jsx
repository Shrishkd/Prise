import React, { useState } from "react";
import { Coins } from "lucide-react";
import axios from "axios";

const GoldPrice = () => {
  const [formData, setFormData] = useState({
    spx: "",
    uso: "",
    slv: "",
    eurusd: ""
  });

  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/predict-gold-price`,
        formData
      );
      setPrediction(response.data.predicted_price);
    } catch (err) {
      setError("Prediction failed. Please check your input or server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
              <Coins className="text-white w-6 h-6" />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-yellow-300 mb-2">Gold Price Predictor</h2>
          <p className="text-gray-400 text-sm">Predict gold prices based on financial market indicators</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          {[
            { name: "spx", placeholder: "SPX (676.53-2872.87)" },
            { name: "uso", placeholder: "USO (7.96-117.48)" },
            { name: "slv", placeholder: "SLV (8.85-47.25)" },
            { name: "eurusd", placeholder: "EUR/USD (1-1.5)" }
          ].map(({ name, placeholder }) => (
            <input
              key={name}
              type="number"
              step="any"
              name={name}
              placeholder={placeholder}
              value={formData[name]}
              onChange={handleChange}
              required
              className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-400"
            />
          ))}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold rounded-xl transition"
          >
            {loading ? "Predicting..." : "Predict Gold Price"}
          </button>
        </form>

        {prediction && (
          <p className="mt-6 text-green-400 text-center text-xl">
            💰 Predicted Gold Price: ₹ {prediction}
          </p>
        )}
        {error && (
          <p className="mt-4 text-red-400 text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default GoldPrice;
