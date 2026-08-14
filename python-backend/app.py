from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
import os
import smtplib
from email.message import EmailMessage


# ==========================================
# LOAD ENVIRONMENT VARIABLES
# ==========================================

load_dotenv()

EMAIL_USER = os.getenv("EMAIL_USER")
EMAIL_APP_PASSWORD = os.getenv("EMAIL_APP_PASSWORD")


# ==========================================
# FLASK APP
# ==========================================

app = Flask(__name__)

# Allow frontend / Vercel to access API
CORS(
    app,
    resources={
        r"/api/*": {
            "origins": "*"
        }
    }
)


# ==========================================
# HOME ROUTE
# ==========================================

@app.route("/", methods=["GET"])
def home():

    return jsonify({
        "success": True,
        "message": "Python Portfolio Backend is running!"
    })


# ==========================================
# CONTACT API
# ==========================================

@app.route("/api/contact", methods=["POST"])
def contact():

    try:

        data = request.get_json()

        name = data.get("name")
        email = data.get("email")
        message = data.get("message")

        # ==================================
        # VALIDATION
        # ==================================

        if not name or not email or not message:

            return jsonify({
                "success": False,
                "message": "Name, email and message are required"
            }), 400


        # ==================================
        # CREATE EMAIL
        # ==================================

        mail = EmailMessage()

        mail["Subject"] = f"New Portfolio Contact - {name}"
        mail["From"] = EMAIL_USER
        mail["To"] = EMAIL_USER
        mail["Reply-To"] = email

        mail.set_content(
            f"""
New message from your portfolio.

Name: {name}
Email: {email}

Message:
{message}
"""
        )


        # ==================================
        # SEND EMAIL
        # ==================================

        with smtplib.SMTP_SSL(
            "smtp.gmail.com",
            465
        ) as smtp:

            smtp.login(
                EMAIL_USER,
                EMAIL_APP_PASSWORD
            )

            smtp.send_message(mail)


        # ==================================
        # SUCCESS
        # ==================================

        return jsonify({
            "success": True,
            "message": "Message sent successfully!"
        }), 200


    except Exception as error:

        # Keep error only in backend logs
        print("Email Error:", error)

        return jsonify({
            "success": False,
            "message": "Unable to send message"
        }), 500


# ==========================================
# RUN SERVER
# ==========================================

if __name__ == "__main__":

    app.run(
        debug=True,
        port=5000
    )