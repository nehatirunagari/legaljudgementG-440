import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Brain, MessageSquare, Shield, Clock, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="hero-section">
          <h1>Legal AI Platform</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
            Transform your legal document analysis with cutting-edge AI technology. 
            Upload your documents, get instant summaries, and ask specific questions 
            to extract the information you need quickly and efficiently.
          </p>
          <div className="flex justify-center gap-2">
            <Link to="/upload" className="btn btn-primary btn-large">
              Get Started
            </Link>
            <Link to="/about" className="btn btn-outline btn-large">
              Learn More
            </Link>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FileText size={48} />
            </div>
            <h3>Document Upload</h3>
            <p>Securely upload your PDF legal documents for analysis. Our platform supports various legal document types and ensures your data privacy.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Brain size={48} />
            </div>
            <h3>AI-Powered Summaries</h3>
            <p>Get comprehensive summaries of your legal documents instantly. Our AI extracts key points, clauses, and important information.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <MessageSquare size={48} />
            </div>
            <h3>Interactive Q&A</h3>
            <p>Ask specific questions about your documents and receive accurate, contextual answers based on the document content.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Shield size={48} />
            </div>
            <h3>Secure & Private</h3>
            <p>Your documents and data are protected with enterprise-grade security. We prioritize your privacy and confidentiality.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Clock size={48} />
            </div>
            <h3>Time-Saving</h3>
            <p>Reduce document review time from hours to minutes. Focus on decision-making rather than document analysis.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <Users size={48} />
            </div>
            <h3>User-Friendly</h3>
            <p>Intuitive interface designed for legal professionals and individuals alike. No technical expertise required.</p>
          </div>
        </div>

        <div className="card" style={{ textAlign: 'center', marginTop: '3rem' }}>
          <h2>Ready to Transform Your Legal Document Analysis?</h2>
          <p>Join thousands of legal professionals who trust our AI-powered platform for efficient document processing.</p>
          <Link to="/upload" className="btn btn-primary btn-large">
            Upload Your First Document
          </Link>
        </div>
      </div>

      <Link to="/privacy-policy" className="privacy-link">
        Privacy Policy
      </Link>
    </div>
  );
};

export default Home;