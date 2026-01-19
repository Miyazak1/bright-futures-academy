import { GraduationCap, Users, Award, Monitor, BookOpen } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "98%",
    label: "Top University Acceptance",
    description: "Graduates accepted to top universities",
  },
  {
    icon: Award,
    value: "100%",
    label: "Completion Rate",
    description: "Supporting every student to succeed",
  },
  {
    icon: Users,
    value: "Great",
    label: "Ontario Certified Teachers",
    description: "Experienced professional faculty",
  },
  {
    icon: Monitor,
    value: "Online",
    label: "Learning Available",
    description: "Flexible remote study options",
  },
  {
    icon: BookOpen,
    value: "Small",
    label: "Class Size",
    description: "Personalized attention for every student",
  },
];

const Stats = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="font-medium text-foreground mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
