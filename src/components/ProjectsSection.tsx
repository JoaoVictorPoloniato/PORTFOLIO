import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import projectWhatsapp from "@/assets/project-whatsapp.png";
import projectOpenai from "@/assets/project-openai.png";
import projectBlip from "@/assets/project-blip.png";

interface Project {
  title: string;
  description: string;
  image: string;
  techs: string[];
  link?: string;
}

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      title: "WhatsApp Flow Builder",
      description: t(
        "Interactive flow builder for WhatsApp with visual screen editor, routing model, and JSON output for chatbot integration.",
        "Construtor de fluxos interativos para WhatsApp com editor visual de telas, modelo de roteamento e saída JSON para integração com chatbots."
      ),
      image: projectWhatsapp,
      techs: ["React", "TypeScript", "WhatsApp API", "JSON"],
    },
    {
      title: "OpenAI Intelligence Dashboard",
      description: t(
        "Analytics dashboard for monitoring OpenAI API usage, costs, token consumption, and model distribution with real-time charts.",
        "Dashboard analítico para monitoramento de uso da API OpenAI, custos, consumo de tokens e distribuição por modelo com gráficos em tempo real."
      ),
      image: projectOpenai,
      techs: ["React", "Python", "OpenAI API", "Charts"],
    },
    {
      title: "Blip Scripts Generator",
      description: t(
        "Professional toolset for Blip chatbot development — interactive menus, regex scripts, variable management, HTTP requests, and bot routing.",
        "Suite profissional de ferramentas para desenvolvimento de chatbots no Blip — menus interativos, scripts regex, gerenciamento de variáveis, requisições HTTP e roteamento de bots."
      ),
      image: projectBlip,
      techs: ["React", "TypeScript", "Blip API", "N8N"],
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-2 font-mono text-sm text-primary text-glow">
            {"// "}{t("projects", "projetos")}
          </h2>
          <h3 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            {t("Featured Work", "Trabalhos em Destaque")}
          </h3>
          <p className="mb-12 text-muted-foreground">
            {t(
              "Some of my recent projects. More coming soon — this section is expandable!",
              "Alguns dos meus projetos recentes. Mais em breve — esta seção é expansível!"
            )}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary hover:border-glow"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>

              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-foreground">{project.title}</h4>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-primary hover:text-glow-strong">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="font-mono text-sm text-muted-foreground">
            {t("// More projects coming soon...", "// Mais projetos em breve...")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
