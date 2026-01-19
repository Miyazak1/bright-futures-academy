import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import studentsImage from "@/assets/students-studying.jpg";

const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative animate-fade-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={studentsImage}
                alt="Students in class"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 lg:bottom-8 lg:-right-8 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl max-w-[200px]">
              <div className="font-heading text-3xl font-bold mb-1">Since</div>
              <div className="font-heading text-4xl font-bold text-gold">2015</div>
              <p className="text-sm text-primary-foreground/80 mt-2">Years of Educational Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
              Committed to Education
            </span>
            <h2 className="heading-section text-foreground mb-6">
              About U.C. Berkshire School
            </h2>
            <p className="text-body text-muted-foreground mb-6">
              U.C. Berkshire School was founded with one purpose - to build a space for all students to grow, learn and create with each passing day. Through a unique teaching approach and a truly passionate staff, we help students develop academically and personally to the highest level.
            </p>
            <p className="text-body text-muted-foreground mb-8">
              We invite you to explore our site and discover the academics and community U.C. Berkshire School provides to each and every student.
            </p>

            <Link to="/about">
              <Button variant="hero" size="lg">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;