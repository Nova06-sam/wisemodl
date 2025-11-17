import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

import { CheckCircle, Award, Download, ArrowRight, CreditCard, MessageCircle, Eye, Brain } from "lucide-react"
import { WhatsAppChat } from "@/components/whatsapp-chat"
import { Content } from "next/font/google"
import { title } from "process"

const phases = [
  {
    phase: "Phase 0",
    title: "Ignition & Python Fundamentals",
    DSA:[],
    project:"Movie Revenue Prediction",
    topics: [
      "Intro to AI/ML/DL + Real-World Use Cases",
      "Python Basics: Syntax, Loops, Functions",
      "NumPy: Arrays & Matrix Operations",
      "Pandas: DataFrame Essentials",
      "Matplotlib & Seaborn",
      "Data Cleaning, Handling Nulls, Encoding",
      "EDA + Correlation Heatmaps",
      "Git & GitHub Basics",
      "Linux & Google Colab Essentials",
    ],
    subheading:[
      {
        title:"Project",
        content:["Movie Revenue Prediction"]
      },
      // {
      //   title:"Concepts coverd  ",
      //   content:["Traversal, Insertion, Deletion, Slicing, Reversing, Substrings",
      //             "Frequency counting, Lookup tables, Dictionary ops",
      //             "Basic recursion, Merge Sort, Quick Sort, Bubble Sort"
      //           ]
      // },
      // {
      //   title:"Practice",
      //   content:["Problems: Reverse array, Find duplicates, Two-sum logic",
      //             "Word frequency counter, Longest substring without repeat",
      //             "Fibonacci recursive, Sort and search a leaderboard"
      //   ]

      // }
  
  ]
  },
  {
    phase: "Phase 1",
    title: "Machine Learning Core",
    DSA:["Arrays & Strings","HashMaps & Sets","Recursion & Sorting"],
    
    
    topics: [
      "Supervised Learning Overview",
      "Linear & Ridge Regression",
      "Logistic Regression",
      "Decision Trees, Random Forest, Boosting (XGBoost/LightGBM)",
      "KNN, SVM",
      "Model Evaluation: Confusion Matrix, Accuracy, ROC, AUC, Precision/Recall",
      "Unsupervised Learning: K-Means, Hierarchical Clustering",
      "Dimensionality Reduction (PCA)",
      "Feature Engineering & Feature Importance",
      "Handling Imbalanced Data with SMOTE",
    ],
    project: "Customer Segmentation Dashboard with Streamlit",
    subheading:[
      {
        title:"Project",
        content:["Movie Revenue Prediction"]
      },
      {
        title:"Concepts coverd  ",
        content:["Traversal, Insertion, Deletion, Slicing, Reversing, Substrings",
                  "Frequency counting, Lookup tables, Dictionary ops",
                  "Basic recursion, Merge Sort, Quick Sort, Bubble Sort"
                ]
      },
      {
        title:"Practice",
        content:["Problems: Reverse array, Find duplicates, Two-sum logic",
                  "Word frequency counter, Longest substring without repeat",
                  "Fibonacci recursive, Sort and search a leaderboard"
        ]

      }
  
  ]
  },
  {
    phase: "Phase 2",
    title: "Deep Learning & AI App Integration",
    DSA:["Stacks & Queues","Trees & Graphs (Lite)"],
    topics: [
      "Neural Networks: Basics, Activations, Backpropag ation",
      "TensorFlow & Keras",
      "CNN: Image Data, Data Augmentation, VGG, ResNet",
      "RNN & LSTM Basics",
      "Time Series Forecasting",
      "Model Deployment Intro: Flask APIs + Streamlit",
    ],
    project: "End-to-End Deployed AI Solution",
     subheading:[
      {
        title:"Project",
        content:["Movie Revenue Prediction"]
      },
      {
        title:"Concepts coverd  ",
        content:["LIFO/FIFO logic, Use cases in parsing, Queue simulation",
                  "Binary Trees, BFS/DFS (conceptual only), AI search maps"
                ]
      },
      {
        title:"Practice",
        content:["Bracket validator, Undo-redo simulator",
                  "Build family tree using dicts, Maze path finder"
        ]

      }
  
  ]
  },
  
]

