import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spoken English Course - Siksha And Diksha Classes',
  description: 'Build confidence in English communication with our interactive Spoken English course at Siksha And Diksha Classes, Banuali, Darbhanga.',
};

export default function SpokenEnglishPage() {
  return (
    <>
      {/* Breadcrumb & Hero */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/courses" className="hover:underline">Courses</Link>
            <span className="mx-2">›</span>
            <span>Spoken English</span>
          </nav>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Spoken English</h1>
              <p className="text-xl text-purple-100">Build Confidence in Communication</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">About This Course</h2>
          <div className="prose max-w-none">
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              Our Spoken English course is designed to help you communicate confidently and fluently in English. Whether you&apos;re a student, a professional, or someone looking to improve their English speaking skills, this course provides practical training in conversational English.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              We focus on building fluency, improving pronunciation and accent, expanding practical vocabulary, developing confidence in speaking, and mastering grammar for everyday conversation. Our interactive approach ensures that you get ample practice in real-world scenarios.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              Through group discussions, role-plays, presentations, and one-on-one practice sessions, you&apos;ll develop the skills needed to communicate effectively in English in any situation.
            </p>
          </div>
        </div>
      </section>

      {/* Course Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Course Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Daily Conversation Practice', desc: 'Regular speaking exercises on everyday topics to build fluency', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
              { title: 'Pronunciation & Accent', desc: 'Focus on correct pronunciation, intonation, and accent improvement', icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z' },
              { title: 'Practical Vocabulary', desc: 'Learn words and phrases used in real-world situations', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
              { title: 'Public Speaking Basics', desc: 'Develop skills to speak confidently in front of an audience', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
              { title: 'Grammar for Speaking', desc: 'Practical grammar rules that improve spoken communication', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
              { title: 'Confidence Building', desc: 'Activities and exercises designed to boost speaking confidence', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100 text-purple-600 rounded-lg mb-4">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Interactive and engaging sessions',
              'Group discussions and activities',
              'One-on-one speaking practice',
              'Real-world scenarios and role-plays',
              'Regular speaking assessments',
              'Small batches for maximum participation',
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <svg className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Enroll */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">Who Should Enroll</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gray-700 text-lg">Students wanting to improve their spoken English skills</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gray-700 text-lg">Professionals preparing for interviews and workplace communication</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-gray-700 text-lg">Anyone looking to communicate confidently in English</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Speaking English Confidently</h2>
          <p className="text-xl mb-8 text-purple-100">
            Transform your communication skills with our practical spoken English program
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Join Now
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-800 transition-colors border-2 border-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
