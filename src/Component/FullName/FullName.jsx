import React, { useState } from 'react';

const FullName = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName) {
      setFullName(`Full Name: ${firstName} ${lastName}`);
    } else {
      setFullName(''); 
    }
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          placeholder="First Name"
          name = "First Name"
          id = "firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br/>
        <label htmlFor="lastName">Last:</label>
        <input
          type="text"
          placeholder="Last Name"
          name = "Last Name"
          id = "lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br/>
        <button type="submit">Submit</button>
      </form>
      {fullName && <div>{fullName}</div>}
    </div>
  );
};

export default FullName;