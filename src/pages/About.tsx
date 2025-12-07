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
    title: "Roots of Tradition",
    description: "Founded under Vel Traders, bringing the legacy of Pollachi's coconut farming to the world.",
    image: storyBg,
    color: "from-green-400 to-emerald-600"
  },
  {
    year: "2023",
    title: "The First Harvest",
    description: "Launched India's first crunchy Coconut Rolls. A hit with families seeking healthy, tasty treats.",
    image: img2023,
    color: "from-amber-300 to-orange-500"
  },
  {
    year: "2024",
    title: "Global Horizons",
    description: "Taking 'Make in India' global. Expansion into international markets and new territories.",
    image: img2024,
    color: "from-blue-400 to-indigo-600"
  },
  {
    year: "Future",
    title: "Boundless Innovation",
    description: "Developing next-gen nutrition: Energy Powders and Spicy Pepper Rolls.",
    image: imgFuture,
    color: "from-purple-400 to-pink-600"
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

        {/* Timeline */}
        <section className="py-24 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]"
            style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}
          />

          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <span className="text-gold font-display font-medium tracking-wider uppercase mb-2 block">Our Growth</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                The <span className="gradient-text-accent">Timeline</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Tracing our roots from a humble idea to a global movement.
              </p>
            </motion.div>

            {/* Visual Storyboard Timeline - Trendier & Attractive */}
            <section className="py-32 relative overflow-hidden bg-muted/20">
              {/* Background Elements */}
              <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gold/20 rounded-full blur-[100px]" />
              </div>

              <div className="container mx-auto px-4 relative">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-24"
                >
                  <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold">Odyssey</span>
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Every year is a new chapter in our story of purity and passion.
                  </p>
                </motion.div>

                <div className="relative space-y-32">
                  {/* Connecting Line (Dashed Curve simulation with straight line for mobile compatibility) */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-gold/50 to-transparent -translate-x-1/2 hidden md:block" />

                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-10%" }}
                      transition={{ duration: 0.8 }}
                      className={`flex flex-col md:flex-row items-center gap-12 md:gap-24 relative ${index % 2 === 0 ? "" : "md:flex-row-reverse"
                        }`}
                    >
                      {/* Timeline Date Marker */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hidden md:flex items-center justify-center w-20 h-20 bg-background rounded-full border-4 border-muted shadow-xl">
                        <span className="text-sm font-bold text-muted-foreground">{item.year}</span>
                      </div>

                      {/* Visual Content (Image) */}
                      <div className="w-full md:w-1/2">
                        <motion.div
                          whileHover={{ scale: 1.02, rotate: index % 2 === 0 ? 1 : -1 }}
                          className="group relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl"
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-20 mix-blend-overlay z-10 transition-opacity group-hover:opacity-30`} />
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          {/* Year Overlay for Mobile */}
                          <div className="absolute top-4 left-4 md:hidden bg-background/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                            {item.year}
                          </div>
                        </motion.div>
                      </div>

                      {/* Text Content */}
                      <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                        <div className="relative inline-block">
                          <span className={`absolute -top-12 opacity-10 text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br ${item.color} select-none -z-10 ${index % 2 === 0 ? "right-0" : "left-0"}`}>
                            {item.year}
                          </span>
                          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 text-foreground leading-tight">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
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
