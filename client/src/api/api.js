import axios from "axios";

const BASE_URL = "https://prise.onrender.com"; // Flask backend

export const predictCarPrice = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/predict-car-price`, formData);
    return response.data.predicted_price;
  } catch (err) {
    throw err.response?.data?.error || "Something went wrong";
  }
};

export const predictGoldPrice = async (formData) => {
  try {
    const response = await axios.post(`${BASE_URL}/predict-gold-price`, formData);
    return response.data.predicted_price;
  } catch (err) {
    throw err.response?.data?.error || "Something went wrong";
  }
};
