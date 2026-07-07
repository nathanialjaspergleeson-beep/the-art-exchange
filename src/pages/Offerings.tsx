import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Wind, Droplets, Palette, Heart, Users, User, Sparkles, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import watercolor from "@/assets/watercolor-divider.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: "easeOut" as const },
  }),
};

const sessionTypes = [
  {
    icon: User,
    title: "1:1 Private Sessions",
    desc: "Personalised one-on-one sessions tailored to your unique needs and intentions. Deep, focused work in a safe and supportive space.",
    options: [
      { name: "Breathwork Journey (60 min)", price: "$120" },
      { name: "Cacao + Breathwork (90 min)", price: "$160" },
      { name: "Art Therapy Session (60 min)", price: "$130" },
      { name: "Ice Bath + Breathwork (75 min)", price: "$150" },
    ],
  },
  {
    icon: Sparkles,
    title: "Personal Ceremonies",
    desc: "Intimate ceremonial experiences designed for you or your small circle. Mark life transitions, set intentions, or simply honour yourself.",
    options: [
      { name: "Personal Cacao Ceremony (2 hrs)", price: "$250" },
      { name: "Breathwork Ceremony (2 hrs)", price: "$220" },
      { name: "Combined Ceremony (3 hrs)", price: "$350" },
    ],
  },
  {
    icon: Users,
    title: "Community Ceremonies",
    desc: "Larger group ceremonies to gather, connect, and experience the power of collective breath, cacao, and creative expression.",
    options: [
      { name: "Community Breathwork (2 hrs)", price: "$45 pp" },
      { name: "Community Cacao Ceremony (2 hrs)", price: "$55 pp" },
      { name: "Full Moon Gathering (3 hrs)", price: "$65 pp" },
    ],
  },
  {
    icon: Heart,
    title: "Small Group Sessions",
    desc: "Intimate group experiences (4–8 people) perfect for friends, families, or team-building. A shared journey of connection and growth.",
    options: [
      { name: "Group Breathwork (90 min)", price: "$60 pp" },
      { name: "Group Ice Bath + Breathwork (2 hrs)", price: "$80 pp" },
      { name: "Group Cacao + Art Therapy (2.5 hrs)", price: "$85 pp" },
      { name: "Group Breathwork + Art Therapy (2 hrs)", price: "$75 pp" },
    ],
  },
];

const practices = [
  {
    icon: Wind,
    title: "Breathwork",
    desc: "Through conscious connected breathing, we access altered states of awareness, release stored tension and emotion, and reconnect with our inner wisdom. Each session is a unique journey guided with intention, music, and presence.",
  },
  {
    icon: Droplets,
    title: "Cacao Ceremonies",
    desc: "Ceremonial-grade cacao is a gentle yet powerful plant medicine that opens the heart and deepens connection. Our ceremonies blend cacao with breathwork, movement, and intention-setting for a truly transformative experience.",
  },
  {
    icon: Palette,
    title: "Art Therapy",
    desc: "Creative expression is a doorway to healing. Through guided art-making — no artistic skill required — we access and process emotions, discover new perspectives, and celebrate the beauty of our inner landscapes.",
  },
  {
    icon: Heart,
    title: "Ice Baths",
    desc: "Cold water immersion builds resilience, sharpens mental clarity, and invigorates the body. Paired with breathwork preparation, our ice bath sessions are a powerful practice for stepping beyond perceived limits.",
  },
];

const Offerings = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero — soft gradient */}
      <section className="relative pt-32 pb-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-accent via-accent/50 to-background pointer-events-none" />
        <div className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-primary/8 blur-[80px]" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-4"
          >
            Our Offerings
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl md:text-6xl text-accent-foreground font-bold mb-6"
          >
            Explore Your <span className="text-primary italic">Journey</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-body text-lg text-accent-foreground/70 max-w-2xl mx-auto leading-relaxed"
          >
            From private sessions to community gatherings, discover the practice
            that resonates with your soul. Every offering is crafted with intention and love.
          </motion.p>
        </div>
      </section>

      {/* Practices — no border, soft cards */}
      <section className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-4">
              Our Practices
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl text-foreground font-bold">
              What We <span className="text-primary italic">Offer</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {practices.map((p, i) => (
              <motion.div
                key={p.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i}
                className="p-8 rounded-3xl bg-gradient-to-br from-card to-muted/30 border border-border/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <p.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-display text-2xl text-foreground mb-3">{p.title}</h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Watercolor divider */}
      <div className="relative w-full h-32 md:h-48 overflow-hidden">
        <img src={watercolor} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background/80" />
      </div>

      {/* Session Types & Pricing — flowing */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/20 to-background pointer-events-none" />
        
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeUp} custom={0} className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-4">
              Sessions & Pricing
            </motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-4xl text-foreground font-bold">
              Find Your <span className="text-primary italic">Fit</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={2} className="font-body text-muted-foreground mt-4 max-w-xl mx-auto">
              All prices are estimates. We're happy to create custom packages tailored to your needs.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {sessionTypes.map((session, si) => (
              <motion.div
                key={session.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={si}
                className="p-8 rounded-3xl bg-gradient-to-br from-card to-muted/20 border border-border/30"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <session.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground">{session.title}</h3>
                </div>
                <p className="font-body text-sm text-muted-foreground mb-6 leading-relaxed">
                  {session.desc}
                </p>
                <div className="space-y-2">
                  {session.options.map((opt) => (
                    <div
                      key={opt.name}
                      className="flex justify-between items-center py-3 px-4 rounded-xl bg-muted/30"
                    >
                      <span className="font-body text-sm text-foreground/80">{opt.name}</span>
                      <span className="font-display text-lg text-primary font-semibold">{opt.price}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={4}
            className="text-center mt-16"
          >
            <Link
              to="/join"
              className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-primary-foreground font-body font-medium text-sm uppercase tracking-widest rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Book a Session <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Offerings;