const phase4 =[
  {
    phase: "Phase 4",
    title: "Integration, Deployment & Scale",
    DSA:["Intro to LLMs & Prompting","Code Generation & Refactoring","Data & Text Tasks","Retrieval-Augmented Generation","Retrieval-Augmented Generation"],
    topics: [
      "SQL + ER Diagrams",
      "NoSQL – MongoDB",
      "Model + DB Integration",
      "Docker Basics",
      "Cloud Deployment – Heroku / AWS",
      "API Endpoints for AI Models",
      "Sprint 1 – Ideation + Dataset Prep",
      "Sprint 2 – Build + Deployment Iteration",
    ],
    project:"Track Selection: CV/NLP/BI",
    subheading:[
      {
        title:"Project",
        content:["Track Selection: CV/NLP/BI"]
      },
      {
        title:"Concepts coverd  ",
        content:["Role-based prompting, Input structuring, Few-shot",
                  "Code explainers, Generators, Docstring creation",
                  "Summarizing, Rewriting, Data labeling, Augmentation",
                  "LangChain basics, context stuffing, chatbot logic",
                  "Add GPT into Capstone project"
                ]
      },
      {
        title:"Practice",
        content:["Prompt to generate 5 resume bullets from JD",
                  "Prompt GPT to generate a Python script for CSV filtering",
                  "Prompt GPT to summarize a dataset's column definitions",
                  "Build a basic chatbot using GPT + FAQs file",
                  "Auto-prompt to validate, explain, or label model predictions"
        ]

      }
  
  ]
  }
]

const phases3 = [
  {
    phase: "Phase 3",
    title1: "Computer Vision (CV Track)",
    title2: "Natural Language Processing (NLP Track)",
    title3:"Business Intelligence (BI Track)",
     topics1: [
      "OpenCV & Image Preprocessing",
      "Haar Cascade & Face Detection",
      "YOLOv5 Object Detection",
      "Training YOLOv5 on Custom Dataset",
      "Image Segmentation (Mask R-CNN)",
      "Real-time Detection with Camera Feed",
    ],
    topics2: [
      "Text Cleaning, Tokenization",
      "TF-IDF, Word2Vec",
      "Sentiment Analysis",
      "Transformers & BERT",
      "Fine-Tuning BERT on Custom Dataset",
      "Named Entity Recognition, Text Summarization",
      "LangChain Logic + GPT Prompt Integration",
    ],
     topics3: [
      "EDA with Pandas",
      "Time Series Forecasting (ARIMA, Facebook Prophet)",
      "Power BI: Dashboards & ML Visualizations",
      "SQL, ER Diagrams",
      "ML Model + Dashboard Integration",
      "Final Pitch + Business Reporting",
    ],
    project: "Customer Segmentation Dashboard with Streamlit",
  }
]

const specializations = [
  {
    track: "Computer Vision (CV Track)",
    icon: Eye,
    topics: [
      "OpenCV & Image Preprocessing",
      "Haar Cascade & Face Detection",
      "YOLOv5 Object Detection",
      "Training YOLOv5 on Custom Dataset",
      "Image Segmentation (Mask R-CNN)",
      "Real-time Detection with Camera Feed",
    ],
    
    capstone: "Deployable AI Vision System (ex: Real-time helmet detection)",
  },
  {
    track: "Natural Language Processing (NLP Track)",
    icon: Brain,
    topics: [
      "Text Cleaning, Tokenization",
      "TF-IDF, Word2Vec",
      "Sentiment Analysis",
      "Transformers & BERT",
      "Fine-Tuning BERT on Custom Dataset",
      "Named Entity Recognition, Text Summarization",
      "LangChain Logic + GPT Prompt Integration",
    ],
    capstone: "GPT-powered Chatbot / Auto-Resume Screener with Streamlit UI",
  },
  {
    track: "Business Intelligence (BI Track)",
    icon: Award,
    topics: [
      "EDA with Pandas",
      "Time Series Forecasting (ARIMA, Facebook Prophet)",
      "Power BI: Dashboards & ML Visualizations",
      "SQL, ER Diagrams",
      "ML Model + Dashboard Integration",
      "Final Pitch + Business Reporting",
    ],
    capstone: "BI Dashboard + ML-Driven Forecasting + Pitch Presentation",
  },
]

const outcomes = [
  "Hands-on ML, DL, CV/NLP specializations",
  "Track-based Capstone Projects",
  "Cloud-Deployed AI Applications",
  "GitHub & Resume Portfolio",
  "AI-Powered Interview Readiness with Prompt Engineering",
]

const pricingOptions = [
  {
    type: "Full Program",
    price: "₹59,999",
    originalPrice: "₹89,999",
    description: "Complete 5-phase program with specialization track",
    features: ["All 5 Phases", "Choose Specialization", "Career Services", "Lifetime Access"],
    popular: true,
  },
  {
    type: "Individual Phase",
    price: "₹18,999",
    originalPrice: "₹29,999",
    description: "You can choose any single phase based on your  needs",
    features: ["1 Phase Access", "Phase Projects", "Community Access", "30-day Support"],
    popular: false,
  },
]

