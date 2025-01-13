import React, { useState } from "react";
import axios from "axios";

const App = () => {
  // State for GET response
  const [customerId, setCustomerId] = useState("");
  const [getResponse, setGetResponse] = useState(null);

  // State for POST form inputs and response
  const [postData, setPostData] = useState({ name: "", email: "", age: "" });
  const [postResponse, setPostResponse] = useState(null);

  // AWS API Gateway base URL
  const API_BASE_URL = "https://YOUR_API_ENDPOINT";

  // Handle input changes
  const handleInputChanges = (e) => {
    setCustomerId(e.target.value);
  };

  // Handle GET request
  const handleGetRequest = async () => {
    try {
      const queryParams = { id: customerId, filter: "active" }; // Example query params
      const response = await axios.get(`${API_BASE_URL}/get-endpoint`, {
        params: queryParams,
      });
      setGetResponse(response.data);
    } catch (error) {
      console.error("Error in GET request:", error);
    }
  };

  // Handle POST request
  const handlePostRequest = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_BASE_URL}/post-endpoint`, postData);
      setPostResponse(response.data);
    } catch (error) {
      console.error("Error in POST request:", error);
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>AWS API Gateway Integration</h1>

      {/* GET Request Section */}
      <div>
        <h2>GET Request</h2>
        {/* Input Field */}
        <div style={{ marginBottom: "20px" }}>
          <label>
            Enter Customer Id:
            <input
              type="text"
              value={customerId}
              onChange={handleInputChanges}
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </label>
        </div>

        <button onClick={handleGetRequest}>Fetch Data</button>
        {getResponse && (
          <div>
            <h3>GET All Response:</h3>
            <pre>{JSON.stringify(getResponse, null, 2)}</pre>
          </div>
        )}
      </div>

      <hr />

      {/* POST Request Section */}
      <div>
        <h2>POST Request</h2>
        <form onSubmit={handlePostRequest}>
          <div>
            <label>
              Name:{" "}
              <input
                type="text"
                name="name"
                value={postData.name}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Email:{" "}
              <input
                type="email"
                name="email"
                value={postData.email}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <div>
            <label>
              Age:{" "}
              <input
                type="number"
                name="age"
                value={postData.age}
                onChange={handleInputChange}
              />
            </label>
          </div>
          <button type="submit">Submit Data</button>
        </form>
        {postResponse && (
          <div>
            <h3>POST Response:</h3>
            <pre>{JSON.stringify(postResponse, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
