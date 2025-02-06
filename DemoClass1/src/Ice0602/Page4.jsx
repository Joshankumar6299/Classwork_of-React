import React from 'react';

const Page4 = ({ formData, prevStep }) => {
  const displaySummary = () => {
    return Object.entries(formData).map(([key, value]) => (
      <tr key={key}>
        <td>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
        <td>{Array.isArray(value) ? value.join(', ') : value}</td>
      </tr>
    ));
  };

  return (
    <div>
      <h2>Show All details </h2>
      <table>
        <thead>
          <tr><th>Field</th><th>Value</th></tr>
        </thead>
        <tbody>
          {displaySummary()}
        </tbody>
      </table>
      {/* <button type="button" onClick={prevStep}>Previous</button>
      <button type="submit">Submit</button> */}
    </div>
  );
};

export default Page4;
