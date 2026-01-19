import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import studentsImage from "@/assets/students-studying.jpg";

const universities = [
  "University of Toronto",
  "University of Waterloo", 
  "Western University",
  "McMaster University",
  "York University",
  "University of Ottawa",
  "UBC",
  "SFU",
  "McGill",
];

const teachers = [
  {
    name: "David Thompson",
    role: "English Teacher",
    description: "A dedicated and enthusiastic English teacher at our high school. With a genuine passion for literature and language, Mr. Thompson brings a vibrant energy to his classroom that ignites a love for learning in his students.",
  },
  {
    name: "Olivia Mitchell",
    role: "Math Teacher",
    description: "Our adept Math teacher who transforms the world of numbers into an accessible and exciting realm for high school students. With a knack for simplifying complex concepts and a patient approach.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            {/* Hero Section */}
            <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-up">
              <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
                Committed to Education
              </span>
              <h1 className="heading-section text-foreground mb-6">
                About U.C. Berkshire School
              </h1>
              <p className="text-body text-muted-foreground mb-6">
                U.C. Berkshire School was founded with one purpose - to build a space for all students to grow, learn and create with each passing day. Through a unique teaching approach and a truly passionate staff, we help students develop academically and personally to the highest level.
              </p>
              <p className="text-body text-muted-foreground">
                We invite you to explore our site and discover the academics and community U.C. Berkshire School provides to each and every student. Get in touch with us today to schedule a tour, learn more about enrollment, or ask any other questions.
              </p>
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-20 animate-fade-up">
              <img
                src={studentsImage}
                alt="Students in class"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>

            {/* Mission & Philosophy */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
              {/* Mission */}
              <div className="animate-fade-up">
                <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
                  Our Mission
                </span>
                <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                  Tomorrow Starts Now
                </h2>
                <p className="text-body text-muted-foreground">
                  At U.C. Berkshire School, we are committed to creating an educational atmosphere that makes coming here an exciting experience, each and every day. Our programs are intended to empower students to tackle challenges and take on experiences that may be new to them, while keeping learning fun and dynamic.
                </p>
              </div>

              {/* Philosophy */}
              <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
                  Philosophy
                </span>
                <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                  Learning With No Bounds
                </h2>
                <p className="text-body text-muted-foreground">
                  At U.C. Berkshire School, we understand that each of our students has individual wants and needs. We believe that learning can only be fostered from a feeling of mutual respect and compassion, and we maintain those values in everything we do. Our unique approach provides students with the proper support system that will help lead them to a successful path.
                </p>
              </div>
            </div>

            {/* Our Team */}
            <div className="mb-20 animate-fade-up">
              <div className="text-center mb-12">
                <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
                  Our Team
                </span>
                <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                  Meet Our Teachers
                </h2>
                <p className="text-body text-muted-foreground max-w-3xl mx-auto">
                  Our school has a diverse international teaching team to help students learn to be tolerant, to understand and embrace different cultures and perspectives. Continuing learning from advanced international educational theories, the school maintains high standards and arranges a great variety of extracurricular activities for students.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {teachers.map((teacher, index) => (
                  <div
                    key={teacher.name}
                    className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-heading text-lg font-semibold text-foreground">
                          {teacher.name}
                        </h3>
                        <p className="text-sm text-gold">{teacher.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {teacher.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* University Placements */}
            <div className="animate-fade-up">
              <div className="text-center mb-12">
                <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
                  University Placements
                </span>
                <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground">
                  Our Students Go To
                </h2>
              </div>

              <div className="flex flex-wrap justify-center gap-6 lg:gap-10">
                {universities.map((uni, index) => (
                  <div
                    key={uni}
                    className="bg-card rounded-xl px-6 py-4 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <span className="font-heading font-medium text-foreground">{uni}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16 animate-fade-up">
              <Button variant="hero" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;