import { GraduationCap, Users, Award, Monitor, BookOpen } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    value: "98%",
    label: "名校录取率",
    description: "毕业生进入顶尖大学",
  },
  {
    icon: Award,
    value: "100%",
    label: "毕业率",
    description: "全力支持每位学生完成学业",
  },
  {
    icon: Users,
    value: "优秀",
    label: "安省认证教师",
    description: "经验丰富的专业师资团队",
  },
  {
    icon: Monitor,
    value: "在线",
    label: "网络课程",
    description: "灵活便捷的在线学习选择",
  },
  {
    icon: BookOpen,
    value: "小班",
    label: "精品教学",
    description: "个性化关注每位学生",
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
