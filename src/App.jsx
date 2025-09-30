import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai"; // ✅ correct import
import { products } from "./products";
import "./App.css";

export default function App() {
  const [input, setInput] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRecommendations = async () => {
    if (!input.trim()) {
      setRecommendations([]);
      return;
    }

    setLoading(true);
    try {
      // ✅ Initialize Gemini client
      const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `Here are some products:
${products.map(p => `${p.name} - $${p.price} - ${p.description}`).join("\n")}

User wants: ${input}

Please recommend up to 3 matching products.
Return only the product names, one per line, exactly as they appear above.`;

      // ✅ Generate content
      const result = await model.generateContent(prompt);

      // ✅ Extract text safely
      const text = result.response.text();
      console.log("Raw Gemini response:", text);

      if (!text) {
        setRecommendations([]);
        return;
      }

      // Parse returned names and map to actual products
      const productNames = text.split("\n").filter(line => line.trim());
      const matches = products.filter(product =>
        productNames.some(name =>
          name.toLowerCase().includes(product.name.toLowerCase()) ||
          product.name.toLowerCase().includes(name.toLowerCase())
        )
      );

      setRecommendations(matches.slice(0, 3)); // limit to 3 results
    } catch (err) {
      console.error("Error calling Gemini API:", err);
      setRecommendations([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <header>
        <h1>AI Product Recommender</h1>
        <p>Find the perfect product with the power of AI</p>
      </header>

      <main>
        <div className="search-box">
          <input
            type="text"
            placeholder="e.g., Laptop under $800"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={getRecommendations} disabled={loading}>
            {loading ? "Loading..." : "Get Recommendations"}
          </button>
        </div>

        <section className="results">
          {recommendations.length > 0 ? (
            recommendations.map((item, idx) => (
              <div className="card" key={item.id || idx}>
                <h3>{item.name}</h3>
                <p className="price">${item.price}</p>
                {item.brand && <p className="brand">{item.brand}</p>}
                <p className="description">{item.description}</p>
                {item.rating && (
                  <div className="rating">
                    <span>⭐ {item.rating}/5</span>
                  </div>
                )}
              </div>
            ))
          ) : (
            <p className="placeholder">
              Enter your preference and click <strong>Get Recommendations</strong>.
            </p>
          )}
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} AI Recommender</p>
      </footer>
    </div>
  );
}
