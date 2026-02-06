import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";

const roles = [
  "Data Analyst",
  "AI Enthusiast",
  "Problem Solver",
  "CS Graduate",
];

const HeroSection = () => {
   const [currentRole, setCurrentRole] = useState(0);
   const [displayedText, setDisplayedText] = useState("");
   const [isDeleting, setIsDeleting] = useState(false);
 
   useEffect(() => {
     const currentText = roles[currentRole];
     const timeout = setTimeout(() => {
       if (!isDeleting) {
         if (displayedText.length < currentText.length) {
           setDisplayedText(currentText.slice(0, displayedText.length + 1));
         } else {
           setTimeout(() => setIsDeleting(true), 2000);
         }
       } else {
         if (displayedText.length > 0) {
           setDisplayedText(currentText.slice(0, displayedText.length - 1));
         } else {
           setIsDeleting(false);
           setCurrentRole((prev) => (prev + 1) % roles.length);
         }
       }
     }, isDeleting ? 50 : 100);
 
     return () => clearTimeout(timeout);
   }, [displayedText, isDeleting, currentRole]);
 
   const scrollToAbout = () => {
     const aboutSection = document.querySelector("#about");
     if (aboutSection) {
       aboutSection.scrollIntoView({ behavior: "smooth" });
     }
   };
 
   return (
     <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
          
          {/* Particle effect */}
          <ParticleBackground />

          {/* Floating orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-primary/10 blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-80 md:h-80 rounded-full bg-primary/5 blur-3xl"
            animate={{
              x: [0, -40, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
 
       <div className="container mx-auto px-4 md:px-6 text-center">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="space-y-6"
         >
           {/* Greeting */}
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="text-primary font-mono text-sm md:text-base"
           >
             Hello, I'm
           </motion.p>
 
           {/* Name */}
           <motion.h1
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.3, duration: 0.5 }}
             className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
           >
             <span className="text-foreground">Kumaran</span>{" "}
             <span className="text-primary">B</span>
           </motion.h1>
 
           {/* Typing Animation */}
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="h-12 md:h-16 flex items-center justify-center"
           >
             <span className="font-display text-xl sm:text-2xl md:text-4xl text-muted-foreground">
               I'm a{" "}
               <span className="text-primary font-semibold">
                 {displayedText}
               </span>
               <span className="border-r-2 border-primary animate-typing-cursor ml-1" />
             </span>
           </motion.div>
 
           {/* Description */}
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.6 }}
             className="max-w-2xl mx-auto text-muted-foreground text-base md:text-lg"
           >
             Passionate about transforming data into actionable insights.
             Skilled in Python, SQL, and visualization tools to drive
             business growth.
           </motion.p>
 
           {/* Social Links */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.7 }}
             className="flex items-center justify-center gap-4 pt-4"
           >
             <motion.a
               href="https://www.linkedin.com/in/kumaran-b-484946253/"
               target="_blank"
               rel="noopener noreferrer"
               whileHover={{ scale: 1.1, y: -3 }}
               whileTap={{ scale: 0.95 }}
             >
               <Button
                 variant="outline"
                 size="icon"
                 className="rounded-full border-primary/50 hover:border-primary hover:bg-primary/10"
               >
                 <Linkedin className="h-5 w-5" />
               </Button>
             </motion.a>
             <motion.a
               href="https://github.com/kumaran12348"
               target="_blank"
               rel="noopener noreferrer"
               whileHover={{ scale: 1.1, y: -3 }}
               whileTap={{ scale: 0.95 }}
             >
               <Button
                 variant="outline"
                 size="icon"
                 className="rounded-full border-primary/50 hover:border-primary hover:bg-primary/10"
               >
                 <Github className="h-5 w-5" />
               </Button>
             </motion.a>
             <motion.a
               href="mailto:kumaranbabu99@gmail.com"
               whileHover={{ scale: 1.1, y: -3 }}
               whileTap={{ scale: 0.95 }}
             >
               <Button
                 variant="outline"
                 size="icon"
                 className="rounded-full border-primary/50 hover:border-primary hover:bg-primary/10"
               >
                 <Mail className="h-5 w-5" />
               </Button>
             </motion.a>
           </motion.div>
 
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                onClick={scrollToAbout}
                size="lg"
                className="rounded-full px-8 bg-primary hover:bg-primary-dark text-primary-foreground font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                View My Work
              </Button>
              <motion.a
                href="/resume.pdf"
                download="Kumaran_B_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 border-primary/50 hover:border-primary hover:bg-primary/10 font-semibold"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download CV
                </Button>
              </motion.a>
            </motion.div>
         </motion.div>
       </div>
 
       {/* Scroll Indicator */}
       <motion.button
         onClick={scrollToAbout}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1 }}
         className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
       >
         <motion.div
           animate={{ y: [0, 10, 0] }}
           transition={{ duration: 1.5, repeat: Infinity }}
         >
           <ChevronDown className="h-8 w-8" />
         </motion.div>
       </motion.button>
     </section>
   );
 };
 
 export default HeroSection;