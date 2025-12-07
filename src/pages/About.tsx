import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Leaf, Heart, Target, Eye, Users, Award } from "lucide-react";

import storyBg from "@/assets/our story.jpg";
import img2023 from "@/assets/coconut-roll.jpg";
import img2024 from "@/assets/hero-bg.jpg"; // Placeholder for global
import imgFuture from "@/assets/coconut-pepper-roll.jpg"; // Placeholder

const timeline = [
  {
    year: "2022",
    title: "The Seeds of Tradition",
    description: "Founded under Vel Traders, planting the first seeds of a legacy rooted in Pollachi's rich coconut farming heritage.",
    icon: Leaf,
    color: "from-emerald-500 to-green-700",
    bg: "bg-emerald-50"
  },
  {
    year: "2023",
    title: "The Golden Harvest",
    description: "A year of creation. We launched India's first crunchy Coconut Rolls, bringing a golden taste to families everywhere.",
    icon: Award,
    color: "from-amber-400 to-orange-600",
    bg: "bg-amber-50"
  },
  {
    year: "2024",
    title: "Crossing Oceans",
    description: "Taking the 'Make in India' spirit to the world. A time of rapid expansion into new global territories.",
    icon: Target,
    color: "from-blue-500 to-indigo-700",
    bg: "bg-blue-50"
  },
  {
    year: "Future",
    title: "The Innovation Horizon",
    description: "Looking ahead to next-gen nutrition with Energy Powders and bold new flavors. The journey never ends.",
    icon: Eye,
    color: "from-purple-500 to-pink-700",
    bg: "bg-purple-50"
  },
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
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${storyBg})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
          </div>

          {/* Floating decorations */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-40 right-20 w-32 h-32 opacity-20"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full fill-gold">
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
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-gold/20 to-primary/20 flex items-center justify-center">
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
                <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-gold" />
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

        {/* Legacy Grid - The New "Non-Timeline" Format */}
        <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Our <span className="gradient-text-accent">Legacy</span> in the Making
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Not just dates on a calendar, but eras of dedication, growth, and flavor.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-[2rem] opacity-20 group-hover:opacity-60 blur transition duration-500`} />
                  <div className="relative h-full bg-card/50 backdrop-blur-xl border border-white/10 p-8 lg:p-10 rounded-[2rem] overflow-hidden hover:bg-card/80 transition-colors">
                    {/* Decorative Year Watermark */}
                    <span className={`absolute -right-4 -bottom-8 text-[8rem] font-display font-black text-transparent bg-clip-text bg-gradient-to-br ${item.color} opacity-[0.08] select-none pointer-events-none`}>
                      {item.year === "Future" ? "NEXT" : item.year}
                    </span>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <div className={`p-3 rounded-full border-2 border-${item.color.split(' ')[1].replace('to-', '')}/20 shadow-lg`}>
                          <item.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                        </div>
                        <span className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-muted-foreground/30 to-muted-foreground/10">
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
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
