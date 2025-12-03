import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Leaf, Heart, Target, Eye, Users, Award } from "lucide-react";

const timeline = [
  { year: "2022", title: "The Beginning", description: "Founded Yalico Foods under Connect's food division Vel Traders" },
  { year: "2023", title: "Product Launch", description: "Introduced India's first healthy, tasty, and crunchy coconut rolls" },
  { year: "2024", title: "Global Expansion", description: "Expanding to international markets with the 'Make in India' initiative" },
  { year: "Future", title: "Innovation", description: "Developing new products like Pepper Rolls and Energy Powder" },
];

const values = [
  { icon: Leaf, title: "Sustainability", description: "Committed to eco-friendly practices at every step" },
  { icon: Heart, title: "Quality", description: "Uncompromising quality in every product we make" },
  { icon: Users, title: "Community", description: "Supporting local farmers and their families" },
  { icon: Award, title: "Excellence", description: "Striving for the highest standards in the industry" },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Yalico Foods - Our Story | Premium Coconut Products</title>
        <meta name="description" content="Learn about Yalico Foods' journey from a small farm to a global coconut products leader. Discover our mission, values, and commitment to sustainability." />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />

          {/* Floating decorations */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-40 right-20 w-32 h-32 opacity-20"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full fill-lime">
              <ellipse cx="50" cy="50" rx="45" ry="20" transform="rotate(20 50 50)" />
            </svg>
          </motion.div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                Our Story
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                From <span className="gradient-text-accent">Paradise</span> to Your Table
              </h1>
              <p className="text-lg text-muted-foreground">
                A journey of passion, quality, and commitment to bringing you the finest
                coconut products from tropical paradise.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Our <span className="gradient-text">Journey</span>
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Yalico Foods was founded in 2022 and managed through Connect's food division Vel Traders.
                    At Yalico Foods, our story began with a simple yet profound idea: to create a snack that
                    embodies the rich flavors and health benefits of coconuts.
                  </p>
                  <p>
                    While living in the US and traveling around the world, our founder discovered the delightful
                    taste of Thai coconut rolls. This experience sparked a vision to bring a similar, yet uniquely
                    Indian, product to life. India, with its vast population and abundant resources, especially
                    the juicy, rich coconuts from the Pollachi region in Tamil Nadu, seemed like the perfect place to start.
                  </p>
                  <p>
                    After three years of relentless hard work, experimentation, and dedication, Yalico Foods proudly
                    introduced India's first healthy, tasty, and crunchy coconut rolls. Our mission is to bring
                    Yalico coconut products to both the Indian and international markets, promoting healthy snacking
                    through the 'Make in India' initiative.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="glass-card p-8 rounded-3xl">
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-lime/20 to-primary/20 flex items-center justify-center">
                    <span className="text-8xl">🌴</span>
                  </div>
                </div>
                {/* Floating badge */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -bottom-4 -left-4 glass-card px-6 py-4 rounded-2xl shadow-card"
                >
                  <p className="font-display font-bold text-2xl text-primary">3+</p>
                  <p className="text-sm text-muted-foreground">Years of Excellence</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-3xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide the world with premium, sustainably sourced coconut products
                  while supporting local farming communities and protecting our environment
                  for future generations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-card p-8 rounded-3xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-lime/20 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-lime-dark" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the world's most trusted and beloved coconut products brand,
                  known for exceptional quality, innovation, and commitment to
                  sustainability and social responsibility.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our <span className="gradient-text-accent">Timeline</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Key milestones in our journey to becoming a global leader in coconut products.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className="glass-card p-6 rounded-2xl inline-block">
                        <span className="text-4xl font-display font-bold gradient-text-accent">
                          {item.year}
                        </span>
                        <h3 className="text-xl font-display font-semibold mt-2 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="w-4 h-4 rounded-full bg-primary shrink-0 relative z-10 hidden md:block">
                      <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
                    </div>

                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our <span className="gradient-text">Values</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Yalico Foods.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 rounded-2xl text-center group hover:shadow-glow transition-all"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
                  >
                    <value.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-display font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
