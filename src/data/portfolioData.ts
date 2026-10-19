import {
  Project,
  SecondaryWebProject,
  ExperienceItem,
  EducationItem,
  SkillGroup
} from "@/types/portfolio";

export const personalInfo = {
  name: "Menna Ali Abdelrahman",
  titles: [
    "AI & Machine Learning Engineer",
    "Frontend Developer — React.js & Next.js"
  ],
  primaryTitle: "AI & ML Engineer & Frontend Developer",
  location: "Faisal, Giza, Egypt",
  email: "Mennaali30617@gmail.com",
  phone: "+20 106 817 8533",
  linkedIn: "https://www.linkedin.com/in/menna-ali-485ab9312",
  linkedInHandle: "linkedin.com/in/menna-ali-485ab9312",
  github: "https://github.com/Mennaali30",
  githubHandle: "github.com/Mennaali30",
  heroHeadline: "Building User-Centered Interfaces and Intelligent AI Solutions.",
  heroSupporting:
    "Computer Science and Artificial Intelligence graduate passionate about building practical machine learning systems and modern web experiences using React.js and Next.js.",
  aboutIntro:
    "Computer Science and Artificial Intelligence graduate from Capital University (formerly Helwan University) with Excellent with Honors distinction and a 3.67/4.00 GPA. Dual-specialized in developing high-performance frontend interfaces with React.js and Next.js, alongside engineering practical machine learning and deep learning pipelines from data preprocessing to real-world inference.",
  stats: [
    {
      value: "3.67 / 4.00",
      label: "Cumulative GPA",
      subtext: "Excellent with Honors",
      accent: "frontend" as const
    },
    {
      value: "Grade A+",
      label: "Graduation Project",
      subtext: "Wasla Real-Time ESL",
      accent: "aiml" as const
    },
    {
      value: "91.74%",
      label: "Wasla Accuracy",
      subtext: "47 Classified Gestures",
      accent: "aiml" as const
    },
    {
      value: "14+",
      label: "Verified Projects",
      subtext: "React, Next.js & AI/ML",
      accent: "frontend" as const
    }
  ]
};

export const specializationCards = {
  frontend: {
    title: "Frontend Development",
    subtitle: "React.js & Next.js",
    description:
      "Crafting clean, accessible, and high-performance web applications with modern component architectures, type safety, and seamless API integrations.",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "REST APIs",
      "JWT Authentication",
      "Responsive Design",
      "Git & GitHub"
    ],
    tagline: "Component architecture, responsive layouts & fluid interactions"
  },
  aiml: {
    title: "AI & Machine Learning",
    subtitle: "Applied ML & Deep Learning",
    description:
      "Designing end-to-end machine learning pipelines, multimodal neural networks, computer vision systems, and intelligent language understanding solutions.",
    skills: [
      "Python",
      "Machine Learning",
      "Deep Learning",
      "TensorFlow & PyTorch",
      "Scikit-learn",
      "Computer Vision",
      "NLP",
      "Model Evaluation",
      "Data Preprocessing",
      "LLMs, RAG & AI Agents"
    ],
    tagline: "Feature engineering, neural modeling & evaluation"
  }
};

