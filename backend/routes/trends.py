from flask import Blueprint, jsonify

trends_bp = Blueprint('trends', __name__)

@trends_bp.route('/trends', methods=['GET'])
def get_trends():
    try:
        # Dummy trends for debugging
        trends = [
            {"category": "Saudi Arabia", "trends": ["#SaudiTrend1", "#SaudiTrend2", "#SaudiTrend3"]}
        ]
        return jsonify(trends)
    except Exception as e:
        print("Error fetching trends:", e)
        return jsonify({'error': str(e)}), 500
