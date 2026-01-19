import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { BookOpen, Languages, GraduationCap, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  "Grade 10 Principle of Mathematics (MPM2D)",
  "Grade 11 Functions (MCR3U)",
  "Grade 12 Advanced Functions (MHF4U)",
  "Grade 12 Calculus and Vectors (MCV4U)",
  "Grade 12 Data Management (MDM4U)",
  "Grade 10 Canadian History (CHC2D)",
  "Grade 11 World History (CHW3M)",
  "Grade 12 English (ENG4U)",
  "Grade 12 Studies in Literature (ETS4U)",
  "Grade 10 Academic Science (SNC2D)",
  "Grade 11 Chemistry (SCH3U)",
  "Grade 11 Physics (SPH3U)",
  "Grade 12 Biology (SBI4U)",
  "Grade 12 Chemistry (SCH4U)",
  "Grade 12 Physics (SPH4U)",
  "Grade 10 Introduction to Business (BBI2O)",
  "Grade 10 Introduction to Computer Studies (ICS2O)",
  "Grade 12 Business Leadership (BOH4M)",
];

const compulsoryCredits = [
  "4 credits in English (1 credit per grade)",
  "1 credit in a second language",
  "3 credits in mathematics (at least 1 credit in Grade 11 or 12)",
  "2 credits in science",
  "1 credit in history",
  "1 credit in geography",
  "1 credit in the arts",
  "1 credit in health and physical education",
  "0.5 credit in civics",
  "0.5 credit in career studies",
];

const additionalCredits = [
  "1 additional credit in English, or a third language, or social sciences and the humanities, or Canadian and world studies, or guidance and career education, or a cooperative education course",
  "1 additional credit in health and physical education, or the arts, or business studies, or a cooperative education course",
  "1 additional credit in science (Grade 11 or 12), or computer science, or technological education, or a cooperative education course",
];

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto">
            <div className="text-center max-w-4xl mx-auto animate-fade-up">
              <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
                Academic Excellence
              </span>
              <h1 className="heading-section text-foreground mb-6">
                Programs and Courses
              </h1>
              <p className="text-body text-muted-foreground">
                We design and provide a diversity of programs to meet students' needs, including Ontario secondary school credit courses, English training classes, after school tutoring, eLearning and more.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Overview */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* OSSD */}
              <div className="animate-fade-up">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-6">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                  OSSD
                </h2>
                <p className="text-body text-muted-foreground">
                  Ontario Secondary School Diploma (OSSD) is a diploma granted to secondary school graduates by Ontario, Canada. OSSD is recognized by most universities in USA, Canada, UK, Hong Kong, Australia, and other English-speaking countries. Students who receive an Ontario Secondary School Diploma (OSSD) can apply to Canadian and international universities. The main high school course areas include Business, Sciences, English, Mathematics, Arts, Social Science, and Computer Science.
                </p>
              </div>

              {/* English Training */}
              <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gold/20 text-gold mb-6">
                  <Languages className="w-7 h-7" />
                </div>
                <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-4">
                  English Proficiency Test Training
                </h2>
                <p className="text-body text-muted-foreground">
                  In order to promote students' English learning and further education needs, our school also provides students with personalized English training programs, including IELTS, TOEFL and ESL.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Course List */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
                Available Courses
              </span>
              <h2 className="heading-section text-foreground">
                Grade 9 - 12 Courses
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((course, index) => (
                <div
                  key={course}
                  className="bg-card rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${index * 0.03}s` }}
                >
                  <div className="flex items-start gap-3">
                    <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{course}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Graduation Requirements */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-up">
              <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
                Requirements
              </span>
              <h2 className="heading-section text-foreground mb-4">
                What Do I Need to Graduate?
              </h2>
              <p className="text-body text-muted-foreground">
                Students who successfully complete high school are awarded the Ontario Secondary School Diploma (OSSD) from the Ontario Ministry of Education.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* OSSD Requirements */}
              <div className="animate-fade-up">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  OSSD Requirements
                </h3>
                <div className="bg-card rounded-2xl p-8 shadow-sm">
                  <p className="text-muted-foreground mb-6">
                    In order to earn the OSSD, a student must:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">Earn 18 compulsory credits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">Earn 12 optional credits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">Successfully complete the Ontario Secondary School Literacy Test (OSSLT)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">Complete 40 hours of community involvement activities</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Compulsory Credits */}
              <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                  18 Compulsory Credits
                </h3>
                <div className="bg-card rounded-2xl p-8 shadow-sm">
                  <ul className="space-y-3">
                    {compulsoryCredits.map((credit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground text-sm">{credit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Credits */}
            <div className="mt-12 animate-fade-up">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Plus Additional Credits
              </h3>
              <div className="bg-card rounded-2xl p-8 shadow-sm">
                <ul className="space-y-4">
                  {additionalCredits.map((credit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-foreground text-sm">{credit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-16 animate-fade-up">
              <Link to="/admissions">
                <Button variant="hero" size="lg">
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProgramsPage;