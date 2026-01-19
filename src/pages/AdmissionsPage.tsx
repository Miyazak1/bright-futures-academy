import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const applicationSteps = [
  { number: "01", title: "Fill out application form" },
  { number: "02", title: "Submit form and related documents" },
  { number: "03", title: "Receive a conditional offer" },
  { number: "04", title: "Pay tuition fee" },
  { number: "05", title: "Receive formal offer" },
  { number: "06", title: "Visa and Study Permit Application" },
  { number: "07", title: "Get ready for Canada" },
];

const criteria = [
  "At least 75% average with consistent grades over the last 3 years of study",
  "English, Math and Science carry heavier weight when considering applicants",
  "In some cases, we may ask for a written essay, study plan, or interview",
  "Students are admitted on a case-by-case basis, looking at their overall history",
];

const AdmissionsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto">
            <div className="text-center max-w-4xl mx-auto animate-fade-up">
              <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
                Join Our School
              </span>
              <h1 className="heading-section text-foreground mb-6">
                Admissions & Enrollment
              </h1>
              <p className="text-body text-muted-foreground">
                We admit students on a case-by-case basis, looking at their overall history to truly understand the type of applicant in consideration.
              </p>
            </div>
          </div>
        </section>

        {/* Criteria Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div className="animate-fade-up">
                <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
                  Requirements
                </span>
                <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground mb-6">
                  OSSD Admissions Criteria
                </h2>
                <p className="text-body text-muted-foreground mb-8">
                  Typically, we require at least a 75% average with consistent grades over the last 3 years of study. English, Math and Science tend to carry heavier weight when considering applicants.
                </p>
                <ul className="space-y-4">
                  {criteria.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <div className="bg-primary rounded-2xl p-8 text-primary-foreground">
                  <h3 className="font-heading text-2xl font-bold mb-4">
                    Ready to Apply?
                  </h3>
                  <p className="text-primary-foreground/90 mb-6">
                    Start your journey with U.C. Berkshire School today. Our admissions team is here to help you through every step of the process.
                  </p>
                  <Link to="/contact">
                    <Button variant="gold" size="lg" className="w-full">
                      Contact Admissions
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Process */}
        <section className="section-padding bg-secondary">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-up">
              <span className="inline-block text-sm font-medium text-gold uppercase tracking-wider mb-4">
                Step by Step
              </span>
              <h2 className="heading-section text-foreground">
                How to Apply
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {applicationSteps.slice(0, 4).map((step, index) => (
                <div
                  key={step.number}
                  className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="font-heading text-4xl font-bold text-gold mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mt-6 max-w-4xl mx-auto">
              {applicationSteps.slice(4).map((step, index) => (
                <div
                  key={step.number}
                  className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 animate-fade-up text-center"
                  style={{ animationDelay: `${(index + 4) * 0.1}s` }}
                >
                  <div className="font-heading text-4xl font-bold text-gold mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
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
                Start Your Journey Today
              </h2>
              <p className="text-primary-foreground/90 mb-8">
                Join U.C. Berkshire School and take the first step towards your academic success in Canada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="gold" size="xl">
                    Apply Now
                  </Button>
                </Link>
                <Link to="/programs">
                  <Button variant="heroOutline" size="xl">
                    View Programs
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AdmissionsPage;