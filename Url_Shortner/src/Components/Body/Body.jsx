import React, { useState } from "react";
import "./Body.css";
import img from "../../assets/img.jpg";

const MainContent = () => {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleShortenUrl = async () => {
    if (!originalUrl.trim()) {
      setError("Please enter a valid URL.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ original_url: originalUrl }),
      });

      const data = await response.json();

      if (response.ok) {
        setShortUrl(`http://localhost:8000/api/${data.short_code}`);
        setError("");
      } else {
        setError(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Unable to connect to the server.");
    }
  };

  return (
    <div id="main-content">
      {/* 1. Heading */}
      <div className="section heading-section">
        <h1>Let's Work With the URL Shortener</h1>
      </div>

      {/* 2. URL Input and Button */}
      <div className="section input-section">
        <div className="url-box">
          <input
            type="text"
            placeholder="Place your URL"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
          />
        </div>
        <div className="button-box">
          <button onClick={handleShortenUrl}>Let's Start</button>
        </div>
      </div>

      {/* 2.5 Result Display */}
      {shortUrl && (
        <div className="section result-section">
          <p>✅ Your short URL:</p>
          <div className="short-url-box">
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
          </div>
        </div>
      )}

      {error && (
        <div className="section error-section">
          <p style={{ color: "red" }}>⚠️ {error}</p>
        </div>
      )}

      {/* 3. Image Section */}
      <div className="section image-section">
        <img src={img} alt="URL Illustration" />
      </div>

      {/* 4. FAQ Table */}
      <div className="section faq-section">
        <table>
          <tbody>
            <tr>
              <td>
                <details>
                  <summary>🔽 What is a URL Shortener?</summary>
                  <p>
                    A URL shortener turns a long link into a short,
                    easy-to-share one.
                  </p>
                </details>
              </td>
            </tr>
            <tr>
              <td>
                <details>
                  <summary>🔽 Is it free to use?</summary>
                  <p>Yes! Our URL shortener is completely free to use.</p>
                </details>
              </td>
            </tr>
            <tr>
              <td>
                <details>
                  <summary>🔽 How long do links stay active?</summary>
                  <p>
                    Shortened links remain active unless deleted manually.
                  </p>
                </details>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MainContent;
