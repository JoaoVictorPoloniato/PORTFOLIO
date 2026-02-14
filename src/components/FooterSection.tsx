import { useLanguage } from "@/contexts/LanguageContext";
import { Linkedin, Mail, Phone } from "lucide-react";

const FooterSection = () => {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="section-padding border-t border-border">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-2 font-mono text-sm text-primary text-glow">
          {"// "}{t("contact", "contato")}
        </h2>
        <h3 className="mb-8 text-3xl font-bold text-foreground">
          {t("Let's Connect", "Vamos Conectar")}
        </h3>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-6">
          <a
            href="mailto:poloniato155@gmail.com"
            className="flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm text-foreground transition-all hover:border-primary hover:text-primary"
          >
            <Mail className="h-4 w-4" /> poloniato155@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-victor-poloniato-buss-908177164/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm text-foreground transition-all hover:border-primary hover:text-primary"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href="tel:+5566996837095"
            className="flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm text-foreground transition-all hover:border-primary hover:text-primary"
          >
            <Phone className="h-4 w-4" /> (66) 9 9683-7095
          </a>
        </div>

        <p className="font-mono text-xs text-muted-foreground">
          © 2025 João Victor Poloniato Buss. {t("All rights reserved.", "Todos os direitos reservados.")}
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
