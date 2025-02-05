import { motion } from "framer-motion";
import { Search } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Wealth Mastery",
    category: "Wealth",
    price: "$997",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
  },
  {
    id: 2,
    title: "Mindset Revolution",
    category: "Mindset",
    price: "$797",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
  },
  // Add more courses as needed
];

const Courses = () => {
  return (
    <div className="min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gold mb-8">Premium Courses</h1>
        
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Search courses..."
            className="w-full bg-secondary text-foreground rounded-lg pl-12 pr-4 py-3 focus:ring-2 focus:ring-gold outline-none"
          />
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/60" />
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
    </div>
  );
};

export default Courses;