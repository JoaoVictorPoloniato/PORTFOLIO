import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const { t } = useLanguage();

  const categories = [
    {
      title: t("Languages", "Linguagens"),
      skills: ["Python", "JavaScript", "TypeScript", "C#", "PHP", "SQL"],
    },
    {
      title: t("Frameworks & Tools", "Frameworks & Ferramentas"),
      skills: ["FastAPI", "React", "Django", "Flask", ".NET", "N8N", "NEST", "Next"],
    },
    {
      title: t("AI & Automation", "IA & Automação"),
      skills: ["OpenAI API", "Blip", "Webhooks", "ETL", "NLP", "LLMs", "N8N", "RPA"],
    },
    {
      title: t("Databases", "Bancos de Dados"),
      skills: ["MySQL", "PostgreSQL", "MariaDB", "Sybase", "Firebird", "Oracle DB", "Supabase", "MongoDB", "Cassandra", "SQL Server"],
    },
    {
      title: t("Cloud & DevOps", "Cloud & DevOps"),
      skills: ["Google Cloud", "AWS", "Git", "Docker", "Ubuntu", "Apache", "Kubernetes"],
    },
    {
      title: t("Data & BI", "Dados & BI"),
      skills: ["Power BI", "Data Analysis", "ETL", "SQL Advanced", "Recharts"],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-card/30">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 font-mono text-sm text-primary text-glow">
            {"// "}{t("skills", "skills")}
          </h2>
          <h3 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
            {t("Tech Stack", "Stack Tecnológico")}
          </h3>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="rounded-lg border border-border bg-card p-6"
            >
              <h4 className="mb-4 font-mono text-sm font-semibold text-primary">{cat.title}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-border bg-secondary px-3 py-1 text-sm text-secondary-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
