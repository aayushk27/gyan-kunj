import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const initialFormData = {
    name: '',
    organization: '',
    course: '',
    certificate: null,
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: files[0],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleCertificateClick = () => {
    document.getElementById('certificateInput').click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setFormData(initialFormData);
  };

  return (
    <div className="form-container">
      <h2>Form Component</h2>
      <img src="$./user1.png$" alt="user1" />
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="organization">Organization:</label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="course">Course:</label>
          <input
            type="text"
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="certificate">Certificate:</label>
          <input
            type="file"
            id="certificateInput"
            name="certificate"
            onChange={handleChange}
            accept=".pdf,.jpg,.jpeg,.png"
            style={{ display: 'none' }}
          />
          <button
            type="button"
            className="upload-button"
            onClick={handleCertificateClick}
          >
            Upload Certificate
          </button>
          {formData.certificate && (
            <span className="file-name">{formData.certificate.name}</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
