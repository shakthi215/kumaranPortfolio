 import { useState, useEffect } from "react";
 import { motion, AnimatePresence } from "framer-motion";
 import { Menu, X, Sun, Moon } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const navLinks = [
   { name: "About", href: "#about" },
   { name: "Skills", href: "#skills" },
   { name: "Experience", href: "#experience" },
   { name: "Projects", href: "#projects" },
   { name: "Certifications", href: "#certifications" },
   { name: "Contact", href: "#contact" },
 ];
 
 interface NavigationProps {
   isDark: boolean;
   toggleTheme: () => void;
 }
 
 const Navigation = ({ isDark, toggleTheme }: NavigationProps) => {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
 
   useEffect(() => {
     const handleScroll = () => {
       setIsScrolled(window.scrollY > 50);
     };
     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);
 
   const handleNavClick = (href: string) => {
     setIsMobileMenuOpen(false);
     const element = document.querySelector(href);
     if (element) {
       element.scrollIntoView({ behavior: "smooth" });
     }
   };
 
   return (
     <>
       <motion.nav
         initial={{ y: -100 }}
         animate={{ y: 0 }}
         transition={{ duration: 0.5 }}
         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
           isScrolled
             ? "bg-background/80 backdrop-blur-lg shadow-lg border-b border-border"
             : "bg-transparent"
         }`}
       >
         <div className="container mx-auto px-4 md:px-6">
           <div className="flex items-center justify-between h-16 md:h-20">
             {/* Logo */}
             <motion.a
               href="#"
               className="font-display font-bold text-xl md:text-2xl text-foreground"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <span className="text-primary">K</span>umaran
               <span className="text-primary">.</span>
             </motion.a>
 
             {/* Desktop Navigation */}
             <div className="hidden md:flex items-center gap-1">
               {navLinks.map((link) => (
                 <motion.button
                   key={link.name}
                   onClick={() => handleNavClick(link.href)}
                   className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
                   whileHover={{ y: -2 }}
                   whileTap={{ scale: 0.95 }}
                 >
                   {link.name}
                   <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-3/4" />
                 </motion.button>
               ))}
             </div>
 
             {/* Theme Toggle & Mobile Menu */}
             <div className="flex items-center gap-2">
               <Button
                 variant="ghost"
                 size="icon"
                 onClick={toggleTheme}
                 className="relative overflow-hidden"
               >
                 <motion.div
                   initial={false}
                   animate={{ rotate: isDark ? 180 : 0 }}
                   transition={{ duration: 0.3 }}
                 >
                   {isDark ? (
                     <Sun className="h-5 w-5 text-primary" />
                   ) : (
                     <Moon className="h-5 w-5 text-primary" />
                   )}
                 </motion.div>
               </Button>
 
               {/* Mobile Menu Button */}
               <Button
                 variant="ghost"
                 size="icon"
                 className="md:hidden"
                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               >
                 {isMobileMenuOpen ? (
                   <X className="h-5 w-5" />
                 ) : (
                   <Menu className="h-5 w-5" />
                 )}
               </Button>
             </div>
           </div>
         </div>
       </motion.nav>
 
       {/* Mobile Menu */}
       <AnimatePresence>
         {isMobileMenuOpen && (
           <motion.div
             initial={{ opacity: 0, y: -20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             transition={{ duration: 0.2 }}
             className="fixed inset-x-0 top-16 z-40 bg-background/95 backdrop-blur-lg border-b border-border md:hidden"
           >
             <div className="container mx-auto px-4 py-4">
               <div className="flex flex-col gap-2">
                 {navLinks.map((link, index) => (
                   <motion.button
                     key={link.name}
                     onClick={() => handleNavClick(link.href)}
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ delay: index * 0.05 }}
                     className="px-4 py-3 text-left text-lg font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                   >
                     {link.name}
                   </motion.button>
                 ))}
               </div>
             </div>
           </motion.div>
         )}
       </AnimatePresence>
     </>
   );
 };
 
 export default Navigation;