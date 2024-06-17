// Homepage.js
import React from 'react';

const Homepage = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h2>Welcome to Our Product Management App</h2>
              <p>This is a simple application for managing products.</p>
              <p>Click <strong>Products</strong> in the navigation to view all products or create a new one.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
