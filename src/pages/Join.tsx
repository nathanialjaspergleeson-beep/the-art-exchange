import { useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MessageSquare, Mail, Facebook, Instagram, Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

const Join = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero — flowing gradient */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-accent via-accent/50 to-background pointer-events-none" />
        <div className="absolute bottom-0 left-[20%] w-96 h-96 rounded-full bg-secondary/5 blur-[100px]" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-4"
          >
            Join Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl md:text-6xl text-accent-foreground font-bold mb-6"
          >
            Let's <span className="text-primary italic">Connect</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-body text-lg text-accent-foreground/70 max-w-2xl mx-auto leading-relaxed"
          >
            Ready to begin your journey? Book a call, send us a text, or reach out
            on social media. We'd love to hear from you.
          </motion.p>
        </div>
      </section>

      {/* Contact Options — flowing soft cards */}
      <section className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="group p-10 rounded-3xl bg-gradient-to-br from-card to-muted/30 border border-border/40 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">Book a Call</h3>
              <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                Speak directly with one of our founders to discuss your needs and find the perfect session for you.
              </p>
              <div className="flex flex-col gap-2">
                <a href="tel:0423947694" className="font-display text-lg text-primary font-semibold hover:underline">Romina — 0423 947 694</a>
                <a href="tel:0490843927" className="font-display text-lg text-primary font-semibold hover:underline">Astrabella — 0490 843 927</a>
                <a href="tel:0431392948" className="font-display text-lg text-primary font-semibold hover:underline">Stirling — 0431 392 948</a>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={1}
              className="group p-10 rounded-3xl bg-gradient-to-br from-card to-muted/30 border border-border/40 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-500">
                <MessageSquare className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">Send a Text</h3>
              <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                Prefer texting? Send any of us a message and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col gap-2">
                <a href="sms:0423947694" className="font-display text-lg text-secondary font-semibold hover:underline">Romina — 0423 947 694</a>
                <a href="sms:0490843927" className="font-display text-lg text-secondary font-semibold hover:underline">Astrabella — 0490 843 927</a>
                <a href="sms:0431392948" className="font-display text-lg text-secondary font-semibold hover:underline">Stirling — 0431 392 948</a>
              </div>
            </motion.div>

            <motion.a
              href="mailto:unitedbreath@yahoo.com"
              variants={fadeUp}
              custom={2}
              className="group p-10 rounded-3xl bg-gradient-to-br from-card to-muted/30 border border-border/40 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 cursor-pointer block flex flex-col"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">Email Us</h3>
              <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                Send us a detailed message about what you're looking for and we'll craft the perfect experience.
              </p>
              <p className="font-body text-sm text-primary font-medium mb-4">unitedbreath@yahoo.com</p>
              <div className="flex-1 min-h-[280px] flex items-center justify-center rounded-2xl bg-primary/5 border border-dashed border-primary/20 group-hover:bg-primary/10 group-hover:border-primary/40 transition-all duration-500">
                <span className="flex flex-col items-center gap-3 font-body text-primary font-medium">
                  <span className="flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-500">
                    <Mail size={28} />
                  </span>
                  <span className="text-sm">Send Email</span>
                </span>
              </div>
            </motion.a>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="group p-10 rounded-3xl bg-gradient-to-br from-card to-muted/30 border border-border/40 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 group-hover:bg-secondary/20 transition-colors duration-500">
                <Calendar className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">Schedule a Session</h3>
              <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                Book directly into our calendar — pick a time that works for you.
              </p>
              <div
                className="calendly-inline-widget rounded-2xl overflow-hidden"
                data-url="https://calendly.com/romy-art-breath-nlp-healing"
                style={{ minWidth: "280px", height: "400px" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social — soft transition */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/20 to-background pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px]" />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <motion.p variants={fadeUp} custom={0} className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-4">
            Follow Our Journey
          </motion.p>
          <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl text-foreground font-bold mb-8">
            Stay <span className="text-primary italic">Connected</span>
          </motion.h2>
          <motion.div variants={fadeUp} custom={2} className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://facebook.com/united.breath"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-card to-muted/30 border border-border/40 text-foreground hover:border-primary/30 hover:shadow-lg transition-all duration-500"
            >
              <Facebook size={20} className="text-primary" />
              <span className="font-body text-sm">@united.breath</span>
            </a>
            <a
              href="https://instagram.com/_unitedbreath"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-card to-muted/30 border border-border/40 text-foreground hover:border-primary/30 hover:shadow-lg transition-all duration-500"
            >
              <Instagram size={20} className="text-primary" />
              <span className="font-body text-sm">@_unitedbreath</span>
            </a>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default Join;
