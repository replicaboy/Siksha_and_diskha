import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Academic Classes (Nursery-10) - Siksha And Diksha Classes',
  description: 'Comprehensive coaching for Classes Nursery-10 covering all subjects for CBSE, ICSE, and Bihar Board at Siksha And Diksha Classes, Banuali, Darbhanga.',
};

export default function AcademicCoursePage() {
  return (
    <>
      {/* Breadcrumb & Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/courses" className="hover:underline">Courses</Link>
            <span className="mx-2">›</span>
            <span>Academic Classes</span>
          </nav>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Academic Classes (Nursery-10)</h1>
              <p className="text-xl text-blue-100">Comprehensive Subject Coaching for All Major Boards</p>
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
              Our Academic Classes program provides comprehensive coaching for students from Class Nursery to Class 10, covering all subjects across multiple educational boards. We understand that these foundational years are crucial for building strong academic fundamentals and developing a genuine interest in learning.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              Our experienced faculty members use proven teaching methodologies that make complex concepts easy to understand. We focus not just on rote learning, but on developing critical thinking skills and deep conceptual understanding that prepares students for success in board examinations and beyond.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              Each batch is carefully structured with limited students to ensure personalized attention. Regular assessments, doubt-clearing sessions, and parent-teacher meetings are integral parts of our program, ensuring that every student progresses at their optimal pace.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
              <p className="font-semibold text-blue-900 text-lg">
                Classes Covered: Nursery, L.K.G., U.K.G., 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Boards Covered */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Boards We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">CBSE</h3>
              <p className="text-gray-600">
                Central Board of Secondary Education - Complete syllabus coverage with NCERT-based teaching and regular practice
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">ICSE</h3>
              <p className="text-gray-600">
                Indian Certificate of Secondary Education - Comprehensive coaching aligned with ICSE curriculum and examination patterns
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-4">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Bihar Board</h3>
              <p className="text-gray-600">
                Bihar School Examination Board - Tailored coaching following Bihar Board syllabus with focus on state examination requirements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Offered */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Subjects</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: 'Mathematics', icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
              { name: 'Science', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
              { name: 'English', icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
              { name: 'Hindi', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
              { name: 'Social Studies', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { name: 'History', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
              { name: 'Geography', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
              { name: 'Civics', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' },
            ].map((subject) => (
              <div key={subject.name} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={subject.icon} />
                  </svg>
                </div>
                <span className="font-semibold text-gray-900">{subject.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">Course Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Experienced Faculty', desc: 'Subject specialists with years of teaching experience and proven track records' },
              { title: 'Regular Tests', desc: 'Weekly and monthly assessments to track progress and prepare for exams' },
              { title: 'Doubt Clearing', desc: 'Dedicated sessions to resolve all student queries and ensure complete understanding' },
              { title: 'Study Materials', desc: 'Comprehensive notes, worksheets, and practice papers provided' },
              { title: 'Parent Meetings', desc: 'Regular interaction with parents to discuss student progress and performance' },
              { title: 'Small Batches', desc: 'Limited students per batch ensuring personalized attention to each student' },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <svg className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule & Batch Info */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Schedule & Batches</h2>
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <p className="text-gray-700 mb-4 text-lg">
              We offer morning and evening batches to accommodate different schedules. Our flexible timing options ensure that every student can find a convenient slot.
            </p>
            <p className="text-gray-700 mb-4 text-lg">
              Small batch sizes guarantee personalized attention and effective learning environment for all students.
            </p>
            <p className="text-blue-600 font-semibold text-lg">
              Contact us for detailed schedule and batch timings specific to your class and board
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Inquire Now
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Enroll in Academic Classes</h2>
          <p className="text-xl mb-8 text-blue-100">
            Give your child the foundation for academic excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
