import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, BarChart3, Brain } from "lucide-react";
import { useParallax } from "@/hooks/useParallax";
 
 const skillCategories = [
   {
     title: "Programming",
     icon: Code2,
     skills: [
       { name: "Python", level: 90 },
       { name: "SQL", level: 85 },
       { name: "C/C++", level: 70 },
       { name: "R", level: 60 },
     ],
   },
   {
     title: "Databases",
     icon: Database,
     skills: [
       { name: "MySQL", level: 85 },
       { name: "PostgreSQL", level: 80 },
       { name: "MongoDB", level: 70 },
     ],
   },
   {
     title: "Visualization",
     icon: BarChart3,
     skills: [
       { name: "Tableau", level: 85 },
       { name: "Power BI", level: 80 },
       { name: "Matplotlib", level: 85 },
       { name: "Seaborn", level: 80 },
     ],
   },
   {
     title: "Business Skills",
     icon: Brain,
     skills: [
       { name: "Strategic Planning", level: 75 },
       { name: "Market Analysis", level: 80 },
       { name: "Financial Modeling", level: 70 },
       { name: "Data Storytelling", level: 85 },
     ],
   },
 ];
 
 const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { ref: parallaxRef, y: parallaxY } = useParallax({ offset: 40 });

  return (
    <section id="skills" className="section-padding relative overflow-hidden" ref={ref}>
      <motion.div ref={parallaxRef} style={{ y: parallaxY }} className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary/[0.02] pointer-events-none" />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
         {/* Section Header */}
         <div className="text-center mb-12 md:mb-16">
           <motion.span
             initial={{ opacity: 0 }}
             animate={isInView ? { opacity: 1 } : {}}
             transition={{ delay: 0.2 }}
             className="text-primary font-mono text-sm"
           >
             02. Skills & Expertise
           </motion.span>
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ delay: 0.3 }}
             className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2"
           >
             My Tech Stack
           </motion.h2>
         </div>
 
         {/* Skills Grid */}
         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {skillCategories.map((category, categoryIndex) => (
             <motion.div
               key={category.title}
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: 0.4 + categoryIndex * 0.1 }}
               whileHover={{ y: -5 }}
               className="group"
             >
               <div className="h-full bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5">
                 {/* Category Header */}
                 <div className="flex items-center gap-3 mb-6">
                   <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                     <category.icon className="h-5 w-5" />
                   </div>
                   <h3 className="font-display font-semibold text-lg">
                     {category.title}
                   </h3>
                 </div>
 
                 {/* Skills List */}
                 <div className="space-y-4">
                   {category.skills.map((skill, skillIndex) => (
                     <motion.div
                       key={skill.name}
                       initial={{ opacity: 0, x: -20 }}
                       animate={isInView ? { opacity: 1, x: 0 } : {}}
                       transition={{
                         delay: 0.5 + categoryIndex * 0.1 + skillIndex * 0.05,
                       }}
                     >
                       <div className="flex justify-between items-center mb-1.5">
                         <span className="text-sm font-medium text-foreground">
                           {skill.name}
                         </span>
                         <span className="text-xs text-muted-foreground">
                           {skill.level}%
                         </span>
                       </div>
                       <div className="h-2 bg-secondary rounded-full overflow-hidden">
                         <motion.div
                           initial={{ width: 0 }}
                           animate={isInView ? { width: `${skill.level}%` } : {}}
                           transition={{
                             delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05,
                             duration: 0.8,
                             ease: "easeOut",
                           }}
                           className="h-full bg-gradient-to-r from-primary to-primary-dark rounded-full"
                         />
                       </div>
                     </motion.div>
                   ))}
                 </div>
               </div>
             </motion.div>
           ))}
         </div>
 
         {/* Additional Tools */}
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ delay: 0.8 }}
           className="mt-12 text-center"
         >
           <p className="text-muted-foreground mb-4">Also familiar with:</p>
           <div className="flex flex-wrap justify-center gap-3">
             {["Jupyter", "Git", "Pandas", "NumPy", "Scikit-learn", "Excel", "Google Sheets"].map(
               (tool, index) => (
                 <motion.span
                   key={tool}
                   initial={{ opacity: 0, scale: 0.8 }}
                   animate={isInView ? { opacity: 1, scale: 1 } : {}}
                   transition={{ delay: 0.9 + index * 0.05 }}
                   whileHover={{ scale: 1.05 }}
                   className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium border border-border hover:border-primary/50 transition-colors"
                 >
                   {tool}
                 </motion.span>
               )
             )}
           </div>
         </motion.div>
       </div>
     </section>
   );
 };
 
 export default SkillsSection;