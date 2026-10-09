import { Project, ExperienceItem, EducationItem, SkillCategory } from "@/types/portfolio";

export const personalInfo = {
  name: "Menna Ali Abdelrahman",
  title: "AI & Machine Learning Engineer",
  location: "Fisal, Giza, Egypt",
  email: "Mennaali30617@gmail.com",
  phone: "01068178533",
  linkedIn: "https://www.linkedin.com/in/menna-ali-485ab9312",
  linkedInHandle: "linkedin.com/in/menna-ali-485ab9312",
  github: "https://github.com/mennaali30",
  githubHandle: "github.com/mennaali30",
  heroSubtitle: "Building intelligent systems with Machine Learning, Deep Learning, Computer Vision, NLP, Generative AI, and Agentic AI.",
  summary:
    "Computer Science and Artificial Intelligence graduate with Excellent with Honors and a GPA of 3.67 from Capital University (formerly Helwan University). Specialized in designing and deploying machine learning systems, from classification models to deep learning and computer vision pipelines, including CNN and RNN/LSTM architectures.",
  mlLifecycle: [
    { title: "Data Analysis", desc: "Exploratory data analysis, distribution profiling, and statistical correlation discovery." },
    { title: "Data Preprocessing", desc: "Data cleaning, noise removal, outlier detection, normalization, and balanced sampling." },
    { title: "Feature Engineering", desc: "Domain-specific feature extraction, dimensionality handling, and representation learning." },
    { title: "Model Training", desc: "End-to-end model development across traditional ML, CNNs, RNN/LSTM, and Transformers." },
    { title: "Hyperparameter Tuning", desc: "Systematic parameter optimization using GridSearchCV and validation benchmarks." },
    { title: "Model Evaluation", desc: "Rigorous performance assessment using ROC-AUC, BLEU-4, precision, recall, and SHAP interpretability." },
    { title: "Model Deployment", desc: "Real-world production delivery across Web, Desktop, Mobile, Streamlit, and Flask APIs." }
  ],
  stats: [
    {
      value: "3.67 / 4.0",
      label: "GPA",
      subtext: "Excellent with Honors"
    },
    {
      value: "A+",
      label: "Graduation Project",
      subtext: "WASLA Recognition System"
    },
    {
      value: "47",
      label: "Sign Language Classes",
      subtext: "Classified Gestures"
    },
    {
      value: "91.74%",
      label: "Wasla Validation Accuracy",
      subtext: "Real-Time Multi-Platform"
    }
  ]
};

export const featuredProject: Project = {
  id: "wasla-sign-language",
  title: "WASLA – Real-Time Emotional Egyptian Sign Language Recognition System",
  subtitle: "Graduation Project (Grade: A+)",
  date: "June 2026",
  type: "Graduation Project",
  grade: "A+",
  categories: ["Deep Learning", "Computer Vision"],
  description:
    "Developed a real-time system that recognizes Egyptian Sign Language gestures alongside facial expressions to detect the signer's emotional state, enhancing accessibility and communication for the Deaf and hard-of-hearing community.",
  technologies: [
    "Python",
    "MediaPipe",
    "Machine Learning",
    "Deep Learning",
    "TensorFlow",
    "OpenCV",
    "Flask",
    "Web Development",
    "Desktop Application",
    "Mobile Application"
  ],
  keyResult: "47 distinct sign gestures classified with 91.74% validation accuracy across Web, Desktop, and Mobile.",
  detailedResults: [
    "Classified 47 distinct sign gestures in real time",
    "Achieved 91.74% validation accuracy",
    "Integrated concurrent facial expression analysis for signer emotional state recognition",
    "Deployed across web, desktop, and mobile platforms",
    "Designed to enhance accessibility and communication for the Deaf and hard-of-hearing community"
  ],
  caseStudy: {
    problem:
      "Deaf and hard-of-hearing individuals frequently encounter major communication barriers in daily life. Egyptian Sign Language (ESL) lacks dedicated, accessible real-time translation tools, and communication nuance is lost when facial emotional cues are not captured alongside gestures.",
    approach:
      "Engineered an integrated multimodal perception pipeline. The system utilizes MediaPipe and OpenCV to capture real-time hand landmarks and facial feature points simultaneously. A deep learning architecture processes temporal gesture patterns while analyzing facial micro-expressions to decode both semantic sign gestures and emotional affect.",
    technologies: [
      "MediaPipe Landmark Tracking",
      "OpenCV Computer Vision",
      "TensorFlow Deep Learning Architecture",
      "Flask REST API Backend",
      "Cross-Platform Deployment (Web, Desktop & Mobile)"
    ],
    results: [
      "47 distinct Egyptian Sign Language gestures accurately classified",
      "91.74% validation accuracy achieved",
      "Real-time low-latency inference suitable for interactive dialogue",
      "Graduation Project awarded Grade A+ with Honors"
    ],
    deployment:
      "Full multi-platform release engineered for ubiquitous accessibility: delivered as a responsive Web platform, a high-performance Desktop application, and a cross-platform Mobile application served via a Flask backend."
  },
  githubUrl: "https://github.com/abdullahsherdy/ESL-software-ml",
  primaryUrl: "https://github.com/abdullahsherdy/ESL-software-ml",
  primaryUrlLabel: "GitHub Repository",
  primaryUrlType: "github"
};

