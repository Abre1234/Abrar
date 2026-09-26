export const GITHUB_USERNAME = 'Abre1234';
export const GITHUB_PROFILE = `https://github.com/${GITHUB_USERNAME}`;

export const projectCategories = ['All', 'Machine Learning', 'AI', 'Data Analytics', 'Business Intelligence', 'EDA'];

export const projects = [
  {
    id: 1,
    title: 'RAG Intelligent Complaint Chatbot',
    description:
      'An AI-powered RAG application for intelligent complaint handling and retrieval-based support workflows.',
    tech: ['Python', 'RAG', 'AI-powered applications'],
    category: 'AI',
    github: 'https://github.com/Abre1234/RAG_Intelligent_complaint_chatbot',
    featured: true,
    language: 'AI / RAG',
    cover: 'eda',
  },
  {
    id: 2,
    title: 'Credit Risk Analysis — XAI',
    description:
      'An interpretable credit risk modeling project using machine learning and SHAP explainability to understand model predictions and support transparent risk assessment.',
    tech: ['Python', 'Scikit-learn', 'SHAP', 'Pandas'],
    category: 'Machine Learning',
    github: 'https://github.com/Abre1234/credit-risk-xai',
    featured: true,
    language: 'Python / XAI',
    cover: 'predictive',
  },
  {
    id: 3,
    title: 'Customer Churn Prediction',
    description:
      'A machine learning pipeline for predicting customer churn, including data preprocessing, model development, evaluation, and feature-importance analysis to identify retention drivers.',
    tech: ['Python', 'Scikit-learn', 'Pandas', 'Machine Learning'],
    category: 'Machine Learning',
    github: 'https://github.com/Abre1234/Customer-Churn-Prediction-',
    featured: true,
    language: 'Machine Learning',
    cover: 'predictive',
  },
  {
    id: 4,
    title: 'Business Intelligence Sales & Profit Analysis',
    description:
      'An interactive Power BI business intelligence solution for analyzing sales, profit, regional performance, and business KPIs to support data-driven decision-making.',
    tech: ['Power BI', 'DAX', 'Excel', 'Data Visualization'],
    category: 'Business Intelligence',
    github: 'https://github.com/Abre1234/Sales_Analysis_Using_Power_BI',
    featured: true,
    language: 'Power BI',
    cover: 'dashboard',
  },
  {
    id: 5,
    title: 'House Price Prediction',
    description:
      'A supervised learning project focused on predicting house prices using structured property features, feature engineering, regression modeling, and model evaluation.',
    tech: ['Python', 'Scikit-learn', 'Regression', 'Feature Engineering'],
    category: 'Machine Learning',
    github: 'https://github.com/Abre1234/House_price_prediction',
    featured: false,
    language: 'Regression',
    cover: 'predictive',
  },
  {
    id: 6,
    title: 'BigMart Sales Analysis',
    description:
      'Exploratory analysis of BigMart retail sales data, uncovering patterns, outliers, relationships, and business-relevant insights through statistical analysis and visualization.',
    tech: ['Python', 'Pandas', 'Seaborn', 'EDA'],
    category: 'EDA',
    github: 'https://github.com/Abre1234/BigMarts_sales_analysis',
    featured: true,
    language: 'Python / EDA',
    cover: 'eda',
  },
  {
    id: 7,
    title: 'NYC Taxi Data Analysis',
    description:
      'Trip-level analysis of NYC taxi data exploring demand patterns, peak travel periods, and geographic behavior through data analysis and visualization.',
    tech: ['Python', 'Pandas', 'Data Visualization'],
    category: 'Data Analytics',
    github: 'https://github.com/Abre1234/nyc-taxi-report',
    featured: false,
    language: 'Python / Analysis',
    cover: 'eda',
  },
  {
    id: 8,
    title: 'PowerCo EDA',
    description:
      'Exploratory data analysis of the PowerCo dataset using statistical summaries, visualization, and feature-level investigation to identify meaningful patterns.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    category: 'EDA',
    github: 'https://github.com/Abre1234/EDA_PowerCo',
    featured: false,
    language: 'Python / EDA',
    cover: 'eda',
  },
  {
    id: 9,
    title: 'Unemployment Rate Analysis',
    description:
      'Statistical analysis and visualization of unemployment trends to identify temporal patterns and communicate economic insights.',
    tech: ['Python', 'Statistics', 'Visualization'],
    category: 'Data Analytics',
    github: 'https://github.com/Abre1234/CodeAlpha_Unemployment_Rate',
    featured: false,
    language: 'Statistics',
    cover: 'eda',
  },
  {
    id: 10,
    title: 'Sales Prediction Model',
    description:
      'A predictive modeling project using historical sales data to develop and evaluate machine learning models for sales prediction.',
    tech: ['Python', 'Scikit-learn', 'Pandas'],
    category: 'Machine Learning',
    github: 'https://github.com/Abre1234/CodeAlpha_Sales_Prediction',
    featured: false,
    language: 'Machine Learning',
    cover: 'predictive',
  },
];

export const githubPinned = projects
  .filter((p) => p.featured)
  .slice(0, 5)
  .map((p) => ({
    name: p.github.split('/').pop(),
    description: p.description.slice(0, 72) + (p.description.length > 72 ? '…' : ''),
    language: p.language,
    url: p.github,
    cover: p.cover,
  }));
