from pymongo import MongoClient

def get_database():
    # Set your MongoDB connection string
    CONNECTION_STRING = "mongodb://localhost:27017/trend_database"
    client = MongoClient(CONNECTION_STRING)
    return client.get_database("trend_database")
