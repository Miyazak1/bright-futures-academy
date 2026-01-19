import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-students.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Students on campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2 mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">Ontario Ministry of Education Authorized</span>
          </div>

          {/* Heading */}
          <h1 className="heading-display text-primary-foreground mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Learn Better
            <br />
            <span className="text-gold">Than Best</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            U.C. Berkshire School is an international private secondary school, authorized by the Ontario Ministry of Education. 
            Our school is a new-style boarding and commuting school, with the qualification to grant Ontario secondary school credits and diplomas in Canada.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="gold" size="xl">
              More Details
            </Button>
            <Button variant="heroOutline" size="xl">
              Our Programs
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
