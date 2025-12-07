import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Shield, Sprout } from "lucide-react";
import yaliImg from "@/assets/Yali.jpg";

const WhyYalico = () => {
    return (
        <>
            <Helmet>
                <title>The Divine Defender - Why 'Yalico'? | Yalico Foods</title>
                <meta
                    name="description"
                    content="Yalico is inspired by the Yali, the divine defender of South Indian temples. Just as the Yali protects the temple, we protect the purity of your food."
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
                                Our Origin Story
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-6">
                                The Divine <span className="gradient-text-accent">Defender</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                                Inspired by the <strong>Yali</strong>—the mythical guardian of South Indian temples—we stand as protectors of purity in every product we craft.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* The Legend of Yali */}
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
                                        src={yaliImg}
                                        alt="Yali Statue"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="absolute bottom-8 left-8 right-8 text-white"
                                >
                                    <p className="font-display font-bold text-2xl mb-2">Simha Yali</p>
                                    <p className="text-white/80 text-sm">
                                        The Fierce Protector. Part Lion, Part Elephant. Guardian of the Sacred.
                                    </p>
                                </motion.div>
                            </motion.div>

                            {/* Content Side */}
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <div className="prose prose-lg text-muted-foreground">
                                    <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                                        Guardians of the Temple
                                    </h2>
                                    <p>
                                        In the sacred architecture of South India, the <strong>Yali</strong> (or <em>Vyala</em>) is ubiquitous. Carved into the granite pillars of temples, these mythical beasts—often depicted with the body of a lion, the trunk of an elephant, and the speed of a horse—are not mere decorations. They are <strong>Divine Defenders</strong>.
                                    </p>
                                    <p>
                                        Known for their ferocity and fearlessness, Yalis stand guard at the entrance of sanctums, protecting the purity of the divine space from malevolent forces. They symbolize the amalgamation of nature's greatest strengths: the power of the lion, the intelligence of the elephant, and the agility of the horse.
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="glass-card p-6 rounded-2xl">
                                        <Shield className="w-8 h-8 text-primary mb-4" />
                                        <h3 className="font-display font-bold text-lg mb-2">Simha Yali</h3>
                                        <p className="text-sm text-muted-foreground">
                                            The Lion-faced guardian. A symbol of strength and protection, ensuring that nothing impure enters the sacred grounds.
                                        </p>
                                    </div>
                                    <div className="glass-card p-6 rounded-2xl">
                                        <Sprout className="w-8 h-8 text-gold mb-4" />
                                        <h3 className="font-display font-bold text-lg mb-2">The Coconut</h3>
                                        <p className="text-sm text-muted-foreground">
                                            The <em>Kalpavriksha</em> facing the protector. A symbol of sustenance, health, and the raw bounty of nature.
                                        </p>
                                    </div>
                                </div>

                                <div className="glass-card p-8 rounded-3xl bg-primary/5 border-primary/20">
                                    <h3 className="text-xl font-display font-bold text-primary mb-3">
                                        Why "Yalico"?
                                    </h3>
                                    <p className="text-foreground/80 font-medium leading-relaxed">
                                        We named ourselves <strong>Yalico</strong> to honor this legacy. Just as the Yali protects the temple, we have taken a vow to protect the <strong>purity of our food</strong>. We stand guard against chemicals, artificial additives, and compromise. We are the defenders of the coconut's natural essence.
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
