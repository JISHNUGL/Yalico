import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { MessageCircle, Check, Leaf } from "lucide-react";

import coconutRoll from "@/assets/coconut-roll.jpg";
import eggRoll from "@/assets/coconut-egg-roll.jpg";
import crackers from "@/assets/coconut-cracker.jpg";
import pepperRoll from "@/assets/coconut-pepper-roll.jpg";

const products = [
  {
    id: "rolls",
    name: "Crispy Coconut Rolls",
    tagline: "Pure Vegetarian Snack",
    emoji: "🥥",
    image: "from-amber-100 to-amber-200",
    imageSrc: coconutRoll,
    description: "Wholesome coconut rolls as treat, satisfying and delicious, perfect for snacking anytime! Discover the journey of Pollachi's coconut treasure, delivering delightful coconut snacks to you.",
    benefits: [
      "Pure Vegetarian",
      "Wholesome & Satisfying",
      "Made from Pollachi Coconuts",
      "Perfect Anytime Snack",
    ],
    ingredients: "Coconut Milk, Rice Flour, Sugar, Sesame Seeds",
    nutrition: {
      serving: "30g",
      calories: "140",
      fat: "6g",
      saturated: "5g",
      carbs: "20g",
    },
    sizes: ["Standard Pack", "Family Pack"],
  },
  {
    id: "egg-rolls",
    name: "Crispy Coconut Egg Rolls",
    tagline: "Enhanced Taste & Texture",
    emoji: "🥚",
    image: "from-yellow-100 to-yellow-200",
    imageSrc: eggRoll,
    description: "Crispy, light coconut rolls which are having eggs to get more taste and texture that bring tropical flavors to your snack time in another level.",
    benefits: [
      "Rich Texture",
      "Enhanced Flavor",
      "Light & Crispy",
      "Tropical Taste",
    ],
    ingredients: "Coconut Milk, Rice Flour, Sugar, Eggs, Sesame Seeds",
    nutrition: {
      serving: "30g",
      calories: "150",
      fat: "7g",
      saturated: "5g",
      carbs: "19g",
    },
    sizes: ["Standard Pack", "Family Pack"],
  },
  {
    id: "crackers",
    name: "Crispy Coconut Crackers",
    tagline: "Pure Snacking Joy",
    emoji: "🍪",
    image: "from-orange-100 to-orange-200",
    imageSrc: crackers,
    description: "A luscious blend of coconut flavor infused in every bite, pure snacking joy. Bigger rolls are pressed to make as crackers.",
    benefits: [
      "Luscious Coconut Flavor",
      "Unique Cracker Shape",
      "Crispy Texture",
      "Pure Snacking Joy",
    ],
    ingredients: "Coconut Milk, Rice Flour, Sugar, Sesame Seeds",
    nutrition: {
      serving: "30g",
      calories: "145",
      fat: "6g",
      saturated: "5g",
      carbs: "21g",
    },
    sizes: ["Standard Pack", "Family Pack"],
  },

  {
    id: "pepper-rolls",
    name: "Crispy Coconut Pepper Rolls",
    tagline: "Coming Soon - Spicy Twist",
    emoji: "🌶️",
    image: "from-red-100 to-red-200",
    imageSrc: pepperRoll,
    description: "Future Product: Our plan to bring little pepper spice with sweetless wafer roll with Pepper, your new favorite healthy snack option.",
    benefits: [
      "Spicy Kick",
      "Sweetless Option",
      "Healthy Snack",
      "Unique Flavor",
    ],
    ingredients: "Coconut Milk, Rice Flour, Black Pepper, Salt",
    nutrition: {
      serving: "Coming Soon",
      calories: "-",
      fat: "-",
      saturated: "-",
      carbs: "-",
    },
    sizes: ["Coming Soon"],
  },

];

const Products = () => {
  const whatsappNumber = "918300617317";

  const handleOrder = (productName: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in ordering ${productName} from Yalico Foods.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Our Products - Premium Coconut Products | Yalico Foods</title>
        <meta name="description" content="Browse Yalico Foods' premium coconut products: Virgin Coconut Oil, Coconut Milk, Coconut Water, Desiccated Coconut & more. 100% organic, globally delivered." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": products.map((product, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Product",
                "name": product.name,
                "description": product.description,
                "brand": {
                  "@type": "Brand",
                  "name": "Yalico Foods"
                }
              }
            }))
          })}
        </script>
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-background" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold-dark text-sm font-medium mb-6">
                <Leaf className="w-4 h-4 inline mr-2" />
                100% Organic Products
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                Premium <span className="gradient-text-accent">Coconut</span> Products
              </h1>
              <p className="text-lg text-muted-foreground">
                Explore our range of high-quality, sustainably sourced coconut products.
                From farm to table, experience pure tropical goodness.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="space-y-24">
              {products.map((product, index) => (
                <motion.article
                  key={product.id}
                  id={product.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-dense" : ""
                    }`}
                >
                  {/* Product Image */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  >
                    <div className="product-card p-8">
                      {product.imageSrc ? (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="aspect-square rounded-3xl overflow-hidden shadow-lg"
                        >
                          <img src={product.imageSrc} alt={product.name} className="w-full h-full object-cover" />
                        </motion.div>
                      ) : (
                        <motion.div
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 4, repeat: Infinity }}
                          className={`aspect-square rounded-3xl bg-gradient-to-br ${product.image} flex items-center justify-center`}
                        >
                          <span className="text-[8rem]">{product.emoji}</span>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>

                  {/* Product Info */}
                  <div>
                    <span className="text-sm font-medium text-primary mb-2 block">
                      {product.tagline}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                      {product.name}
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      {product.description}
                    </p>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h3 className="font-semibold mb-3">Key Benefits</h3>
                      <ul className="grid grid-cols-2 gap-2">
                        {product.benefits.map((benefit) => (
                          <li key={benefit} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-gold-dark shrink-0" />
                            <span className="text-muted-foreground">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ingredients & Nutrition */}
                    <div className="glass-card p-4 rounded-2xl mb-6">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="font-semibold mb-1">Ingredients</p>
                          <p className="text-muted-foreground">{product.ingredients}</p>
                        </div>
                        <div>
                          <p className="font-semibold mb-1">Per {product.nutrition.serving}</p>
                          <p className="text-muted-foreground">
                            {product.nutrition.calories} cal | {product.nutrition.fat} fat
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Sizes */}
                    <div className="mb-6">
                      <p className="font-semibold mb-3">Available Sizes</p>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                          <span
                            key={size}
                            className="px-4 py-2 rounded-full bg-muted text-sm font-medium"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button
                      variant="whatsapp"
                      size="lg"
                      onClick={() => handleOrder(product.name)}
                    >
                      <MessageCircle className="w-5 h-5" />
                      Order on WhatsApp
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Bulk Orders CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-primary-dark">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
                Need Bulk Orders?
              </h2>
              <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                We offer competitive pricing for bulk and wholesale orders.
                Contact our sales team for custom quotes.
              </p>
              <Button
                variant="accent"
                size="xl"
                onClick={() => handleOrder("Bulk Order Inquiry")}
              >
                <MessageCircle className="w-5 h-5" />
                Contact for Bulk Pricing
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Products;
