import html2pdf from 'html2pdf.js';

export const exportToPDF = () => {
  const element = document.getElementById('root');
  if (!element) return;

  const opt = {
    margin: 1,
    filename: 'Devang_Shah_Portfolio.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
}; 