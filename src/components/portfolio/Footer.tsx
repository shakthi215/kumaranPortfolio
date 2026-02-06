 import { motion } from "framer-motion";
 import { Github, Linkedin, Mail, Heart } from "lucide-react";
 
 const Footer = () => {
   const currentYear = new Date().getFullYear();
 
   return (
     <footer className="py-8 border-t border-border">
       <div className="container mx-auto px-4 md:px-6">
         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
           {/* Copyright */}
           <motion.p
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="text-sm text-muted-foreground text-center md:text-left"
           >
             © {currentYear} Kumaran B. Built with{" "}
             <Heart className="inline h-4 w-4 text-primary mx-1" />
             and React
           </motion.p>
 
           {/* Social Links */}
           <div className="flex items-center gap-4">
             <motion.a
               href="https://github.com/kumaran12348"
               target="_blank"
               rel="noopener noreferrer"
               whileHover={{ y: -2 }}
               className="text-muted-foreground hover:text-primary transition-colors"
             >
               <Github className="h-5 w-5" />
             </motion.a>
             <motion.a
               href="https://www.linkedin.com/in/kumaran-b-484946253/"
               target="_blank"
               rel="noopener noreferrer"
               whileHover={{ y: -2 }}
               className="text-muted-foreground hover:text-primary transition-colors"
             >
               <Linkedin className="h-5 w-5" />
             </motion.a>
             <motion.a
               href="mailto:kumaranbabu99@gmail.com"
               whileHover={{ y: -2 }}
               className="text-muted-foreground hover:text-primary transition-colors"
             >
               <Mail className="h-5 w-5" />
             </motion.a>
           </div>
         </div>
       </div>
     </footer>
   );
 };
 
 export default Footer;