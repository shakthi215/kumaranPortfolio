 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 import { Trophy, Lightbulb } from "lucide-react";
 
 const achievements = [
   {
     icon: Trophy,
     title: "Gravity Turbine - 2nd Prize",
     event: "Xientia (Idea Presentation) at VIT",
     description:
       "Developed the concept of a Gravity Turbine, displaying an innovative approach to harnessing gravitational forces for sustainable energy production. Earned recognition for exceptional creativity and impactful presentation skills.",
     highlight: "2nd Prize",
   },
   {
     icon: Lightbulb,
     title: "Smart India Hackathon 2025",
     event: "Internal Hackathon Qualifier",
     description:
       "Qualified for the Internal Hackathon round with a project focused on the Development of a Digital Farm Management Portal aimed at enhancing agricultural efficiency and data management.",
     highlight: "Qualified",
   },
 ];
 
 const AchievementsSection = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section id="achievements" className="section-padding" ref={ref}>
       <div className="container mx-auto px-4 md:px-6">
         {/* Section Header */}
         <div className="text-center mb-12 md:mb-16">
           <motion.span
             initial={{ opacity: 0 }}
             animate={isInView ? { opacity: 1 } : {}}
             transition={{ delay: 0.2 }}
             className="text-primary font-mono text-sm"
           >
             06. Recognition
           </motion.span>
           <motion.h2
             initial={{ opacity: 0, y: 20 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ delay: 0.3 }}
             className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2"
           >
             Achievements
           </motion.h2>
         </div>
 
         {/* Achievements Grid */}
         <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
           {achievements.map((achievement, index) => (
             <motion.div
               key={achievement.title}
               initial={{ opacity: 0, y: 30 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: 0.4 + index * 0.15 }}
               whileHover={{ y: -5 }}
               className="group relative"
             >
               {/* Glow effect */}
               <div className="absolute -inset-px bg-gradient-to-r from-primary/50 to-primary/20 rounded-2xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
 
               <div className="relative h-full bg-card border border-border rounded-2xl p-6 md:p-8 transition-all hover:border-primary/50">
                 {/* Header */}
                 <div className="flex items-start justify-between gap-4 mb-4">
                   <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                     <achievement.icon className="h-6 w-6" />
                   </div>
                   <span className="shrink-0 px-3 py-1 text-sm font-bold bg-primary text-primary-foreground rounded-full">
                     {achievement.highlight}
                   </span>
                 </div>
 
                 {/* Content */}
                 <h3 className="font-display font-bold text-xl text-foreground mb-1 group-hover:text-primary transition-colors">
                   {achievement.title}
                 </h3>
                 <p className="text-primary font-medium text-sm mb-3">
                   {achievement.event}
                 </p>
                 <p className="text-muted-foreground text-sm leading-relaxed">
                   {achievement.description}
                 </p>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };
 
 export default AchievementsSection;