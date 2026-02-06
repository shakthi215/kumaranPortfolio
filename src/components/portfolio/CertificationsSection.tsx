 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 import { Award, ExternalLink } from "lucide-react";
 
 const certifications = [
   {
     title: "Data Analyst Certificate",
     issuer: "Simplilearn",
     category: "Data Analytics",
   },
   {
     title: "Big Data Computing",
     issuer: "NPTEL",
     category: "Big Data",
   },
   {
     title: "Introduction to Industry 4.0 and IIoT",
     issuer: "NPTEL",
     category: "Industry 4.0",
   },
   {
     title: "Privacy and Security in Online Social Media",
     issuer: "NPTEL",
     category: "Cybersecurity",
   },
   {
     title: "Business Law for Managers",
     issuer: "NPTEL",
     category: "Business",
   },
   {
     title: "Developing a Competitive Strategy",
     issuer: "LinkedIn Learning",
     category: "Strategy",
   },
   {
     title: "Master Your Leadership Effectiveness",
     issuer: "LinkedIn Learning",
     category: "Leadership",
   },
   {
     title: "Introduction to Management",
     issuer: "Great Learning",
     category: "Management",
   },
 ];
 
 const CertificationsSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section
       id="certifications"
       className="section-padding bg-secondary/30"
       ref={ref}
     >
       <div className="container mx-auto px-4 md:px-6">
         {/* Section Header */}
         <div className="text-center mb-12 md:mb-16">
           <motion.span
             initial={{ opacity: 0 }}
             animate={isInView ? { opacity: 1 } : {}}
             transition={{ delay: 0.2 }}
             className="text-primary font-mono text-sm"
           >
             05. Credentials
           </motion.span>
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ delay: 0.3 }}
             className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2"
           >
             Certifications
           </motion.h2>
         </div>
 
         {/* Certifications Grid */}
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
           {certifications.map((cert, index) => (
             <motion.div
               key={cert.title}
               initial={{ opacity: 0, scale: 0.9 }}
               animate={isInView ? { opacity: 1, scale: 1 } : {}}
               transition={{ delay: 0.3 + index * 0.05 }}
               whileHover={{ y: -5, scale: 1.02 }}
               className="group"
             >
               <div className="h-full bg-card border border-border rounded-xl p-5 transition-all hover:border-primary/50 hover:shadow-lg">
                 {/* Header */}
                 <div className="flex items-start gap-3 mb-3">
                   <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                     <Award className="h-4 w-4" />
                   </div>
                   <span className="text-xs font-mono text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                     {cert.category}
                   </span>
                 </div>
 
                 {/* Title */}
                 <h3 className="font-semibold text-foreground mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                   {cert.title}
                 </h3>
 
                 {/* Issuer */}
                 <p className="text-sm text-muted-foreground flex items-center gap-1">
                   {cert.issuer}
                   <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                 </p>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default CertificationsSection;