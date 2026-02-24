# Vandana Childcare Trust — Website

Official website for **Vandana Childcare Trust**, a non-profit in Prayagraj (Allahabad), Uttar Pradesh.

---

## Run locally

From the repo root (`Vandana-Chilcare-Trust-Website`):

```bash
cd Vandana-Chilcare-Trust-Website
npm install
npm run dev
```

Then open **http://localhost:3000** in your browser.

### Add photos to “Our Moments” (gallery)

1. **Put all 9 screenshot PNG files** into the `screenshots/` folder (same names as from Instagram/screen capture).
2. Run:

```bash
node scripts/copy-gallery.js
```

This copies them into `public/gallery/` so the website shows your photos instead of the logo.  
Alternatively, you can place the screenshots in the **parent folder** (vandana-childcare-trust-website); the script checks both locations.

---

## Build (for production / Netlify)

```bash
npm run build
```

Static files are generated in the **`out`** folder.

---

## Deploy on Netlify

### 1. Push this repo to GitHub

From the repo root:

```bash
cd Vandana-Chilcare-Trust-Website
git add .
git status
git commit -m "Add Vandana Childcare Trust website (Next.js, Tailwind)"
git push -u origin main
```

### 2. Connect to Netlify

1. Go to **[netlify.com](https://netlify.com)** and sign in (e.g. with GitHub).
2. Click **Add new site** → **Import an existing project**.
3. Choose **GitHub** and select the repo **`Aryamaan23/Vandana-Chilcare-Trust-Website`** (or your fork).
4. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
   - **Base directory:** leave empty (or `Vandana-Chilcare-Trust-Website` if Netlify is using the parent repo).
5. Click **Deploy site**.

Netlify will run `npm install` and `npm run build`, then serve the contents of **`out`**. Your site will get a URL like `https://something.netlify.app`.

### 3. (Optional) Custom domain

In Netlify: **Site settings** → **Domain management** → **Add custom domain**.

---

**Contact:** 1A/2B, Minto Road, Prayagraj (Allahabad), UP 211001  
**Web:** [vandanachildcaretrust.substack.com](https://vandanachildcaretrust.substack.com)  
**Instagram:** [@vandana_childcare_trust](https://instagram.com/vandana_childcare_trust)
