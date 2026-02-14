import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Code2, Brain, Workflow } from "lucide-react";

const AboutSection = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Brain,
      title: t("AI & Automation", "IA & Automação"),
      desc: t(
        "Building intelligent workflows and AI-driven solutions to optimize business processes.",
        "Construindo workflows inteligentes e soluções com IA para otimizar processos de negócio."
      ),
    },
    {
      icon: Code2,
      title: t("Backend Development", "Desenvolvimento Backend"),
      desc: t(
        "APIs, microservices, and scalable architectures with Python, FastAPI, and Node.js.",
        "APIs, microsserviços e arquiteturas escaláveis com Python, FastAPI e Node.js."
      ),
    },
    {
      icon: Workflow,
      title: t("System Integration", "Integração de Sistemas"),
      desc: t(
        "Connecting systems via webhooks, CRM integrations, and data pipelines.",
        "Conectando sistemas via webhooks, integrações CRM e pipelines de dados."
      ),
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 font-mono text-sm text-primary text-glow">
            {"// "}{t("about me", "sobre mim")}
          </h2>
          <h3 className="mb-8 text-3xl font-bold text-foreground md:text-4xl">
            {t("Who I Am", "Quem Sou Eu")}
          </h3>

          <p className="mb-12 max-w-3xl text-muted-foreground leading-relaxed">
            {t(
              "I am an AI Developer focused on Python and JavaScript, working mainly with backend development, automation, and system integrations. I build APIs, intelligent workflows, webhooks, and scalable solutions, applying AI to optimize processes, reduce operational effort, and improve user experience. I have experience with FastAPI, N8N, Blip, CRM integrations, data processing, and databases such as MySQL, MariaDB, and Sybase.",
              "Sou um Desenvolvedor de IA focado em Python e JavaScript, atuando principalmente com desenvolvimento backend, automação e integrações de sistemas. Construo APIs, workflows inteligentes, webhooks e soluções escaláveis, aplicando IA para otimizar processos, reduzir esforço operacional e melhorar a experiência do usuário. Tenho experiência com FastAPI, N8N, Blip, integrações CRM, processamento de dados e bancos de dados como MySQL, MariaDB e Sybase."
            )}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary hover:border-glow"
            >
              <item.icon className="mb-4 h-8 w-8 text-primary" />
              <h4 className="mb-2 text-lg font-semibold text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
