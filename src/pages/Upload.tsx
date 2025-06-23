import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload as UploadIcon, FileText, Trash2, Brain, MessageSquare, ArrowLeft } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useDocument } from '../contexts/DocumentContext';

const Upload: React.FC = () => {
  const { user } = useAuth();
  const { 
    uploadedDocument, 
    hasUploadedDocument, 
    currentSummary,
    questions,
    uploadDocument, 
    getSummary, 
    askQuestion,
    clearDocument,
    currentView,
    setCurrentView 
  } = useDocument();
  
  const [dragOver, setDragOver] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [question, setQuestion] = useState('');
  const [summaryContent, setSummaryContent] = useState('');
  const [questionAnswer, setQuestionAnswer] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = async (file: File) => {
    setError('');
    setSuccess('');
    setLoading(true);

    const result = await uploadDocument(file);
    
    if (result.success) {
      setSuccess('Document uploaded successfully!');
    } else {
      setError(result.error || 'Upload failed');
    }
    
    setLoading(false);
  };

  const handleGetSummary = async () => {
    if (!hasUploadedDocument) {
      setError('Please upload a document first');
      return;
    }

    setLoading(true);
    setError('');
    
    const result = await getSummary();
    
    if (result.success && result.summary) {
      setSummaryContent(result.summary);
      setCurrentView('summary');
    } else {
      setError(result.error || 'Failed to get summary');
    }
    
    setLoading(false);
  };

  const handleAskQuestion = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!hasUploadedDocument) {
      setError('Please upload a document first');
      return;
    }

    if (!question.trim()) {
      setError('Please enter a question');
      return;
    }

    setLoading(true);
    setError('');
    
    const result = await askQuestion(question);
    
    if (result.success && result.answer) {
      setQuestionAnswer(result.answer);
      setQuestion('');
    } else {
      setError(result.error || 'Failed to get answer');
    }
    
    setLoading(false);
  };

  const handleClearDocument = () => {
    clearDocument();
    setSummaryContent('');
    setQuestionAnswer('');
    setQuestion('');
    setError('');
    setSuccess('');
  };

  const renderUploadView = () => (
    <>
      <h2>Upload Legal Document</h2>
      <p>Upload your PDF legal document for AI-powered analysis</p>

      {!hasUploadedDocument ? (
        <div 
          className={`upload-area ${dragOver ? 'dragover' : ''}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="upload-icon">
            <UploadIcon size={48} />
          </div>
          <h3>Drop your PDF file here</h3>
          <p>or click to browse and select a file</p>
          <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '1rem' }}>
            Only PDF format is supported
          </p>
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileSelect}
            className="file-input"
          />
        </div>
      ) : (
        <div className="uploaded-file">
          <div className="file-info">
            <FileText size={24} style={{ color: '#2470a0' }} />
            <div>
              <strong>{uploadedDocument.name}</strong>
              <p style={{ margin: '0', fontSize: '0.9rem', color: '#666' }}>
                Uploaded: {uploadedDocument.uploadedAt.toLocaleString()}
              </p>
            </div>
          </div>
          <button onClick={handleClearDocument} className="remove-file">
            <Trash2 size={16} />
          </button>
        </div>
      )}

      {hasUploadedDocument && (
        <div className="action-buttons">
          <button onClick={handleGetSummary} className="btn btn-primary" disabled={loading}>
            <Brain size={20} />
            Get Summary
          </button>
          <button 
            onClick={() => setCurrentView('questions')} 
            className="btn btn-secondary"
          >
            <MessageSquare size={20} />
            Ask Questions
          </button>
        </div>
      )}
    </>
  );

  const renderSummaryView = () => (
    <>
      <div className="back-button">
        <button onClick={() => setCurrentView('upload')} className="btn btn-outline">
          <ArrowLeft size={20} />
          Back to Upload
        </button>
      </div>
      
      <h2>Document Summary</h2>
      <p>AI-generated summary of your document</p>

      {currentSummary && (
        <div className="results-section">
          <h3>Summary Results</h3>
          <div className="results-content">
            <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
              {currentSummary.summary}
            </pre>
          </div>
        </div>
      )}

      <div className="action-buttons">
        <button 
          onClick={() => setCurrentView('questions')} 
          className="btn btn-secondary"
        >
          <MessageSquare size={20} />
          Ask Questions
        </button>
      </div>
    </>
  );

  const renderQuestionsView = () => (
    <>
      <div className="back-button">
        <button 
          onClick={() => currentSummary ? setCurrentView('summary') : setCurrentView('upload')} 
          className="btn btn-outline"
        >
          <ArrowLeft size={20} />
          {currentSummary ? 'Back to Summary' : 'Back to Upload'}
        </button>
      </div>
      
      <h2>Ask Questions</h2>
      <p>Ask specific questions about your uploaded document</p>

      <form onSubmit={handleAskQuestion} className="mb-4">
        <div className="form-group">
          <label htmlFor="question">Your Question</label>
          <textarea
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question about the document..."
            rows={3}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? 'Getting Answer...' : 'Ask Question'}
        </button>
      </form>

      {questionAnswer && (
        <div className="results-section">
          <h3>Answer</h3>
          <div className="results-content">
            <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>
              {questionAnswer}
            </pre>
          </div>
        </div>
      )}

      {questions.length > 0 && (
        <div className="results-section">
          <h3>Previous Questions</h3>
          {questions.map((q, index) => (
            <div key={q.id} className="results-content">
              <h4>Q{index + 1}: {q.question}</h4>
              <div style={{ marginTop: '1rem', padding: '1rem', background: '#f8f9fa', borderRadius: '6px' }}>
                <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit', margin: '0' }}>
                  {q.answer}
                </pre>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );

  if (!user) {
    return null; // Will redirect to login
  }

  return (
    <div className="page-container">
      <div className="container">
        {error && (
          <div className="alert alert-error">
            {error}
          </div>
        )}

        {success && (
          <div className="alert alert-success">
            {success}
          </div>
        )}

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Processing...</p>
          </div>
        )}

        <div className="card">
          {currentView === 'upload' && renderUploadView()}
          {currentView === 'summary' && renderSummaryView()}
          {currentView === 'questions' && renderQuestionsView()}
        </div>
      </div>
    </div>
  );
};

export default Upload;