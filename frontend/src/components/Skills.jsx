import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['TypeScript', 'Python', 'JavaScript', 'Bash/Shell']
    },
    {
      title: 'Frontend',
      skills: ['React', 'Material-UI', 'Backstage', 'Plugin Development']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'REST API Design']
    },
    {
      title: 'Cloud & Infrastructure',
      skills: ['AWS (EKS, EC2, S3, IAM)', 'Kubernetes', 'Helm', 'Terraform']
    },
    {
      title: 'Data & Pipelines',
      skills: ['Apache Airflow', 'Change Data Capture (CDC)', 'PostgreSQL']
    },
    {
      title: 'AI & GenAI',
      skills: ['LLM Integrations', 'RAG', 'GitHub Copilot Extensions', 'Cursor AI', 'Prompt Engineering', 'MCP']
    },
    {
      title: 'DevOps & CI/CD',
      skills: ['GitHub Actions', 'Jenkins', 'Docker', 'GitOps']
    },
    {
      title: 'Auth & Security',
      skills: ['JWT', 'Okta', 'OAuth 2.0', 'Bearer Token Auth']
    },
    {
      title: 'Observability',
      skills: ['Prometheus', 'Metrics Instrumentation', 'Structured Logging']
    },
    {
      title: 'Developer Tooling',
      skills: ['Backstage', 'Internal Developer Portals', 'Self-Service Tooling']
    },
    {
      title: 'Integrations',
      skills: ['Jira REST API', 'GitHub API', 'Third-Party API Integrations']
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Tech Stack</h2>
          <div className="section-divider"></div>
        </div>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
