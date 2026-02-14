import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      role: t("Artificial Intelligence Analyst (Mid-Level)", "Analista de Inteligência Artificial (Pleno)"),
      company: "JMJ Sistemas e Consultoria",
      period: t("Apr 2025 - Present", "Abr 2025 - Presente"),
      location: "Sinop, MT",
      desc: t(
        "Working with Python and JavaScript on backend development, AI-driven automation, and system integrations. Building APIs, intelligent workflows, and scalable solutions applying AI to optimize processes and improve UX.",
        "Atuando com Python e JavaScript no desenvolvimento backend, automação com IA e integrações de sistemas. Construindo APIs, workflows inteligentes e soluções escaláveis aplicando IA para otimizar processos e melhorar a UX."
      ),
      techs: ["Python", "FastAPI", "N8N", "Blip", "React", "TypeScript"],
    },
    {
      role: t("Data Analyst", "Analista de Dados"),
      company: "Alfameta Sistemas",
      period: "2024 - 2025",
      location: "Sinop, MT",
      desc: t(
        "Data analysis, Business Intelligence, advanced SQL, API development, RESTful integrations, Docker, and Git workflows.",
        "Análise de dados, Business Intelligence, SQL avançado, desenvolvimento de APIs, integrações RESTful, Docker e workflows Git."
      ),
      techs: ["SQL", "Python", "Docker", "Power BI", "APIs RESTful"],
    },
    {
      role: t("Systems Analyst / Junior Developer", "Analista de Sistemas / Programador Júnior"),
      company: "PortoTech - Franquia LINX",
      period: "2021 - 2024",
      location: "Sinop, MT",
      desc: t(
        "Database analysis, system support, data conversion, hardware installation, and development with PHP, JS, and Python.",
        "Análise de banco de dados, suporte ao sistema, conversão de dados, instalação de hardware e desenvolvimento com PHP, JS e Python."
      ),
      techs: ["PHP", "JavaScript", "Python", "MySQL", "HTML/CSS"],
    },
  ];

  return (
    <section id="experience" className="section-padding bg-card/30">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 font-mono text-sm text-primary text-glow">
            {"// "}{t("experience", "experiência")}
          </h2>
          <h3 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
            {t("Career Path", "Trajetória Profissional")}
          </h3>
        </motion.div>

        <div className="relative space-y-8 border-l-2 border-border pl-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative"
            >
              <div className="absolute -left-[41px] top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary bg-background">
                <Briefcase className="h-3 w-3 text-primary" />
              </div>

              <div className="rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
                  <span className="rounded-full bg-primary/10 px-3 py-0.5 font-mono text-xs text-primary">
                    {exp.period}
                  </span>
                </div>
                <p className="mb-3 text-sm text-primary">{exp.company} · {exp.location}</p>
                <p className="mb-4 text-sm text-muted-foreground">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-secondary px-2 py-0.5 font-mono text-xs text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
