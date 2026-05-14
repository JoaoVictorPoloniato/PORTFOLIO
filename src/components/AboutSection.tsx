import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Code2, Brain, Workflow } from "lucide-react";

const AboutSection = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Brain,
      title: t("AI & Machine Learning", "IA & Machine Learning"),
      desc: t(
        "Developing NLP models, Generative AI solutions, and intelligent chatbots to solve complex business challenges.",
        "Desenvolvendo modelos de NLP, soluções de IA Generativa e chatbots inteligentes para resolver desafios de negócios."
      ),
    },
    {
      icon: Code2,
      title: t("Backend & Microservices", "Backend & Microsserviços"),
      desc: t(
        "Building robust RESTful APIs and scalable architectures using Python, FastAPI, and Java.",
        "Construindo APIs RESTful robustas e arquiteturas escaláveis usando Python, FastAPI e Java."
      ),
    },
    {
      icon: Workflow,
      title: t("Data Pipelines & DevOps", "Pipelines de Dados & DevOps"),
      desc: t(
        "Orchestrating automated workflows with N8N and managing scalable deployments using Docker and Kubernetes.",
        "Orquestrando workflows automatizados com N8N e gerenciando deploys escaláveis usando Docker e Kubernetes."
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
              "I am an AI Engineer with a strong background in developing, integrating, and deploying Artificial Intelligence and Machine Learning solutions. My expertise spans the full software lifecycle, from building robust data pipelines and orchestrating workflows with N8N, to serving AI models via RESTful APIs using Python and FastAPI. I have proven experience in designing NLP applications, Generative AI solutions, and complex chatbot architectures (BLIP). I am passionate about leveraging data and tools like Docker and Kubernetes to build intelligent, scalable, and business-aligned systems.",
              "Sou um Engenheiro de IA com forte experiência no desenvolvimento, integração e deploy de soluções de Inteligência Artificial e Machine Learning. Minha expertise abrange todo o ciclo de vida do software, desde a construção de pipelines de dados robustos e orquestração de workflows com N8N, até o fornecimento de modelos de IA via APIs RESTful usando Python e FastAPI. Tenho experiência comprovada na criação de aplicações de NLP, soluções de IA Generativa e arquiteturas complexas de chatbots (BLIP). Sou apaixonado por usar dados e ferramentas como Docker e Kubernetes para construir sistemas inteligentes, escaláveis e alinhados aos objetivos do negócio."
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
