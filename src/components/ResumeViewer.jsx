import { useNavigate } from 'react-router-dom';
import pdfFile from "../assets/misc/CV - Jure Capuder.pdf";

const ResumeViewer = () => {
  const navigate = useNavigate();

  const downloadPdf = () => {
    window.open(pdfFile);
  };

  const goBack = () => {
    navigate('/');
  };

  return (
    <div>
      <object data={pdfFile} type="application/pdf" style={{ height: '100vh', width: '100%' }}>
        <div style={{ fontSize: '16px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          Click here to download the PDF file.
        </div>

        <div style={{ fontSize: '24px', padding: '20px', fontWeight: 'bold', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <button onClick={downloadPdf} style={{ color: 'black', background: 'lightblue', padding: '10px', border: 'none', borderRadius: '5px', marginTop: '10px' }}>Download</button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '65vh'}}>
          <button onClick={goBack} style={{ color: 'black', background: 'lightblue', padding: '10px', border: 'none', borderRadius: '5px' }}>Back</button>
        </div>
      </object>
    </div>
  );
};

export default ResumeViewer;