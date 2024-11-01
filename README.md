# LiveDiaries

LiveDiaries is a digital diary and book management application built with Next.js and TypeScript. It allows users to browse, search, and mark favorite books while providing a platform for personal diary entries.

Visit the page here:

https://live-diaries.netlify.app/
## 📚 Project Overview

LiveDiaries offers the following features:
- A welcoming home screen
- Searchable book list
- Favorite book marking
- Diary entry capabilities

## 🛠 Tech Stack

- Next.js 13+ (App Router)
- TypeScript
- Tailwind CSS
- React

## 📁 Project Structure (Current)
```
LIVEDIARIES/
│
├── .next/
├── node_modules/
├── public/
├── src/
│   └── app/
│       ├── about/
│       │   └── page.tsx
│       ├── api/
│       │   └── waitlist/
│       │       └── route.ts
│       ├── contact/
│       │   └── page.tsx
│       ├── download/
│       │   └── page.tsx
│       ├── fonts/
│       ├── components/
│       │   ├── DarkModeToggle.tsx
│       │   ├── Footer.tsx
│       │   ├── Navbar.tsx
│       │   └── PageTransition.tsx
│       ├── utils/
│       │   └── googlesheets.ts
│       ├── favicon.ico
│       ├── globals.css
│       ├── layout.tsx
│       ├── page.module.css
│       └── page.tsx
│
├── .env.local
├── .eslintrc.json
├── .gitattributes
├── .gitignore
├── LICENSE
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
└── tsconfig.json
```
## 🚀 Getting Started

1. Clone the repository:
git clone <https://github.com/OkeahDavid/LiveDiaries.git>
cd LiveDiaries

2. Install dependencies:
npm install

3. Run the development server:
npm run dev

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📝 Key Components

- `src/app/page.tsx`: Main landing page component
- `src/app/layout.tsx`: Root layout component
- `src/app/page.module.css`: Styles for the landing page
- `src/app/globals.css`: Global styles

## 🎨 Styling

The project uses a combination of CSS Modules (`page.module.css`) and Tailwind CSS for styling. Global styles are defined in `globals.css`.

## 🔧 Configuration

- Next.js configuration: `next.config.mjs`
- TypeScript configuration: `tsconfig.json`
- Tailwind CSS configuration: `tailwind.config.ts`
- PostCSS configuration: `postcss.config.js`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
