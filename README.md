# 📖 Folio — Reading Companion PWA

Your personal reading companion for web novels, light novels, and original fiction.
Works offline. Installs to your home screen. Remembers where you left off.

---

## 🚀 Deploy to GitHub Pages (10 minutes)

### Step 1 — Create a GitHub account
Go to [github.com](https://github.com) and sign up for free if you don't have one.

### Step 2 — Create a new repository
1. Click the **+** icon (top right) → **New repository**
2. Name it: `folio-app`
3. Set it to **Public**
4. Leave everything else default
5. Click **Create repository**

### Step 3 — Upload your files
1. On your new repo page, click **uploading an existing file** (or drag-and-drop)
2. Upload all 4 files at once:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
3. Scroll down, click **Commit changes**

### Step 4 — Enable GitHub Pages
1. Go to your repo **Settings** tab
2. Click **Pages** in the left sidebar
3. Under "Source", select **Deploy from a branch**
4. Set Branch to **main** and folder to **/ (root)**
5. Click **Save**
6. Wait ~60 seconds, then your URL appears at the top: `https://YOURNAME.github.io/folio-app`

### Step 5 — Install on iPhone
1. Open the URL in **Safari** (must be Safari, not Chrome, for iOS install)
2. Tap the **Share** button ↑ at the bottom of Safari
3. Scroll down and tap **Add to Home Screen**
4. Tap **Add**
5. Folio appears on your home screen like a native app ✓

---

## ✨ Features
- 📖 **Read** — comfortable reading mode with adjustable font size and line height
- 🔊 **Read Aloud** — full TTS player with speed, pitch, and voice controls
- ✦ **AI Summary** — Quick Overview or Deep Analysis powered by Claude
- 📝 **Notes** — per-chapter notes saved alongside your reading
- 📊 **Progress tracking** — chapter completion bars across your library
- ↓ **Export** — download your summaries and notes as HTML or Markdown
- 💾 **Resume** — reopens exactly where you left off, every time

## 🔒 Privacy
All your data (books, chapters, notes) stays on your device in localStorage.
AI summaries require an internet connection when generated.
Nothing is sent to any server except the Anthropic API for summaries.

---

## 🔄 Updating the App
When you get an updated version of the files:
1. Go to your GitHub repo
2. Click on `index.html` → click the pencil edit icon → paste new content → commit
3. The service worker will automatically pick up the new version on next load
