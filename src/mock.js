// Mock data for Ayush Gupta - ML Engineer Portfolio
// Based on real resume data only

export const profile = {
  name: "Ayush Gupta",
  title: "ML Engineer",
  tagline: "Building intelligent systems, not just models.",
  subtext:
    "AI/ML Engineer building end-to-end systems — RAG pipelines, NLP models, computer vision workflows, and the FastAPI backends that serve them in production.",
  summary:
    "I build backend-integrated ML systems end-to-end — from data pipelines and model training to FastAPI services that live behind real products. My work spans RAG and LLM applications, NLP, computer vision, and predictive modeling, with a focus on honest evaluation, reproducible tuning, and production-ready deployment.",
  location: "Greater Noida, India",
  email: "ayushrajguptagn@gmail.com",
  phone: "+91 88048 55640",
  github: "https://github.com/AyushGupta16",
  linkedin: "https://www.linkedin.com/in/ayushgupta1606",
  resumeUrl:
    "https://customer-assets.emergentagent.com/job_a45d00aa-5be3-4fb4-b96a-97543936bd72/artifacts/a9bmza39_Ayush%20Gupta%20ML%20Resume%20V1.pdf",
};

export const stats = [
  { label: "ML Projects", value: "02", hint: "End-to-end systems" },
  { label: "Certifications", value: "09", hint: "DeepLearning.AI, NVIDIA, Google" },
  { label: "Internships", value: "02", hint: "R&D + ML engineering" },
  { label: "Years Learning", value: "04+", hint: "CS @ LPU" },
];

export const systemFocus = [
  {
    title: "NLP & LLM Systems",
    description:
      "RAG pipelines, evaluation with RAGAS, prompt engineering, persona-adaptive agents, and contextual memory.",
    items: ["Transformers", "RAG", "RAGAS", "Prompt Engineering"],
  },
  {
    title: "Computer Vision",
    description:
      "OpenCV-based pipelines and CNN architectures for real-world detection and classification tasks.",
    items: ["OpenCV", "CNNs", "Image Pipelines"],
  },
  {
    title: "Predictive Modeling",
    description:
      "Imbalanced data handling with SMOTE-Tomek, tree ensembles, neural networks, and GridSearchCV tuning.",
    items: ["Scikit-learn", "Random Forest", "MLP", "GridSearchCV"],
  },
  {
    title: "Backend-Integrated ML",
    description:
      "FastAPI services, REST endpoints, and production-oriented ML pipelines ready for real-world usage.",
    items: ["FastAPI", "REST APIs", "Python"],
  },
];

export const projects = [
  {
    slug: "rag-optimizer",
    name: "RAG Optimizer",
    period: "Apr 2026",
    tagline: "An evaluation-driven framework to tune RAG retrieval and response quality.",
    problem:
      "RAG systems often produce plausible answers that aren't faithful to the retrieved context. Without a reproducible evaluation loop, every tuning change becomes guesswork.",
    whatIBuilt:
      "An end-to-end RAG evaluation and optimization framework. It scores every response on faithfulness and answer relevance using RAGAS, then feeds those signals into a reward-based tuner that adjusts chunking, embedding, and re-ranking parameters. The whole loop sits behind a FastAPI service so any RAG stack can be benchmarked against the same baseline.",
    systemFlow:
      "A document set is ingested, chunked, and embedded into a vector store. At query time, retrieval pulls candidate chunks, re-ranks them using current weights, and passes the context to an LLM responder. Each generated answer is scored by the RAGAS evaluator for faithfulness and relevance. Those scores become the reward signal used by the tuner to update retrieval parameters between runs \u2014 turning subjective inspection into a measurable, reproducible loop.",
    outcomes: [
      "~25% improvement in response accuracy through iterative tuning",
      "Reproducible RAG evaluation loop that replaces subjective inspection",
      "Plug-in evaluator that works across different RAG stacks",
    ],
    stack: ["Python", "RAGAS", "LLMs", "Vector Store", "FastAPI"],
    tags: ["GenAI", "LLM", "Evaluation"],
  },
  {
    slug: "persona-adaptive-support-agent",
    name: "Persona-Adaptive Customer Support Agent",
    period: "Oct 2025",
    tagline: "An AI agent that adapts tone and resolution strategy to each customer persona.",
    problem:
      "Generic support bots reply the same way to every user. Frustrated customers, technical users, and first-time buyers need different tones and different resolution paths \u2014 a single static prompt cannot serve all of them.",
    whatIBuilt:
      "A persona-aware support agent built as a backend-integrated LLM service. An NLP classifier tags each incoming message with a persona signal (tone, intent, user type). A RAG layer grounds answers in real product documentation. Contextual memory keeps each conversation stateful, and a prompt-selection layer shapes the response style to match the detected persona \u2014 all exposed through a FastAPI REST endpoint.",
    systemFlow:
      "A customer message hits the FastAPI endpoint with a session id. The persona classifier analyses tone and intent; conversation memory for that session is loaded. The RAG layer retrieves the most relevant knowledge-base chunks. A persona-aware prompt template is assembled from the memory, retrieved context, and detected persona, then sent to the LLM. The grounded reply goes back to the user and the updated state is written to memory so the next turn builds on the previous one.",
    outcomes: [
      "Dynamic tone and resolution strategies per customer persona",
      "More relevant, grounded replies via contextual memory and RAG",
      "Stateful sessions that evolve instead of resetting every turn",
    ],
    stack: ["Python", "FastAPI", "LLMs", "RAG", "NLP", "Transformers"],
    tags: ["GenAI", "NLP", "Agents"],
  },
];

