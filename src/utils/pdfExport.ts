import html2pdf from 'html2pdf.js';

export const exportToPDF = () => {
  // Create a temporary container for the PDF content
  const container = document.createElement('div');
  container.id = 'pdf-container';
  container.className = 'pdf-resume p-8 max-w-4xl mx-auto';
  document.body.appendChild(container);

  // Create the resume content using DOM manipulation
  const resumeContent = `
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold text-teal-600 mb-2">Devang Shah</h1>
      <p class="text-gray-600">Senior Data Engineering Leader</p>
      <div class="flex justify-center space-x-4 mt-2 text-sm text-gray-500">
        <span>Boston, MA</span>
        <span>|</span>
        <span>devang.shah@example.com</span>
        <span>|</span>
        <span>LinkedIn: linkedin.com/in/devangshah</span>
      </div>
    </div>

    <div class="mb-6">
      <h2 class="text-xl font-bold text-teal-600 border-b-2 border-teal-600 pb-1 mb-3">Professional Summary</h2>
      <p class="text-gray-700">
        Accomplished Data Engineering Leader with 15+ years of experience in building scalable data platforms and leading high-performing teams. 
        Proven track record in cloud architecture, data governance, and driving business value through data-driven insights.
      </p>
    </div>

    <div class="mb-6">
      <h2 class="text-xl font-bold text-teal-600 border-b-2 border-teal-600 pb-1 mb-3">Professional Experience</h2>
      
      <div class="mb-4">
        <div class="flex justify-between">
          <h3 class="font-bold text-gray-800">Head of Data Analytics</h3>
          <span class="text-gray-600">April 2025 - Present</span>
        </div>
        <p class="text-gray-600 mb-2">ZoomInfo, Boston, MA</p>
        <ul class="list-disc list-inside text-gray-700 ml-4">
          <li>Leading a team of 25+ data professionals in building enterprise data platforms</li>
          <li>Reduced data processing costs by 40% through cloud optimization</li>
          <li>Implemented real-time analytics solutions serving 1M+ users</li>
        </ul>
      </div>

      <div class="mb-4">
        <div class="flex justify-between">
          <h3 class="font-bold text-gray-800">Senior Data Engineering Manager</h3>
          <span class="text-gray-600">March 2023 - April 2025</span>
        </div>
        <p class="text-gray-600 mb-2">Wayfair, Boston, MA</p>
        <ul class="list-disc list-inside text-gray-700 ml-4">
          <li>Managed a team of 15 data engineers and analysts</li>
          <li>Built scalable data pipelines processing 1TB+ daily</li>
          <li>Improved data quality by 60% through automated monitoring</li>
        </ul>
      </div>

      <div class="mb-4">
        <div class="flex justify-between">
          <h3 class="font-bold text-gray-800">Data Engineering Manager</h3>
          <span class="text-gray-600">2018 - 2023</span>
        </div>
        <p class="text-gray-600 mb-2">Amazon, Seattle, WA</p>
        <ul class="list-disc list-inside text-gray-700 ml-4">
          <li>Led development of real-time analytics platform</li>
          <li>Achieved 99.99% data pipeline reliability</li>
          <li>Reduced operational costs by $2M annually</li>
        </ul>
      </div>
    </div>

    <div class="mb-6">
      <h2 class="text-xl font-bold text-teal-600 border-b-2 border-teal-600 pb-1 mb-3">Technical Skills</h2>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <h3 class="font-bold text-gray-800 mb-2">Data Engineering</h3>
          <ul class="list-disc list-inside text-gray-700 ml-4">
            <li>Apache Spark, Hadoop, Kafka</li>
            <li>Python, Java, Scala</li>
            <li>SQL, NoSQL databases</li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold text-gray-800 mb-2">Cloud & DevOps</h3>
          <ul class="list-disc list-inside text-gray-700 ml-4">
            <li>AWS, Azure, GCP</li>
            <li>Docker, Kubernetes</li>
            <li>CI/CD, Terraform</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mb-6">
      <h2 class="text-xl font-bold text-teal-600 border-b-2 border-teal-600 pb-1 mb-3">Education</h2>
      <div class="flex justify-between">
        <div>
          <h3 class="font-bold text-gray-800">Master of Science in Computer Science</h3>
          <p class="text-gray-600">University of Massachusetts, Amherst</p>
        </div>
        <span class="text-gray-600">2008</span>
      </div>
    </div>

    <div>
      <h2 class="text-xl font-bold text-teal-600 border-b-2 border-teal-600 pb-1 mb-3">Certifications</h2>
      <ul class="list-disc list-inside text-gray-700 ml-4">
        <li>AWS Certified Solutions Architect - Professional</li>
        <li>Google Cloud Professional Data Engineer</li>
        <li>Databricks Certified Data Engineer</li>
      </ul>
    </div>
  `;

  container.innerHTML = resumeContent;

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
      document.body.removeChild(container);
    });
}; 