export const featuredProjects: Project[] = [
  {
    id: "wasla-sign-language",
    title: "Wasla — Real-Time Egyptian Sign Language Recognition System",
    subtitle: "Graduation Project • Capital University",
    date: "June 2026",
    type: "Graduation Team Project",
    grade: "Grade: A+",
    specialty: "ai-ml",
    categories: ["Deep Learning", "Computer Vision", "Graduation Project"],
    description:
      "A real-time Egyptian Sign Language (ESL) recognition system capturing hand landmarks and facial expressions to classify 47 sign language gestures with low latency on standard CPU hardware.",
    technologies: [
      "Python",
      "MediaPipe Holistic",
      "DeepFace",
      "Multilayer Perceptron (MLP)",
      "OpenCV",
      "Flask",
      "Scikit-learn"
    ],
    keyResult: "47 ESL classes classified with 91.74% validation accuracy and 0.906 macro F1-score on CPU.",
    metrics: [
      { label: "Validation Accuracy", value: "91.74%" },
      { label: "Macro F1-Score", value: "0.906" },
      { label: "Classes Classified", value: "47 Classes" },
      { label: "Feature Dimension", value: "163-D Vector" },
      { label: "Model Size", value: "~973 KB" },
      { label: "Target Hardware", value: "CPU Webcam (Offline)" }
    ],
    detailedResults: [
      "Extracted 163-dimensional representations: 156 MediaPipe Holistic landmarks + 7 DeepFace emotion indicators",
      "Final architecture: Multilayer Perceptron (MLP) structured as 163 → 256 → 128 → 64 → Softmax (47 classes)",
      "High efficiency: lightweight ~973 KB model optimized for offline, CPU-only real-time webcam inference",
      "Graduation team project with collaborator repository (Grade A+ with Honors)"
    ],
    architecture: [
      "Input: Live Webcam RGB Video Stream",
      "Feature Extractor 1: MediaPipe Holistic (156 upper-body & hand landmarks)",
      "Feature Extractor 2: DeepFace Emotion Pipeline (7 facial affect probabilities)",
      "Concatenation: Unified 163-Dimensional Feature Vector",
      "Classifier: Dense MLP (163 → 256 → 128 → 64 → 47-class Softmax)",
      "Output: Real-Time Egyptian Sign Prediction & Emotion Feedback"
    ],
    caseStudy: {
      problem:
        "Deaf and hard-of-hearing individuals in Egypt face significant daily communication barriers. Dedicated real-time tools for Egyptian Sign Language (ESL) are scarce, and critical emotional nuances conveyed through facial expressions are often overlooked.",
      approach:
        "Engineered an offline multimodal pipeline combining MediaPipe Holistic (156 landmarks) and DeepFace (7 emotion scores). Rather than requiring heavy recurrent networks, the balanced 163-D feature representation was efficiently classified using a tuned 4-layer MLP.",
      technologies: [
        "MediaPipe Holistic",
        "DeepFace",
        "MLP Architecture (163→256→128→64→47)",
        "OpenCV Stream Processing",
        "Flask & Local Inference Engine"
      ],
      results: [
        "91.74% validation accuracy across 47 sign classes",
        "0.906 Macro F1-score with robust per-class balance",
        "Sub-second inference running purely on commodity CPU webcam feeds",
        "Awarded Grade A+ at Capital University"
      ],
      deployment:
        "Engineered for accessible CPU execution without external GPU dependencies, packaged with real-time video capture and cross-platform desktop/web interfaces."
    },
    githubUrl: "https://github.com/abdullahsherdy/ESL-software-ml",
    primaryUrl: "https://github.com/abdullahsherdy/ESL-software-ml",
    primaryUrlLabel: "Collaborator GitHub Repo",
    primaryUrlType: "github",
    note: "Graduation team project developed collaboratively. Contributed to pipeline engineering, feature representation, and model evaluation.",
    featuredProminence: "high"
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Web Application",
    subtitle: "Modern React.js & Next.js Storefront",
    date: "2025",
    type: "Frontend Application",
    specialty: "frontend",
    categories: ["Frontend Development", "React.js", "Next.js"],
    description:
      "A complete e-commerce storefront featuring dynamic product catalogs, category filtering, cart management, JWT authentication flow, and streamlined checkout.",
    technologies: [
      "React.js",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "JWT Authentication",
      "Context API / State Management"
    ],
    keyResult: "Fully responsive multi-page storefront with real-time cart persistence and secure auth handling.",
    metrics: [
      { label: "Architecture", value: "React & Next.js" },
      { label: "Integration", value: "RESTful API" },
      { label: "Authentication", value: "JWT Auth Flow" },
      { label: "Styling", value: "Tailwind CSS" }
    ],
    detailedResults: [
      "Built structured catalog navigation with search, category filtering, and product detail modals",
      "Integrated secure JWT token lifecycle with protected routes and persistent user sessions",
      "Implemented responsive shopping cart management with instant badge count updates",
      "Crafted mobile-first layouts with smooth transitions and keyboard-accessible interactive states"
    ],
    githubUrl: "https://github.com/Mennaali30/e-commerce_website",
    primaryUrl: "https://github.com/Mennaali30/e-commerce_website",
    primaryUrlLabel: "GitHub Repository",
    primaryUrlType: "github",
    featuredProminence: "high"
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    subtitle: "End-to-End ML Pipeline & Explainability",
    date: "June 2026",
    type: "Machine Learning System",
    specialty: "ai-ml",
    categories: ["Machine Learning", "Predictive Analytics"],
    description:
      "Customer churn prediction pipeline trained on the IBM Telco benchmark with SMOTE imbalance mitigation, multi-model benchmarking, and SHAP feature attribution.",
    technologies: [
      "Python",
      "Scikit-learn",
      "SMOTE",
      "XGBoost",
      "Random Forest",
      "Logistic Regression",
      "SHAP",
      "Pandas & NumPy"
    ],
    keyResult: "85–87% ROC-AUC achieved using tuned XGBoost with SMOTE imbalance handling and SHAP explainability.",
    metrics: [
      { label: "Top ROC-AUC", value: "85–87%" },
      { label: "Class Balancing", value: "SMOTE" },
      { label: "Models Benchmarked", value: "7 Classifiers" },
      { label: "Interpretability", value: "SHAP Values" }
    ],
    detailedResults: [
      "Benchmarked 7 classification algorithms: Logistic Regression, Random Forest, XGBoost, LightGBM, SVM, and KNN",
      "Mitigated severe class imbalance using SMOTE (Synthetic Minority Over-sampling Technique)",
      "Optimized decision thresholds with GridSearchCV hyperparameter exploration",
      "Generated SHAP summary and dependence plots to explain churn drivers for clinical/business transparency"
    ],
    liveUrl: "https://cornea-recoil-mango.ngrok-free.dev/",
    primaryUrl: "https://cornea-recoil-mango.ngrok-free.dev/",
    primaryUrlLabel: "Live App Tunnel",
    primaryUrlType: "live",
    note: "Live demo served via ngrok tunnel during evaluation sessions. May be temporarily offline when server instance is dormant.",
    featuredProminence: "medium"
  },
  {
    id: "cardiosense-heart-disease",
    title: "CardioSense — Heart Disease Prediction",
    subtitle: "Clinical ML Benchmark & Streamlit Interface",
    date: "June 2026",
    type: "Machine Learning Pipeline",
    specialty: "ai-ml",
    categories: ["Machine Learning", "Streamlit"],
    description:
      "Interactive clinical risk prediction application benchmarking six machine learning classifiers with systematic hyperparameter tuning and instant parameter-driven inference.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn"
    ],
    keyResult: "Benchmarked 6 classifiers with GridSearchCV optimization and deployed to interactive Streamlit cloud app.",
    metrics: [
      { label: "Models Evaluated", value: "6 Classifiers" },
      { label: "Tuning Method", value: "GridSearchCV" },
      { label: "Deployment", value: "Streamlit Cloud" },
      { label: "Input Features", value: "Clinical Biometrics" }
    ],
    detailedResults: [
      "Trained and compared 6 distinct algorithms: Logistic Regression, Decision Tree, Random Forest, Gradient Boosting, SVM, and KNN",
      "Conducted exploratory feature correlation analysis across biometric risk indicators",
      "Developed an interactive Streamlit UI for immediate clinical risk classification",
      "Constructed modular inference functions suitable for rapid downstream integration"
    ],
    liveUrl: "https://cardiosense-ai-htcbewfaa3rtf64wmfv6df.streamlit.app/",
    primaryUrl: "https://cardiosense-ai-htcbewfaa3rtf64wmfv6df.streamlit.app/",
    primaryUrlLabel: "Live Streamlit App",
    primaryUrlType: "live",
    disclaimer: "This project is for educational and research purposes and is not a substitute for professional medical advice.",
    featuredProminence: "medium"
  }
];

