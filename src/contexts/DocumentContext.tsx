import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useAuth } from './AuthContext';

interface UploadedDocument {
  id: string;
  name: string;
  file: File;
  uploadedAt: Date;
}

interface DocumentSummary {
  id: string;
  documentId: string;
  summary: string;
  createdAt: Date;
}

interface DocumentQuestion {
  id: string;
  documentId: string;
  question: string;
  answer: string;
  createdAt: Date;
}

interface DocumentContextType {
  uploadedDocument: UploadedDocument | null;
  hasUploadedDocument: boolean;
  currentSummary: DocumentSummary | null;
  questions: DocumentQuestion[];
  uploadDocument: (file: File) => Promise<{ success: boolean; error?: string }>;
  getSummary: () => Promise<{ success: boolean; summary?: string; error?: string }>;
  askQuestion: (question: string) => Promise<{ success: boolean; answer?: string; error?: string }>;
  clearDocument: () => void;
  currentView: 'upload' | 'summary' | 'questions';
  setCurrentView: (view: 'upload' | 'summary' | 'questions') => void;
}

const DocumentContext = createContext<DocumentContextType | undefined>(undefined);

export const useDocument = () => {
  const context = useContext(DocumentContext);
  if (context === undefined) {
    throw new Error('useDocument must be used within a DocumentProvider');
  }
  return context;
};

interface DocumentProviderProps {
  children: ReactNode;
}

export const DocumentProvider: React.FC<DocumentProviderProps> = ({ children }) => {
  const [uploadedDocument, setUploadedDocument] = useState<UploadedDocument | null>(null);
  const [currentSummary, setCurrentSummary] = useState<DocumentSummary | null>(null);
  const [questions, setQuestions] = useState<DocumentQuestion[]>([]);
  const [currentView, setCurrentView] = useState<'upload' | 'summary' | 'questions'>('upload');
  const { user } = useAuth();

  const hasUploadedDocument = uploadedDocument !== null;

  const uploadDocument = async (file: File): Promise<{ success: boolean; error?: string }> => {
    try {
      if (!user) {
        return { success: false, error: 'Please login first' };
      }

      if (file.type !== 'application/pdf') {
        return { success: false, error: 'Only PDF format can be uploaded' };
      }

      const newDocument: UploadedDocument = {
        id: Date.now().toString(),
        name: file.name,
        file: file,
        uploadedAt: new Date(),
      };

      // Optional: Save metadata to localStorage
      const userDocuments = JSON.parse(localStorage.getItem(`legalai_documents_${user.id}`) || '[]');
      userDocuments.push({
        id: newDocument.id,
        name: newDocument.name,
        uploadedAt: newDocument.uploadedAt.toISOString(),
      });
      localStorage.setItem(`legalai_documents_${user.id}`, JSON.stringify(userDocuments));

      setUploadedDocument(newDocument);
      setCurrentSummary(null);
      setQuestions([]);
      setCurrentView('upload');

      return { success: true };
    } catch {
      return { success: false, error: 'An unexpected error occurred' };
    }
  };

  const getSummary = async (): Promise<{ success: boolean; summary?: string; error?: string }> => {
    try {
      if (!uploadedDocument || !user) {
        return { success: false, error: 'No document uploaded or user not logged in' };
      }

      return {
        success: false,
        error: 'Summary backend not connected. Please integrate your AI model or API.',
      };
    } catch {
      return { success: false, error: 'An unexpected error occurred' };
    }
  };

  const askQuestion = async (question: string): Promise<{ success: boolean; answer?: string; error?: string }> => {
    try {
      if (!uploadedDocument || !user) {
        return { success: false, error: 'No document uploaded or user not logged in' };
      }

      return {
        success: false,
        error: 'Q&A backend not connected. Please integrate your question-answering API.',
      };
    } catch {
      return { success: false, error: 'An unexpected error occurred' };
    }
  };

  const clearDocument = () => {
    setUploadedDocument(null);
    setCurrentSummary(null);
    setQuestions([]);
    setCurrentView('upload');
  };

  const value = {
    uploadedDocument,
    hasUploadedDocument,
    currentSummary,
    questions,
    uploadDocument,
    getSummary,
    askQuestion,
    clearDocument,
    currentView,
    setCurrentView,
  };

  return <DocumentContext.Provider value={value}>{children}</DocumentContext.Provider>;
};
