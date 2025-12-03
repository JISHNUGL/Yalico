import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";

const Terms = () => {
    return (
        <>
            <Helmet>
                <title>Terms of Service | Yalico Foods</title>
                <meta name="description" content="Terms of Service for Yalico Foods." />
            </Helmet>

            <Layout>
                <section className="pt-32 pb-20">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <h1 className="text-4xl font-display font-bold mb-8">Terms of Service</h1>
                        <div className="prose prose-lg dark:prose-invert">
                            <p>Last updated: {new Date().toLocaleDateString()}</p>
                            <p>
                                Welcome to Yalico Foods. These terms and conditions outline the rules and regulations for the use of Yalico Foods' Website.
                            </p>
                            <h2>1. Terms</h2>
                            <p>
                                By accessing this website we assume you accept these terms and conditions. Do not continue to use Yalico Foods if you do not agree to take all of the terms and conditions stated on this page.
                            </p>
                            <h2>2. License</h2>
                            <p>
                                Unless otherwise stated, Yalico Foods and/or its licensors own the intellectual property rights for all material on Yalico Foods. All intellectual property rights are reserved. You may access this from Yalico Foods for your own personal use subjected to restrictions set in these terms and conditions.
                            </p>
                            <h2>3. Disclaimer</h2>
                            <p>
                                The materials on Yalico Foods' website are provided on an 'as is' basis. Yalico Foods makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                            </p>
                            <h2>4. Governing Law</h2>
                            <p>
                                These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
                            </p>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Terms;