export const frontendProjects: Project[] = [
  {
    id: "fe-ecommerce",
    title: "E-Commerce Website",
    subtitle: "React.js & Next.js Storefront",
    date: "2025",
    type: "Web Application",
    specialty: "frontend",
    categories: ["React.js", "Next.js", "Tailwind CSS"],
    description:
      "Comprehensive digital storefront featuring product catalogs, category filtering, cart state management, and authenticated user workflows.",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "REST APIs", "JWT Auth"],
    keyResult: "Production-structured storefront with responsive layouts, token-based auth, and cart lifecycle.",
    metrics: [
      { label: "Stack", value: "React & Next.js" },
      { label: "Auth", value: "JWT Auth Flow" },
      { label: "Design", value: "Tailwind CSS" }
    ],
    githubUrl: "https://github.com/Mennaali30/e-commerce_website",
    primaryUrl: "https://github.com/Mennaali30/e-commerce_website",
    primaryUrlLabel: "GitHub Repository",
    primaryUrlType: "github",
    featuredProminence: "high"
  },
  {
    id: "fe-recipe-website",
    title: "Recipe Discovery Website",
    subtitle: "Interactive React Task",
    date: "2025",
    type: "React Application",
    specialty: "frontend",
    categories: ["React.js", "API Integration", "CSS3"],
    description:
      "Interactive culinary discovery platform built with React, enabling meal search, category browsing, ingredient breakdowns, and dynamic recipe details.",
    technologies: ["React.js", "JavaScript", "REST APIs", "CSS Modules", "Responsive Web"],
    keyResult: "Dynamic meal search with ingredient lists, category tabs, and responsive card layouts.",
    metrics: [
      { label: "Framework", value: "React.js" },
      { label: "Data Source", value: "Recipe REST API" },
      { label: "Features", value: "Search & Filter" }
    ],
    githubUrl: "https://github.com/Mennaali30/ReactTask2",
    primaryUrl: "https://github.com/Mennaali30/ReactTask2",
    primaryUrlLabel: "GitHub Repository",
    primaryUrlType: "github",
    featuredProminence: "high"
  },
  {
    id: "fe-start-framework",
    title: "START Framework",
    subtitle: "Structured React Architecture",
    date: "2025",
    type: "React Application",
    specialty: "frontend",
    categories: ["React.js", "Component Architecture"],
    description:
      "Modern multi-section portfolio and framework showcase implemented with modular React components, clean routing, and structured styling.",
    technologies: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"],
    keyResult: "Modular component layout with clean navigation and responsive portfolio sections.",
    githubUrl: "https://github.com/Mennaali30/start-framework",
    primaryUrl: "https://github.com/Mennaali30/start-framework",
    primaryUrlLabel: "GitHub Repository",
    primaryUrlType: "github",
    featuredProminence: "medium"
  },
  {
    id: "fe-weather-app",
    title: "Weather Forecast Application",
    subtitle: "Live Weather API & Geolocation",
    date: "2024",
    type: "JavaScript Web App",
    specialty: "frontend",
    categories: ["JavaScript", "REST APIs", "Geolocation"],
    description:
      "Real-time weather forecast application fetching live meteorological data, 3-day projections, and location-based weather tracking via OpenWeather/Weather API.",
    technologies: ["JavaScript (ES6)", "Weather REST API", "Geolocation API", "HTML5", "CSS3"],
    keyResult: "Live weather lookup by city with automatic geolocation detection and multi-day forecast display.",
    githubUrl: "https://github.com/Mennaali30/Weather-task",
    primaryUrl: "https://github.com/Mennaali30/Weather-task",
    primaryUrlLabel: "GitHub Repository",
    primaryUrlType: "github",
    featuredProminence: "medium"
  },
  {
    id: "fe-smart-login",
    title: "Smart Login System",
    subtitle: "Client-Side Authentication & Validation",
    date: "2024",
    type: "JavaScript Application",
    specialty: "frontend",
    categories: ["JavaScript", "Authentication", "Validation"],
    description:
      "Client-side user authentication system featuring registration, login validation, session state management via localStorage, and instant input feedback.",
    technologies: ["JavaScript (Vanilla)", "HTML5 Forms", "CSS3", "Local Storage", "Regex Validation"],
    keyResult: "Robust client-side registration, login state persistence, and sanitization checks.",
    githubUrl: "https://github.com/Mennaali30/Route-Task4-Js",
    primaryUrl: "https://github.com/Mennaali30/Route-Task4-Js",
    primaryUrlLabel: "GitHub Repository",
    primaryUrlType: "github",
    featuredProminence: "medium"
  },
  {
    id: "fe-oibsip-landing-page",
    title: "Oasis Infobyte Landing Page",
    subtitle: "Web Development Internship Project",
    date: "August 2026",
    type: "Internship Project",
    specialty: "frontend",
    categories: ["HTML5", "CSS3", "Responsive"],
    description:
      "A sleek, responsive marketing landing page created during the Oasis Infobyte Web Development Internship, featuring hero section, feature highlights, and call-to-actions.",
    technologies: ["HTML5", "CSS3", "Responsive Grid", "Flexbox"],
    keyResult: "Responsive multi-section landing page with polished micro-interactions and mobile adaptation.",
    githubUrl: "https://github.com/Mennaali30/OIBSIP/tree/main/WebDev-L1-LandingPage",
    primaryUrl: "https://github.com/Mennaali30/OIBSIP/tree/main/WebDev-L1-LandingPage",
    primaryUrlLabel: "GitHub Repository (OIBSIP)",
    primaryUrlType: "github",
    featuredProminence: "compact"
  },
  {
    id: "fe-oibsip-portfolio",
    title: "Oasis Infobyte Personal Portfolio",
    subtitle: "Internship Web Development Track",
    date: "August 2026",
    type: "Internship Project",
    specialty: "frontend",
    categories: ["HTML5", "CSS3", "JavaScript"],
    description:
      "Clean personal developer portfolio showcasing skills, project showcases, and contact info, built as part of Level 1 tasks at Oasis Infobyte.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    keyResult: "Structured personal developer portfolio with responsive layout and clean typography.",
    githubUrl: "https://github.com/Mennaali30/OIBSIP/tree/main/WebDev-L1-PersonalPortfolio",
    primaryUrl: "https://github.com/Mennaali30/OIBSIP/tree/main/WebDev-L1-PersonalPortfolio",
    primaryUrlLabel: "GitHub Repository (OIBSIP)",
    primaryUrlType: "github",
    featuredProminence: "compact"
  },
  {
    id: "fe-oibsip-temp-converter",
    title: "Temperature Converter",
    subtitle: "Utility Web Tool",
    date: "August 2026",
    type: "Internship Project",
    specialty: "frontend",
    categories: ["JavaScript", "HTML5", "CSS3"],
    description:
      "Interactive unit conversion application converting temperatures seamlessly between Celsius, Fahrenheit, and Kelvin with input validation.",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    keyResult: "Instant bidirectional unit conversion across Celsius, Fahrenheit, and Kelvin scales.",
    githubUrl: "https://github.com/Mennaali30/OIBSIP/tree/main/WebDev-L1-TemperatureConverter",
    primaryUrl: "https://github.com/Mennaali30/OIBSIP/tree/main/WebDev-L1-TemperatureConverter",
    primaryUrlLabel: "GitHub Repository (OIBSIP)",
    primaryUrlType: "github",
    featuredProminence: "compact"
  }
];

