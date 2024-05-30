"use client"
import React from 'react';
import MyDocument from './pdf';
import { PDFViewer } from '@react-pdf/renderer';

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white border border-black text-black overflow-scroll">
      {/* <PDFViewer className="w-full h-full" >
        <MyDocument />
      </PDFViewer> */}
      <iframe src="/resume.pdf" className="w-full h-full" />
    </div>
  );
}
