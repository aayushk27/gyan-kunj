// import React from 'react';
// import './CertificateCard.css';

// const CertificateCard = ({ certificate }) => {
//   return (
//     <div className="certificate-card">
//       <h3>{certificate.title}</h3>
//       <p>Issued by: {certificate.issuer}</p>
//       <p>Date: {certificate.date}</p>
//       {/* Add more details as needed */}
//     </div>
//   );
// };

// export default CertificateCard;
import React from 'react';
import './CertificateCard.css';

const CertificateCard = ({ certificate }) => {
  const { courseName, userName, certificateId } = certificate;

  return (
    <div className="certificate-card">
      <h3>{courseName}</h3>
      <p>User: {userName}</p>
      <p>Certificate ID: {certificateId}</p>
      <button className="show-certificate-button">Show Certificate</button>
    </div>
  );
};

export default CertificateCard;
