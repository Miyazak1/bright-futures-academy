import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import studentsImage from "@/assets/students-studying.jpg";

const features = [
  "Ontario Ministry of Education Authorized",
  "Complete OSSD Diploma Program",
  "Experienced Ontario Certified Teachers",
  "Flexible Online Learning Options",
  "Personalized University Counseling",
  "International Student Support",
];

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
                alt="Students studying together"
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
              Why Choose Us
            </span>
            <h2 className="heading-section text-foreground mb-6">
              Why U.C. Berkshire?
            </h2>
            <p className="text-body text-muted-foreground mb-8">
              U.C. Berkshire School is an international private secondary school, 
              authorized by the Ontario Ministry of Education. Our school is a 
              new-style boarding and commuting school, with the qualification to 
              grant Ontario secondary school credits and diplomas in Canada.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
