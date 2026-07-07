import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/contexts/CartContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const Cart = () => {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart();
  const hasPhysical = items.some((i) => i.product.type === "physical");

  return (
    <div className="min-h-screen flex flex-col bg-background overflow-hidden">
      <Navbar />

      <section className="relative flex-1 pt-32 pb-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-background to-background pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
            Your <span className="text-primary italic">Cart</span>
          </motion.h1>

          {items.length === 0 ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <ShoppingBag className="w-16 h-16 text-muted-foreground/30 mx-auto mb-6" />
              <p className="font-body text-muted-foreground mb-8">Your cart is empty.</p>
              <Link to="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-medium text-sm uppercase tracking-widest rounded-full hover:bg-primary/90 transition-all">
                Continue Shopping <ArrowRight size={16} />
              </Link>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {items.map((item, i) => (
                <motion.div key={item.product.id} initial="hidden" animate="visible" variants={fadeUp} custom={i}
                  className="flex items-center gap-6 p-6 rounded-3xl bg-gradient-to-br from-card to-muted/20 border border-border/30">
                  {/* Icon */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-secondary/10 flex items-center justify-center shrink-0">
                    <ShoppingBag className="w-8 h-8 text-primary/40" />
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg text-foreground truncate">{item.product.name}</h3>
                    <p className="font-body text-xs text-secondary uppercase tracking-widest">
                      {item.product.type === "digital" ? "Digital" : "Physical"}
                    </p>
                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-2">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary/50 transition-colors">
                      <Minus size={14} />
                    </button>
                    <span className="font-body text-sm w-8 text-center">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-full border border-border flex items-center justify-center hover:border-primary/50 transition-colors">
                      <Plus size={14} />
                    </button>
                  </div>

                  {/* Price */}
                  <span className="font-display text-lg font-bold text-foreground w-20 text-right">
                    ${item.product.price * item.quantity}
                  </span>

                  {/* Remove */}
                  <button onClick={() => removeFromCart(item.product.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors">
                    <Trash2 size={18} />
                  </button>
                </motion.div>
              ))}

              {/* Summary */}
              <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={items.length}
                className="p-8 rounded-3xl bg-gradient-to-br from-card to-muted/10 border border-border/30 mt-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-body text-muted-foreground">Subtotal</span>
                  <span className="font-display text-xl font-bold text-foreground">${subtotal.toFixed(2)}</span>
                </div>
                {hasPhysical && (
                  <p className="font-body text-xs text-muted-foreground mb-4">Shipping calculated at checkout</p>
                )}
                <Link to="/checkout"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-body font-medium text-sm uppercase tracking-widest rounded-full hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/25">
                  Proceed to Checkout <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
