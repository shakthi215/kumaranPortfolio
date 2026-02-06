import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X, ExternalLink, BarChart2, Users, Film } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/useParallax";
 
 interface Project {
   id: number;
   title: string;
   shortDesc: string;
   fullDesc: string;
   icon: typeof BarChart2;
   technologies: string[];
   highlights: string[];
   color: string;
 }
 
 const projects: Project[] = [
   {
     id: 1,
     title: "Retail Sales Analysis & Dashboard",
     shortDesc: "Interactive dashboard for retail insights",
     fullDesc:
       "Analyzed a comprehensive retail sales dataset to identify top-selling products, peak sales months, and key customer demographics. Developed an interactive dashboard in Tableau that enables stakeholders to visualize sales trends and make data-driven inventory decisions.",
     icon: BarChart2,
     technologies: ["Python", "Pandas", "Matplotlib", "SQL", "Tableau"],
     highlights: [
       "Identified top-selling products and peak sales periods",
       "Used Pandas for data cleaning and transformation",
       "Created interactive Tableau dashboard with filtering capabilities",
       "Enabled filtering by region and product category",
       "Supported inventory optimization decisions",
     ],
     color: "from-emerald-500/20 to-teal-500/20",
   },
   {
     id: 2,
     title: "Customer Churn Prediction Model",
     shortDesc: "ML model for customer retention",
     fullDesc:
       "Built a sophisticated classification model to predict customer churn using a telecommunications dataset. Applied extensive exploratory data analysis and feature engineering to identify key churn drivers, then trained multiple models to provide actionable retention strategies.",
     icon: Users,
     technologies: ["Python", "Pandas", "Scikit-learn", "Jupyter Notebook"],
     highlights: [
       "Performed comprehensive EDA and feature engineering",
       "Identified key drivers of customer churn",
       "Trained Logistic Regression and Random Forest models",
       "Achieved high prediction accuracy",
       "Proposed actionable customer retention strategies",
     ],
     color: "from-blue-500/20 to-indigo-500/20",
   },
   {
     id: 3,
     title: "Movie Database Exploratory Analysis",
     shortDesc: "Film industry trends analysis",
     fullDesc:
       "Performed an in-depth analysis of The Movie Database (TMDb) to uncover trends in the film industry. Used SQL for data extraction and Python for visualization, revealing insights about successful genres, directors, and the relationship between budget and ratings.",
     icon: Film,
     technologies: ["SQL", "Python", "Pandas", "Seaborn"],
     highlights: [
       "Analyzed The Movie Database (TMDb) dataset",
       "Wrote complex SQL queries for data aggregation",
       "Identified top-grossing genres and successful directors",
       "Visualized budget vs. rating correlations",
       "Uncovered industry trends and patterns",
     ],
     color: "from-purple-500/20 to-pink-500/20",
   },
 ];
 
 const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { ref: parallaxRef, y: parallaxY } = useParallax({ offset: 40 });

  return (
    <>
      <section id="projects" className="section-padding relative overflow-hidden" ref={ref}>
        <motion.div ref={parallaxRef} style={{ y: parallaxY }} className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-primary/[0.03] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10">
           {/* Section Header */}
           <div className="text-center mb-12 md:mb-16">
             <motion.span
               initial={{ opacity: 0 }}
               animate={isInView ? { opacity: 1 } : {}}
               transition={{ delay: 0.2 }}
               className="text-primary font-mono text-sm"
             >
               04. Featured Work
             </motion.span>
             <motion.h2
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: 0.3 }}
               className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mt-2"
             >
               Projects
             </motion.h2>
             <motion.p
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ delay: 0.4 }}
               className="text-muted-foreground mt-4 max-w-2xl mx-auto"
             >
               Click on a project to see detailed information
             </motion.p>
           </div>
 
           {/* Projects Grid */}
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             {projects.map((project, index) => (
               <motion.div
                 key={project.id}
                 initial={{ opacity: 0, y: 30 }}
                 animate={isInView ? { opacity: 1, y: 0 } : {}}
                 transition={{ delay: 0.4 + index * 0.1 }}
                 whileHover={{ y: -8, scale: 1.02 }}
                 whileTap={{ scale: 0.98 }}
                 onClick={() => setSelectedProject(project)}
                 className="cursor-pointer group"
               >
                 <div
                   className={`h-full bg-gradient-to-br ${project.color} p-1 rounded-2xl`}
                 >
                   <div className="h-full bg-card rounded-xl p-6 transition-all group-hover:shadow-xl">
                     {/* Icon */}
                     <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                       <project.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                     </div>
 
                     {/* Title */}
                     <h3 className="font-display font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                       {project.title}
                     </h3>
 
                     {/* Short Description */}
                     <p className="text-muted-foreground text-sm mb-4">
                       {project.shortDesc}
                     </p>
 
                     {/* Tech Tags */}
                     <div className="flex flex-wrap gap-2">
                       {project.technologies.slice(0, 3).map((tech) => (
                         <span
                           key={tech}
                           className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded-md"
                         >
                           {tech}
                         </span>
                       ))}
                       {project.technologies.length > 3 && (
                         <span className="px-2 py-1 text-xs font-mono text-muted-foreground">
                           +{project.technologies.length - 3}
                         </span>
                       )}
                     </div>
 
                     {/* Click indicator */}
                     <div className="mt-4 text-primary text-sm font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                       <span>View Details</span>
                       <ExternalLink className="h-4 w-4" />
                     </div>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
 
       {/* Project Modal */}
       <AnimatePresence>
         {selectedProject && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             onClick={() => setSelectedProject(null)}
             className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
           >
             <motion.div
               initial={{ opacity: 0, scale: 0.9, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.9, y: 20 }}
               transition={{ type: "spring", damping: 25, stiffness: 300 }}
               onClick={(e) => e.stopPropagation()}
               className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl"
             >
               {/* Modal Header */}
               <div
                 className={`bg-gradient-to-br ${selectedProject.color} p-6 md:p-8 relative`}
               >
                 <Button
                   variant="ghost"
                   size="icon"
                   onClick={() => setSelectedProject(null)}
                   className="absolute top-4 right-4 rounded-full bg-background/20 hover:bg-background/40"
                 >
                   <X className="h-5 w-5" />
                 </Button>
 
                 <div className="flex items-center gap-4">
                   <div className="w-14 h-14 rounded-xl bg-background/20 backdrop-blur flex items-center justify-center">
                     <selectedProject.icon className="h-7 w-7 text-foreground" />
                   </div>
                   <div>
                     <h3 className="font-display font-bold text-2xl text-foreground">
                       {selectedProject.title}
                     </h3>
                   </div>
                 </div>
               </div>
 
               {/* Modal Content */}
               <div className="p-6 md:p-8 space-y-6">
                 {/* Description */}
                 <div>
                   <h4 className="font-semibold text-foreground mb-2">
                     About the Project
                   </h4>
                   <p className="text-muted-foreground leading-relaxed">
                     {selectedProject.fullDesc}
                   </p>
                 </div>
 
                 {/* Technologies */}
                 <div>
                   <h4 className="font-semibold text-foreground mb-3">
                     Technologies Used
                   </h4>
                   <div className="flex flex-wrap gap-2">
                     {selectedProject.technologies.map((tech) => (
                       <span
                         key={tech}
                         className="px-3 py-1.5 text-sm font-mono bg-primary/10 text-primary rounded-lg"
                       >
                         {tech}
                       </span>
                     ))}
                   </div>
                 </div>
 
                 {/* Key Highlights */}
                 <div>
                   <h4 className="font-semibold text-foreground mb-3">
                     Key Highlights
                   </h4>
                   <ul className="space-y-2">
                     {selectedProject.highlights.map((highlight, index) => (
                       <motion.li
                         key={index}
                         initial={{ opacity: 0, x: -10 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ delay: index * 0.05 }}
                         className="flex items-start gap-2 text-muted-foreground"
                       >
                         <span className="text-primary mt-0.5">▹</span>
                         {highlight}
                       </motion.li>
                     ))}
                   </ul>
                 </div>
               </div>
             </motion.div>
           </motion.div>
         )}
       </AnimatePresence>
     </>
   );
 };
 
 export default ProjectsSection;