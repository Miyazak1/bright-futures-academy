import campusImage from "@/assets/campus.jpg";

const Quote = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={campusImage}
          alt="Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="max-w-4xl mx-auto animate-fade-up">
          {/* Quote Mark */}
          <div className="text-gold text-8xl font-heading leading-none mb-4">"</div>
          
          {/* Quote Text */}
          <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl text-primary-foreground font-medium leading-relaxed mb-8">
            You cannot open a book without learning something.
          </blockquote>

          {/* Author */}
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-0.5 bg-gold" />
            <cite className="font-heading text-xl text-gold not-italic font-semibold">
              Confucius
            </cite>
            <div className="w-16 h-0.5 bg-gold" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
