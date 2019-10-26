import React from "react";
import Header from "./Header";
import Brief from "./Brief";

function Resume() {
  return (
    <div className="home">
      <Header />
      <Brief />
      <div className="content">
        <div id="resume-container">
          <ol id="resume-details">
            <li>
              <strong>Engineering</strong>
              <ul>
                <li>&emsp;- Alliance University</li>
                <li>&emsp;- B.Tech in CSE</li>
                <li>&emsp;- 70.4%</li>
              </ul>
            </li>
            <li>
              <strong>Pre University</strong>
              <ul>
                <li>&emsp;- St. Joseph's Pre University College</li>
                <li>&emsp;- NCERT BOARD</li>
                <li>&emsp;- 83.5%</li>
              </ul>
            </li>
            <li>
              <strong>School</strong>
              <ul>
                <li>&emsp;- Christ School</li>
                <li>&emsp;- SSLC BOARD</li>
                <li>&emsp;- 87.84%</li>
              </ul>
            </li>
            <li>
              <strong>Elitmus</strong>
              <ul>
                <li>&emsp;- Overall Percentile: 87</li>
              </ul>
            </li>
            <li>
              <strong>IELTS</strong>
              <ul>
                <li>&emsp;- Overall Band: 7.5/9</li>
              </ul>
            </li>
            <li>
              <strong>Internship</strong>
              <ul>
                <li>&emsp;- Company: Foscio E-commerce Pvt. Ltd.</li>
                <li>&emsp;- Internship: Web development</li>
                <li>&emsp;- Technologies Used: React.JS</li>
              </ul>
            </li>
            <li>
              <strong>Project</strong>
              <ul>
                <li>
                  &emsp;- Title: Code Smell detection using machine learning
                </li>
              </ul>
            </li>
            <li>
              <strong>Mini Project</strong>
              <ul>
                <li>&emsp;- Title: Android App development(BlogApp)</li>
              </ul>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Resume;
