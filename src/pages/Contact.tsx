import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const productInterests = [
  "Crispy Coconut Rolls",
  "Crispy Coconut Egg Rolls",
  "Crispy Coconut Crackers",
  "Crispy Coconut Pepper Rolls",
  "Bulk Order",
  "Distributor Inquiry",
  "Other",
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    value: "yalicofoods@gmail.com",
    href: "mailto:yalicofoods@gmail.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 83006 17317",
    href: "tel:+918300617317",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Vel Trader, Mettupalayam Rd, Coimbatore, TN",
    href: "#",
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon - Fri: 9AM - 6PM",
    href: "#",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: "", email: "", phone: "", interest: "", message: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (formData.phone && !/^\+?[\d\s-]+$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Construct mailto link
    const subject = `New Inquiry from ${formData.name}: ${formData.interest}`;
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Interest: ${formData.interest}

Message:
${formData.message}`;

    // Open email client
    window.location.href = `mailto:yalicofoods@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Simulate form submission delay for UI feedback
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Email Client Opened",
      description: "Please send the email from your mail client to complete the inquiry.",
    });

    setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
    setErrors({ name: "", email: "", phone: "", interest: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch | Yalico Foods</title>
        <meta name="description" content="Contact Yalico Foods for inquiries about our premium coconut products, bulk orders, distribution opportunities, or any questions. We're here to help!" />
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
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                <span className="gradient-text-accent">Contact</span> Us
              </h1>
              <p className="text-lg text-muted-foreground">
                Have questions about our products? Want to place a bulk order?
                We'd love to hear from you. Reach out and let's talk!
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <div className="glass-card p-8 rounded-3xl">
                  <h2 className="text-2xl font-display font-bold mb-6">Send us a Message</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          className={errors.name ? "border-red-500 bg-red-50" : "bg-background/50"}
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          className={errors.email ? "border-red-500 bg-red-50" : "bg-background/50"}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number</label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 234 567 890"
                          className={errors.phone ? "border-red-500 bg-red-50" : "bg-background/50"}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Product Interest</label>
                        <select
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full h-11 px-4 rounded-full border border-input bg-background/50 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        >
                          <option value="">Select a product</option>
                          {productInterests.map((interest) => (
                            <option key={interest} value={interest}>
                              {interest}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your inquiry..."
                        rows={5}
                        className={`rounded-2xl ${errors.message ? "border-red-500 bg-red-50" : "bg-background/50"}`}
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>

                    <Button
                      type="submit"
                      variant="tropical"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full md:w-auto"
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="glass-card p-6 rounded-2xl flex items-center gap-4 group hover:shadow-glow transition-all block"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.title}</p>
                      <p className="font-semibold group-hover:text-primary transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </motion.a>
                ))}

                {/* WhatsApp CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="glass-card p-6 rounded-2xl bg-[#25D366]/10 border-[#25D366]/20"
                >
                  <h3 className="font-display font-semibold mb-2">Quick Response?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Chat with us on WhatsApp for instant support.
                  </p>
                  <Button
                    variant="whatsapp"
                    className="w-full"
                    onClick={() =>
                      window.open(
                        "https://wa.me/918300617317?text=" +
                        encodeURIComponent("Hi! I have a question about Yalico products."),
                        "_blank"
                      )
                    }
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat on WhatsApp
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-4 rounded-3xl overflow-hidden"
            >
              <div className="aspect-[2/1] md:aspect-[3/1] rounded-2xl overflow-hidden relative">
                <iframe
                  src="https://maps.google.com/maps?q=loc:11.1793208,76.9556866&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Vel Trader Location"
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
              <div className="text-center p-8">
                <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-display font-bold text-2xl mb-2">Visit Our Facility</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Vel Trader, Sakthi Nagar, 1/60, Mettupalayam Rd, Press Colony, Coimbatore, Tamil Nadu 641019
                </p>
                <p className="text-sm text-muted-foreground mt-4">
                  Tours available by appointment
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Shipping Info Section */}
        <section id="shipping" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-display font-bold mb-8 text-center">Shipping Information</h2>
              <div className="glass-card p-8 rounded-3xl space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Domestic Shipping</h3>
                  <p className="text-muted-foreground">
                    We ship across India via reliable courier partners. Standard delivery takes 3-5 business days depending on your location.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">International Shipping</h3>
                  <p className="text-muted-foreground">
                    For international orders, please contact our export team directly for shipping rates and delivery timelines.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tracking</h3>
                  <p className="text-muted-foreground">
                    Once your order is dispatched, you will receive a tracking number via email/SMS to track your package.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-display font-bold mb-8 text-center">Frequently Asked Questions</h2>
              <div className="grid gap-6">
                {[
                  {
                    q: "Are your products 100% organic?",
                    a: "Yes, we source our coconuts from certified organic farms in Pollachi to ensure the highest quality and purity."
                  },
                  {
                    q: "Do you offer bulk purchasing?",
                    a: "Absolutely! We supply to retailers, distributors, and food manufacturers. Please use the contact form for bulk inquiries."
                  },
                  {
                    q: "Are the coconut rolls gluten-free?",
                    a: "Our coconut rolls are made with rice flour and coconut milk, making them naturally gluten-free. Please check the packaging for specific allergen information."
                  },
                  {
                    q: "What is the shelf life of your products?",
                    a: "Most of our dried coconut products have a shelf life of 12-18 months when stored in a cool, dry place."
                  }
                ].map((faq, index) => (
                  <div key={index} className="glass-card p-6 rounded-2xl">
                    <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                    <p className="text-muted-foreground">{faq.a}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
