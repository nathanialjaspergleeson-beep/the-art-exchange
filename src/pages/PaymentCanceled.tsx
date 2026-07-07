import { motion } from "framer-motion";
import { XCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PaymentCanceled = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <section className="relative pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/15 via-background to-background pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative max-w-xl mx-auto text-center"
        >
          <XCircle className="w-16 h-16 text-muted-foreground mx-auto mb-6" />
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Payment <span className="text-primary italic">Canceled</span>
          </h1>
          <p className="font-body text-lg text-muted-foreground mb-8">
            No worries — your cart is still waiting for you. Come back whenever you're ready.
          </p>
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-medium text-sm uppercase tracking-widest rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            <ArrowLeft size={16} /> Back to Cart
          </Link>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
};

export default PaymentCanceled;
