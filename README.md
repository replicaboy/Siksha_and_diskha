# Siksha And Diksha Classes - Coaching Center Website

A modern, fully-responsive website for Siksha And Diksha Classes coaching center in Banuali, Darbhanga, Bihar.

## 🌟 Features

- **11 Complete Pages**: Home, About, Courses (Overview + 4 detailed course pages), Gallery, Testimonials, Admissions, Contact
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Contact Form**: With MongoDB backend for storing inquiries
- **Multiple Contact Methods**: WhatsApp, Phone, Email, Contact Form
- **Modern Tech Stack**: Next.js 14, TypeScript, Tailwind CSS, MongoDB

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/replicaboy/Siksha_and_diskha.git
cd Siksha_and_diskha
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Then edit `.env.local` and add your actual values:

```env
MONGODB_URI=your_mongodb_connection_string_here
NEXT_PUBLIC_WHATSAPP_NUMBER=919XXXXXXXXX
```

**How to get MongoDB URI:**
1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string and replace `<username>`, `<password>`, and `<dbname>` with your values

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deploy to Vercel

The easiest way to deploy:

1. Push your code to GitHub (already done!)
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables in Vercel dashboard:
   - `MONGODB_URI`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER`
5. Deploy!

## 📁 Project Structure

```
Siksha_and_diskha/
├── src/
│   ├── app/                    # Next.js 14 App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── about/             # About page
│   │   ├── admissions/        # Admissions page
│   │   ├── contact/           # Contact page
│   │   ├── courses/           # All course pages
│   │   ├── gallery/           # Gallery page
│   │   ├── testimonials/      # Testimonials page
│   │   └── api/contact/       # Contact form API endpoint
│   ├── components/            # Reusable React components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── WhatsAppButton.tsx
│   │   └── ContactForm.tsx
│   ├── lib/                   # Utility functions
│   │   └── mongodb.ts         # MongoDB connection
│   └── models/                # Database models
│       └── Inquiry.ts         # Contact form schema
├── public/                    # Static assets
├── .env.local                 # Environment variables (create this, not in git)
└── .env.example               # Environment variables template
```

## 🎨 Customization

### Update Contact Information

Edit these files:
- **Phone/Email/Address**: `src/components/Footer.tsx` and `src/app/contact/page.tsx`
- **WhatsApp Number**: `.env.local` file

### Replace Placeholder Images

- Gallery images are in `src/app/gallery/page.tsx` (currently using Unsplash)
- Replace with your own images in `public/images/` folder

### Update Course Content

Edit the course pages in `src/app/courses/`:
- `academic/page.tsx`
- `english/page.tsx`
- `spoken-english/page.tsx`
- `polytechnic/page.tsx`

### Modify Testimonials

Edit `src/app/testimonials/page.tsx` and replace placeholder testimonials with real ones.

## 📱 Pages Included

1. **Homepage** (`/`) - Hero section, features, course overview
2. **About** (`/about`) - Vision, mission, what makes us special
3. **Courses Overview** (`/courses`) - All courses with detailed cards
4. **Academic Classes** (`/courses/academic`) - Classes 1-10, all boards
5. **English Courses** (`/courses/english`) - Up to 12th standard
6. **Spoken English** (`/courses/spoken-english`) - Communication skills
7. **Polytechnic** (`/courses/polytechnic`) - Technical education
8. **Gallery** (`/gallery`) - Photos (placeholder images)
9. **Testimonials** (`/testimonials`) - Student & parent reviews
10. **Admissions** (`/admissions`) - Enrollment process, FAQs
11. **Contact** (`/contact`) - Contact form, address, office hours

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: MongoDB with Mongoose
- **Deployment**: Vercel (recommended)

## 📝 Contact Form

Contact form submissions are stored in MongoDB with the following fields:
- Name, Email, Phone, Course Interest, Message
- Submission timestamp and status
- IP address (optional)

View submissions directly in MongoDB Atlas dashboard.

## 🔒 Security

- Environment variables are not committed to git
- Server-side validation on contact form
- MongoDB connection uses secure connection string
- HTTPS enforced on deployment

## 📞 Support

For issues or questions:
- Location: Banuali, Darbhanga, Bihar - 847428

## 📄 License

All rights reserved - Siksha And Diksha Classes

---

Built with ❤️ for quality education