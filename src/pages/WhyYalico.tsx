import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Trees, Shield, Sprout, Combine } from "lucide-react";
import storyBg from "@/assets/our story.jpg"; // Using existing asset as placeholder or generic

const WhyYalico = () => {
    return (
        <>
            <Helmet>
                <title>Unless Nature - The Name 'Yalico' | Yalico Foods</title>
                <meta
                    name="description"
                    content="Discover the meaning behind Yalico. A fusion of the mythical Yali and the humble Coconut, representing our commitment to tradition and nature."
                />
            </Helmet>

            <Layout>
                {/* Hero Section */}
                <section className="pt-32 pb-20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                                Our Identity
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6">
                                Why <span className="gradient-text-accent">Yalico</span>?
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                                A name rooted in mythology, grounded in nature, and built for the future.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* The Meaning Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Image Side */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden">
                                    <img
                                        src={storyBg}
                                        alt="Yali Statue and Nature"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                </div>

                                {/* Floating Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="absolute -bottom-6 -right-6 glass-card p-6 rounded-2xl max-w-xs hidden md:block"
                                >
                                    <p className="font-display font-bold text-lg text-primary">"Protector of Purity"</p>
                                </motion.div>
                            </motion.div>

                            {/* Content Side */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <div className="glass-card p-8 rounded-3xl space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <Shield className="w-6 h-6 text-primary" />
                                        </div>
                                        <h2 className="text-3xl font-display font-bold">The Yali</h2>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        The <strong>Yali</strong> is a mythical creature seen in Hindu temples across South India. Part lion, part elephant, and part horse, it serves as a divine guardian and protector. It symbolizes fearless strength, power, and the ferocity needed to protect what is sacred.
                                    </p>
                                </div>

                                <div className="glass-card p-8 rounded-3xl space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                                            <Trees className="w-6 h-6 text-secondary" />
                                        </div>
                                        <h2 className="text-3xl font-display font-bold">The Co(conut)</h2>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        <strong>Co</strong> represents the Coconut — the Kalpavriksha (Wish-fulfilling tree). It is the heart of our business, symbolizing purity, health, and the bounty of nature that we bring to your table.
                                    </p>
                                </div>

                                <div className="glass-card p-8 rounded-3xl bg-primary/5 border-primary/20 space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                            <Combine className="w-6 h-6 text-white" />
                                        </div>
                                        <h2 className="text-3xl font-display font-bold text-primary">Yalico</h2>
                                    </div>
                                    <p className="text-foreground/80 leading-relaxed font-medium">
                                        Together, <strong>Yalico</strong> stands for guardians of purity. We protect the traditional methods of farming and food preparation while delivering the raw power of nature's best ingredients to the world.
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Values Showcase */}
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <Sprout className="w-12 h-12 text-primary mx-auto mb-6" />
                            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                                More Than Just A Name
                            </h2>
                            <p className="text-muted-foreground text-lg">
                                Our name is a promise. A promise to protect the quality of your food, preserve the sanctity of our soil, and promote the health of our community.
                            </p>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default WhyYalico;
