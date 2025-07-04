import React from "react";
import "./Body.css"; 
import img from '../../assets/img.jpg';
const MainContent = () => {
  return (
    <div id="main-content">
      {/* 1. Heading */}
      <div className="section heading-section">
        <h1>Let's Work With the URL Shortner</h1>
      </div>

      {/* 2. URL Input and Button */}
      <div className="section input-section">
        <div className="url-box">
          <input type="text" placeholder="Place your URL" />
        </div>
        <div className="button-box">
          <button>Let's Start</button>
        </div>
      </div>

      {/* 3. Image Section */}
      <div className="section image-section">
        <img
          src={img}
          alt="URL Illustration"
        />
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
