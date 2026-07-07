import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Wind, Droplets, Palette, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import logo from "@/assets/united-breath-logo.png";
import heroImg from "@/assets/hero-wellness.jpg";
import watercolor from "@/assets/watercolor-divider.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const }
  })
};

const offerings = [
{ icon: Wind, title: "Breathwork", desc: "Guided breathwork journeys for transformation and release" },
{ icon: Droplets, title: "Cacao Ceremonies", desc: "Heart-opening cacao rituals for connection and presence" },
{ icon: Palette, title: "Art Therapy", desc: "Creative expression as a pathway to healing and self-discovery" },
{ icon: Heart, title: "Ice Baths", desc: "Cold immersion for resilience, clarity and vitality" }];


const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero — full bleed with image overlay */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background image */}
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-accent/80 via-accent/60 to-background" />
        </div>

        {/* Soft decorative orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-32 left-[10%] w-80 h-80 rounded-full bg-primary/10 blur-[100px] animate-breathe" />
          <div className="absolute bottom-32 right-[10%] w-96 h-96 rounded-full bg-secondary/10 blur-[100px] animate-breathe" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-10">

            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-150 animate-breathe" />
              <img

                alt="United Breath"
                className="relative w-52 h-52 mx-auto object-contain drop-shadow-2xl"
                style={{ mixBlendMode: "multiply" }} src="/lovable-uploads/49b51a8a-b08a-4471-a90a-27c4a1ef193b.png" />

            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold text-accent-foreground mb-6 leading-tight">

            United <span className="text-primary italic">Breath</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-body text-lg md:text-xl text-accent-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">

            Where breath becomes the bridge to our highest selves and to each other.
            A community weaving together wellness and health practices — celebrating
            the art of being human.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center">

            <Link
              to="/offerings"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-medium text-sm uppercase tracking-widest rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25">

              Explore Offerings <ArrowRight size={16} />
            </Link>
            <Link
              to="/join"
              className="inline-flex items-center gap-2 px-8 py-4 border border-accent-foreground/30 text-accent-foreground font-body font-medium text-sm uppercase tracking-widest rounded-full hover:bg-accent-foreground/10 transition-all backdrop-blur-sm">

              Join Us
            </Link>
          </motion.div>
        </div>

        {/* Soft bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Vision — flows seamlessly from hero */}
      <section className="relative py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}>

            <motion.p variants={fadeUp} custom={0} className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-6">
              Our Vision
            </motion.p>
            <motion.blockquote variants={fadeUp} custom={1} className="font-display text-2xl md:text-4xl text-foreground leading-relaxed italic">
              "From the expressive freedom of art and art therapy to the heart-opening
              warmth of cacao ceremonies — United Breath celebrates the{" "}
              <span className="text-primary not-italic font-bold">art of being human.</span>"
            </motion.blockquote>
            <motion.p variants={fadeUp} custom={2} className="mt-8 text-muted-foreground font-body">
              — Romina Castano, Founder
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Watercolor divider image */}
      <div className="relative w-full h-40 md:h-56 overflow-hidden">
        <img src={watercolor} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/90" />
      </div>

      {/* Offerings Preview — soft card style */}
      <section className="relative py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16">

            <motion.p variants={fadeUp} custom={0} className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-4">
              What We Offer
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl text-foreground font-bold">
              Our <span className="text-primary italic">Practices</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offerings.map((item, i) =>
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}>

                <Link
                to="/offerings"
                className="group block p-8 rounded-3xl bg-gradient-to-br from-card to-muted/30 border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full">

                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                    <item.icon className="w-7 h-7 text-secondary group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors duration-500">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </Link>
              </motion.div>
            )}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={4}
            className="text-center mt-14">

            <Link
              to="/offerings"
              className="inline-flex items-center gap-2 font-body text-sm uppercase tracking-widest text-primary hover:text-secondary transition-colors">

              View All Offerings <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-28 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/10 to-background pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16">
            <motion.p variants={fadeUp} custom={0} className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-4">
              Testimonials
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl md:text-5xl text-foreground font-bold">
              What People <span className="text-primary italic">Feel</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "I walked in carrying so much tension I didn't even know I had. By the end of the breathwork session, I was sobbing — in the most beautiful, freeing way. Romina holds space like no one else.", name: "Sarah M.", detail: "Breathwork 1:1" },
              { quote: "The cacao ceremony was honestly life-changing for me. I've never felt so connected to a group of strangers. We laughed, we cried, and I left feeling like I'd known these people for years.", name: "Jake T.", detail: "Community Cacao Ceremony" },
              { quote: "I was nervous about the ice bath but Astrabella and Stirling made me feel so safe. The combination of breathwork beforehand and the cold plunge afterwards — I felt invincible for days.", name: "Priya K.", detail: "Ice Bath + Breathwork" },
              { quote: "Art therapy with United Breath unlocked something in me I'd been suppressing. I'm not artistic at all, but it wasn't about that. It was about expression. I've booked three more sessions since.", name: "Liam D.", detail: "Art Therapy" },
              { quote: "My partner and I did a private ceremony together and it completely shifted our relationship. We communicated things we'd been holding onto for years. Can't recommend this enough.", name: "Emma & Chris R.", detail: "Private Ceremony" },
              { quote: "I've tried meditation apps, yoga retreats, you name it. Nothing has come close to what I experienced in a single breathwork circle with United Breath. This is the real deal.", name: "David W.", detail: "Small Group Breathwork" },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i % 3}
                className="p-8 rounded-3xl bg-gradient-to-br from-card to-muted/20 border border-border/30"
              >
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <p className="font-display text-foreground font-semibold">{t.name}</p>
                <p className="font-body text-xs text-primary">{t.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — soft gradient background */}
      <section className="relative pt-32 pb-40 px-6 bg-gradient-to-b from-background via-accent/40 to-accent">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[900px] h-[300px] rounded-[50%] bg-accent blur-3xl pointer-events-none" />


        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto text-center">

          <motion.h2 variants={fadeUp} custom={0} className="font-display text-4xl md:text-5xl text-accent-foreground font-bold mb-6">
            Ready to <span className="text-primary italic">Breathe</span>?
          </motion.h2>
          <motion.p variants={fadeUp} custom={1} className="font-body text-lg text-accent-foreground/70 mb-10 max-w-xl mx-auto">
            Whether you're seeking personal transformation or community connection,
            we're here to guide your journey.
          </motion.p>
          <motion.div variants={fadeUp} custom={2}>
            <Link
              to="/join"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-body font-medium text-sm uppercase tracking-widest rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25">
              Book a Session <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>);

};

export default Index;