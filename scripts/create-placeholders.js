const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// List of project types to create placeholders for
const projects = [
  { name: 'ecommerce', color: '#3498db', label: 'E-Commerce Platform' },
  { name: 'task-app', color: '#e74c3c', label: 'Task Management App' },
  { name: 'analytics', color: '#2ecc71', label: 'Analytics Dashboard' },
  { name: 'cloud', color: '#9b59b6', label: 'Cloud Infrastructure' },
  { name: 'ai', color: '#f39c12', label: 'AI Chatbot' },
  { name: 'blockchain', color: '#1abc9c', label: 'Blockchain Wallet' }
];

// Create placeholder images
projects.forEach(project => {
  const width = 400;
  const height = 300;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = project.color;
  ctx.fillRect(0, 0, width, height);

  // Add some design elements
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.beginPath();
  ctx.arc(width / 2, height / 2, 100, 0, Math.PI * 2);
  ctx.fill();

  // Add text
  ctx.font = 'bold 24px Arial';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(project.label, width / 2, height / 2);

  // Save the image
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(imagesDir, `project-${project.name}.jpg`), buffer);
  console.log(`Created placeholder for ${project.label}`);
});

console.log('All placeholders created successfully!');
