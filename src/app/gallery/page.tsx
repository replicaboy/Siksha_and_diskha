import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Gallery - Siksha And Diksha Classes',
  description: 'View photos of our facilities, classrooms, students, and events at Siksha And Diksha Classes, Banuali, Darbhanga.',
};

export default function GalleryPage() {
  // Placeholder images from Unsplash - can be replaced with actual photos
  const galleryImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600', caption: 'Classroom Learning' },
    { id: 2, url: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600', caption: 'Interactive Sessions' },
    { id: 3, url: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600', caption: 'Student Studying' },
    { id: 4, url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600', caption: 'Group Discussion' },
    { id: 5, url: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600', caption: 'Collaborative Learning' },
    { id: 6, url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600', caption: 'Lecture Session' },
    { id: 7, url: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=600', caption: 'Library Resources' },
    { id: 8, url: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600', caption: 'Study Materials' },
    { id: 9, url: 'https://images.unsplash.com/photo-1509869175650-a1d97972541a?w=600', caption: 'Achievement Celebration' },
    { id: 10, url: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=600', caption: 'Students Learning' },
    { id: 11, url: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=600', caption: 'Classroom Environment' },
    { id: 12, url: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600', caption: 'Note Taking' },
  ];

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-blue-100">
            A Glimpse of Siksha And Diksha Classes
          </p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer bg-gray-100"
              >
                <div className="aspect-w-4 aspect-h-3 relative h-64">
                  <Image
                    src={image.url}
                    alt={image.caption}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white font-semibold p-4 w-full">{image.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              These are placeholder images. Actual photos of our facilities, classrooms, students, and events can be added here.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
