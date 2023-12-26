/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/wood-591631_1280.jpg";

const imageAltText = "wood";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "AWS CloudFormation Templates for Infrastructure as Code (IaC)",
    description:
      "Developed CloudFormation templates to automate the provisioning of AWS resources, ensuring consistent and scalable infrastructure.",
  },
  {
    title: "Serverless Computing with AWS Lambda",
    description:
      "Implemented serverless applications using AWS Lambda, including event triggers and integrations with other AWS services.",
  },
  {
    title: "AWS S3 Data Storage and Management",
    description:
      "Designed and implemented data storage solutions using Amazon S3, ensuring secure and scalable storage for various applications.",
  },
  {
    title: "AWS Identity and Access Management (IAM) Best Practices",
    description:
      "Contributed to IAM policies and practices, ensuring secure access control and permissions for AWS resources.",
  },
  {
    title: "Monitoring and Logging with AWS CloudWatch",
    description:
      "Implemented monitoring and logging solutions using AWS CloudWatch to ensure real-time insights into system performance and errors.",
  },
];


const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