export const secondaryWebProjects: SecondaryWebProject[] = [
  {
    id: "sec-devfolio",
    title: "DevFolio",
    description: "Responsive developer portfolio website template with smooth scroll sections and skill showcases.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    githubUrl: "https://github.com/Mennaali30/DivFolio"
  },
  {
    id: "sec-mealify",
    title: "Mealify",
    description: "Modern restaurant and chef landing page featuring rich menu displays and culinary presentations.",
    technologies: ["HTML5", "CSS3", "Flexbox", "Responsive Design"],
    githubUrl: "https://github.com/Mennaali30/Mealify"
  },
  {
    id: "sec-fokir",
    title: "Fokir",
    description: "Personal agency and freelancer portfolio layout with interactive navigation and project filters.",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/Mennaali30/Fokir"
  },
  {
    id: "sec-bakery",
    title: "Bakery",
    description: "Pastry shop website layout featuring product cards, about story, and customer review sections.",
    technologies: ["HTML5", "CSS3", "Responsive Layout"],
    githubUrl: "https://github.com/Mennaali30/Bakery"
  },
  {
    id: "sec-world",
    title: "WORLD",
    description: "Travel and destination showcase web layout with card grids and typography styling.",
    technologies: ["HTML5", "CSS3", "CSS Grid"],
    githubUrl: "https://github.com/Mennaali30/WORLD"
  },
  {
    id: "sec-axit",
    title: "AXIT",
    description: "Clean SaaS product landing page with tabbed content, feature cards, and contact form design.",
    technologies: ["HTML5", "CSS3", "Responsive UI"],
    githubUrl: "https://github.com/Mennaali30/AXIT"
  }
];

