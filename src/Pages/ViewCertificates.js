// import React from 'react';
// import CertificateCard from '../components/CertificateCard';
// import './ViewCertificates.css';

// const ViewCertificates = () => {
//   // Sample data for demonstration purposes
//   const certificatesData = [
//     {
//       title: 'React Fundamentals',
//       issuer: 'React University',
//       date: '2023-08-07',
//     },
//     {
//       title: 'JavaScript Basics',
//       issuer: 'Web Dev Academy',
//       date: '2023-07-15',
//     },
//     {
//       title: 'JavaScript Basics',
//       issuer: 'Web Dev Academy',
//       date: '2023-07-15',
//     },
//     {
//       title: 'JavaScript Basics',
//       issuer: 'Web Dev Academy',
//       date: '2023-07-15',
//     },
//     {
//       title: 'JavaScript Basics',
//       issuer: 'Web Dev Academy',
//       date: '2023-07-15',
//     },
//     {
//       title: 'JavaScript Basics',
//       issuer: 'Web Dev Academy',
//       date: '2023-07-15',
//     },
//     // Add more certificate data as needed
//   ];

//   return (
//     <div className="view-certificates">
//       <h2>Certificates</h2>
//       <div className="certificate-list">
//         {certificatesData.map((certificate, index) => (
//           <CertificateCard key={index} certificate={certificate} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ViewCertificates;

import React from 'react';
import CertificateCard from '../components/CertificateCard';
import './ViewCertificates.css';

const ViewCertificates = () => {
  // Sample data for demonstration purposes
  const certificatesData = [
    {
      courseName: 'CP',
      userName: 'John Doe',
      certificateId: 'ABCD12345',
    },
    {
      courseName: 'Blockchain',
      userName: 'Jane Smith',
      certificateId: 'EFGH67890',
    },
    {
      courseName: 'Blockchain',
      userName: 'Jane Smith',
      certificateId: 'EFGH67890',
    },
    {
      courseName: 'Blockchain',
      userName: 'Jane Smith',
      certificateId: 'EFGH67890',
    },
    {
      courseName: 'Blockchain',
      userName: 'Jane Smith',
      certificateId: 'EFGH67890',
    },
    {
      courseName: 'Blockchain',
      userName: 'Jane Smith',
      certificateId: 'EFGH67890',
    },
    // Add more certificate data as needed
  ];

  return (
    <div className="view-certificates">
      <h2>Certificates</h2>
      <div className="certificate-list">
        {certificatesData.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </div>
    </div>
  );
};

export default ViewCertificates;
