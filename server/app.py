from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

# Load car model
car_model = joblib.load("car_model.pkl")

# Load gold model
gold_model = joblib.load("gold_model.pkl")

@app.route("/")
def home():
    return "🚀 Welcome to the Car & Gold Price Prediction API!"

@app.route("/predict-car-price", methods=["POST"])
def predict_car_price():
    data = request.get_json()
    try:
        year = int(data['year'])
        km_driven = float(data['km_driven'])
        fuel = int(data['fuel'])
        seller_type = int(data['seller_type'])
        transmission = int(data['transmission'])
        owner = int(data['owner'])

        features = np.array([[year, km_driven, fuel, seller_type, transmission, owner]])
        predicted_price = car_model.predict(features)[0]

        return jsonify({"predicted_price": round(predicted_price, 2)})
    except Exception as e:
        print(f"Prediction error: {e}")
        return jsonify({"error": str(e)}), 400

@app.route("/predict-gold-price", methods=["POST"])
def predict_gold_price():
    data = request.get_json()
    try:
        spx = float(data['spx'])
        uso = float(data['uso'])
        slv = float(data['slv'])
        eurusd = float(data['eurusd'])

        features = np.array([[spx, uso, slv, eurusd]])
        predicted_price = gold_model.predict(features)[0]

        return jsonify({"predicted_price": round(predicted_price, 2)})
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)
