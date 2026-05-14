import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import ImageCarousel from "@/components/ImageCarousel";
import projectWhatsapp from "@/assets/project-whatsapp.png";
import projectOpenai from "@/assets/project-openai.png";
import projectBlip from "@/assets/project-blip.png";

// Imagens DR.CIDETECT
import cidetect1 from "@/assets/dashboard-frente.png";
import cidetect2 from "@/assets/cids.png";
import cidetect3 from "@/assets/aprovacoes.png";
import cidetect4 from "@/assets/fomulario.png";
import cidetect5 from "@/assets/insert_cid.png";
import cidetect6 from "@/assets/tutorial.png";

// Imagens Dash Gapy
import dashgap1 from "@/assets/gapy1.png";
import dashgap2 from "@/assets/gapy2.png";
import dashgap3 from "@/assets/gapy3.png";

interface Project {
  title: string;
  description: string;
  image?: string;
  images?: string[];
  techs: string[];
  link?: string;
  github?: string;
}

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      title: "DR.CIDETECT - AI Medical NLP Pipeline",
      description: t(
        "End-to-end Machine Learning system that predicts medical ICD (CID) codes from clinical forms using NLP. Features real-time predictions, continuous learning from validation feedback, and robust API architecture.",
        "Sistema completo de Machine Learning que prediz códigos médicos CID de formulários clínicos usando NLP. Conta com predições em tempo real, aprendizado contínuo via feedback e arquitetura de API robusta."
      ),
      images: [cidetect1, cidetect2, cidetect3, cidetect4, cidetect5, cidetect6],
      techs: ["Python", "FastAPI", "NLP", "React", "Machine Learning", "Oracle"],
      link: "#",
      github: "https://github.com/joaovictorPoloniato/seu-repo-cidetect", // Coloque seu link aqui
    },
    {
      title: "OpenAI Intelligence Dashboard",
      description: t(
        "Analytics dashboard tailored for monitoring OpenAI API usage, tracking costs, token consumption, and model distribution through real-time data visualization.",
        "Dashboard analítico desenvolvido para monitoramento de uso da API OpenAI, rastreamento de custos, consumo de tokens e distribuição de modelos com visualização de dados em tempo real."
      ),
      image: projectOpenai,
      techs: ["Python", "OpenAI API", "N8N", "Chart.js", "JavaScript", "Oracle"],
      github: "https://github.com/joaovictorPoloniato/seu-repo-openai",
    },
    {
      title: "Logistics BI & Data Engineering",
      description: t(
        "Business Intelligence dashboard for a truck tire retreading company. Engineered data pipelines to extract insights on sales, inventory, and customer behavior, optimizing operations.",
        "Dashboard de Business Intelligence para recapagem de pneus de caminhão. Engenharia de pipelines de dados para extrair insights de vendas, estoque e clientes, otimizando as operações."
      ),
      images: [dashgap1, dashgap2, dashgap3],
      techs: ["Python", "SQL Server", "Data Visualization", "Chart.js"],
      github: "https://github.com/joaovictorPoloniato/seu-repo-bi",
    },
    {
      title: "WhatsApp Automated Flow Builder",
      description: t(
        "Interactive flow builder for WhatsApp featuring a visual screen editor, dynamic routing models, and JSON output generation for seamless chatbot integration.",
        "Construtor de fluxos interativos para WhatsApp com editor visual de telas, modelos de roteamento dinâmico e geração de saída JSON para integração perfeita com chatbots."
      ),
      image: projectWhatsapp,
      techs: ["React", "TypeScript", "WhatsApp API", "JSON"],
      github: "https://github.com/joaovictorPoloniato/seu-repo-whatsapp",
    },
    {
      title: "Blip Scripts Generator Suite",
      description: t(
        "Professional toolset for advanced Blip chatbot development. Includes interactive menus, regex scripts, complex variable management, and automated HTTP requests routing.",
        "Suite profissional para desenvolvimento avançado de chatbots no Blip. Inclui menus interativos, scripts regex, gerenciamento complexo de variáveis e roteamento automatizado de requisições HTTP."
      ),
      image: projectBlip,
      techs: ["React", "TypeScript", "Blip API", "Python"],
      github: "https://github.com/joaovictorPoloniato/seu-repo-blip",
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
            {t("Featured AI & Engineering Work", "Projetos de Engenharia e IA em Destaque")}
          </h3>
          <p className="mb-12 text-muted-foreground">
            {t(
              "Showcasing end-to-end Machine Learning pipelines, automation workflows, and full-stack solutions.",
              "Apresentando pipelines completos de Machine Learning, automação de workflows e soluções full-stack."
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
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card transition-all hover:-translate-y-1 hover:border-primary hover:shadow-[0_0_20px_rgba(var(--primary),0.2)]"
            >
              <div className="relative overflow-hidden h-48 bg-background/50">
                {project.images ? (
                  <div className="h-full w-full">
                    <ImageCarousel images={project.images} alt={project.title} interval={5000} />
                  </div>
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-card via-card/20 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6 relative z-10 bg-card">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <h4 className="text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {project.title}
                  </h4>
                  
                  {/* ÍCONES DO GITHUB E LINK EXTERNO */}
                  <div className="flex shrink-0 gap-3 pt-1">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted-foreground transition-all hover:scale-110 hover:text-foreground"
                        aria-label="GitHub Repository"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-muted-foreground transition-all hover:scale-110 hover:text-primary"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="mb-6 flex-1 text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-primary/20 bg-primary/5 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-primary transition-colors group-hover:border-primary/50"
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
          className="mt-16 text-center"
        >
          <a 
            href="https://github.com/joaovictorPoloniato" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-6 py-2 font-mono text-sm text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <Github className="h-4 w-4" />
            {t("View more on GitHub", "Ver mais no GitHub")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
