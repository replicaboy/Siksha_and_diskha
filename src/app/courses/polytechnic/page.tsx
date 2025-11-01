import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Polytechnic Courses - Siksha And Diksha Classes',
  description: 'Technical education and polytechnic entrance preparation at Siksha And Diksha Classes, Banuali, Darbhanga. Launch your technical career with expert coaching.',
};

export default function PolytechnicPage() {
  return (
    <>
      {/* Breadcrumb & Hero */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/courses" className="hover:underline">Courses</Link>
            <span className="mx-2">›</span>
            <span>Polytechnic</span>
          </nav>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Polytechnic Courses</h1>
              <p className="text-xl text-orange-100">Technical Education & Career Preparation</p>
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
              Our Polytechnic course provides comprehensive preparation for polytechnic entrance examinations, helping students launch successful careers in technical fields. We cover all essential subjects required for polytechnic entrance exams with a focus on conceptual clarity and problem-solving skills.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              The program includes rigorous training in Mathematics, Physics, Chemistry, General Knowledge, and Reasoning & Aptitude. Our experienced faculty uses a structured approach combining theory, practice, and regular testing to ensure thorough preparation.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              Beyond exam preparation, we also provide career guidance to help students understand various technical career paths and make informed decisions about their future in technical education.
            </p>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Course Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Mathematics', desc: 'Algebra, geometry, trigonometry, calculus, and problem-solving techniques', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
              { title: 'Physics', desc: 'Mechanics, electricity, magnetism, optics, and modern physics concepts', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { title: 'Chemistry', desc: 'Physical, organic, and inorganic chemistry fundamentals and applications', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
              { title: 'General Knowledge', desc: 'Current affairs, general awareness, and important facts for entrance exams', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { title: 'Reasoning & Aptitude', desc: 'Logical reasoning, analytical ability, and quantitative aptitude', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
              { title: 'Problem Solving', desc: 'Techniques and strategies for solving entrance exam problems efficiently', icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4' },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 text-orange-600 rounded-lg mb-4">
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
              'Entrance exam focused coaching',
              'Regular practice tests and mock exams',
              'Comprehensive study materials provided',
              'Previous year question paper analysis',
              'Career counseling and guidance',
              'Small batches for personalized attention',
            ].map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <svg className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700 text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900">Why Choose Polytechnic</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Polytechnic education opens doors to numerous career opportunities in technical fields. It provides practical, hands-on training in engineering and technology, preparing students for immediate employment or further studies.
            </p>
            <h3 className="text-xl font-bold mb-4 text-gray-900">Career Prospects:</h3>
            <ul className="space-y-3">
              {[
                'Direct employment in industries and manufacturing sectors',
                'Technical roles in government and private organizations',
                'Foundation for engineering degree (B.Tech through lateral entry)',
                'Entrepreneurship opportunities in technical fields',
                'Skill development for emerging technologies',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Launch Your Technical Career</h2>
          <p className="text-xl mb-8 text-orange-100">
            Prepare for polytechnic entrance exams with expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors border-2 border-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
