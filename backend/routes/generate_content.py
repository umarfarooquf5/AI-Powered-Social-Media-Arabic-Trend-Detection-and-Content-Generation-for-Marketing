from flask import Blueprint, request, jsonify
from models.aragpt2_model import AIContentGenerator

# Initialize the AI model
ai_model = AIContentGenerator()

# Create Flask Blueprint
generate_content_bp = Blueprint("generate_content", __name__)

@generate_content_bp.route("/generate", methods=["POST"])
def generate_content():
    try:
        # Extracting data from the request
        data = request.json
        trend = data.get("trend", "")
        category = data.get("category", "")
        dialects = data.get("dialects", [])
        content_type = data.get("contentType", "Article")
        age_groups = data.get("ageGroups", [])

        # Validate required fields
        if not trend or not category:
            return jsonify({"error": "Missing required fields"}), 400

        # Generate the prompt
        prompt = (
            f"Write a detailed {content_type.lower()} about the trend '{trend}' in the category '{category}'. "
            f"Use the dialect(s) {', '.join(dialects)}, and target the age group(s) {', '.join(age_groups)}. "
            f"Make the content engaging, informative, and include at least 3 paragraphs."
        )

        # Generate content using the AI model
        generated_content = ai_model.generate_content(prompt, max_length=1000)

        if "Failed" in generated_content:
            raise ValueError("Content generation failed.")

        # Return the generated content
        return jsonify({"generatedContent": generated_content})
    except Exception as e:
        print("Error during content generation:", e)
        return jsonify({"error": "Failed to generate content."}), 500
