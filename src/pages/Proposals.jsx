
import React, { useState } from 'react';
import { createProposal } from '../jackalApi';

function Proposals() {
  const [proposalData, setProposalData] = useState({
    title: '',
    description: '',
    // Add other proposal fields as needed
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the createProposal function to store the proposal data
      const createdProposal = await createProposal(proposalData);

      // Handle the successful creation of the proposal
      console.log('New proposal created:', createdProposal);

      // Reset the form fields
      setProposalData({
        title: '',
        description: '',
        // Reset other proposal fields as needed
      });
    } catch (error) {
      // Handle any errors that occurred during proposal creation
      console.error('Error creating proposal:', error);
    }
  };

  return (
    <div>
      <h1>Submit Proposal</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={proposalData.title}
            onChange={(e) => setProposalData({ ...proposalData, title: e.target.value })}
          />
        </label>
        <label>
          Description:
          <textarea
            value={proposalData.description}
            onChange={(e) => setProposalData({ ...proposalData, description: e.target.value })}
          ></textarea>
        </label>
        {/* Add other proposal form fields */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Proposals;
