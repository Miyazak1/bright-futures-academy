import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const BookOnlinePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-secondary min-h-[60vh] flex items-center">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto animate-fade-up">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-8">
                <Calendar className="w-10 h-10" />
              </div>
              <h1 className="heading-section text-foreground mb-6">
                Book Online
              </h1>
              <p className="text-body text-muted-foreground mb-8">
                Nothing to book right now. Check back soon.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="lg">
                    Contact Us Instead
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="outline" size="lg">
                    Back to Home
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="section-padding bg-background">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-2xl p-8 shadow-sm animate-fade-up">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h2 className="font-heading text-xl font-semibold text-foreground mb-2">
                      Schedule a Tour
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      While online booking is not available at the moment, you can still schedule a campus tour or consultation by contacting us directly.
                    </p>
                    <Link to="/contact">
                      <Button variant="outline" size="sm">
                        Get in Touch
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BookOnlinePage;