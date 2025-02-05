import { motion } from "framer-motion";
import { Search, Filter, Star, Instagram, TikTok } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    title: "Wealth Mastery",
    category: "Wealth",
    price: "$997",
    popularity: 98,
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  },
  {
    id: 2,
    title: "Mindset Revolution",
    category: "Strength",
    price: "$797",
    popularity: 95,
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
  },
  {
    id: 3,
    title: "Attraction Secrets",
    category: "Attraction",
    price: "$597",
    popularity: 92,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    id: 4,
    title: "Beauty Mastery",
    category: "Beauty",
    price: "$497",
    popularity: 90,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
];

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    rating: 5,
    text: "This program changed my life. I've 10x'd my income in just 6 months!",
    avatar: "https://i.pravatar.cc/150?u=john",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 5,
    text: "The mindset transformation was incredible. Worth every penny!",
    avatar: "https://i.pravatar.cc/150?u=sarah",
  },
  {
    id: 3,
    name: "Michael Chen",
    rating: 5,
    text: "Best investment I've ever made in myself. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?u=michael",
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="luxury-gradient py-20 px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gold mb-4">
            Build Your Legacy. Become Unbreakable.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-foreground/80">
            Discover the secrets of millionaires and transform your reality.
          </p>
          <Button className="luxury-button text-lg">
            Explore Now
          </Button>
        </motion.div>
      </section>

      {/* Course Catalog Section */}
      <section className="py-16 px-4 md:px-8 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full bg-secondary text-foreground rounded-lg pl-12 pr-4 py-3 focus:ring-2 focus:ring-gold outline-none"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/60" />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                className="card hover-scale"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-foreground/60 mb-2">{course.category}</p>
                <p className="text-gold font-bold">{course.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gold">
            What Our Students Say
          </h2>
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2">
                  <div className="card p-6 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-gold text-gold"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-foreground/80">{testimonial.text}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Social Media CTA */}
      <section className="py-16 px-4 md:px-8 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6 text-gold">
            Follow Exclusive Insights
          </h2>
          <p className="text-xl mb-8 text-foreground/80">
            Get daily motivation and success strategies on our social media!
          </p>
          <div className="flex justify-center gap-6">
            <Button
              variant="outline"
              className="hover-scale flex items-center gap-2"
              onClick={() => window.open("https://instagram.com", "_blank")}
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </Button>
            <Button
              variant="outline"
              className="hover-scale flex items-center gap-2"
              onClick={() => window.open("https://tiktok.com", "_blank")}
            >
              <TikTok className="w-5 h-5" />
              TikTok
            </Button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Courses;