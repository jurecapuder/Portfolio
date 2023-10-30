import pdfFile from "../assets/misc/CV - Jure Capuder.pdf";

const ResumeViewer = () => {
  return (
    <object data={pdfFile} type="application/pdf" style={{ height: '100vh', width: '100%' }}>
      <p>It appears you don&apos;t have a PDF plugin for this browser. You can <a href={pdfFile}>click here to download the PDF file.</a></p>
    </object>
  );
};

export default ResumeViewer;