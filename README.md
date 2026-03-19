# 🌍 Does the Earth Dream? — Landing Page

A beautiful, dreamy Next.js landing page for the children's picture book *Does the Earth Dream?*

## ✨ Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** — Playfair Display, Nunito, Dancing Script

## 🎨 Color Theme

| Name       | Hex       |
|------------|-----------|
| Deep       | `#0f0c2e` |
| Navy       | `#1a1650` |
| Indigo     | `#2d2880` |
| Cobalt     | `#3d3aaa` |
| Violet     | `#6b5dd3` |
| Lavender   | `#9b8fe8` |
| Pink       | `#c084b0` |
| Star White | `#e8e4ff` |

## 📁 Folder Structure

```
does-the-earth-dream/
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles + CSS variables
│   │   ├── layout.tsx         # Root layout with metadata
│   │   └── page.tsx           # Main page (assembles all sections)
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx       # Hero section
│   │   │   ├── AboutBook.tsx  # Book description + features
│   │   │   ├── AboutAuthor.tsx# Author bio
│   │   │   ├── Blog.tsx       # Blog posts
│   │   │   ├── Newsletter.tsx # Email signup
│   │   │   └── Contact.tsx    # Contact form
│   │   └── ui/
│   │       ├── Navbar.tsx     # Sticky navigation
│   │       ├── Starfield.tsx  # Animated canvas starfield
│   │       └── Footer.tsx     # Footer
│   └── lib/
│       └── data.ts            # Types & dummy data
├── public/                    # Static assets (add book cover here)
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🎯 Sections

| Section     | ID             | Description                        |
|-------------|----------------|------------------------------------|
| Hero        | `#home`        | Full-screen hero with animated stars |
| About Book  | `#about-book`  | Book description + 6 feature cards |
| About Author| `#author`      | Author bio card                    |
| Blog        | `#blog`        | 3 dummy blog posts                 |
| Newsletter  | `#newsletter`  | Email subscription form            |
| Contact     | `#contact`     | Contact form + info panel          |

## 🛠 Customization

- Replace author name/bio in `AboutAuthor.tsx`
- Add real blog posts in `src/lib/data.ts`
- Connect newsletter form to Mailchimp/ConvertKit in `Newsletter.tsx`
- Connect contact form to EmailJS/Resend in `Contact.tsx`
- Add real book cover image in `public/` and use in `AboutBook.tsx`
