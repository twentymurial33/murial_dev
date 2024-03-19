
"use client"
import React from 'react';
import PDFViewer from "../../components/PdfViewer";

function Resume() {
  return (
    <div>
        <PDFViewer pdfPath="./Resume.pdf" />
    </div>
  )
}

export default Resume;