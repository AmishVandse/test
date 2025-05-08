import React from 'react';
import UploadForm from './UploadForm';
import './OCRAnalyzer.css';

const OCRAnalyzer: React.FC = () => {
  return (
    <div className="ocr-analyzer">
      <div className="page-header">
        <h1>OCR Analyzer</h1>
        <p>Upload documents for OCR analysis</p>
      </div>
      <UploadForm />
    </div>
  );
};

export default OCRAnalyzer; 