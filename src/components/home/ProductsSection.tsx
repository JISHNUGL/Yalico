import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import coconutRoll from "@/assets/coconut-roll.jpg";
import eggRoll from "@/assets/coconut-egg-roll.jpg";
import crackers from "@/assets/coconut-cracker.jpg";
import pepperRoll from "@/assets/coconut-pepper-roll.jpg";

const products = [
  {
    id: 1,
    name: "Crispy Coconut Rolls",
    description: "Wholesome coconut rolls, satisfying and delicious",
    emoji: "🥥",
    color: "from-amber-100 to-amber-200",
    imageSrc: coconutRoll,
    benefits: ["Vegetarian", "Satisfying", "Anytime Snack"],
  },
  {
    id: 2,
    name: "Crispy Coconut Egg Rolls",
    description: "Crispy rolls with enhanced taste and texture",
    emoji: "🥚",
    color: "from-yellow-100 to-yellow-200",
    imageSrc: eggRoll,
    benefits: ["Rich Texture", "Enhanced Flavor", "Tropical"],
  },
  {
    id: 3,
    name: "Crispy Coconut Crackers",
    description: "Luscious blend of coconut flavor in every bite",
    emoji: "🍪",
    color: "from-orange-100 to-orange-200",
    imageSrc: crackers,
    benefits: ["Crispy", "Unique Shape", "Snacking Joy"],
  },
  {
    id: 4,
    name: "Crispy Coconut Pepper Rolls",
    description: "Spicy twist with sweetless wafer roll",
    emoji: "🌶️",
    color: "from-red-100 to-red-200",
    imageSrc: pepperRoll,
    benefits: ["Spicy Kick", "Sweetless", "Unique Flavor"],
  },

];

export const ProductsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Premium Coconut
            <span className="gradient-text-accent"> Collection</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of high-quality coconut products, carefully crafted
            to bring you the best of tropical goodness.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="product-card h-full p-6 flex flex-col">
                {/* Product Image */}
                {product.imageSrc ? (
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="aspect-square rounded-2xl overflow-hidden mb-6 relative shadow-md"
                  >
                    <img src={product.imageSrc} alt={product.name} className="w-full h-full object-cover" />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`aspect-square rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 relative overflow-hidden`}
                  >
                    <span className="text-6xl">{product.emoji}</span>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                )}

                {/* Product Info */}
                <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 flex-grow">
                  {product.description}
                </p>

                {/* Benefits */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.benefits.map((benefit) => (
                    <span
                      key={benefit}
                      className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Button asChild variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  <Link to="/products">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button asChild variant="tropical" size="lg">
            <Link to="/products">
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