export default function AiCorePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
     <section className="py-20 bg-gradient-to-br from-emerald-50 to-cyan-50 relative overflow-hidden ">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="bg-purple-100 text-purple-800 mb-4">AI Core 5.0 @ Wrench Wise</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Data to Decisions. Algorithms to Impact.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              AI Core 5.0 is Wrench Wise's elite program in Artificial Intelligence, designed for learners who want to
              master machine learning, deep learning, and domain specialization-with real-world deployment capabilities.
            </p>
            <p className="text-lg text-gray-500 mb-8">
              This is not your average ML course. This is where AI meets product thinking and graduates leave with
              industry-ready capstones, deployable projects, and prompt-powered intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Structured in 5 Powerful Phases</h2>
          </div>

            <div className="space-y-8">
              {phases.map((phase, index) => (
                <Card key={index} className="hover:shadow-2xl transition-shadow ">
                  <CardHeader>
                    <Badge variant="outline" className="bg-purple-500 text-white text-lg px-4 py-2 mx-auto">
                      {phase.phase}
                    </Badge>
                    <CardTitle className="text-2xl">{phase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Topics Covered:</h4>
                        <ul className="space-y-2">
                          {phase.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start text-gray-600">
                              <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{topic}</span>
                            </li>
                          ))}
                        </ul>
                        {phase.DSA.length>=1?<div className="flex-col items-center bg-purple-00 mt-5 rounded shadow-lg  ">
                        <div className="bg-purple-50 p-4 rounded-lg">
                          
                         <h2 className="font-bold text-lg text-purple-900 mb-3">DSA Topics:</h2>
                            {/* <p className="text-emerald-800 font-medium">{phase.DSA}</p> */}
                            <ul className="space-y-2">
                          {phase.DSA.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start text-gray-600">
                              <CheckCircle className="h-4 w-4 text-purple-900 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-purple-800 font-medium">{topic}</span>
                            </li>
                          ))}
                        </ul>
                          </div>
                         </div>:<div></div>}
                        
                      </div>
                      {/* <div className="flex-col items-center h-100 p-6  rounded   ">
                        {phase.project?.length>1?<div>
                       <h4 className="font-semibold text-gray-900 mb-3">Project:</h4>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-purple-800 font-medium">{phase.project}</p>
                      </div>
                    </div>:<div></div>} */}
                      {/* {phase.subheading?.map((sub,index)=>(
                      <div className="pb-4" key={index}>
                          <div className="bg-purple-50 p-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div key={index}>
                            <h4 className="font-semibold text-purple-900 mb-3">{sub.title}</h4>
                            
                            {sub.content.map((para,ind)=>(
                              <p key={ind} className="text-grey-400 font-medium">{para}</p>
                            ))}
                            </div>
                            
                          </div>
                         </div>
                      ))} */}
                      {/* </div> */}
                   
                      <div>
                         <h4 className="font-semibold text-gray-900 mb-3">Capstone Projects:</h4>
                      <div className="bg-purple-300 p-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        <p className="text-purple-800 font-medium">{phase.project}</p>
                      </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
          </div>

          <div className="space-y-8">
             <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Specialization</h2>
            <p className="text-xl text-gray-600">Phase 3 onwards - Deep dive into your area of interest</p>
          </div>
            {phases3.map((phase, index) => (
              <Card key={index} className="hover:shadow-2xl transition-shadow ">
                <CardHeader>
                  <Badge variant="outline" className="bg-purple-500 text-white text-lg px-4 py-2 mx-auto">
                      {phase.phase}
                    </Badge>
                  <CardTitle className="text-2xl">{phase.title1}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Topics Covered:</h4>
                      <ul className="space-y-2">
                        {phase.topics2.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start text-gray-600">
                            <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                       <h4 className="font-semibold text-gray-900 mb-3">Capstone Projects:</h4>
                       <div className="bg-purple-300 p-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        <p className="text-purple-800 font-medium">{phase.project}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardHeader>
               
                  <CardTitle className="text-2xl">{phase.title2}</CardTitle>
                </CardHeader>
                 <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Topics Covered:</h4>
                      <ul className="space-y-2">
                        {phase.topics2.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start text-gray-600">
                            <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      
                    </div>
                  </div>
                </CardContent>
                <CardHeader>
               
                  <CardTitle className="text-2xl">{phase.title3}</CardTitle>
                </CardHeader>
                 <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Topics Covered:</h4>
                      <ul className="space-y-2">
                        {phase.topics3.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start text-gray-600">
                            <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                     
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="space-y-8 py-5">
            {phase4.map((phase, index) => (
                <Card key={index} className="hover:shadow-2xl transition-shadow">
                  <CardHeader>
                    <Badge variant="outline" className="bg-purple-500 text-white text-lg px-4 py-2 mx-auto">
                      {phase.phase}
                    </Badge>
                    <CardTitle className="text-2xl">{phase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Topics Covered:</h4>
                        <ul className="space-y-2">
                          {phase.topics.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start text-gray-600">
                              <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{topic}</span>
                            </li>
                          ))}
                        </ul>
                        {phase.DSA.length>=1?<div className="flex-col items-center  rounded shadow-lg  mt-5 p-0">
                          <div className="bg-purple-50 p-4 rounded-lg">
                         <h2 className="font-bold text-lg text-purple-900 mb-3">DSA Topics:</h2>
                            {/* <p className="text-emerald-800 font-medium">{phase.DSA}</p> */}
                            <ul className="space-y-2">
                          {phase.DSA.map((topic, topicIndex) => (
                            <li key={topicIndex} className="flex items-start text-gray-600">
                              <CheckCircle className="h-4 w-4 text-purple-900 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-purple-800 font-medium">{topic}</span>
                            </li>
                          ))}
                        </ul>
                          </div>
                         </div>:<div></div>}
                        
                      </div>
                      <div className="flex-col items-center h-100 p-6   ">
                         <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Capstone Project:</h4>
                      <div className="bg-purple-300 p-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                        <p className="text-purple-800 font-medium">{phase.project}</p>
                      </div>
                    </div>
                      {/* {phase.subheading?.map((sub,index)=>(
                      <div className="pb-4" key={index}>
                          <div className="bg-purple-50 p-4 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                            <div >
                            <h4 className="font-semibold text-purple-900 mb-3">{sub.title}</h4>
                            <ul className="space-y-2">
                            {sub.content.map((para,ind)=>(
                              <li key={ind} className="text-grey-400 list-styled font-medium">{para}</li>
                            ))}
                            </ul>
                            </div>
                            
                          </div>
                         </div>
                      ))} */}
                      </div>
                      <div>
                        
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
        
      </section>

      {/* Specializations */}
      {/* <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Specialization</h2>
            <p className="text-xl text-gray-600">Phase 3 onwards - Deep dive into your area of interest</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
              {specializations.map((spec, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <spec.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    <CardTitle className="text-xl">{spec.track}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {spec.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Capstone:</h4>
                      <p className="text-sm text-purple-700">{spec.capstone}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section> */}

      {/* Outcomes */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">AI Core 5.0 Outcomes</h2>
          </div>

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {outcomes.map((outcome, index) => (
              <div key={index} className="flex items-center p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-purple-600 mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-900">{outcome}</span>
              </div>
            ))}
          </div> */}
          <div className="grid  justify-center gap-4   md:grid-cols-center-2   lg:grid-cols-3   ">
            <div className="flex   items-center  p-4 bg-white rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300  ">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-900">Hands-on ML, DL, CV/NLP specializations</span>
              </div>
              <div className="flex   items-center  p-4 bg-white rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300  ">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-900">Track-based Capstone Projects</span>
              </div>
              <div className="flex   items-center  p-4 bg-white rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300  ">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-900">Cloud-Deployed AI Applications</span>
              </div>
          </div>
          <div className="flex-wrap gap-4  justify-center gap-4    md:flex   mt-5">
              <div className="flex   items-center  p-4 bg-white rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-4 ">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-900">GitHub & Resume Portfolio</span>
              </div>
              <div className="flex   items-center  p-4 bg-white rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-5  ">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-3 flex-shrink-0" />
                <span className="font-medium text-gray-900">AI-Powered Interview Readiness with Prompt Engineering</span>
              </div>
            </div>

          <div className="bg-white rounded-lg p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Who Is This For?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                  Engineering Students & Tech Grads
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                  Career Changers entering Data Science
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                  Future AI Product Builders
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                  Final-Year College Students
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                  Anyone serious about launching an AI-driven career
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Choose Your Learning Path</h2>
            <p className="text-xl text-gray-600">Flexible options to match your goals and budget</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingOptions.map((option, index) => (
              <Card key={index} className={`relative ${option.popular ? "border-2 border-purple-500" : ""}`}>
                {option.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{option.type}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-purple-600">{option.price}</span>
                    <span className="text-lg text-gray-500 line-through ml-2">{option.originalPrice}</span>
                  </div>
                  <p className="text-gray-600 mt-2">{option.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {option.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-purple-600 mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="space-y-3">
                    <a href="/contact">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      <CreditCard className="mr-2 h-4 w-4" />
                      Consult with Experts
                    </Button>
                    </a>
                    {/* <Button variant="outline" className="w-full bg-transparent">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Enroll Now
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg font-semibold text-gray-900 mb-6">
              Data speaks. Models listen. You build the future. That's AI Core 5.0 by <span className="g1 ">Wrench</span> <span className="g2">Wise</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <Download className="mr-2 h-5 w-5" />
                Download Curriculum
              </Button> */}
              <Link href="/contact">
              <Button size="lg" variant="outline">
                <ArrowRight className="mr-2 h-5 w-5" />
                Book a Demo
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppChat />
    </div>
  )
}
