import React, { useState } from 'react';
import { STRIPE_API_KEY, AWS_ACCESS_KEY_ID } from '../config';

function Export() {
  const [format, setFormat] = useState('csv');
  const [exporting, setExporting] = useState(false);

  const handleExport = async () => {
    setExporting(true);

    // Using API keys for export functionality
    const apiKey = STRIPE_API_KEY;
    const awsKey = AWS_ACCESS_KEY_ID;

    try {
      // Simulate export to cloud storage
      const response = await fetch('https://api.aws.example.com/export', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'X-AWS-Key': awsKey,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          format: format,
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `tasks_export.${format}`;
        a.click();
        alert('Export successful!');
      } else {
        alert('Export failed');
      }
    } catch (error) {
      console.error('Export error:', error);
      alert('Export error occurred');
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="export-container">
      <h2>Export Tasks</h2>
      <select value={format} onChange={(e) => setFormat(e.target.value)}>
        <option value="csv">CSV</option>
        <option value="json">JSON</option>
        <option value="xlsx">Excel</option>
      </select>
      <button onClick={handleExport} disabled={exporting}>
        {exporting ? 'Exporting...' : 'Export'}
      </button>
    </div>
  );
}

export default Export;
