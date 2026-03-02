import { Project } from "@/types";

export const projects: Project[] = [
    {
        slug: "llm-chatbot-integration",
        title: "LLM Chatbot Integration Dashboard",
        shortDescription: "Enterprise-grade GenAI assistant lowering support volume through automated contextual reasoning.",
        problem: "High volume of repetitive L1 customer support queries causing agent burnout and slow response times, resulting in reduced customer satisfaction.",
        solution: "Designed and integrated a production-ready LLM-powered chatbot into the existing web application. Built custom inference APIs to handle prompt orchestration, session context management, and structured response parsing for the frontend UI.",
        role: "Full Stack AI Engineer",
        duration: "4 Months",
        metrics: [
            { label: "Support Load Reduction", value: "45%" },
            { label: "Context Window Optimized", value: "8k tokens" },
            { label: "API Latency", value: "< 800ms" },
        ],
        techStack: {
            frontend: ["React.js", "Tailwind CSS"],
            backend: ["Node.js", "Express", "REST APIs"],
            ai: ["OpenAI API", "Hugging Face", "LangChain concepts"],
            infrastructure: ["Docker", "Linux environments"],
        },
        architecture: {
            description: "A stateless Node.js layer acts as the orchestrator between the user UI, the session database, and the LLM inference endpoint. Context is injected dynamically per request.",
            flow: [
                { id: "ui", label: "React Chat Interface", type: "frontend" },
                { id: "api", label: "Node.js REST API", type: "backend" },
                { id: "db", label: "MongoDB Session Store", type: "database" },
                { id: "llm", label: "LLM Inference Engine", type: "ai" },
            ],
        },
        challenges: [
            "Managing token limits effectively while retaining deep conversational history.",
            "Ensuring the LLM returns consistent, structured JSON objects to drive dynamic UI widgets.",
            "Handling API rate-limiting and fallback gracefully during model latency surges."
        ],
        lessons: [
            "Prompt engineering is as critical as traditional API design.",
            "Stateless session management through Redis/fast-DB reduces scaling pain compared to in-memory."
        ],
        links: {
            github: "https://github.com/ptdr1516/AI-ChatBot",
        }
    },
    {
        slug: "ai-recommendation-engine",
        title: "User-Recommendation System",
        shortDescription: "AI-powered course recommendation system using KMeans clustering + TF-IDF with an explainable ML pipeline.",
        problem: "Users were struggling to discover relevant educational content in a sea of courses, leading to low completion rates and poor platform stickiness.",
        solution: "Developed an explainable ML pipeline using KMeans clustering for user segmentation and TF-IDF with Cosine Similarity for content matching. Served via high-performance FastAPI and integrated through a Node.js/Express gateway.",
        role: "Algorithm & Backend Developer",
        duration: "3 Months",
        metrics: [
            { label: "Engagement Increase", value: "+22%" },
            { label: "Inference Speed", value: "< 120ms" },
            { label: "Diversity Score", value: "0.85" },
        ],
        techStack: {
            frontend: ["React.js", "TypeScript"],
            backend: ["FastAPI", "Python", "Node.js", "Express"],
            ai: ["KMeans", "TF-IDF", "Cosine Similarity", "scikit-learn"],
            infrastructure: ["REST APIs", "Git", "CORS optimization"],
        },
        architecture: {
            description: "Python ML service handles vectorization and clustering, while the Node.js gateway manages user sessions and delivery to the responsive React frontend.",
            flow: [
                { id: "ui", label: "React Frontend", type: "frontend" },
                { id: "api", label: "Node.js Gateway", type: "backend" },
                { id: "ml", label: "FastAPI ML Server", type: "ai" },
                { id: "data", label: "KMeans Embeddings", type: "database" },
            ],
        },
        challenges: [
            "Balancing exploration vs exploitation in recommendations to avoid filter bubbles.",
            "Optimizing vector computations for real-time inference on low-resource instances."
        ],
        lessons: [
            "Explainable AI (XAI) features like 'Because you liked X' significantly improved user trust and CTR.",
            "FastAPI's async capabilities dropped inference latency overhead by 30% compared to Flask."
        ],
        links: {
            github: "https://github.com/ptdr1516/User-Recommendation",
        }
    },
    {
        slug: "analytics-throughput-forecasting",
        title: "Predictive Analytics Dashboard",
        shortDescription: "Backend throughput forecasting system featuring Regression & Time-Series models with anomaly flags.",
        problem: "Operations teams lacked visibility into future infrastructure requirements, leading to reactive scaling and occasional service outages during peak loads.",
        solution: "Built a predictive dashboard supporting Linear/Ridge regression and ARIMA/SARIMAX models. Features confidence bands, anomaly detection flags, and a scheduled retraining pipeline.",
        role: "ML Engineer",
        duration: "5 Months",
        metrics: [
            { label: "Forecast Accuracy", value: "94%" },
            { label: "Mean Absolute Error", value: "4.2%" },
            { label: "Pre-empted Outages", value: "12" },
        ],
        techStack: {
            frontend: ["React", "Recharts", "Next.js"],
            backend: ["FastAPI", "Node.js/Express"],
            ai: ["ARIMA/SARIMAX", "Linear/Ridge Regression", "Anomaly Flags"],
            infrastructure: ["Caching", "Logging", "Scheduled Retraining"],
        },
        architecture: {
            description: "Timeseries data is processed by Python ML services to generate forecasts with confidence intervals, which are then visualized on a high-throughput React dashboard.",
            flow: [
                { id: "dash", label: "React Analytics UI", type: "frontend" },
                { id: "api", label: "Node.js API", type: "backend" },
                { id: "model", label: "FastAPI Predictive Service", type: "ai" },
                { id: "log", label: "Infrastructure Logs", type: "database" },
            ],
        },
        challenges: [
            "Decomposing seasonal trends and handling extreme irregular outliers in infrastructure throughput.",
            "Minimizing training latency for interactive model parameter tuning on the dashboard."
        ],
        lessons: [
            "Ridge regression provided better generalization than Linear regression when handling correlated features.",
            "Visualizing confidence bands is more valuable for stakeholders than point estimates."
        ],
        links: {
            github: "https://github.com/ptdr1516/Analytics-Dashboard-Data-Forcasting",
        }
    },
    {
        slug: "sentiment-feedback-classifier",
        title: "Sentiment & Feedback Classifier",
        shortDescription: "End-to-end NLP pipeline for Twitter sentiment analysis with transformer embeddings and interactive dashboards.",
        problem: "Manual analysis of customer sentiment across social media was slow, subjective, and didn't scale with increasing brand mentions.",
        solution: "Engineered an end-to-end NLP classifier built on Kaggle datasets. Implemented text preprocessing (Regex, NLTK) and evaluation across Logistic Regression, Random Forest, and Transformer embeddings.",
        role: "NLP Engineer",
        duration: "3 Months",
        metrics: [
            { label: "F1 Score", value: "0.89" },
            { label: "Processing Speed", value: "2k texts/sec" },
            { label: "Dataset Size", value: "1.6M samples" },
        ],
        techStack: {
            frontend: ["Streamlit Dashboard"],
            backend: ["Python CLI", "FastAPI"],
            ai: ["TF-IDF", "BERT Embeddings", "Random Forest", "NLTK"],
            infrastructure: ["Kaggle Hub", "Joblib", "Regex Preprocessing"],
        },
        architecture: {
            description: "A Python-based NLP pipeline that handles raw text ingress, cleans it via custom regex filters, vectorizes it, and serves predictions through an interactive Streamlit UI.",
            flow: [
                { id: "input", label: "Twitter Feed/CLI", type: "frontend" },
                { id: "preprocess", label: "NLTK Preprocessing", type: "ai" },
                { id: "vector", label: "Embedding Layer", type: "ai" },
                { id: "model", label: "Classifier (RF/LR)", type: "ai" },
            ],
        },
        challenges: [
            "Reducing model performance drift when moving from formal text to noisy social media slang/emojis.",
            "Optimizing tokenization for high-throughput batch inference."
        ],
        lessons: [
            "Preprocessing (cleaning hashtags and mentions) had a larger impact on accuracy than choosing a complex model.",
            "Random Forests provided excellent interpretability through feature importance analysis."
        ],
        links: {
            github: "https://github.com/ptdr1516/Sentiment-Analysis",
        }
    }
];