export const aiMlProjects: Project[] = [
  {
    id: "aiml-wasla",
    title: "Wasla — Egyptian Sign Language Recognition",
    subtitle: "Graduation Project • Grade: A+",
    date: "June 2026",
    type: "Graduation Team Project",
    grade: "Grade: A+",
    specialty: "ai-ml",
    categories: ["Computer Vision", "Deep Learning"],
    description:
      "Real-time system recognizing 47 Egyptian Sign Language gestures and signer emotion state using MediaPipe Holistic, DeepFace, and a high-speed MLP.",
    technologies: [
      "Python",
      "MediaPipe Holistic",
      "DeepFace",
      "Multilayer Perceptron (MLP)",
      "OpenCV",
      "Flask"
    ],
    keyResult: "91.74% validation accuracy and 0.906 macro F1 on 47 classes with ~973 KB CPU-optimized model.",
    metrics: [
      { label: "Accuracy", value: "91.74%" },
      { label: "Macro F1", value: "0.906" },
      { label: "Classes", value: "47 Signs" },
      { label: "Architecture", value: "163-D → MLP" }
    ],
    detailedResults: [
      "163-dimensional feature representation (156 MediaPipe landmarks + 7 DeepFace emotions)",
      "Dense MLP network (163 → 256 → 128 → 64 → Softmax 47)",
      "Designed for low-latency, offline webcam operation on commodity CPU hardware",
      "Team graduation project completed at Capital University (Grade A+)"
    ],
    githubUrl: "https://github.com/abdullahsherdy/ESL-software-ml",
    primaryUrl: "https://github.com/abdullahsherdy/ESL-software-ml",
    primaryUrlLabel: "Collaborator GitHub Repo",
    primaryUrlType: "github",
    note: "Graduation team project with collaborator repository. Contributed to pipeline design, multimodal feature extraction, and model evaluation."
  },
  {
    id: "aiml-cardiosense",
    title: "CardioSense — Heart Disease Prediction",
    subtitle: "Machine Learning Risk Assessment",
    date: "June 2026",
    type: "Machine Learning Application",
    specialty: "ai-ml",
    categories: ["Machine Learning", "Streamlit"],
    description:
      "Clinical risk classification system benchmarking six machine learning algorithms with GridSearchCV hyperparameter tuning and deployed Streamlit app.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Seaborn"
    ],
    keyResult: "Benchmark of 6 classifiers with hyperparameter optimization and interactive Streamlit web deployment.",
    metrics: [
      { label: "Models", value: "6 Classifiers" },
      { label: "Tuning", value: "GridSearchCV" },
      { label: "Interface", value: "Streamlit Cloud" }
    ],
    detailedResults: [
      "Compared Logistic Regression, Decision Tree, Random Forest, Gradient Boosting, SVM, and KNN",
      "Conducted extensive Exploratory Data Analysis (EDA) on clinical risk factors",
      "Built an interactive Streamlit UI for immediate parameter-driven risk scoring"
    ],
    liveUrl: "https://cardiosense-ai-htcbewfaa3rtf64wmfv6df.streamlit.app/",
    primaryUrl: "https://cardiosense-ai-htcbewfaa3rtf64wmfv6df.streamlit.app/",
    primaryUrlLabel: "Live Streamlit App",
    primaryUrlType: "live",
    disclaimer: "This project is for educational purposes and is not a substitute for professional medical advice."
  },
  {
    id: "aiml-churn",
    title: "Customer Churn Prediction",
    subtitle: "ML Classification & SHAP Explainability",
    date: "June 2026",
    type: "Machine Learning Pipeline",
    specialty: "ai-ml",
    categories: ["Machine Learning", "Explainable AI"],
    description:
      "Predictive analytics pipeline on the IBM Telco churn dataset with SMOTE imbalance treatment, tuned XGBoost, and SHAP feature attribution.",
    technologies: [
      "Python",
      "Scikit-learn",
      "SMOTE",
      "XGBoost",
      "Random Forest",
      "SHAP"
    ],
    keyResult: "85–87% ROC-AUC achieved using tuned XGBoost, SMOTE balancing, and SHAP interpretability.",
    metrics: [
      { label: "ROC-AUC", value: "85–87%" },
      { label: "Balancing", value: "SMOTE" },
      { label: "Explainability", value: "SHAP Plots" }
    ],
    detailedResults: [
      "Evaluated 7 classification models under standard precision, recall, and ROC-AUC criteria",
      "Mitigated dataset imbalance using SMOTE oversampling",
      "Extracted SHAP force and summary plots to clarify customer churn drivers"
    ],
    liveUrl: "https://cornea-recoil-mango.ngrok-free.dev/",
    primaryUrl: "https://cornea-recoil-mango.ngrok-free.dev/",
    primaryUrlLabel: "Live App Tunnel",
    primaryUrlType: "live",
    note: "Live demo served via ngrok tunnel during active evaluation sessions."
  },
  {
    id: "aiml-smart-panorama",
    title: "Smart Panorama & Object Recognition",
    subtitle: "Computer Vision Pipeline",
    date: "May 2026",
    type: "Computer Vision System",
    specialty: "ai-ml",
    categories: ["Computer Vision", "Machine Learning"],
    description:
      "Modular 6-stage computer vision pipeline encompassing filtering, CLAHE enhancement, SIFT keypoint matching, homography stitching, K-Means segmentation, and PASCAL VOC 2012 classification.",
    technologies: [
      "Python",
      "OpenCV",
      "Scikit-learn",
      "NumPy",
      "Matplotlib",
      "Pandas"
    ],
    keyResult: "Full 6-stage CV pipeline: SIFT homography panorama stitching and PASCAL VOC 2012 object classification.",
    metrics: [
      { label: "Stages", value: "6 Modular Steps" },
      { label: "Stitching", value: "SIFT & Homography" },
      { label: "Segmentation", value: "K-Means Clustering" },
      { label: "Dataset", value: "PASCAL VOC 2012" }
    ],
    detailedResults: [
      "Image preprocessing with Gaussian blur, Median filtering, and CLAHE contrast equalization",
      "SIFT keypoint extraction and robust homography matrix estimation for panorama stitching",
      "Color and spatial region grouping via unsupervised K-Means segmentation",
      "Multi-class classification evaluated with Linear SVC, Naive Bayes, and Logistic Regression on PASCAL VOC 2012"
    ],
    githubUrl: "https://github.com/Mennaali30/smart-panorama",
    primaryUrl: "https://github.com/Mennaali30/smart-panorama",
    primaryUrlLabel: "GitHub Repository",
    primaryUrlType: "github"
  },
  {
    id: "aiml-nmt-transformer",
    title: "Neural Machine Translation — English to Arabic",
    subtitle: "56.4M Parameter Transformer Model",
    date: "May 2026",
    type: "Deep Learning / NLP",
    specialty: "ai-ml",
    categories: ["Deep Learning", "NLP"],
    description:
      "Custom Transformer encoder-decoder model (56.4M parameters) trained on 300,000 OPUS-100 bilingual English-to-Arabic sentence pairs with SentencePiece BPE.",
    technologies: [
      "Python",
      "PyTorch",
      "SentencePiece",
      "OPUS-100 Dataset",
      "Kaggle T4 GPU"
    ],
    keyResult: "56.4M-parameter Transformer achieved a BLEU-4 score of 12.68 on 300K OPUS-100 sentence pairs.",
    metrics: [
      { label: "BLEU-4", value: "12.68" },
      { label: "Parameters", value: "56.4 Million" },
      { label: "Dataset", value: "300K Pairs (OPUS-100)" },
      { label: "Architecture", value: "6 Enc / 6 Dec Layers" }
    ],
    detailedResults: [
      "Engineered Transformer architecture in PyTorch: 6 encoder and 6 decoder layers, 8 attention heads, d_model = 512",
      "Trained on 300,000 OPUS-100 bilingual English-to-Arabic sentence pairs",
      "Employed SentencePiece Byte-Pair Encoding (BPE), Noam learning rate scheduling, and label smoothing",
      "Achieved validation BLEU-4 score of 12.68 (reported honestly as baseline translation metric)"
    ],
    githubUrl: "https://github.com/abdullahsherdy/Neural-machine-translation",
    primaryUrl: "https://github.com/abdullahsherdy/Neural-machine-translation",
    primaryUrlLabel: "GitHub Repository",
    primaryUrlType: "github",
    note: "Collaborative NLP research project. Contributed to dataset preprocessing, tokenization, and model training."
  },
  {
    id: "aiml-smart-review",
    title: "Smart Review Analyzer",
    subtitle: "NLP Sentiment Analysis Pipeline",
    date: "May 2026",
    type: "NLP Deep Learning Pipeline",
    specialty: "ai-ml",
    categories: ["NLP", "Deep Learning"],
    description:
      "Natural Language Processing pipeline for Amazon product reviews benchmarking TF-IDF, Word2Vec, and BERT representations across classical classifiers, LSTMs, and fine-tuned BERT.",
    technologies: [
      "Python",
      "TensorFlow",
      "BERT",
      "Word2Vec",
      "Scikit-learn",
      "NLTK",
      "Google Colab"
    ],
    keyResult: "Fine-tuned BERT embeddings demonstrated superior classification performance compared to TF-IDF and LSTM baselines.",
    metrics: [
      { label: "Best Model", value: "Fine-Tuned BERT" },
      { label: "Embeddings", value: "TF-IDF / W2V / BERT" },
      { label: "Baselines", value: "Logistic, NB, LSTM" }
    ],
    detailedResults: [
      "Compared sparse representation (TF-IDF), dense semantic vectors (Word2Vec), and contextual embeddings (BERT)",
      "Trained classical classifiers (Logistic Regression, Naive Bayes), recurrent architectures (LSTM), and transformer fine-tuning",
      "Fine-tuned BERT achieved highest sentiment classification accuracy across customer reviews"
    ],
    colabUrl: "https://colab.research.google.com/drive/1b5Y0Kal6WAwUfWCnAOfKdUcEGhd43xvy?usp=sharing",
    primaryUrl: "https://colab.research.google.com/drive/1b5Y0Kal6WAwUfWCnAOfKdUcEGhd43xvy?usp=sharing",
    primaryUrlLabel: "Google Colab Notebook",
    primaryUrlType: "colab"
  },
  {
    id: "aiml-raw-materials",
    title: "Raw Materials Classification",
    subtitle: "Deep Learning Image Classification",
    date: "May 2026",
    type: "Computer Vision / Deep Learning",
    specialty: "ai-ml",
    categories: ["Deep Learning", "Computer Vision"],
    description:
      "23-class material classification system on the MINC-2500 dataset containing 57,500 images, comparing VGG-19, ResNet50, MobileNetV2, and Inception V1.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "ResNet50",
      "Google Colab (T4 GPU)"
    ],
    keyResult: "ResNet50 attained 57.39% validation accuracy across 23 material categories on 57,500 MINC-2500 images.",
    metrics: [
      { label: "ResNet50 Acc", value: "57.39%" },
      { label: "Dataset Size", value: "57,500 Images" },
      { label: "Classes", value: "23 Categories" },
      { label: "Backbones", value: "4 Architectures" }
    ],
    detailedResults: [
      "Benchmarked 4 convolutional backbones: VGG-19, ResNet50, MobileNetV2, and Inception V1 on MINC-2500",
      "Applied transfer learning with fine-tuning, data augmentation, and dropout regularization",
      "ResNet50 attained top validation accuracy of 57.39% (reported honestly as complex 23-class material recognition)"
    ],
    githubUrl: "https://github.com/abdullahsherdy/DeepLearning_raw_materials_classification/tree/kaggle",
    primaryUrl: "https://github.com/abdullahsherdy/DeepLearning_raw_materials_classification/tree/kaggle",
    primaryUrlLabel: "GitHub Repo (kaggle branch)",
    primaryUrlType: "github",
    note: "Collaborative research project. Contributed to backbone comparison, fine-tuning experiments, and metric logging."
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-depi",
    organization: "DEPI — Digital Egypt Pioneers Initiative",
    role: "Trainee / Fellow",
    track: "Agentic and Generative AI Development",
    period: "Present",
    status: "Present",
    isOngoing: true,
    type: "training",
    description:
      "Undergoing advanced national specialization focused on Agentic AI workflows, LLM API orchestrations, and Generative AI application development.",
    highlights: [
      "Track: Agentic and Generative AI Development (ongoing professional training)",
      "Hands-on building with modern generative models and agentic workflows",
      "Designing multi-step reasoning systems and tool-using LLM pipelines"
    ],
    skills: ["Agentic AI", "Generative AI", "Python", "LLM APIs", "Prompt Engineering"]
  },
  {
    id: "exp-nextgen",
    organization: "NextGen AI & ML Internship",
    role: "AI & ML Intern",
    period: "Accepted September 2026",
    status: "Accepted",
    isOngoing: true,
    type: "internship",
    description:
      "Accepted into remote, self-paced one-month intensive program exploring applied machine learning pipelines and engineering standards.",
    highlights: [
      "Accepted in September 2026 into competitive remote AI/ML track",
      "Engaging with machine learning implementations, data workflows, and model evaluations",
      "Self-paced curriculum covering modern AI industry practices"
    ],
    skills: ["Machine Learning", "Deep Learning", "Python", "Model Evaluation"]
  },
  {
    id: "exp-digitera",
    organization: "Digitera Program",
    role: "Program Participant",
    track: "Tech Track, Group 32",
    period: "2025 – 2026",
    status: "Completed",
    isOngoing: false,
    type: "training",
    description:
      "Completed comprehensive technical and life-skills program focusing on software engineering mindsets, technical execution, and professional career coaching.",
    highlights: [
      "Enrolled in Tech Track, Group 32",
      "Completed technical skill modules alongside soft-skills and teamwork training",
      "Participated in Career Coaching Phase for industry transition readiness"
    ],
    skills: ["Software Engineering", "Teamwork", "Career Development", "Problem Solving"]
  },
  {
    id: "exp-cinco",
    organization: "Cinco Academy",
    role: "React Instructor",
    period: "October – December 2025",
    status: "Completed",
    isOngoing: false,
    type: "teaching",
    description:
      "Instructed students on modern frontend web development, focusing on React.js core concepts, hooks, state management, and practical project builds.",
    highlights: [
      "Delivered hands-on curriculum covering modern React.js fundamentals, components, and props",
      "Guided learners through state management, useEffect hooks, and REST API integration",
      "Mentored students through building responsive interactive web applications"
    ],
    skills: ["React.js", "JavaScript (ES6+)", "Teaching", "Mentoring", "Frontend Architecture"]
  },
  {
    id: "exp-route",
    organization: "Route Academy",
    role: "React Development Student",
    period: "March – August 2025",
    status: "Completed",
    isOngoing: false,
    type: "education",
    description:
      "Completed rigorous frontend training program covering modern JavaScript, React.js fundamentals, routing, and real-world project development.",
    highlights: [
      "Mastered React lifecycle, hooks, context API, and component patterns",
      "Built multiple real-world tasks including e-commerce storefronts and recipe platforms",
      "Trained on clean code practices, responsive UI design, and Git version control"
    ],
    skills: ["React.js", "JavaScript", "HTML5 & CSS3", "Git & GitHub", "Tailwind CSS"]
  },
  {
    id: "exp-oasis",
    organization: "Oasis Infobyte",
    role: "Web Development Intern",
    period: "August 2026",
    status: "Completed",
    isOngoing: false,
    type: "internship",
    description:
      "Completed month-long Web Development Internship, implementing practical web projects including responsive landing pages, personal portfolios, and utility web tools.",
    highlights: [
      "Completed Level 1 tasks: Landing Page, Personal Portfolio, and Temperature Converter",
      "Emphasized semantic HTML5, modern CSS3 layouts, and cross-browser responsiveness",
      "Demonstrated organized code delivery and GitHub repository documentation"
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"]
  },
  {
    id: "exp-nti",
    organization: "Digital Egypt Youth Program — NTI",
    role: "Web Designer Trainee",
    period: "August 2024",
    status: "Completed",
    isOngoing: false,
    type: "training",
    description:
      "Completed intensive National Telecommunication Institute (NTI) training program comprising 90 hours of technical training and 30 hours of freelancing skills with a 100% score.",
    highlights: [
      "90 hours of rigorous technical training in web design and UI fundamentals",
      "30 hours of freelancing skills, client communication, and project management",
      "Achieved final score of 100% in assessment benchmarks"
    ],
    skills: ["Web Design", "UI/UX Fundamentals", "Freelancing Skills", "HTML/CSS", "Client Communication"]
  }
];

