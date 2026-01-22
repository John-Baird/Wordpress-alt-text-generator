async function captionCurrentImage() {
    const img = document.getElementsByClassName("details-image")[0];
    const captionDiv = document.querySelector(
        "textarea#attachment-details-two-column-alt-text"
    );
    const nextButton = document.querySelector("button.right");

    if ( img.width < 12 || img.height < 12) {
        console.log("image is too small")
        captionDiv.value = "blank"
        nextButton.click();
        return;
    }

    if (!img || !captionDiv) return;

    const img_src = img.src;

    // Skip if already captioned
    if (captionDiv.value.trim().length > 0) {
        nextButton.click();
        return;
    }

    const response = await fetch("http://127.0.0.1:5000/caption", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ img_src })
    });

    const data = await response.json();

    captionDiv.value = data.caption;

    // Trigger change event if needed
    captionDiv.dispatchEvent(new Event("input", { bubbles: true }));

    // Move to next image
    setTimeout(() => nextButton.click(), 500);
}


/*
let stopCaptioning = false;

async function runCaptioningLoop(delay = 2000) {
    stopCaptioning = false;
    console.log("Captioning started")
    while (!stopCaptioning) {
        await captionCurrentImage();
        await new Promise(r => setTimeout(r, delay));
    }

    console.log("Captioning stopped");
}
runCaptioningLoop()



stopCaptioning = true;
*/ 
