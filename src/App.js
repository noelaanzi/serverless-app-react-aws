import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [response, setResponse] = useState(null);
  const [customerId, setQuery] = useState('');

  const [formData, setFormData] = useState({ name: '', email: '' });
  const [responseData, setResponseData] = useState(null);

  const apiUrl = `https://m8ckvzjzi5.execute-api.ap-northeast-1.amazonaws.com/dev/customer`;

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const getData = async () => {
    try {
      const result = await axios.get(apiUrl, {
        params: { CustomerId: customerId }, // Add query parameters here
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setResponse(result.data);
    } catch (error) {
      console.error('Error calling API:', error);
      setResponse(error.response?.data || 'Error occurred');
    }
  };


  // Call POST API to insert data
  const handlePost = async () => {
    try {
      const response = await axios.post(apiUrl, formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      setResponseData(response.data);
    } catch (error) {
      console.error("Error posting data:", error);
      setResponseData(error.response?.data || 'Error occurred');
    }
  };

  return (
    <div>
      <div style={{ padding: "20px" }}>
        <h1>React + Serverless Application in AWS </h1>
        <h2>View Customer</h2>
        <div style={{ marginBottom: "20px" }}>
          <label>
            Customer Id
            <input
              type="text"
              value={customerId}
              onChange={(e) => setQuery(e.target.value)}
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </label>
          <button onClick={getData}>Search</button>
          <div>
            <h3>Response:</h3>
            <pre>{JSON.stringify(response, ' ', 2)}</pre>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <div style={{ padding: "20px" }}>
          <h2>Add New Customer</h2>
          <label>
            Customer Id:{" "}
            <input
              type="text"
              name="customerId"
              value={formData.customerId}
              onChange={handleChange}
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </label>
          <br></br>
          <label>
            Name:{" "}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </label>
          <br></br>
          <label>
            Email:{" "}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </label>

          <br></br>
          <button onClick={handlePost}>Add</button>

          <div>
            <h3>Response</h3>
            <pre>{JSON.stringify(responseData, '', 2)}</pre>
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;
