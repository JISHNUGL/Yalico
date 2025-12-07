import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Globe, MapPin, Ship, Plane, Award, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const regions = [
  { name: "North America", countries: ["USA", "Canada", "Mexico"], flag: "🇺🇸" },
  { name: "Europe", countries: ["UK", "Germany", "France", "Netherlands"], flag: "🇪🇺" },
  { name: "Asia Pacific", countries: ["Japan", "Australia", "Singapore", "India"], flag: "🌏" },
  { name: "Middle East", countries: ["UAE", "Saudi Arabia", "Qatar"], flag: "🇦🇪" },
  { name: "Africa", countries: ["South Africa", "Nigeria", "Kenya"], flag: "🌍" },
  { name: "South America", countries: ["Brazil", "Argentina", "Chile"], flag: "🇧🇷" },
];

const stats = [
  { icon: Globe, value: "50+", label: "Countries" },
  { icon: Users, value: "500+", label: "Partners" },
  { icon: Ship, value: "10K+", label: "Shipments/Year" },
  { icon: Award, value: "3+", label: "Years Experience" },
];

const shops = [
  { name: "The Nilgiris Super Market", address: "103-107, THIRUVENKATA SWAMY ROAD, R.S. Puram, Coimbatore, Tamil Nadu 641002" },
  { name: "Kaappi 2.0 (Eye Foundation)", address: "582A, D B ROAD, R S PURAM, COIMBATORE - 641002" },
  { name: "Durai Store - Saravana Signature Suits", address: "262, Dr Ambedkar Rd, Velandipalayam, Coimbatore 641025" },
  { name: "Stinos", address: "Barathiraja Complex, Near Angappa School, Raja Annamalai Road, Sai Baba Colony" },
  { name: "3 Circle Refreshments", address: "Ponmudi village NH47, Near vijayamangalam toll gate, Perundurai, Tamil Nadu 638056" },
  { name: "Aranganathar FPO Sales Kisok", address: "Uzhavar Sandai, Trichy Road - Singanallur. Coimbatore" },
  { name: "PSG iTech Canteens", address: "Neelambur. Coimbatore" },
  { name: "SRMV Canteens", address: "Perianaikanpalayam, Coimbatore" },
];

const Global = () => {
  return (
    <>
      <Helmet>
        <title>Global Reach - Export & Distribution | Yalico Foods</title>
        <meta name="description" content="Yalico Foods exports premium coconut products to 50+ countries worldwide. Become a distributor or partner with us for quality coconut products." />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Globe className="w-4 h-4 inline mr-2" />
                Worldwide Distribution
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                <span className="gradient-text-accent">Global</span> Reach
              </h1>
              <p className="text-lg text-muted-foreground">
                From our tropical farms to tables worldwide. We deliver premium
                coconut products to over 50 countries across 6 continents.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-6 rounded-2xl text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="text-3xl font-display font-bold gradient-text-accent mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* World Map */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden"
            >
              {/* Animated Globe Background */}
              <div className="relative aspect-[2/1] min-h-[400px] flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%2332C8FF' stroke-width='0.5'/%3E%3Cellipse cx='50' cy='50' rx='40' ry='15' fill='none' stroke='%2332C8FF' stroke-width='0.3'/%3E%3Cellipse cx='50' cy='50' rx='40' ry='15' fill='none' stroke='%2332C8FF' stroke-width='0.3' transform='rotate(60 50 50)'/%3E%3Cellipse cx='50' cy='50' rx='40' ry='15' fill='none' stroke='%2332C8FF' stroke-width='0.3' transform='rotate(120 50 50)'/%3E%3C/svg%3E")`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />

                {/* Central Icon */}
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative z-10 text-center"
                >
                  <div className="text-8xl mb-4">🌎</div>
                  <p className="font-display font-bold text-2xl text-foreground">
                    Serving <span className="gradient-text-accent">50+ Countries</span>
                  </p>
                </motion.div>

                {/* Floating Location Pins */}
                {[
                  { top: "20%", left: "20%", delay: 0 },
                  { top: "30%", right: "25%", delay: 0.5 },
                  { bottom: "35%", left: "30%", delay: 1 },
                  { bottom: "25%", right: "20%", delay: 1.5 },
                  { top: "50%", left: "15%", delay: 2 },
                ].map((pos, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: pos.delay, duration: 0.5 }}
                    style={{ position: "absolute", ...pos }}
                    className="hidden md:block"
                  >
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: pos.delay }}
                    >
                      <MapPin className="w-8 h-8 text-primary fill-primary/20" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Export Regions */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Our Export <span className="gradient-text-accent">Regions</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We have established distribution networks across major markets worldwide.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regions.map((region, index) => (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 rounded-2xl group hover:shadow-glow transition-all"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-4xl">{region.flag}</span>
                    <h3 className="text-xl font-display font-semibold group-hover:text-primary transition-colors">
                      {region.name}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {region.countries.map((country) => (
                      <span
                        key={country}
                        className="px-3 py-1 rounded-full bg-muted text-xs font-medium text-muted-foreground"
                      >
                        {country}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Domestic Retail Partners */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                Retail <span className="gradient-text">Partners</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find our premium products at these select retail locations across Tamil Nadu.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {shops.map((shop, index) => (
                <motion.div
                  key={shop.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card p-6 rounded-2xl group hover:shadow-glow transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {shop.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {shop.address}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Shipping Info */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  Fast & Reliable <span className="gradient-text">Shipping</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  We partner with leading logistics providers to ensure your orders
                  reach you safely and on time, anywhere in the world.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: Ship, title: "Sea Freight", desc: "Cost-effective for bulk orders" },
                    { icon: Plane, title: "Air Freight", desc: "Fast delivery for urgent orders" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{item.title}</p>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-3xl"
              >
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center">
                  <span className="text-8xl">🚢</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Become a Distributor CTA */}
        <section className="py-20 bg-gradient-to-r from-secondary to-primary-dark">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary-foreground mb-4">
                Become a Distributor
              </h2>
              <p className="text-secondary-foreground/80 mb-8 max-w-xl mx-auto">
                Join our global network of partners. We offer competitive margins,
                marketing support, and exclusive territory rights.
              </p>
              <Button asChild variant="accent" size="xl">
                <Link to="/contact">
                  Apply Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Global;
