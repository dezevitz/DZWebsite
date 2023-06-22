import React from 'react';
import { Document, Page,  pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { Box } from '@mui/material';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function ResumeScreen() {
  return (
    <Box
      display="flex"
      padding="20px"
      justifyContent="center"
      minWidth="6.5in"
      minHeight= '100vh'
      sx={{
        backgroundColor: (theme) => theme.palette.primary.dark
      }}
    >
      <Document 
        file="/Resume.pdf"
        data-testid="Resume PDF"
      >
        <Page
          pageNumber={1} 
          renderTextLayer={false} 
        />
      </Document>
    </Box>
  );
}

export default ResumeScreen;
