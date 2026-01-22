# 🖼️ WordPress Alt Text Generator

Automatically generate alt text for **thousands of WordPress images** — hands free.

This project uses:

* 🐍 **Python** (AI image captioning server)
* 🌐 **JavaScript** (runs in the browser console)
* 🧩 **Chrome extension** (local CORS bypass)

⏱️ Huge time saver for large media libraries.

---

## ⚠️ Platform Support

> **Windows only**

---

## 📦 Requirements

* Windows
* Python 3.9+
* pip
* Google Chrome (recommended)

---

## ✅ Step 1 — Check Python Installation

Open **Windows PowerShell**

<img src="image.png" width="600" />

If you see a terminal like this — perfect:

<img src="image-1.png" width="600" />

Type:

```bash
python
```

<img src="image-2.png" width="600" />

Press Enter.

<img src="image-3.png" width="600" />

If Python opens, you’re good.

Now test pip:

```bash
pip
```

<img src="image-4.png" width="600" />

If commands appear with no errors — continue.

---

## 🐍 Installing Python (if missing)

Download Python for Windows:

👉 [https://www.python.org/downloads/windows/](https://www.python.org/downloads/windows/)

<img src="image-5.png" width="600" />

Select:

> **Download Windows installer (64-bit)**

<img src="image-6.png" width="600" />

Run the installer:

<img src="image-7.png" width="600" />

<img src="image-8.png" width="600" />

### ❗ Important

✅ **Check “Add Python to PATH”**

<img src="image-9.png" width="600" />

Then click **Install Now**.

After installation, open a new terminal and verify:

```bash
python
```

---

## 📥 Install pip (if needed)

Run:

```bash
python -m ensurepip --upgrade
```

<img src="image-10.png" width="600" />

No errors = success.

---

## 📂 Download the Project

At the top of the repository:

<img src="image-11.png" width="600" />

Click **Code → Local → Download ZIP**

<img src="image-12.png" width="600" />

<img src="image-13.png" width="600" />

Extract the ZIP:

<img src="image-14.png" width="600" />

Open:

```
Wordpress-alt-text-generator/
└── scripts/
```

<img src="image-15.png" width="600" />
<img src="image-16.png" width="600" />

If you see these two files — you're golden:

<img src="image-17.png" width="600" />

* `main.py` → AI caption server
* `script.js` → Browser automation

---

## 🧪 Install Python Dependencies

Right‑click the **scripts** folder → **Open in Terminal**

<img src="image-18.png" width="600" />
<img src="image-19.png" width="600" />
<img src="image-20.png" width="600" />

Run:

```bash
pip install flask requests jsonify pillow transformers
python -m pip install flask
```

<img src="image-22.png" width="600" />
<img src="image-25.png" width="600" />

---

## ▶️ Start the AI Server

```bash
python main.py
```

<img src="image-21.png" width="600" />

Model download will begin automatically.

When finished:

<img src="image-24.png" width="600" />

✅ **Leave this running in the background.**

---

# 🌐 WordPress Setup

## Open Media Library

<img src="image-26.png" width="600" />

Go to:

**Media → Library**

<img src="image-27.png" width="600" />

### Filter images only

<img src="image-28.png" width="600" />
<img src="image-29.png" width="600" />

### Load all images

Scroll down and keep clicking:

<img src="image-30.png" width="600" />

⚠️ This step is required.

When done:

<img src="image-31.png" width="600" />

---

## 🧰 Open Developer Console

Press:

```
Ctrl + Shift + I
```

<img src="image-32.png" width="600" />

Use **Chrome** (strongly recommended).

---

## 🔓 Install CORS Extension

Required for local server access.

👉 [https://chromewebstore.google.com/detail/cors-unblock/hadoojkfknbjgoppkecpgamiajljiief](https://chromewebstore.google.com/detail/cors-unblock/hadoojkfknbjgoppkecpgamiajljiief)

<img src="image-33.png" width="600" />

Enable it:

<img src="image-34.png" width="600" />
<img src="image-35.png" width="600" />

---

## 📜 JavaScript Setup

Open `script.js`

<img src="image-36.png" width="600" />
<img src="image-37.png" width="600" />

### Copy & paste into WordPress console:

1️⃣ First function

<img src="image-38.png" width="600" />
<img src="image-39.png" width="600" />

Press Enter.

2️⃣ Second function

<img src="image-40.png" width="600" />
<img src="image-41.png" width="600" />

Press Enter.

---

## ✨ Run the Generator

Click the **first image** in the media library:

<img src="image-42.png" width="600" />

You should see:

<img src="image-43.png" width="600" />

Required elements:

* Image URL
* Alt text field
* ➡️ Right arrow button

<img src="image-44.png" width="600" />

### Behavior

* Empty alt text → generates description
* Existing alt text → skipped
* Broken images → skipped
* Automatically advances using right arrow

When finished, the arrow will grey out.

---

## ▶️ Start

```js
runCaptioningLoop()
```

<img src="image-45.png" width="600" />

## ⏹ Stop

```js
stopCaptioning = true;
```

<img src="image-46.png" width="600" />

---

## 🎉 Done!

Keep the WordPress tab open and the Python server running.

Alt text will be generated automatically — fast and accurate.

Have fun 🚀
