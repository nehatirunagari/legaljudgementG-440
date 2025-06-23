import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="page-container">
      <div className="container">
        <div className="hero-section">
          <h1>Privacy Policy</h1>
          <p style={{ fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
            Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use our Legal AI Platform.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#666' }}>
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <div className="card">
          <div className="flex align-center gap-3 mb-3">
            <Database size={48} className="feature-icon" />
            <div>
              <h2>Information We Collect</h2>
              <p style={{ textAlign: 'left', marginBottom: '0' }}>
                We collect information you provide directly to us and information about how you use our services.
              </p>
            </div>
          </div>
          
          <div style={{ textAlign: 'left', marginLeft: '4rem' }}>
            <h3>Personal Information</h3>
            <ul>
              <li>Email address and password for account creation</li>
              <li>Legal documents you upload for analysis</li>
              <li>Questions you ask about your documents</li>
              <li>Usage patterns and preferences</li>
            </ul>

            <h3>Technical Information</h3>
            <ul>
              <li>IP address and browser information</li>
              <li>Device type and operating system</li>
              <li>Usage statistics and performance data</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="flex align-center gap-3 mb-3">
            <Eye size={48} className="feature-icon" />
            <div>
              <h2>How We Use Your Information</h2>
              <p style={{ textAlign: 'left', marginBottom: '0' }}>
                We use the information we collect to provide, maintain, and improve our services.
              </p>
            </div>
          </div>
          
          <div style={{ textAlign: 'left', marginLeft: '4rem' }}>
            <ul>
              <li>Provide document analysis and AI-powered summaries</li>
              <li>Answer questions about your uploaded documents</li>
              <li>Maintain your account and provide customer support</li>
              <li>Improve our AI algorithms and service quality</li>
              <li>Send important updates about our services</li>
              <li>Protect against fraud and ensure security</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="flex align-center gap-3 mb-3">
            <Lock size={48} className="feature-icon" />
            <div>
              <h2>Data Security</h2>
              <p style={{ textAlign: 'left', marginBottom: '0' }}>
                We implement robust security measures to protect your information and documents.
              </p>
            </div>
          </div>
          
          <div style={{ textAlign: 'left', marginLeft: '4rem' }}>
            <h3>Security Measures</h3>
            <ul>
              <li>End-to-end encryption for all data transmission</li>
              <li>Secure cloud storage with enterprise-grade protection</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Multi-factor authentication options</li>
              <li>Access controls and monitoring systems</li>
              <li>Compliance with industry security standards</li>
            </ul>

            <h3>Document Handling</h3>
            <ul>
              <li>Documents are encrypted both in transit and at rest</li>
              <li>Access is restricted to authorized personnel only</li>
              <li>Automatic deletion options for sensitive documents</li>
              <li>No sharing with third parties without explicit consent</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="flex align-center gap-3 mb-3">
            <UserCheck size={48} className="feature-icon" />
            <div>
              <h2>Your Rights and Choices</h2>
              <p style={{ textAlign: 'left', marginBottom: '0' }}>
                You have control over your personal information and how it's used.
              </p>
            </div>
          </div>
          
          <div style={{ textAlign: 'left', marginLeft: '4rem' }}>
            <h3>Your Rights</h3>
            <ul>
              <li>Access and review your personal information</li>
              <li>Update or correct inaccurate information</li>
              <li>Delete your account and associated data</li>
              <li>Export your data in a portable format</li>
              <li>Opt out of non-essential communications</li>
              <li>Request information about data processing</li>
            </ul>

            <h3>How to Exercise Your Rights</h3>
            <ul>
              <li>Log into your account to update preferences</li>
              <li>Contact our support team for assistance</li>
              <li>Use our data export tools when available</li>
              <li>Follow unsubscribe links in emails</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="flex align-center gap-3 mb-3">
            <FileText size={48} className="feature-icon" />
            <div>
              <h2>Data Retention</h2>
              <p style={{ textAlign: 'left', marginBottom: '0' }}>
                We retain your information only as long as necessary to provide our services.
              </p>
            </div>
          </div>
          
          <div style={{ textAlign: 'left', marginLeft: '4rem' }}>
            <ul>
              <li>Account information: Retained while your account is active</li>
              <li>Uploaded documents: Stored securely until you delete them</li>
              <li>Analysis results: Kept for your reference and service improvement</li>
              <li>Usage data: Anonymized and retained for analytics</li>
              <li>Deleted data: Permanently removed within 30 days</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="flex align-center gap-3 mb-3">
            <Shield size={48} className="feature-icon" />
            <div>
              <h2>Third-Party Services</h2>
              <p style={{ textAlign: 'left', marginBottom: '0' }}>
                We may use trusted third-party services to enhance our platform.
              </p>
            </div>
          </div>
          
          <div style={{ textAlign: 'left', marginLeft: '4rem' }}>
            <h3>Service Providers</h3>
            <ul>
              <li>Cloud hosting and storage providers</li>
              <li>Authentication and security services</li>
              <li>Analytics and performance monitoring</li>
              <li>Customer support tools</li>
            </ul>

            <h3>Data Sharing</h3>
            <ul>
              <li>We never sell your personal information</li>
              <li>Sharing is limited to essential service providers</li>
              <li>All partners must meet our security standards</li>
              <li>Legal disclosures only when required by law</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <h2>Updates to This Policy</h2>
          <p style={{ textAlign: 'left' }}>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date. We encourage you to review this privacy policy periodically for any changes.
          </p>
        </div>

        <div className="card">
          <h2>Contact Us</h2>
          <p style={{ textAlign: 'left' }}>
            If you have any questions about this privacy policy or our practices, please contact us:
          </p>
          <div style={{ textAlign: 'left', marginTop: '1rem' }}>
            <p><strong>Email:</strong> privacy@legalai.com</p>
            <p><strong>Support:</strong> Available through your account dashboard</p>
            <p><strong>Response Time:</strong> We respond to privacy inquiries within 48 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;