import html2pdf from 'html2pdf.js';
import PDFResume from '../components/PDFResume';
import { createRoot } from 'react-dom/client';
import React from 'react';

export const exportToPDF = () => {
  // Create a temporary container for the PDF content
  const container = document.createElement('div');
  container.id = 'pdf-container';
  document.body.appendChild(container);

  // Create a root and render the PDFResume component
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <PDFResume />
    </React.StrictMode>
  );

  const opt = {
    margin: 0.5,
    filename: 'Devang_Shah_Resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 2,
      useCORS: true,
      logging: true,
      letterRendering: true
    },
    jsPDF: { 
      unit: 'in', 
      format: 'a4', 
      orientation: 'portrait',
      compress: true
    }
  };

  // Generate PDF
  html2pdf()
    .set(opt)
    .from(container)
    .save()
    .then(() => {
      // Clean up
      root.unmount();
      document.body.removeChild(container);
    });
}; 