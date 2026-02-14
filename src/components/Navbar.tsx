import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const Navbar = () => {
  const { lang, toggleLang, t } = useLanguage();

  const links = [
    { href: "#about", label: t("About", "Sobre") },
    { href: "#experience", label: t("Experience", "Experiência") },
    { href: "#projects", label: t("Projects", "Projetos") },
    { href: "#skills", label: t("Skills", "Skills") },
    { href: "#contact", label: t("Contact", "Contato") },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="font-mono text-lg font-bold text-primary text-glow">
          {"<JV />"}
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          onClick={toggleLang}
          className="flex items-center gap-2 rounded-md border border-border bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-all hover:border-primary hover:text-primary"
        >
          <Globe className="h-4 w-4" />
          {lang === "en" ? "PT-BR" : "EN"}
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