export const experience = [
  {
    company: "AllSoft Solutions Ltd. (An IBM Partner)",
    role: "Machine Learning Intern",
    period: "Aug 2022 – Jul 2023",
    location: "Remote",
    bullets: [
      "Built an end-to-end churn prediction model for the E-commerce / DTH domain, targeting account-level churn that impacts multi-customer revenue.",
      "Performed data preprocessing, feature engineering, and EDA to identify key churn drivers — service score, tenure, customer-care interactions, and revenue trends.",
      "Handled imbalanced data using SMOTE-Tomek and trained Logistic Regression, Decision Tree, Random Forest, and Neural Network (MLP) models with scikit-learn.",
      "Optimized models with GridSearchCV, achieving ~88% test accuracy with the Neural Network while maintaining strong precision, recall, F1 and ROC-AUC.",
      "Proposed a revenue-safe, segmented retention strategy targeting high-risk accounts without blanket discounts, aligned with Revenue Assurance constraints.",
      "Designed the complete ML pipeline including preprocessing, training, and evaluation.",
    ],
    stack: ["Python", "Scikit-learn", "SMOTE-Tomek", "GridSearchCV", "Pandas", "NumPy"],
  },
  {
    company: "LPU Innovation Studio",
    role: "R&D Intern",
    period: "Jul 2023 – Aug 2023",
    location: "Jalandhar, Punjab",
    bullets: [
      "Participated in innovation and intellectual-property training, gaining exposure to patent filing and IP fundamentals.",
      "Conducted research-driven projects on Machine Learning for Emotion Detection, including literature review and comparative analysis of ML approaches.",
      "Collaborated in a cross-functional team to design and implement a forge-counter mechanism, contributing to improved production accuracy and operational efficiency.",
      "Applied analytical thinking and prototyping methodologies to bridge research concepts with practical implementation.",
    ],
    stack: ["Python", "ML Research", "Prototyping"],
  },
];

export const skillGroups = [
  {
    group: "Languages",
    items: ["Python", "C++", "SQL"],
  },
  {
    group: "Machine Learning",
    items: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "GridSearchCV",
      "SMOTE-Tomek",
      "Logistic Regression",
      "Decision Tree",
      "Random Forest",
      "Neural Network (MLP)",
    ],
  },
  {
    group: "Computer Vision",
    items: ["OpenCV", "CNNs"],
  },
  {
    group: "NLP / LLM",
    items: ["Transformers", "RAG", "Prompt Engineering", "RAGAS"],
  },
  {
    group: "Backend",
    items: ["FastAPI", "REST APIs"],
  },
  {
    group: "Data",
    items: ["Pandas", "NumPy", "EDA", "Feature Engineering"],
  },
  {
    group: "Practices",
    items: [
      "Model Optimization",
      "Deployment",
      "Predictive Modeling",
      "CV Pipelines",
      "LLM Applications",
    ],
  },
];

