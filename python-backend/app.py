from flask import Flask, jsonify, request
from flask_cors import CORS
from dotenv import load_dotenv
import os
import resend


# ==========================================
# LOAD ENVIRONMENT VARIABLES
# ==========================================

load_dotenv()

EMAIL_USER = os.getenv("EMAIL_USER")
RESEND_API_KEY = os.getenv("RESEND_API_KEY")


# ==========================================
# RESEND CONFIGURATION
# ==========================================

resend.api_key = RESEND_API_KEY


# ==========================================
# FLASK APP
# ==========================================

app = Flask(__name__)


# ==========================================
# CORS
# ==========================================

CORS(
    app,
    resources={
        r"/api/*": {
            "origins": [
                "http://localhost:5173",
                "https://rohit-singh-portfolio-six.vercel.app"
            ]
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
        # CHECK RESEND API KEY
        # ==================================

        if not RESEND_API_KEY:

            print("RESEND_API_KEY is missing")

            return jsonify({
                "success": False,
                "message": "Email service is not configured"
            }), 500


        # ==================================
        # SEND EMAIL USING RESEND
        # ==================================

        params = {
            "from": "Rohit Singh <onboarding@resend.dev>",
            "to": [EMAIL_USER],
            "subject": f"New Portfolio Contact - {name}",
            "reply_to": email,
            "html": f"""
                <div style="font-family: Arial, sans-serif; line-height: 1.6;">

                    <h2>New message from your portfolio</h2>

                    <p>
                        <strong>Name:</strong> {name}
                    </p>

                    <p>
                        <strong>Email:</strong> {email}
                    </p>

                    <p>
                        <strong>Message:</strong>
                    </p>

                    <p>
                        {message}
                    </p>

                </div>
            """
        }

        response = resend.Emails.send(params)


        # ==================================
        # SUCCESS
        # ==================================

        print("Email sent successfully!")
        print("Resend response:", response)

        return jsonify({
            "success": True,
            "message": "Message sent successfully!"
        }), 200


    # ==================================
    # ERROR
    # ==================================

    except Exception as error:

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