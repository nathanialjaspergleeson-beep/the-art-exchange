import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart, type Product } from "@/contexts/CartContext";
import { toast } from "@/hooks/use-toast";

import imgGuidedIce from "@/assets/products/guided-ice.jpg";
import imgSleepAudio from "@/assets/products/sleep-audio.jpg";
import img21DayReset from "@/assets/products/21-day-reset.jpg";
import imgSleepMask from "@/assets/products/sleep-mask.jpg";
import imgBreathTrainer from "@/assets/products/breath-trainer.jpg";
import imgTshirt from "@/assets/products/tshirt.jpg";
import imgThermometer from "@/assets/products/thermometer.jpg";
import imgStarterKit from "@/assets/products/starter-kit.jpg";

const productImages: Record<string, string> = {
  "guided-ice": imgGuidedIce,
  "sleep-audio": imgSleepAudio,
  "21-day-reset": img21DayReset,
  "sleep-mask": imgSleepMask,
  "breath-trainer": imgBreathTrainer,
  "tshirt": imgTshirt,
  "thermometer": imgThermometer,
  "starter-kit": imgStarterKit,
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const products: Product[] = [
  { id: "guided-ice", name: "Guided Ice Bath Protocol", price: 29, type: "digital", description: "A complete step-by-step digital guide to safely build your cold exposure practice — from your first 30 seconds to full immersion." },
  { id: "sleep-audio", name: "Deep Sleep Breathwork Audio Pack", price: 39, type: "digital", description: "Five expertly crafted breathwork audio sessions designed to quiet the mind and guide you into deep, restorative sleep." },
  { id: "21-day-reset", name: "21-Day Breathwork Reset Program", price: 79, type: "digital", description: "A structured three-week journey with daily guided sessions, journaling prompts, and progress tracking to transform your breath practice." },
  { id: "sleep-mask", name: "Premium Sleep Mask", price: 49, type: "physical", description: "Ultra-soft, light-blocking sleep mask designed for deep rest. Perfect for breathwork meditation and recovery rituals." },
  { id: "breath-trainer", name: "Recovery Breath Trainer Device", price: 89, type: "physical", description: "A precision resistance breathing device that strengthens respiratory muscles and enhances recovery between sessions." },
  { id: "tshirt", name: "United Breath Performance T-Shirt", price: 59, type: "physical", description: "Premium organic cotton tee with the United Breath emblem. Breathable, comfortable, and made for movement." },
  { id: "thermometer", name: "Stainless Steel Ice Bath Thermometer", price: 35, type: "physical", description: "Medical-grade stainless steel thermometer for precise water temperature readings. Essential for safe cold exposure." },
  { id: "starter-kit", name: "Breathwork Starter Kit Bundle", price: 129, type: "physical", description: "Everything you need to begin: breath trainer, sleep mask, guided protocol download, and a welcome journal — bundled at a special price." },
];

const Shop = () => {
  const { addToCart } = useCart();

  const handleAdd = (product: Product) => {
    addToCart(product);
    toast({ title: "Added to cart", description: `${product.name} has been added.` });
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-background to-secondary/5 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px]" />

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
            className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-4">
            Shop
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
            Elevate Your <span className="text-primary italic">Breath</span> & Recovery
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Premium tools to optimise sleep, recovery, and performance.
          </motion.p>
          <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.8 }}
            href="#products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-medium text-sm uppercase tracking-widest rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25">
            Shop Now <ArrowRight size={16} />
          </motion.a>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Digital */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-16">
            <motion.p variants={fadeUp} custom={0} className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-4">Digital Products</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl md:text-4xl text-foreground font-bold mb-10">
              Instant <span className="text-primary italic">Access</span>
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {products.filter(p => p.type === "digital").map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} onAdd={handleAdd} />
              ))}
            </div>
          </motion.div>

          {/* Physical */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <motion.p variants={fadeUp} custom={0} className="font-body text-sm uppercase tracking-[0.3em] text-secondary mb-4">Physical Products</motion.p>
            <motion.h2 variants={fadeUp} custom={1} className="font-display text-3xl md:text-4xl text-foreground font-bold mb-10">
              Tangible <span className="text-primary italic">Tools</span>
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {products.filter(p => p.type === "physical").map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} onAdd={handleAdd} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ProductCard = ({ product, index, onAdd }: { product: Product; index: number; onAdd: (p: Product) => void }) => {
  const imgSrc = productImages[product.id];
  return (
    <motion.div variants={fadeUp} custom={index} className="group flex flex-col rounded-3xl bg-gradient-to-br from-card to-muted/30 border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden">
      <div className="aspect-square overflow-hidden">
        <img src={imgSrc} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
      </div>

      <div className="p-6 flex flex-col flex-1">
        <span className="font-body text-xs uppercase tracking-widest text-secondary mb-2">
          {product.type === "digital" ? "Digital Download" : "Physical Product"}
        </span>
        <h3 className="font-display text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
          {product.name}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="font-display text-2xl text-foreground font-bold">${product.price}</span>
          <button
            onClick={() => onAdd(product)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-body font-medium text-xs uppercase tracking-widest rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Shop;
