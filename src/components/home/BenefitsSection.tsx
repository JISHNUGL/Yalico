import { motion } from "framer-motion";
import { Leaf, Heart, Globe, Award, Shield, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "100% Organic",
    description: "Grown naturally without pesticides or harmful chemicals",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    icon: Heart,
    title: "Health Benefits",
    description: "Rich in nutrients, vitamins, and healthy fats",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    icon: Globe,
    title: "Sustainably Sourced",
    description: "Eco-friendly practices from farm to table",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Strict quality control at every step",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: Shield,
    title: "Food Safety Certified",
    description: "International certifications and standards",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    icon: Sparkles,
    title: "Fresh & Pure",
    description: "No preservatives, no additives, just pure coconut",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-muted/50 to-background">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-lime/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-4 shadow-lg">
            Why Yalico?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            The <span className="gradient-text">Yalico</span> Difference
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to bringing you the finest coconut products while
            caring for our planet and communities.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card p-6 group hover:shadow-glow transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-14 h-14 rounded-2xl ${benefit.bg} flex items-center justify-center shrink-0`}
                >
                  <benefit.icon className={`w-7 h-7 ${benefit.color}`} />
                </motion.div>
                <div>
                  <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 glass-card p-8 rounded-3xl"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "100%", label: "Natural Ingredients" },
              { value: "0", label: "Chemical Additives" },
              { value: "50+", label: "Export Countries" },
              { value: "4.9★", label: "Customer Rating" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-display font-bold gradient-text-accent mb-1">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
