from transformers import pipeline

class AIContentGenerator:
    def __init__(self):
        try:
            print("Loading AraGPT2 model...")
            # Load the AraGPT2 model pipeline
            self.generator = pipeline(
                'text-generation', 
                model='aubmindlab/aragpt2-base', 
                device=-1  # Use CPU
            )
            print("Model loaded successfully.")
        except Exception as e:
            print("Error loading model:", e)
            self.generator = None

    def generate_content(self, prompt, max_length=1000):
        # Check if the model is loaded successfully
        if not self.generator:
            return "Model not loaded. Unable to generate content."

        try:
            print("Generating content for prompt:", prompt)
            # Generate content using the prompt
            result = self.generator(prompt, max_length=max_length, num_return_sequences=1)
            generated_text = result[0]['generated_text']
            print("Generated content:", generated_text)
            return generated_text
        except Exception as e:
            print("Error during content generation:", e)
            return "Failed to generate content."

# Example usage (for testing)
if __name__ == "__main__":
    generator = AIContentGenerator()
    test_prompt = "Write a blog about the trend '#SaudiTrend3' in the category 'Fashion'. Make it engaging and informative."
    print(generator.generate_content(test_prompt, max_length=500))
