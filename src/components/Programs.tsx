import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Languages, School, Monitor, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "OSSD",
    description: "Ontario Secondary School Diploma - A globally recognized diploma granted to secondary school graduates in Ontario.",
    color: "bg-primary",
    href: "/programs",
  },
  {
    icon: Languages,
    title: "Language Courses",
    description: "English as a Second Language (ESL), IELTS, and TOEFL preparation courses for international students.",
    color: "bg-gold",
    href: "/programs",
  },
  {
    icon: School,
    title: "Grade 9-12",
    description: "We offer comprehensive high school courses from grade 9 to 12 for students with university goals.",
    color: "bg-forest-light",
    href: "/programs",
  },
  {
    icon: Monitor,
    title: "eLearning",
    description: "Remote study opportunities for international students, enabling them to study from anywhere in the world.",
    color: "bg-primary",
    href: "/online-learning",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="section-padding bg-secondary">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
          <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
            Our Programs
          </span>
          <h2 className="heading-section text-foreground mb-4">
            Programs and Courses
          </h2>
          <p className="text-body text-muted-foreground">
            Comprehensive educational programs designed to prepare students for success in top universities worldwide.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="group bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${program.color} text-primary-foreground mb-6`}>
                <program.icon className="w-7 h-7" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {program.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {program.description}
              </p>
              <Link
                to={program.href}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-forest-light transition-colors group-hover:gap-3"
              >
                Learn more
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Link to="/programs">
            <Button variant="hero" size="lg">
              View All Programs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Programs;
