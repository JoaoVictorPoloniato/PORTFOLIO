import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ArrowDown, Linkedin, Mail, MapPin, Github } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="h-32 w-32 overflow-hidden rounded-full border-2 border-primary border-glow shadow-[0_0_15px_rgba(var(--primary),0.5)]"
        >
          <img src={profilePhoto} alt="João Victor" className="h-full w-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <p className="mb-2 font-mono text-sm text-primary text-glow">
            {t("Hello, I'm", "Olá, eu sou")}
          </p>
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            João Victor
            <span className="block gradient-text">Poloniato Buss</span>
          </h1>
          <p className="mx-auto max-w-xl text-lg font-medium text-muted-foreground">
            {t(
              "AI Engineer | Machine Learning & NLP | Python & FastAPI",
              "Engenheiro de IA | Machine Learning & NLP | Python & FastAPI"
            )}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground md:gap-6"
        >
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-primary" /> {t("Brazil", "Brasil")}
          </span>
          <a
            href="https://github.com/joaovictorPoloniato"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition-all hover:scale-105 hover:text-primary"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joão-victor-poloniato-buss-908177164/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 transition-all hover:scale-105 hover:text-primary"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="mailto:poloniato155@gmail.com"
            className="flex items-center gap-1 transition-all hover:scale-105 hover:text-primary"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 animate-bounce text-primary hover:text-glow-strong"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
