import { GraduationCap, Users, Award, Globe } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "98%",
    label: "University Acceptance",
    description: "Top university placement rate",
  },
  {
    icon: Users,
    value: "15:1",
    label: "Student-Teacher Ratio",
    description: "Small, focused classes",
  },
  {
    icon: Award,
    value: "100%",
    label: "Completion Rate",
    description: "Dedicated to student success",
  },
  {
    icon: Globe,
    value: "30+",
    label: "Countries",
    description: "Diverse international community",
  },
];

const Stats = () => {
  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
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
