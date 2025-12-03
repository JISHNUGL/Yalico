import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";

const Privacy = () => {
    return (
        <>
            <Helmet>
                <title>Privacy Policy | Yalico Foods</title>
                <meta name="description" content="Privacy Policy for Yalico Foods." />
            </Helmet>

            <Layout>
                <section className="pt-32 pb-20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h1 className="text-4xl font-display font-bold mb-8">Privacy Policy</h1>
                        <div className="prose prose-lg dark:prose-invert">
                            <p>Last updated: {new Date().toLocaleDateString()}</p>
                            <p>
                                At Yalico Foods, we respect your privacy and are committed to protecting your personal data.
                                This privacy policy will inform you as to how we look after your personal data when you visit
                                our website and tell you about your privacy rights and how the law protects you.
                            </p>
                            <h2>1. Information We Collect</h2>
                            <p>
                                We may collect, use, store and transfer different kinds of personal data about you which we
                                have grouped together follows: Identity Data, Contact Data, Technical Data, and Usage Data.
                            </p>
                            <h2>2. How We Use Your Data</h2>
                            <p>
                                We will only use your personal data when the law allows us to. Most commonly, we will use
                                your personal data in the following circumstances:
                            </p>
                            <ul>
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                <li>Where we need to comply with a legal or regulatory obligation.</li>
                            </ul>
                            <h2>3. Contact Us</h2>
                            <p>
                                If you have any questions about this privacy policy or our privacy practices, please contact us at:{" "}
                                <a href="mailto:yalicofoods@gmail.com" className="text-primary hover:underline">
                                    yalicofoods@gmail.com
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Privacy;
