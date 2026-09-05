export const PORTFOLIO_DATA = {
  personal: {
    name: "Diwesh Sharma",
    tagline: "AI/ML Engineer",
    bio: "Proficient in machine learning, deep learning, and NLP. I build end-to-end pipelines using Python, PyTorch, Scikit-learn, and deploy them via FastAPI and Docker.",
    location: "Gurgaon",
    email: "diweshsharma.janu@gmail.com",
    resumeUrl: "/resume.pdf",
    profileImage: "/profile.png"
  },
  social: {
    github: "https://github.com/diweshsharma",
    linkedin: "https://www.linkedin.com/in/diweshsharma/",
    twitter: "#",
    leetcode: "https://leetcode.com/u/Diwxsh/"
  },
  skills: {
    languages: [
      { name: "Python" },
      { name: "C++" },
      { name: "SQL" }
    ],
    frameworks: [
      { name: "PyTorch" },
      { name: "Scikit-learn" },
      { name: "XGBoost" },
      { name: "LangChain" },
      { name: "Pandas & NumPy" },
      { name: "NLTK & spaCy" }
    ],
    tools: [
      { name: "FastAPI" },
      { name: "Streamlit" },
      { name: "Docker" },
      { name: "Git & GitHub" }
    ]
  },
  projects: [
    {
      title: "Student Placement Prediction",
      description: "Trained and benchmarked 6 models on 100K student records. Integrated Groq LLM (Llama 3.1) for personalized weak-area suggestions. Deployed full-stack on Render with FastAPI and Streamlit.",
      tags: ["Python", "XGBoost", "FastAPI", "Groq API"],
      liveUrl: "https://student-placement-prediction-ik3k.onrender.com",
      codeUrl: "#",
      image: "/placement.jpg"
    },
    {
      title: "Credit Card Fraud Detection",
      description: "Achieved 98% recall and 0.97 ROC-AUC on a highly imbalanced dataset using XGBoost and SMOTE oversampling.",
      tags: ["Python", "XGBoost", "SMOTE"],
      liveUrl: "#",
      codeUrl: "https://github.com/diweshsharma",
      image: "/fraud.jpg"
    },
    {
      title: "Quillify – AI Writing Assistant",
      description: "Architecting a multi-module AI writing assistant integrating Gemini API, LangChain, and spaCy across four tools.",
      tags: ["Gemini API", "LangChain", "FastAPI"],
      liveUrl: "#",
      codeUrl: "#",
      image: "/quillify.jpg"
    }
  ],
  experience: [
    {
      role: "AI/ML Intern",
      company: "DevKart",
      duration: "Jun 2026 – Aug 2026",
      location: "Bengaluru",
      highlights: [
        "Analyzed student accuracy, speed, difficulty handling, and test-taking behavior.",
        "Developed dynamic student profiling and personalized roadmap logic.",
        "Designed a continuous Test → Analyze → Identify Gaps → Personalize → Reassess feedback loop.",
        "Implemented logic for adaptive practice and dynamically generated tests.",
        "Worked with Python, Pandas, NumPy and data preprocessing."
      ]
    }
  ],
  education: [
    {
      degree: "B.Tech in Computer Science (AI & ML)",
      institution: "Dronacharya College of Engineering",
      duration: "May 2023 – May 2027"
    },
    {
      degree: "Senior Secondary (XII), Science",
      institution: "A.V.R Public School Delhi",
      duration: "2023"
    }
  ],
  certifications: [
    {
      name: "Certified Generative AI Professional",
      issuer: "Oracle",
      date: "2023 - 2024"
    },
    {
      name: "Explore Machine Learning using R",
      issuer: "Infosys",
      date: "2023 - 2024"
    }
  ]
};
