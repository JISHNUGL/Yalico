import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-lg mx-auto"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-[10rem] leading-none mb-4"
            >
              🥥
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold gradient-text-accent mb-4">
              404
            </h1>
            <p className="text-xl font-display font-semibold mb-2">
              Oops! Page Not Found
            </p>
            <p className="text-muted-foreground mb-8">
              Looks like this coconut rolled away. The page you're looking for 
              doesn't exist or has been moved.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="tropical" size="lg">
                <Link to="/">
                  <Home className="w-5 h-5" />
                  Go Home
                </Link>
              </Button>
              <Button asChild variant="glass" size="lg">
                <Link to="/products">
                  <ArrowLeft className="w-5 h-5" />
                  View Products
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
