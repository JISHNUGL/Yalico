import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ProductsSection } from "@/components/home/ProductsSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Yalico Foods - Premium Organic Coconut Products | Global Supplier</title>
        <meta
          name="description"
          content="Discover Yalico Foods' premium organic coconut products. Virgin coconut oil, coconut milk, coconut water & more. Sustainably sourced, globally delivered."
        />
        <meta name="keywords" content="coconut oil, coconut milk, organic coconut, virgin coconut oil, coconut water, coconut products, tropical foods" />
        <link rel="canonical" href="https://yalicofoods.com" />

        {/* Open Graph */}
        <meta property="og:title" content="Yalico Foods - Premium Organic Coconut Products" />
        <meta property="og:description" content="Experience the finest coconut products from nature's paradise. 100% organic, sustainably sourced." />
        <meta property="og:type" content="website" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Yalico Foods",
            "description": "Premium organic coconut products supplier",
            "url": "https://yalicofoods.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-234-567-890",
              "contactType": "sales"
            }
          })}
        </script>
      </Helmet>

      <Layout>
        <HeroSection />
        <ProductsSection />
        <BenefitsSection />
        <TestimonialsSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