export const educationData: EducationItem = {
  institution: "Capital University (formerly Helwan University)",
  faculty: "Faculty of Computer Science and Artificial Intelligence",
  degree: "Bachelor's Degree in Computer Science and Artificial Intelligence",
  graduationDate: "June 2026",
  gpa: "3.67 / 4.00",
  honors: "Excellent with Honors",
  highlights: [
    "Graduation Distinction: Excellent with Honors (Cumulative GPA: 3.67 / 4.00)",
    "Graduation Project: Wasla — Real-Time Emotional Egyptian Sign Language Recognition System (Grade: A+)",
    "Rigorous curriculum: Artificial Intelligence, Machine Learning, Deep Learning, Computer Vision, NLP, Data Structures, Algorithms, Software Engineering, and Object-Oriented Programming"
  ]
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Development",
    specialty: "frontend",
    description: "Modern, component-driven, responsive web architectures",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "REST API integration",
      "JWT authentication",
      "Git & GitHub",
      "Responsive web design"
    ]
  },
  {
    title: "AI & Machine Learning",
    specialty: "ai-ml",
    description: "Core algorithms, neural networks, vision & language pipelines",
    skills: [
      "Python",
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "OpenCV",
      "MediaPipe",
      "Computer Vision",
      "Natural Language Processing (NLP)",
      "Data preprocessing",
      "Model evaluation",
      "Feature engineering",
      "Classification",
      "Deep Learning"
    ]
  },
  {
    title: "Generative AI & Backend Skills",
    specialty: "generative",
    description: "Applied agentic workflows, APIs & prompt architectures",
    skills: [
      "LLM APIs",
      "RAG (Retrieval-Augmented Generation)",
      "AI agents",
      "FastAPI",
      "Prompt engineering",
      "Workflow automation"
    ]
  }
];

// Backwards-compatible aliases for legacy components
export const featuredProject = featuredProjects[0];
export const projects: Project[] = [...featuredProjects, ...aiMlProjects];
export const skillCategories = skillGroups.map((g) => ({
  title: g.title,
  icon: g.specialty === "frontend" ? "code" : "brain",
  skills: g.skills
}));

