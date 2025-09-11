# AI Product Recommender

A modern React application that uses Google's Gemini AI to provide intelligent product recommendations based on user queries. Simply describe what you're looking for, and the AI will recommend the best matching products from our curated catalog.

![AI Product Recommender](https://img.shields.io/badge/React-18.2.0-blue) ![Gemini AI](https://img.shields.io/badge/Gemini-AI-green) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.13-blue)

## 🚀 Features

- **AI-Powered Recommendations**: Uses Google Gemini AI to understand natural language queries
- **Smart Product Matching**: Intelligently matches user preferences with product specifications
- **Beautiful UI**: Modern, responsive design with gradient backgrounds and smooth animations
- **Comprehensive Product Catalog**: Includes smartphones, laptops, headphones, cameras, smartwatches, and tablets
- **Real-time Search**: Instant recommendations as you type your preferences
- **Detailed Product Info**: Shows price, brand, description, and ratings for each recommendation

## 🛠️ Tech Stack

- **Frontend**: React 18.2.0
- **AI Integration**: Google Gemini AI (@google/genai)
- **Styling**: TailwindCSS 4.1.13 + Custom CSS
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (version 14 or higher)
- npm or yarn package manager
- A Google Gemini AI API key

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <https://github.com/sohamsontakke/ai_Recommendation>
   cd ai_recommendation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory and add your Gemini AI API key:
   ```env
   REACT_APP_GEMINI_API_KEY=your_gemini_api_key_here
   ```

   > **Note**: Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

4. **Start the development server**
   ```bash
   npm start
   ```

   The app will open in your browser at `http://localhost:3000` (or the next available port).

## 🎯 Usage

1. **Enter your preference**: Type what you're looking for in natural language
   - Examples: "smartphone under $500", "gaming laptop", "noise canceling headphones"

2. **Get AI recommendations**: Click "Get Recommendations" to let Gemini AI analyze your request

3. **Browse results**: View detailed product information including:
   - Product name and brand
   - Price and rating
   - Detailed description
   - Key features and specifications

## 📱 Example Queries

Try these sample queries to see the AI in action:

- **Budget-focused**: "cheap smartphone under $500"
- **Feature-specific**: "laptop with good battery life for programming"
- **Brand preference**: "Apple products for creative work"
- **Use case**: "headphones for gym and running"
- **Performance**: "high-end gaming laptop with RTX graphics"
- **Professional**: "camera for professional photography"

## 🏗️ Project Structure

```
ai_recommendation/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Custom styling
│   ├── products.jsx     # Product catalog data
│   ├── index.js         # React entry point
│   └── index.css        # Global styles
├── .env                 # Environment variables (create this)
├── package.json         # Dependencies and scripts
└── README.md           # This file
```
