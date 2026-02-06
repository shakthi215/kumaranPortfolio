import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap, Briefcase } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
 
 const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { ref: parallaxRef, y: parallaxY } = useParallax({ offset: 30 });
 
   const highlights = [
     { icon: MapPin, label: "Location", value: "Chennai, India" },
     { icon: GraduationCap, label: "Education", value: "B.Tech CS" },
     { icon: Briefcase, label: "Focus", value: "Data Analytics" },
   ];
 
   return (
    <section id="about" className="section-padding bg-secondary/30 relative overflow-hidden" ref={ref}>
      <motion.div ref={parallaxRef} style={{ y: parallaxY }} className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.6 }}
           className="max-w-4xl mx-auto"
         >
           {/* Section Header */}
           <div className="text-center mb-12">
             <motion.span
               initial={{ opacity: 0 }}
               animate={isInView ? { opacity: 1 } : {}}
               transition={{ delay: 0.2 }}
               className="text-primary font-mono text-sm"
             >
               01. About Me
             </motion.span>
             <motion.h2
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: 0.3 }}
               className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2"
             >
               Who I Am
             </motion.h2>
           </div>
 
           {/* Content */}
           <div className="grid md:grid-cols-2 gap-8 items-center">
             {/* Text Content */}
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ delay: 0.4 }}
               className="space-y-4"
             >
               <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                 I'm an aspiring <span className="text-primary font-semibold">Data Analyst</span> and 
                 final-year Computer Science student with a passion for turning raw data into 
                 meaningful insights that drive business decisions.
               </p>
               <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                 My journey includes hands-on experience with <span className="text-foreground font-medium">Python, SQL</span>, 
                 and visualization tools like <span className="text-foreground font-medium">Tableau</span> and{" "}
                 <span className="text-foreground font-medium">Power BI</span>. I've worked on projects 
                 ranging from sales forecasting to customer segmentation, always focusing on 
                 delivering actionable results.
               </p>
               <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                 When I'm not analyzing data, I'm exploring the latest in{" "}
                 <span className="text-primary font-semibold">AI and machine learning</span>, 
                 constantly seeking new ways to apply these technologies to real-world problems.
               </p>
             </motion.div>
 
             {/* Highlights Card */}
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               animate={isInView ? { opacity: 1, x: 0 } : {}}
               transition={{ delay: 0.5 }}
               className="relative"
             >
               <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-2xl blur-xl" />
               <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6">
                 {highlights.map((item, index) => (
                   <motion.div
                     key={item.label}
                     initial={{ opacity: 0, y: 20 }}
                     animate={isInView ? { opacity: 1, y: 0 } : {}}
                     transition={{ delay: 0.6 + index * 0.1 }}
                     className="flex items-center gap-4"
                   >
                     <div className="p-3 rounded-xl bg-primary/10 text-primary">
                       <item.icon className="h-6 w-6" />
                     </div>
                     <div>
                       <p className="text-sm text-muted-foreground">{item.label}</p>
                       <p className="font-semibold text-foreground">{item.value}</p>
                     </div>
                   </motion.div>
                 ))}
 
                 {/* Decorative element */}
                 <div className="pt-4 border-t border-border">
                   <p className="text-sm text-muted-foreground">
                     Currently looking for opportunities in
                   </p>
                   <p className="text-primary font-semibold">
                     Data Analytics & Business Intelligence
                   </p>
                 </div>
               </div>
             </motion.div>
           </div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default AboutSection;