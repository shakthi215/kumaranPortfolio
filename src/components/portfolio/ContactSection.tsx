 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef, useState } from "react";
 import { Send, Mail, Linkedin, Github, MapPin, CheckCircle } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { useToast } from "@/components/ui/use-toast";
 
 const ContactSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
   const { toast } = useToast();
 
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     message: "",
   });
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [isSubmitted, setIsSubmitted] = useState(false);
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);
 
     // Simulate form submission (will be replaced with backend later)
     await new Promise((resolve) => setTimeout(resolve, 1500));
 
     setIsSubmitting(false);
     setIsSubmitted(true);
     setFormData({ name: "", email: "", message: "" });
 
     toast({
       title: "Message sent!",
       description: "Thank you for reaching out. I'll get back to you soon!",
     });
 
     setTimeout(() => setIsSubmitted(false), 3000);
   };
 
   const contactInfo = [
     {
       icon: Mail,
       label: "Email",
       value: "kumaranbabu99@gmail.com",
       href: "mailto:kumaranbabu99@gmail.com",
     },
     {
       icon: Linkedin,
       label: "LinkedIn",
       value: "Kumaran B",
       href: "https://www.linkedin.com/in/kumaran-b-484946253/",
     },
     {
       icon: Github,
       label: "GitHub",
       value: "kumaranb99",
       href: "https://github.com/kumaran12348",
     },
     {
       icon: MapPin,
       label: "Location",
       value: "Chennai, India",
       href: null,
     },
   ];
 
   return (
     <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
       <div className="container mx-auto px-4 md:px-6">
         {/* Section Header */}
         <div className="text-center mb-12 md:mb-16">
           <motion.span
             initial={{ opacity: 0 }}
             animate={isInView ? { opacity: 1 } : {}}
             transition={{ delay: 0.2 }}
             className="text-primary font-mono text-sm"
           >
             07. Get In Touch
           </motion.span>
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ delay: 0.3 }}
             className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2"
           >
             Contact Me
           </motion.h2>
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ delay: 0.4 }}
             className="text-muted-foreground mt-4 max-w-2xl mx-auto"
           >
             Have a project in mind or want to discuss data analytics
             opportunities? I'd love to hear from you!
           </motion.p>
         </div>
 
         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
           {/* Contact Form */}
           <motion.div
             initial={{ opacity: 0, x: -30 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ delay: 0.4 }}
           >
             <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
               <form onSubmit={handleSubmit} className="space-y-5">
                 <div>
                   <label
                     htmlFor="name"
                     className="block text-sm font-medium text-foreground mb-2"
                   >
                     Your Name
                   </label>
                   <Input
                     id="name"
                     value={formData.name}
                     onChange={(e) =>
                       setFormData({ ...formData, name: e.target.value })
                     }
                     placeholder="John Doe"
                     required
                     className="bg-background"
                   />
                 </div>
 
                 <div>
                   <label
                     htmlFor="email"
                     className="block text-sm font-medium text-foreground mb-2"
                   >
                     Your Email
                   </label>
                   <Input
                     id="email"
                     type="email"
                     value={formData.email}
                     onChange={(e) =>
                       setFormData({ ...formData, email: e.target.value })
                     }
                     placeholder="john@example.com"
                     required
                     className="bg-background"
                   />
                 </div>
 
                 <div>
                   <label
                     htmlFor="message"
                     className="block text-sm font-medium text-foreground mb-2"
                   >
                     Message
                   </label>
                   <Textarea
                     id="message"
                     value={formData.message}
                     onChange={(e) =>
                       setFormData({ ...formData, message: e.target.value })
                     }
                     placeholder="Tell me about your project or opportunity..."
                     required
                     rows={5}
                     className="bg-background resize-none"
                   />
                 </div>
 
                 <Button
                   type="submit"
                   disabled={isSubmitting || isSubmitted}
                   className="w-full rounded-xl bg-primary hover:bg-primary-dark text-primary-foreground font-semibold py-6"
                 >
                   {isSubmitting ? (
                     <motion.div
                       animate={{ rotate: 360 }}
                       transition={{
                         duration: 1,
                         repeat: Infinity,
                         ease: "linear",
                       }}
                       className="w-5 h-5 border-2 border-primary-foreground border-t-transparent rounded-full"
                     />
                   ) : isSubmitted ? (
                     <>
                       <CheckCircle className="h-5 w-5 mr-2" />
                       Sent Successfully!
                     </>
                   ) : (
                     <>
                       <Send className="h-5 w-5 mr-2" />
                       Send Message
                     </>
                   )}
                 </Button>
               </form>
             </div>
           </motion.div>
 
           {/* Contact Info */}
           <motion.div
             initial={{ opacity: 0, x: 30 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ delay: 0.5 }}
             className="space-y-6"
           >
             <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
               <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                 Let's Connect
               </h3>
 
               <div className="space-y-4">
                 {contactInfo.map((info, index) => (
                   <motion.div
                     key={info.label}
                     initial={{ opacity: 0, y: 10 }}
                     animate={isInView ? { opacity: 1, y: 0 } : {}}
                     transition={{ delay: 0.6 + index * 0.1 }}
                   >
                     {info.href ? (
                       <a
                         href={info.href}
                         target={
                           info.href.startsWith("http") ? "_blank" : undefined
                         }
                         rel="noopener noreferrer"
                         className="flex items-center gap-4 p-3 rounded-xl hover:bg-secondary transition-colors group"
                       >
                         <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                           <info.icon className="h-5 w-5" />
                         </div>
                         <div>
                           <p className="text-sm text-muted-foreground">
                             {info.label}
                           </p>
                           <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                             {info.value}
                           </p>
                         </div>
                       </a>
                     ) : (
                       <div className="flex items-center gap-4 p-3">
                         <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                           <info.icon className="h-5 w-5" />
                         </div>
                         <div>
                           <p className="text-sm text-muted-foreground">
                             {info.label}
                           </p>
                           <p className="font-medium text-foreground">
                             {info.value}
                           </p>
                         </div>
                       </div>
                     )}
                   </motion.div>
                 ))}
               </div>
             </div>
 
             {/* Availability */}
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: 0.8 }}
               className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6"
             >
               <div className="flex items-center gap-3 mb-2">
                 <span className="relative flex h-3 w-3">
                   <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                   <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                 </span>
                 <span className="font-semibold text-foreground">
                   Currently Available
                 </span>
               </div>
               <p className="text-sm text-muted-foreground">
                 Open to internships, full-time positions, and freelance
                 projects in Data Analytics and Business Intelligence.
               </p>
             </motion.div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };
 
 export default ContactSection;