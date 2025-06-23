import React from 'react';
import { Target, Eye, Award, Users, Globe, Shield } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="hero-section">
          <h1>About Legal AI Platform</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
            We're revolutionizing legal document analysis through advanced artificial intelligence, 
            making legal information more accessible and understandable for everyone.
          </p>
        </div>

        <div className="card">
          <h2>Our Mission</h2>
          <div className="flex align-center gap-3 mb-3">
            <Target size={48} className="feature-icon" />
            <div>
              <p style={{ textAlign: 'left', marginBottom: '1rem' }}>
                Our mission is to democratize legal document analysis by providing cutting-edge AI technology 
                that makes complex legal information accessible, understandable, and actionable for legal 
                professionals, businesses, and individuals.
              </p>
              <p style={{ textAlign: 'left', marginBottom: '0' }}>
                We believe that everyone should have access to tools that help them understand legal documents 
                without the traditional barriers of cost, time, and complexity.
              </p>
            </div>
          </div>
        </div>

        <div className="card">
          <h2>Our Vision</h2>
          <div className="flex align-center gap-3 mb-3">
            <Eye size={48} className="feature-icon" />
            <div>
              <p style={{ textAlign: 'left', marginBottom: '1rem' }}>
                We envision a future where legal document analysis is instant, accurate, and accessible to all. 
                Our AI-powered platform aims to bridge the gap between complex legal language and clear, 
                actionable insights.
              </p>
              <p style={{ textAlign: 'left', marginBottom: '0' }}>
                By leveraging advanced natural language processing and machine learning, we're building 
                the next generation of legal technology solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <Award size={48} />
            </div>
            <h3>Excellence</h3>
            <p>We strive for excellence in every aspect of our platform, from AI accuracy to user experience, ensuring the highest quality service.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Users size={48} />
            </div>
            <h3>User-Centric</h3>
            <p>Our users are at the center of everything we do. We continuously improve our platform based on user feedback and needs.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Shield size={48} />
            </div>
            <h3>Security First</h3>
            <p>We prioritize the security and privacy of your legal documents with enterprise-grade encryption and data protection.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Globe size={48} />
            </div>
            <h3>Accessibility</h3>
            <p>We make legal document analysis accessible to everyone, regardless of their legal background or technical expertise.</p>
          </div>
        </div>

        <div className="card">
          <h2>How It Works</h2>
          <div style={{ textAlign: 'left', maxWidth: '800px', margin: '0 auto' }}>
            <h3>1. Upload Your Document</h3>
            <p>Simply upload your PDF legal document through our secure platform. We support various types of legal documents including contracts, agreements, policies, and more.</p>
            
            <h3>2. AI Analysis</h3>
            <p>Our advanced AI algorithms analyze your document, extracting key information, identifying important clauses, and understanding the document structure and content.</p>
            
            <h3>3. Get Instant Results</h3>
            <p>Receive comprehensive summaries and ask specific questions about your document. Our AI provides accurate, contextual answers based on the document content.</p>
            
            <h3>4. Secure Storage</h3>
            <p>All your documents, summaries, and questions are securely stored in your personal account for future reference and analysis.</p>
          </div>
        </div>

        <div className="card" style={{ textAlign: 'center' }}>
          <h2>Why Choose Legal AI Platform?</h2>
          <div style={{ textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}>
            <ul style={{ listStyle: 'none', padding: '0' }}>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#2470a0', fontWeight: 'bold' }}>✓</span>
                Cutting-edge AI technology for accurate document analysis
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#2470a0', fontWeight: 'bold' }}>✓</span>
                Enterprise-grade security and privacy protection
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#2470a0', fontWeight: 'bold' }}>✓</span>
                User-friendly interface designed for all skill levels
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#2470a0', fontWeight: 'bold' }}>✓</span>
                Fast, reliable results that save time and effort
              </li>
              <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#2470a0', fontWeight: 'bold' }}>✓</span>
                Comprehensive document storage and management
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ color: '#2470a0', fontWeight: 'bold' }}>✓</span>
                24/7 availability for your document analysis needs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;