import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Monitor, BookOpen, GraduationCap, Clock, Users, Globe } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Who Are Suitable",
    description: "Students who want to take a Canadian course, who require flexible scheduling, and who are preparing to study in Canada can find online learning advantageous.",
  },
  {
    icon: BookOpen,
    title: "What to Prepare",
    description: "All learning materials and resources will be accessible through students' personal online accounts, allowing them to study whenever they prefer. There's no additional expense required for buying books.",
  },
  {
    icon: GraduationCap,
    title: "Differences with Traditional School",
    description: "There's no distinction. Students can attain a graduation certificate sanctioned by the Ontario Ministry of Education, regardless of whether they earned credits through online high school or traditional methods.",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Students can utilize their spare time, weekends, or school breaks to select and study online courses. The flexibility of online courses means there's no time constraint, as long as students have access to a computer and the internet.",
  },
  {
    icon: Globe,
    title: "University Recognition",
    description: "Students accrue valid credits through online schooling and can apply to universities across North America. Additionally, early exposure to English instruction can greatly benefit students.",
  },
  {
    icon: Monitor,
    title: "Course Schedule",
    description: "Each semester usually spans 12 weeks. Students are expected to log in to their online courses at least once a week to maintain their weekly progress. Online courses offer more adaptable scheduling.",
  },
];

const OnlineLearningPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="animate-fade-up">
                <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
                  Remote Learning
                </span>
                <h1 className="heading-section text-foreground mb-6">
                  Online Academy
                </h1>
                <p className="text-body text-muted-foreground mb-8">
                  U.C. Berkshire School offers students a flexible and accessible way to pursue their education through our online learning platform. Our online platform, accredited by the Ontario Ministry of Education, has allowed students to engage with their studies remotely, ensuring continuity even in challenging circumstances.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="hero"
                    size="lg"
                    onClick={() => window.open("https://lms.ucbschooledu.com/", "_blank")}
                  >
                    Online School Login
                  </Button>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-video bg-primary/10 flex items-center justify-center">
                    <Monitor className="w-24 h-24 text-primary/50" />
                  </div>
                </div>
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 lg:bottom-8 lg:-left-8 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl max-w-[200px]">
                  <div className="font-heading text-3xl font-bold mb-1">12</div>
                  <div className="font-heading text-lg font-bold text-gold">Weeks</div>
                  <p className="text-sm text-primary-foreground/80 mt-2">Per Semester</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
              <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
                Why Choose Online Learning
              </span>
              <h2 className="heading-section text-foreground mb-4">
                Flexible Education, Real Results
              </h2>
              <p className="text-body text-muted-foreground">
                Our online platform provides the same quality education as traditional schooling, with added flexibility for students around the world.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary">
          <div className="container mx-auto text-center">
            <div className="max-w-2xl mx-auto animate-fade-up">
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-primary-foreground/90 mb-8">
                Access our Learning Management System to begin your online education journey with U.C. Berkshire School.
              </p>
              <Button
                variant="gold"
                size="xl"
                onClick={() => window.open("https://lms.ucbschooledu.com/", "_blank")}
              >
                Online School Login
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OnlineLearningPage;