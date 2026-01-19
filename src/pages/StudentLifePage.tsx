import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Heart, Trophy, MapPin, BookOpen, Library } from "lucide-react";

const activities = [
  {
    icon: Building2,
    title: "Industry Visiting",
    description: "Our high school is dedicated to providing students with unique and enriching learning experiences through industry visits. We have organized exciting trips to renowned companies such as Toyota, Google, and BlackBerry. These visits offer students a firsthand glimpse into the cutting-edge technologies, innovative work environments, and dynamic career opportunities that these companies offer.",
  },
  {
    icon: Heart,
    title: "Volunteering",
    description: "Our high school students have a wide range of opportunities for engaging in volunteering activities. These activities play a crucial role in fostering personal growth, community involvement, and a sense of social responsibility among students. These activities can encompass a variety of areas, such as assisting at local shelters, participating in environmental clean-up projects, supporting fundraising events for charitable causes, tutoring peers, or engaging in youth leadership programs.",
  },
  {
    icon: Trophy,
    title: "Athletics",
    description: "We offer a diverse range of athletic programs to cater to various interests and skill levels. Students have the opportunity to engage in team sports like soccer, basketball, hockey, and volleyball, promoting teamwork, discipline, and sportsmanship. Additionally, individual sports such as track and field, swimming, and cross-country running encourage personal growth and achievement.",
  },
  {
    icon: MapPin,
    title: "Tourism",
    description: "Our high school is committed to providing students with enriching educational experiences, including organized tours to vibrant cities like Toronto and Niagara Falls. These excursions offer students the opportunity to broaden their horizons and gain a deeper understanding of the cultural, historical, and social fabric of Canada.",
  },
  {
    icon: BookOpen,
    title: "Read and Study",
    description: "We understand the importance of fostering a love for literature and providing a serene space for intellectual exploration. Our dedicated reading area and classroom are designed to inspire a passion for reading and encourage thoughtful activities. Step into our reading area, where students can escape into the world of literature with comfortable seating and a carefully curated collection.",
  },
  {
    icon: Library,
    title: "Waterloo Public Library",
    description: "We extend the boundaries of learning by taking our students to the Waterloo Public Library, a vibrant hub of knowledge and community engagement. Nestled in the heart of Waterloo, this library offers an enriching experience beyond the classroom with research resources and community programs.",
  },
];

const StudentLifePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto">
            <div className="text-center max-w-4xl mx-auto animate-fade-up">
              <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
                A Growing Community
              </span>
              <h1 className="heading-section text-foreground mb-6">
                Student Life
              </h1>
              <p className="text-body text-muted-foreground">
                We firmly believe in cultivating an environment where students can thrive both academically and socially. We offer a diverse array of extracurricular activities designed to instill confidence, inspire creativity, and foster a sense of belonging.
              </p>
            </div>
          </div>
        </section>

        {/* Activities Grid */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {activities.map((activity, index) => (
                <div
                  key={activity.title}
                  className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                    <activity.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="section-padding bg-primary">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto animate-fade-up">
              <div className="text-gold text-6xl font-heading leading-none mb-4">"</div>
              <blockquote className="font-heading text-2xl md:text-3xl text-primary-foreground font-medium leading-relaxed mb-6">
                The athletic activities not only contribute to students' physical well-being but also impart essential life skills such as time management, resilience, and leadership.
              </blockquote>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StudentLifePage;