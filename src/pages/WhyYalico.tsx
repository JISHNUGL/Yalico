import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Shield, Sprout, Combine, Sparkles } from "lucide-react";
import yaliImg from "@/assets/Yali.jpg";

const WhyYalico = () => {
    const { scrollYProgress } = useScroll();
    const yVideo = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

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
                <section className="pt-32 pb-32 relative overflow-hidden bg-primary/5">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px] translate-y-1/4 -translate-x-1/4" />

                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 opacity-[0.03]"
                        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}
                    />

                    <div className="container mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-center max-w-5xl mx-auto"
                        >
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-gold/20 to-primary/10 border border-gold/20 text-gold-dark text-sm font-bold tracking-wide mb-8"
                            >
                                <Sparkles className="w-4 h-4" />
                                OUR SACRED ORIGIN
                            </motion.span>

                            <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold mb-8 leading-tight">
                                The Divine <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-gold animate-gradient-x">Defender</span>
                            </h1>

                            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                Inspired by the <strong>Yali</strong>—the mythical guardian of South Indian temples—we stand as <span className="text-primary font-semibold">protectors of purity</span> to guarding nature's essence.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* The Legend of Yali - Content Rich Section */}
                <section className="py-24 relative">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Image Side with Premium Border */}
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="relative group"
                            >
                                {/* Gold Frame Effect */}
                                <div className="absolute -inset-4 border-2 border-gold/30 rounded-[2.5rem] md:translate-x-4 md:translate-y-4 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />

                                <div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl">
                                    <motion.img
                                        style={{ y: yVideo }}
                                        src={yaliImg}
                                        alt="Yali Statue"
                                        className="w-full h-full object-cover scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                    {/* Glass Overlay Text */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white"
                                    >
                                        <div className="w-16 h-1 bg-gold mb-6 rounded-full" />
                                        <h3 className="font-display font-bold text-4xl mb-3 text-gold">Simha Yali</h3>
                                        <p className="text-white/90 text-lg font-light leading-relaxed">
                                            The Fierce Protector. <br />
                                            Part Lion. Part Elephant. Part Horse.
                                        </p>
                                    </motion.div>
                                </div>
                            </motion.div>

                            {/* Content Side with Cards */}
                            <div className="space-y-10">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="prose prose-lg text-muted-foreground"
                                >
                                    <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                                        Guardians of the <span className="gradient-text-accent">Temple</span>
                                    </h2>
                                    <p className="text-lg">
                                        In the sacred architecture of South India, the <strong>Yali</strong> is ubiquitous. Carved into granite pillars, these mythical beasts are not mere decorations—they are <strong>Divine Defenders</strong>.
                                    </p>
                                    <p className="text-lg">
                                        They stand guard at sanctum entrances, protecting the purity of the divine space. They symbolize the amalgamation of nature's greatest strengths:
                                    </p>
                                </motion.div>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    {[
                                        {
                                            icon: Shield,
                                            title: "Lion's Power",
                                            desc: "Strength to protect what is sacred from impurity.",
                                            color: "text-amber-600",
                                            bg: "bg-amber-50"
                                        },
                                        {
                                            icon: Combine,
                                            title: "Elephant's Wisdom",
                                            desc: "Intelligence to distinguish the pure from the artificial.",
                                            color: "text-emerald-600",
                                            bg: "bg-emerald-50"
                                        }
                                    ].map((item, i) => (
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.2 + (i * 0.1) }}
                                            className="glass-card p-6 rounded-2xl border border-border/50 hover:border-gold/30 hover:shadow-lg transition-all duration-300 group"
                                        >
                                            <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                                <item.icon className={`w-6 h-6 ${item.color}`} />
                                            </div>
                                            <h3 className="font-display font-bold text-xl mb-2">{item.title}</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="relative p-8 rounded-3xl bg-gradient-to-br from-primary to-primary-dark text-white overflow-hidden shadow-xl"
                                >
                                    {/* Abstract shapes */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-fullblur-2xl -translate-y-1/2 translate-x-1/2" />

                                    <div className="relative z-10">
                                        <h3 className="text-2xl font-display font-bold mb-3 flex items-center gap-3">
                                            <Sprout className="w-6 h-6 text-gold" />
                                            Why "Yalico"?
                                        </h3>
                                        <p className="text-primary-foreground/90 font-medium leading-relaxed text-lg">
                                            We named ourselves <strong>Yalico</strong> to honor this legacy. We have taken a vow to protect the <strong>purity of our food</strong>. We stand guard against chemicals and compromise. We are the defenders of the coconut's natural essence.
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Decorative Separator */}
                <div className="w-full flex justify-center py-8 opacity-20">
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                </div>

                {/* Promise Section */}
                <section className="py-24 bg-gradient-to-b from-background to-muted/30">
                    <div className="container mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-gold/20 to-primary/10 rounded-full flex items-center justify-center mb-8">
                                <Sparkles className="w-10 h-10 text-gold-dark" />
                            </div>
                            <h2 className="text-4xl md:text-6xl font-display font-bold mb-8">
                                More Than Just A Name
                            </h2>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                "Our name is a <span className="text-primary font-bold">promise</span>. A promise to protect the quality of your food, preserve the sanctity of our soil, and promote the health of our community."
                            </p>
                        </motion.div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default WhyYalico;
