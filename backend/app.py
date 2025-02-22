from flask import Flask
from flask_cors import CORS
from routes.generate_content import generate_content_bp

app = Flask(__name__)
CORS(app)

# Register the generate_content blueprint
app.register_blueprint(generate_content_bp, url_prefix="/api")

if __name__ == "__main__":
    app.run(debug=True)
