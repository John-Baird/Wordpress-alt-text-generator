from flask import Flask, request, jsonify
import requests
from PIL import Image
from transformers import BlipProcessor, BlipForConditionalGeneration

app = Flask(__name__)

processor = BlipProcessor.from_pretrained(
    "Salesforce/blip-image-captioning-large"
)
model = BlipForConditionalGeneration.from_pretrained(
    "Salesforce/blip-image-captioning-large"
)

@app.route("/caption", methods=["POST"])
def caption_image():
    data = request.json
    img_url = data.get("img_src")

    raw_image = Image.open(
        requests.get(img_url, stream=True).raw
    ).convert("RGB")

    inputs = processor(raw_image, "an image of a", return_tensors="pt")
    out = model.generate(**inputs)
    caption = processor.decode(out[0], skip_special_tokens=True)

    return jsonify({"caption": caption})

if __name__ == "__main__":
    app.run(port=5000)


