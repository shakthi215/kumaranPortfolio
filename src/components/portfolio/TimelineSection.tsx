import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
 
 const timelineData = [
   {
     type: "work",
     title: "AI Intern",
     organization: "Retech Solutions Pvt. Ltd.",
     location: "Remote",
     period: "March 2025 – April 2025",
     description: [
       "Worked on 'Fraud Detection in Financial Transactions' using AI",
       "Applied machine learning techniques for detecting suspicious activities",
       "Collaborated remotely with mentors to complete project milestones",
       "Gained practical exposure to AI-driven solutions in fintech",
     ],
   },
   {
     type: "education",
     title: "B.Tech Computer Science & Business Systems",
     organization: "Rajalakshmi Engineering College",
     location: "Anna University",
     period: "2022 – 2026",
     description: [
       "Specializing in Computer Science with Business Systems",
       "Relevant coursework: Data Structures, Machine Learning, Database Management",
       "Active participation in technical clubs and hackathons",
     ],
   },
   {
     type: "education",
     title: "Senior Secondary",
     organization: "Ramco Vidya Mandir",
     location: "CBSE",
     period: "June 2019 – May 2020",
     description: [
       "Completed senior secondary education with focus on Science",
       "Developed strong foundation in Mathematics and Computer Science",
     ],
   },
 ];
 
 const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { ref: parallaxRef, y: parallaxY } = useParallax({ offset: 35 });

  return (
    <section id="experience" className="section-padding bg-secondary/30 relative overflow-hidden" ref={ref}>
      <motion.div ref={parallaxRef} style={{ y: parallaxY }} className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
         {/* Section Header */}
         <div className="text-center mb-12 md:mb-16">
           <motion.span
             initial={{ opacity: 0 }}
             animate={isInView ? { opacity: 1 } : {}}
             transition={{ delay: 0.2 }}
             className="text-primary font-mono text-sm"
           >
             03. Experience & Education
           </motion.span>
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ delay: 0.3 }}
             className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2"
           >
             My Journey
           </motion.h2>
         </div>
 
         {/* Timeline */}
         <div className="max-w-3xl mx-auto relative">
           {/* Timeline Line */}
           <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
 
           {timelineData.map((item, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: 0.4 + index * 0.15 }}
               className={`relative flex items-start gap-6 mb-8 md:mb-12 ${
                 index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
               }`}
             >
               {/* Timeline Dot */}
               <motion.div
                 initial={{ scale: 0 }}
                 animate={isInView ? { scale: 1 } : {}}
                 transition={{ delay: 0.5 + index * 0.15, type: "spring" }}
                 className={`absolute left-4 md:left-1/2 -translate-x-1/2 z-10 p-2 rounded-full ${
                   item.type === "work"
                     ? "bg-primary text-primary-foreground"
                     : "bg-card border-2 border-primary text-primary"
                 }`}
               >
                 {item.type === "work" ? (
                   <Briefcase className="h-4 w-4" />
                 ) : (
                   <GraduationCap className="h-4 w-4" />
                 )}
               </motion.div>
 
               {/* Content Card */}
               <div
                 className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                   index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                 }`}
               >
                 <motion.div
                   whileHover={{ y: -3 }}
                   className="bg-card border border-border rounded-xl p-5 md:p-6 hover:border-primary/50 hover:shadow-lg transition-all"
                 >
                   <div className="flex items-start justify-between gap-4 mb-3">
                     <div>
                       <h3 className="font-display font-semibold text-lg text-foreground">
                         {item.title}
                       </h3>
                       <p className="text-primary font-medium">
                         {item.organization}
                       </p>
                       <p className="text-sm text-muted-foreground">
                         {item.location}
                       </p>
                     </div>
                     <span className="shrink-0 px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full">
                       {item.period}
                     </span>
                   </div>
 
                   <ul className="space-y-2 mt-4">
                     {item.description.map((desc, descIndex) => (
                       <motion.li
                         key={descIndex}
                         initial={{ opacity: 0, x: -10 }}
                         animate={isInView ? { opacity: 1, x: 0 } : {}}
                         transition={{
                           delay: 0.6 + index * 0.15 + descIndex * 0.05,
                         }}
                         className="flex items-start gap-2 text-sm text-muted-foreground"
                       >
                         <span className="text-primary mt-1.5">▹</span>
                         {desc}
                       </motion.li>
                     ))}
                   </ul>
                 </motion.div>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default TimelineSection;