export const projects: Project[] = [
  featuredProject,
  {
    id: "heart-disease-prediction",
    title: "Heart Disease Prediction",
    subtitle: "Machine Learning Classification Model",
    date: "June 2026",
    categories: ["Machine Learning"],
    description:
      "Built an end-to-end heart disease prediction pipeline, training and comparing six classifiers with hyperparameter tuning and reusable inference.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Google Colab"
    ],
    keyResult: "Comprehensive benchmark of 6 classifiers with GridSearchCV hyperparameter tuning & reusable inference.",
    detailedResults: [
      "Trained and compared 6 classifiers: Logistic Regression, Decision Tree, Random Forest, Gradient Boosting, SVM, and KNN",
      "Conducted extensive Exploratory Data Analysis (EDA) and feature correlation profiling",
      "Utilized GridSearchCV for systematic hyperparameter tuning across model spaces",
      "Engineered a production-ready reusable inference function for instant clinical risk scoring"
    ],
    techniques: [
      "Logistic Regression",
      "Decision Tree",
      "Random Forest",
      "Gradient Boosting",
      "Support Vector Machines (SVM)",
      "K-Nearest Neighbors (KNN)",
      "GridSearchCV",
      "Inference Pipeline"
    ],
    liveUrl: "https://cardiosense-ai-htcbewfaa3rtf64wmfv6df.streamlit.app/",
    primaryUrl: "https://cardiosense-ai-htcbewfaa3rtf64wmfv6df.streamlit.app/",
    primaryUrlLabel: "Live Streamlit App",
    primaryUrlType: "live"
  },
  {
    id: "customer-churn-prediction",
    title: "Customer Churn Prediction",
    subtitle: "Machine Learning Classification Model",
    date: "June 2026",
    categories: ["Machine Learning"],
    description:
      "Built an end-to-end customer churn prediction system using the IBM Telco dataset with model benchmarking, SMOTE imbalance handling, SHAP explainability, and an interactive Streamlit application.",
    technologies: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "LightGBM",
      "SHAP",
      "Streamlit",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Google Colab"
    ],
    keyResult: "85–87% ROC-AUC achieved using tuned XGBoost, SMOTE imbalance handling, and real-time Streamlit risk scoring.",
    detailedResults: [
      "Compared 7 classification models across standard classification metrics",
      "Addressed severe class imbalance effectively using SMOTE (Synthetic Minority Over-sampling Technique)",
      "Tuned XGBoost using GridSearchCV to maximize predictive performance",
      "Achieved approximately 85–87% ROC-AUC on unseen test partitions",
      "Implemented SHAP (SHapley Additive exPlanations) for transparent feature attribution and model interpretability",
      "Built an interactive Streamlit web application providing real-time churn risk scoring and data-driven customer retention recommendations"
    ],
    techniques: [
      "IBM Telco Dataset",
      "SMOTE Balancing",
      "7-Model Benchmark",
      "XGBoost & LightGBM",
      "GridSearchCV Tuning",
      "SHAP Interpretability",
      "Streamlit Real-time App",
      "Retention Recommendations"
    ],
    liveUrl: "https://cornea-recoil-mango.ngrok-free.dev/",
    primaryUrl: "https://cornea-recoil-mango.ngrok-free.dev/",
    primaryUrlLabel: "Live Application",
    primaryUrlType: "live"
  },
  {
    id: "smart-panorama-object-recognition",
    title: "Smart Panorama & Object Recognition System",
    subtitle: "Computer Vision Pipeline",
    date: "May 2026",
    categories: ["Computer Vision", "Machine Learning"],
    description:
      "Built a modular 6-stage computer vision pipeline encompassing image filtering, CLAHE enhancement, SIFT keypoint matching, homography stitching, K-Means segmentation, and object classification on PASCAL VOC 2012.",
    technologies: [
      "Python",
      "OpenCV",
      "Scikit-learn",
      "NumPy",
      "Matplotlib",
      "Pandas",
      "VS Code"
    ],
    keyResult: "Full 6-stage computer vision pipeline: SIFT homography panorama stitching and PASCAL VOC 2012 classification.",
    detailedResults: [
      "Stage 1 & 2: Image preprocessing, Gaussian blur, Median filtering, and CLAHE (Contrast Limited Adaptive Histogram Equalization)",
      "Stage 3: SIFT (Scale-Invariant Feature Transform) keypoint detection and descriptor matching",
      "Stage 4: Robust panorama image stitching using homography estimation and perspective warping",
      "Stage 5: Unsupervised color and spatial region clustering via K-Means segmentation",
      "Stage 6: Multi-class object classification evaluated using Naive Bayes, Logistic Regression, and Linear SVC on PASCAL VOC 2012"
    ],
    techniques: [
      "Gaussian Blur & Median Filtering",
      "CLAHE Contrast Optimization",
      "SIFT Keypoint Matching",
      "Homography & Stitching",
      "K-Means Image Segmentation",
      "PASCAL VOC 2012 Dataset",
      "Linear SVC, Naive Bayes, Logistic Regression"
    ],
    githubUrl: "https://github.com/Mennaali30/smart-panorama",
    primaryUrl: "https://github.com/Mennaali30/smart-panorama",
    primaryUrlLabel: "GitHub Repository",
    primaryUrlType: "github"
  },
  {
    id: "nmt-transformer",
    title: "NMT Transformer – Neural Machine Translation",
    subtitle: "Deep Learning / NLP",
    date: "May 2026",
    categories: ["Deep Learning", "NLP"],
    description:
      "Built a 56.4M-parameter Transformer encoder-decoder model for English-to-Arabic translation trained on 300K OPUS-100 sentence pairs.",
    technologies: [
      "Python",
      "PyTorch",
      "SentencePiece",
      "OPUS-100",
      "Kaggle T4 GPU",
      "Google Colab"
    ],
    keyResult: "56.4M-parameter Transformer achieved a BLEU-4 score of 12.68 on OPUS-100 English-to-Arabic translation.",
    detailedResults: [
      "Engineered a 56.4M-parameter custom Transformer encoder-decoder architecture from scratch in PyTorch",
      "Configured 6 encoder and 6 decoder layers, 8 multi-head attention mechanisms, and hidden dimension D=512",
      "Trained on 300,000 OPUS-100 bilingual English-to-Arabic sentence pairs",
      "Utilized SentencePiece Byte-Pair Encoding (BPE) subword tokenization",
      "Applied Noam learning-rate scheduling and label smoothing regularization",
      "Leveraged FP16 Automatic Mixed Precision (AMP) for GPU acceleration on Kaggle T4",
      "Implemented Beam Search decoding for high-fidelity output translation generation",
      "Achieved a BLEU-4 validation benchmark score of 12.68"
    ],
    architecture: [
      "Parameters: 56.4 Million",
      "Layers: 6 Encoder Layers + 6 Decoder Layers",
      "Attention: 8 Multi-Head Attention Heads",
      "Model Dimension: D = 512",
      "Vocabulary: SentencePiece BPE",
      "Optimization: Noam LR Scheduler & Label Smoothing",
      "Precision: FP16 AMP Acceleration",
      "Inference: Beam Search Decoding"
    ],
    githubUrl: "https://github.com/abdullahsherdy/Neural-machine-translation",
    primaryUrl: "https://github.com/abdullahsherdy/Neural-machine-translation",
    primaryUrlLabel: "GitHub Repository",
    primaryUrlType: "github"
  },
  {
    id: "smart-review-analyzer",
    title: "Smart Review Analyzer",
    subtitle: "NLP Sentiment Analysis Pipeline",
    date: "May 2026",
    categories: ["NLP", "Deep Learning"],
    description:
      "Built an NLP sentiment analysis pipeline for Amazon customer reviews, evaluating TF-IDF, Word2Vec, and BERT embeddings across traditional classifiers, LSTMs, and fine-tuned BERT.",
    technologies: [
      "Python",
      "Scikit-learn",
      "TensorFlow",
      "BERT",
      "Word2Vec",
      "NLTK",
      "Pandas",
      "NumPy",
      "Google Colab"
    ],
    keyResult: "BERT embeddings and fine-tuning demonstrated superior performance over TF-IDF, Word2Vec, and LSTM baselines.",
    detailedResults: [
      "Constructed a multi-stage Natural Language Processing pipeline for Amazon product reviews",
      "Benchmarked representation techniques: TF-IDF sparse matrices, Word2Vec dense vectors, and contextual BERT embeddings",
      "Trained and evaluated diverse model architectures: Logistic Regression, Naive Bayes, Recurrent LSTM networks, and transformer-based BERT",
      "BERT attained the highest accuracy and sentiment classification benchmark score"
    ],
    techniques: [
      "Amazon Reviews Dataset",
      "Text Cleaning & NLTK Tokenization",
      "TF-IDF vs Word2Vec vs BERT Embeddings",
      "Logistic Regression & Naive Bayes",
      "LSTM Deep Learning Model",
      "BERT Transformer Fine-Tuning"
    ],
    colabUrl: "https://colab.research.google.com/drive/1b5Y0Kal6WAwUfWCnAOfKdUcEGhd43xvy?usp=sharing",
    primaryUrl: "https://colab.research.google.com/drive/1b5Y0Kal6WAwUfWCnAOfKdUcEGhd43xvy?usp=sharing",
    primaryUrlLabel: "Google Colab Notebook",
    primaryUrlType: "colab"
  },
  {
    id: "raw-materials-classification",
    title: "Raw Materials Classification",
    subtitle: "Deep Learning Image Classification",
    date: "May 2026",
    categories: ["Deep Learning", "Computer Vision"],
    description:
      "Built a 23-class image classification system using the MINC-2500 dataset containing 57,500 images, comparing VGG-19, ResNet50, MobileNetV2, and Inception V1.",
    technologies: [
      "Python",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "NumPy",
      "Matplotlib",
      "Google Colab",
      "NVIDIA Tesla T4 GPU"
    ],
    keyResult: "ResNet50 achieved top validation accuracy of 57.39% across 23 material classes on the 57,500-image MINC-2500 dataset.",
    detailedResults: [
      "Conducted large-scale material classification across 23 distinct real-world material classes",
      "Trained and benchmarked on the MINC-2500 benchmark containing 57,500 high-resolution images",
      "Compared 4 preeminent convolutional backbones: VGG-19, ResNet50, MobileNetV2, and Inception V1",
      "Applied transfer learning with fine-tuning, extensive data augmentation, and dropout/L2 regularization",
      "Achieved best validation accuracy of 57.39% utilizing ResNet50 on an NVIDIA Tesla T4 GPU"
    ],
    techniques: [
      "MINC-2500 Dataset (57,500 Images, 23 Classes)",
      "Transfer Learning & Fine-Tuning",
      "VGG-19, ResNet50, MobileNetV2, Inception V1",
      "Data Augmentation & Regularization",
      "Tesla T4 GPU Accelerated Training"
    ],
    githubUrl: "https://github.com/abdullahsherdy/DeepLearning_raw_materials_classification/tree/kaggle",
    primaryUrl: "https://github.com/abdullahsherdy/DeepLearning_raw_materials_classification/tree/kaggle",
    primaryUrlLabel: "GitHub Repository (kaggle branch)",
    primaryUrlType: "github"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "code",
    skills: ["Python", "C", "C++", "Java"]
  },
  {
    title: "AI & Machine Learning",
    icon: "brain",
    skills: [
      "Artificial Intelligence",
      "Machine Learning",
      "Generative AI",
      "Agentic AI",
      "Data Analysis",
      "Data Preprocessing",
      "Feature Engineering",
      "Model Evaluation",
      "Model Deployment",
      "Hyperparameter Tuning",
      "SHAP"
    ]
  },
  {
    title: "Deep Learning & Neural Networks",
    icon: "network",
    skills: [
      "Deep Learning",
      "CNN (Convolutional Neural Networks)",
      "RNN (Recurrent Neural Networks)",
      "LSTM (Long Short-Term Memory)",
      "Transformers",
      "Transfer Learning",
      "SentencePiece"
    ]
  },
  {
    title: "Computer Vision",
    icon: "eye",
    skills: [
      "Computer Vision",
      "OpenCV",
      "MediaPipe",
      "SIFT Keypoint Matching",
      "Homography & Panorama Stitching",
      "K-Means Segmentation",
      "CLAHE Preprocessing"
    ]
  },
  {
    title: "Natural Language Processing (NLP)",
    icon: "message-square",
    skills: [
      "Natural Language Processing",
      "BERT",
      "Word2Vec",
      "TF-IDF",
      "NLTK",
      "Beam Search Decoding",
      "Neural Machine Translation"
    ]
  },
  {
    title: "Libraries & Frameworks",
    icon: "layers",
    skills: [
      "Scikit-learn",
      "TensorFlow",
      "Keras",
      "PyTorch",
      "OpenCV",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "XGBoost",
      "LightGBM",
      "MediaPipe",
      "Flask",
      "Streamlit"
    ]
  },
  {
    title: "Tools & Environments",
    icon: "tool",
    skills: [
      "Google Colab",
      "Jupyter Notebook",
      "VS Code",
      "PyCharm",
      "Git",
      "GitHub",
      "Kaggle",
      "NVIDIA Tesla T4 GPU"
    ]
  },
  {
    title: "Software Engineering & Concepts",
    icon: "cpu",
    skills: [
      "OOP (Object-Oriented Programming)",
      "Data Structures",
      "Algorithms",
      "Problem Solving",
      "Agile",
      "Waterfall",
      "UML"
    ]
  },
  {
    title: "Soft Skills & Languages",
    icon: "user",
    skills: [
      "Teamwork",
      "Problem Solving",
      "Organized",
      "Communication",
      "Flexible",
      "Quick Learner",
      "Arabic (Native)",
      "English (Fluent)"
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "depi",
    organization: "Digital Egypt Pioneers Initiative (DEPI)",
    role: "Intern",
    track: "Agentic and Generative AI Development",
    period: "Present",
    status: "Present",
    description:
      "Undergoing advanced training and hands-on specialization within the national Digital Egypt Pioneers Initiative focused on Agentic AI workflows and Generative AI application development.",
    highlights: [
      "Specialized track: Agentic and Generative AI Development",
      "Hands-on building with modern generative models and agentic architectures",
      "Designing autonomous multi-step reasoning and tool-using AI systems"
    ],
    skills: ["Agentic AI", "Generative AI", "Python", "Deep Learning", "Prompt Engineering"]
  },
  {
    id: "ai-nextgen",
    organization: "AI NextGen Institute",
    role: "AI Intern",
    period: "Present",
    status: "Present",
    description:
      "Working as an AI Intern on modern machine learning systems, applied algorithms, and practical artificial intelligence solutions.",
    highlights: [
      "Role: AI Intern",
      "Engaging in practical machine learning model implementations and evaluations",
      "Collaborating on real-world AI pipelines and engineering standards"
    ],
    skills: ["Machine Learning", "Deep Learning", "Python", "Model Evaluation"]
  }
];

export const educationData: EducationItem = {
  institution: "Capital University (formerly Helwan University)",
  faculty: "Faculty of Computer Science and Artificial Intelligence",
  department: "Department of Computer Science",
  period: "September 2022 – June 2026",
  honors: "Excellent with Honors (A)",
  gpa: "3.67 / 4.0",
  highlights: [
    "Graduation Grade: Excellent with Honors (A)",
    "Cumulative GPA: 3.67 / 4.0",
    "Graduation Project: WASLA – Real-Time Emotional Egyptian Sign Language Recognition System (Grade: A+)",
    "Rigorous foundation in Computer Science, Artificial Intelligence, Algorithms, Data Structures, OOP, Software Engineering, and Mathematics"
  ]
};
