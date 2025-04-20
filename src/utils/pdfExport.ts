import html2pdf from 'html2pdf.js';

export const exportToPDF = () => {
  const element = document.getElementById('root');
  if (!element) return;

  const opt = {
    margin: 0.5,
    filename: 'Devang_Shah_Portfolio.pdf',
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
    },
    pagebreak: {
      mode: ['avoid-all', 'css', 'legacy'],
      before: '.page-break',
      after: '.page-break',
      avoid: ['img', '.pdf-avoid-break']
    }
  };

  // Add page break classes to sections
  const sections = element.querySelectorAll('section');
  sections.forEach((section, index) => {
    if (index > 0) {
      section.classList.add('page-break');
    }
  });

  // Add class to prevent breaking within important content
  const importantContent = element.querySelectorAll('.pdf-avoid-break');
  importantContent.forEach(content => {
    content.classList.add('pdf-avoid-break');
  });

  html2pdf().set(opt).from(element).save();
}; 