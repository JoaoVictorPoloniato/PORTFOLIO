import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import ImageCarousel from "@/components/ImageCarousel"; // Importe o novo componente
import projectWhatsapp from "@/assets/project-whatsapp.png";
import projectOpenai from "@/assets/project-openai.png";
import projectBlip from "@/assets/project-blip.png";

// Importe as imagens do DR.CIDETECT (você vai adicionar depois)
import cidetect1 from "@/assets/dashboard-frente.png";
import cidetect2 from "@/assets/cids.png";
import cidetect3 from "@/assets/aprovacoes.png";
import cidetect4 from "@/assets/fomulario.png";
import cidetect5 from "@/assets/insert_cid.png";
import cidetect6 from "@/assets/tutorial.png";
// Adicione mais imports conforme necessário

// Dash Gapy
import dashgap1 from "@/assets/gapy1.png";
import dashgap2 from "@/assets/gapy2.png";
import dashgap3 from "@/assets/gapy3.png";

interface Project {
  title: string;
  description: string;
  image?: string; // Mantido para compatibilidade
  images?: string[]; // Novo campo para carrossel
  techs: string[];
  link?: string;
}

const ProjectsSection = () => {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      title: "DR.CIDETECT - AI Medical CID Prediction System",
      description: t(
        "AI system that predicts medical CID codes from clinical forms using NLP. Complete ML pipeline with real-time predictions and continuous learning from validation feedback.",
        "Sistema de IA que prediz códigos CID médicos de formulários clínicos usando NLP. Pipeline completo de ML com predições em tempo real e aprendizado contínuo com feedback de validações."
      ),
      images: [
        cidetect1,
        cidetect2,
        cidetect3,
        cidetect4,
        cidetect5,
        cidetect6
      ],
      techs: ["React", "TypeScript", "Python", "NLP", "Machine Learning", "AI/ML Pipeline", "FastAPI", "JWT Authentication", "ORACLE"],
      link: "#",
    },
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
      techs: ["JavaScript", "Python", "OpenAI API", "Chart.js", "N8N", "ORACLE"],
    },
    {
      title: "Blip Scripts Generator",
      description: t(
        "Professional toolset for Blip chatbot development — interactive menus, regex scripts, variable management, HTTP requests, and bot routing.",
        "Suite profissional de ferramentas para desenvolvimento de chatbots no Blip — menus interativos, scripts regex, gerenciamento de variáveis, requisições HTTP e roteamento de bots."
      ),
      image: projectBlip,
      techs: ["React", "TypeScript", "Blip API", "Python"],
    },
    {
      title: "BI Dashboard for truck tire retreading company",
      description: t(
        "BI dashboard for a truck tire retreading company, providing insights into sales, inventory, and customer behavior to optimize operations and drive growth.",
        "Dashboard de BI para uma empresa de recapagem de pneus de caminhão, fornecendo insights sobre vendas, estoque e comportamento do cliente para otimizar operações e impulsionar o crescimento."
      ),
      images: [
        dashgap1,
        dashgap2,
        dashgap3
      ],
      techs: ["Python", "chart.js", "SQL", "Data Visualization", "SQL Server"],
    }
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
                {project.images ? (
                  // Usa o carrossel se tiver múltiplas imagens
                  <ImageCarousel images={project.images} alt={project.title} interval={5000} />
                ) : (
                  // Usa imagem única se não tiver carrossel
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-48 w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  </>
                )}
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