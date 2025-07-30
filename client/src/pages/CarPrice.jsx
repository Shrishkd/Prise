import React, { useState } from "react";
import { Car } from "lucide-react";
import axios from "axios";

const CarPrice = () => {
  const [form, setForm] = useState({
    year: "",
    km_driven: "",
    fuel: "",
    seller_type: "",
    transmission: "",
    owner: ""
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError("");

    try {
      const encodedData = {
        year: parseInt(form.year),
        km_driven: parseFloat(form.km_driven),
        fuel: parseInt(form.fuel),
        seller_type: parseInt(form.seller_type),
        transmission: parseInt(form.transmission),
        owner: parseInt(form.owner),
      };

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/predict-car-price`,
        encodedData
      );

      if (res.data.predicted_price !== undefined) {
        setResult(res.data.predicted_price);
      } else {
        setError("Prediction failed. Server did not return a valid price.");
      }
    } catch (err) {
      console.error("Prediction error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fuelOptions = ["Petrol", "Diesel", "CNG", "LPG", "Electric"];
  const sellerOptions = ["Individual", "Dealer", "Trustmark Dealer"];
  const transmissionOptions = ["Manual", "Automatic"];
  const ownerOptions = [
    "First Owner",
    "Second Owner",
    "Third Owner",
    "Fourth & Above Owner",
    "Test Drive Car"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white px-4 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Car className="text-white w-6 h-6" />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-purple-200 mb-2">Car Price Predictor</h2>
          <p className="text-gray-400 text-sm">Enter your car details to get an estimated resale price.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="number"
            name="year"
            placeholder="Year"
            value={form.year}
            onChange={handleChange}
            required
            className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-lg placeholder-gray-400"
          />

          <input
            type="number"
            name="km_driven"
            placeholder="KM Driven (in thousands)"
            value={form.km_driven}
            onChange={handleChange}
            required
            className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-lg placeholder-gray-400"
          />

          <select name="fuel" value={form.fuel} onChange={handleChange} required
            className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-lg appearance-none">
            <option value="">Select Fuel Type</option>
            {fuelOptions.map((label, i) => (
              <option key={i} value={i} className="bg-slate-800 text-white">{label}</option>
            ))}
          </select>

          <select name="seller_type" value={form.seller_type} onChange={handleChange} required
            className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-lg appearance-none">
            <option value="">Select Seller Type</option>
            {sellerOptions.map((label, i) => (
              <option key={i} value={i} className="bg-slate-800 text-white">{label}</option>
            ))}
          </select>

          <select name="transmission" value={form.transmission} onChange={handleChange} required
            className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-lg appearance-none">
            <option value="">Select Transmission</option>
            {transmissionOptions.map((label, i) => (
              <option key={i} value={i} className="bg-slate-800 text-white">{label}</option>
            ))}
          </select>

          <select name="owner" value={form.owner} onChange={handleChange} required
            className="bg-white/10 text-white border border-white/20 px-4 py-2 rounded-lg appearance-none">
            <option value="">Select Owner Type</option>
            {ownerOptions.map((label, i) => (
              <option key={i} value={i} className="bg-slate-800 text-white">{label}</option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-xl text-white font-semibold transition"
          >
            {loading ? "Predicting..." : "Predict Price"}
          </button>
        </form>

        {result && (
          <p className="mt-6 text-green-400 text-center text-xl">
            🚘 Predicted Price: ₹ {result}
          </p>
        )}
        {error && (
          <p className="mt-4 text-red-400 text-center">{error}</p>
        )}
      </div>
    </div>
  );
};

export default CarPrice;
