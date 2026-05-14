import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => {
  const { t } = useLanguage();

  const experiences = [
    {
      role: "AI Engineer",
      company: "JMJ Sistemas e Consultoria",
      period: t("2025 - Present", "2025 - Presente"),
      location: t("Brazil", "Brasil"),
      desc: t(
        "Developed NLP-based ML models decoding ICD codes with 97% accuracy, reducing audit efforts by 80%. Engineered N8N/LLM automated microservices for medical transcription. Built an ML risk-assessment model reaching 98% accuracy. Designed RESTful APIs (FastAPI/Java) and managed scalable deployments using Docker and Kubernetes.",
        "Desenvolvi modelos de Machine Learning (NLP) para decodificar CIDs com 97% de acurácia, reduzindo o esforço de auditoria em 80%. Criei microsserviços automatizados (N8N e LLMs) para transcrição médica. Construí um modelo de validação de partos com 98% de acurácia. Projetei APIs RESTful (FastAPI/Java) e gerenciei deploys com Docker/Kubernetes."
      ),
      techs: ["Python", "FastAPI", "NLP", "LLMs", "N8N", "Docker", "Kubernetes", "Java"],
    },
    {
      role: "Software Engineer",
      company: "Alfameta",
      period: "2024 - 2025",
      location: t("Brazil", "Brasil"),
      desc: t(
        "Integrated an OpenAI LLM-powered application to deliver database insights to end-users, reducing data validation time by 40% and accelerating payment processing by 60%. Developed robust RESTful backend APIs to optimize data pipelines and support core business operations.",
        "Integrei uma aplicação com LLMs da OpenAI para entregar insights de banco de dados aos usuários, reduzindo o tempo de validação em 40% e acelerando pagamentos em 60%. Desenvolvi APIs RESTful robustas no backend para otimizar pipelines de dados e apoiar operações core."
      ),
      techs: ["OpenAI", "Python", "RESTful APIs", "SQL", "Data Pipelines"],
    },
    {
      role: t("Junior Software Engineer", "Engenheiro de Software Júnior"),
      company: "Porto Tech",
      period: "2021 - 2024",
      location: t("Brazil", "Brasil"),
      desc: t(
        "Participated in the development of full-stack applications (React, Next.js, NestJS, Python), increasing system performance by 25%. Optimized databases and complex data conversions, reducing query time by 30%.",
        "Participei do desenvolvimento de aplicações full-stack (React, Next.js, NestJS, Python), aumentando a performance do sistema em 25%. Otimizei arquiteturas de banco de dados e conversões complexas, reduzindo o tempo de consulta em 30%."
      ),
      techs: ["React", "Next.js", "NestJS", "Python", "Databases"],
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
