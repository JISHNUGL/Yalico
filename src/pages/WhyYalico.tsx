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
        </Layout >
        </>
    );
};

export default WhyYalico;