export const education = [
  {
    school: "Lovely Professional University",
    degree: "B.Tech, Computer Science and Engineering",
    period: "2021 – 2025",
    location: "Jalandhar, Punjab",
  },
  {
    school: "Ursuline Convent Sr. Sec. School",
    degree: "Class XII — PCMB",
    period: "2020",
    location: "Greater Noida, Uttar Pradesh",
  },
  {
    school: "Ursuline Convent Sr. Sec. School",
    degree: "Class X — Science",
    period: "2018",
    location: "Greater Noida, Uttar Pradesh",
  },
];

export const certifications = [
  { name: "Neural Networks and Deep Learning", issuer: "DeepLearning.AI", date: "Jan 2026" },
  {
    name: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    date: "Oct 2025",
  },
  { name: "Foundations of Data Science", issuer: "Google", date: "Apr 2025" },
  {
    name: "Natural Language Processing with Classification and Vector Spaces",
    issuer: "DeepLearning.AI",
    date: "Feb 2025",
  },
  {
    name: "Interactive Computer Graphics",
    issuer: "University of Tokyo",
    date: "Feb 2025",
  },
  { name: "Introduction to Shader Graphics", issuer: "Coursera", date: "Feb 2025" },
  { name: "Begin with Python", issuer: "Programming Pathshala", date: "Jun 2023" },
  {
    name: "Divide and Conquer, Sorting and Searching, and Randomized Algorithms",
    issuer: "Coursera",
    date: "Dec 2022",
  },
  { name: "Fundamentals of Deep Learning", issuer: "NVIDIA", date: "May 2022" },
];

export const achievements = [
  "Achieved ~88% test accuracy with a Neural Network on churn prediction while maintaining strong precision, recall, F1 and ROC-AUC.",
  "Proposed a revenue-safe, segmented retention strategy targeting high-risk accounts without blanket discounts.",
  "Boosted RAG query response accuracy by ~25% through iterative evaluation and tuning.",
  "Led team efforts to secure 1st place in 2 competitive university events as Team Coordinator for SCSE.",
];

export const leadership = [
  {
    org: "LPU-NSS NAVJEEVAN (National Service Scheme)",
    role: "Batch Volunteer",
    period: "Sept 2023 – Present",
    detail:
      "Led a team of 30 volunteers in community outreach, conducting blood donation camps and teaching computer literacy in local schools. Served 100+ residents through social-impact initiatives and winter service camps.",
  },
  {
    org: "Hostel Directing Committee",
    role: "Treasurer & Hostel Manager",
    period: "Aug 2023 – Aug 2024",
    detail:
      "Coordinated hostel operations and facility management for 500+ residents. Managed budget allocation and transparency for student-led initiatives.",
  },
  {
    org: "School of Computer Science & Engineering (SCSE)",
    role: "Team Coordinator",
    period: "Aug 2022 – Mar 2023",
    detail:
      "Coordinated 4 university-wide contests (2 cultural, 2 technical), managing outreach for 2,000+ students and supporting 700+ live participants. Secured 1st place in 2 competitive events.",
  },
];

export const blogPosts = [
  {
    title: "Evaluating RAG Pipelines with RAGAS — What Actually Matters",
    excerpt:
      "Faithfulness and answer relevance are more honest signals than embedding similarity. A walkthrough of the evaluation loop used in RAG Optimizer.",
    date: "Coming soon",
    tag: "LLM Evaluation",
  },
  {
    title: "Persona-Aware Prompting for Customer Support Agents",
    excerpt:
      "How tone classification + contextual memory changes the feel of an AI agent — notes from building a persona-adaptive support system.",
    date: "Coming soon",
    tag: "GenAI",
  },
  {
    title: "Taming Imbalanced Data: SMOTE-Tomek in Production Churn Models",
    excerpt:
      "When accuracy lies: why ROC-AUC and precision/recall mattered more than headline numbers in a real DTH churn model.",
    date: "Coming soon",
    tag: "Classical ML",
  },
  {
    title: "From Notebook to FastAPI — Shipping ML Models as Real Services",
    excerpt:
      "A practical checklist for turning a trained model into a backend-integrated service that can actually be called from a product.",
    date: "Coming soon",
    tag: "MLOps",
  },
];
