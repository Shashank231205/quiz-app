from flask import Flask, render_template, request, jsonify
import csv
import os

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/save_score", methods=["POST"])
def save_score():
    data = request.get_json()
    print("📥 Received from frontend:", data)   # Debug log

    # Ensure scores.csv exists and append data
    file_exists = os.path.isfile("scores.csv")
    with open("scores.csv", "a", newline="") as f:
        writer = csv.writer(f)
        if not file_exists:
            writer.writerow(["Name", "Score", "Total"])
        writer.writerow([data["name"], data["score"], data["total"]])

    return jsonify({"status": "success", "message": "Score saved!"})

if __name__ == "__main__":
    app.run(debug=True)
