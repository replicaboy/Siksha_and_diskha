import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Testimonials - Siksha And Diksha Classes',
  description: 'Read reviews and testimonials from students and parents at Siksha And Diksha Classes, Banuali, Darbhanga.',
};

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Kumari',
      role: 'Class 10 Graduate',
      rating: 5,
      text: 'Best coaching center in Darbhanga. The teachers are very supportive and caring. Individual attention and excellent study materials helped me score 95% in board exams.',
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      role: 'Parent of Class 8 Student',
      rating: 5,
      text: "My son&apos;s grades improved significantly after joining Siksha And Diksha Classes. The teachers are very supportive and caring. We are very satisfied with the personalized attention.",
    },
    {
      id: 3,
      name: 'Rahul Singh',
      role: 'Spoken English Student',
      rating: 5,
      text: 'The spoken English course helped me gain confidence. I can now communicate fluently! The interactive sessions and practical exercises made learning enjoyable.',
    },
    {
      id: 4,
      name: 'Sunita Devi',
      role: 'Parent of Class 7 Student',
      rating: 5,
      text: 'The faculty is highly experienced and always ready to help with doubts. Regular parent-teacher meetings keep us informed about our child&apos;s progress. Highly recommend!',
    },
    {
      id: 5,
      name: 'Amit Kumar',
      role: 'Polytechnic Course Student',
      rating: 5,
      text: 'I cleared my polytechnic entrance exam thanks to the coaching here! The mock tests and practice papers were very helpful. Great teaching methodology.',
    },
    {
      id: 6,
      name: 'Meena Sharma',
      role: 'Parent of Class 5 Student',
      rating: 5,
      text: 'A great learning environment with friendly teachers and good facilities. My daughter loves going to classes. The small batch size ensures every child gets attention.',
    },
    {
      id: 7,
      name: 'Vikash Jha',
      role: 'Class 9 Student',
      rating: 5,
      text: 'The study materials are comprehensive and well-organized. Teachers explain concepts very clearly. Regular tests help track my progress and improvement.',
    },
    {
      id: 8,
      name: 'Anita Singh',
      role: 'Parent of Class 10 Student',
      rating: 5,
      text: 'Excellent coaching for board exam preparation. Our daughter scored exceptionally well. The dedication of teachers is commendable. Thank you!',
    },
    {
      id: 9,
      name: 'Deepak Kumar',
      role: 'English Course Student',
      rating: 5,
      text: 'The English courses are very well structured. My vocabulary and writing skills have improved tremendously. Teachers provide detailed feedback on every assignment.',
    },
    {
      id: 10,
      name: 'Kavita Devi',
      role: 'Parent of Class 6 Student',
      rating: 5,
      text: 'Very professional and caring staff. The coaching center maintains good discipline while creating a friendly atmosphere. We are very happy with the results.',
    },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Testimonials</h1>
          <p className="text-xl text-blue-100">
            What Our Students and Parents Say
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                {/* Quote Icon */}
                <div className="text-blue-600 mb-4">
                  <svg
                    className="w-10 h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Author */}
                <div className="border-t border-gray-300 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add Your Review Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Share Your Experience
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            We'd love to hear from you! Share your experience with Siksha And Diksha Classes
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
