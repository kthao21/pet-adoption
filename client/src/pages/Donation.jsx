import React, { useState } from 'react';
import { useMutation } from '@apollo/client'; 
import { PROCESS_DONATION } from '../utils/mutations'; // Replace with actual mutation

const Donation = () => {
  const [donationAmount, setDonationAmount] = useState('');
  const [shelterId, setShelterId] = useState('');
  const [shelters, setShelters] = useState([
    { id: '1', name: 'Berkeley Humane' },
    { id: '2', name: 'Central California SPCA' },
    { id: '3', name: 'Friends of the Alameda Aniaml Shelter' },
    { id: '4', name: 'Front Street Animal Shelter' },
    { id: '5', name: 'Happy Tails Pet Sanctuary' },
    { id: '6', name: 'Humane Society Silicon Valley' },
    { id: '7', name: 'Humane Soceity of Truckee-Tahoe South' },
    { id: '8', name: 'Placer County SPCA' },
    { id: '9', name: 'Sacramento SPCA' },
    { id: '10', name: 'San Francisco SPCA Adoption Center' },
   ]);

  const [processDonation, { error }] = useMutation(PROCESS_DONATION); //  replace with actual mutation

  const handleInputChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleShelterChange = (event) => {
    setShelterId(event.target.value);
  }; 

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Process the donation here, e.g., call mutation or another function
 await processDonation({ variables: { amount: donationAmount, shelterId } });
    console.log('Donation submitted:', donationAmount);
  };

  return (
    <div className="container my-1">
      <h2>Make a Donation</h2>
      <p>
   Help us by making a donation to support our shelters. Your donation will go directly to the shelter of your choice.
 </p>
      <form onSubmit={handleSubmit}>
        <div className="flex-row space-between my-2">
          <label htmlFor="donation-amount">Donation Amount ($):</label>
          <input
            placeholder="Amount in USD"
            name="donation-amount"
            type="number"
            id="donation-amount"
            value={donationAmount}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex-row space-between my-2">
         <label htmlFor="shelter">Select a Shelter:</label>
         <select id="shelter" value={shelterId} onChange={handleShelterChange}>
           {shelters.map((shelter) => (
             <option key={shelter.id} value={shelter.id}>
               {shelter.name}
             </option>
           ))}
         </select>
       </div>
        {/* error */}
        {error && <p className="error-text">Error processing donation</p>}
        <div className="flex-row flex-end">
          <button type="submit">Donate</button>
        </div>
      </form>
 
 <h2> Berkeley Humane </h2>
 <p>
  Location - 2700 Ninth St, Berkeley, CA 94710 <br />
  Phone Number - 510.845.7735
 </p>
 <h2> Central California SPCA </h2>
 <p>
  Location - 103 S Hughes Ave, Fresno, CA 93706 <br />
  Phone Number - 559.233.7722
 </p>
 <h2> Friends of the Alameda Aniaml Shelter </h2>
 <p>
  Location - 1590 Frontmann Way, Alameda, CA 94501 <br />
  Phone Number - 510.337.8565
 </p>
 <h2> Front Street Animal Shelter </h2>
 <p>
  Location - 2127 Front St, Sacramento, CA 95818 <br />
  Phone Number - 916.808.7387
 </p>
 <h2> Happy Tails Pet Sanctuary </h2>
 <p>
  Location - 6001 Folsom Blvd, Sacrament, CA 95819 <br />
  Phone Number - 916.556.1155
 </p>
 <h2> Humane Society Silicon Valley </h2>
 <p>
  Location - 901 Ames Ave, Milpitas, CA 95035<br />
  Phone Number - 408.262.2133
 </p>
 <h2> Humane Soceity of Truckee-Tahoe South </h2>
 <p>
  Location - 3438 Lake Tahoe Blvd, South Lake Tahoe, CA 96150 <br />
  Phone Number - 530.542.2857
 </p>
 <h2> Placer County SPCA </h2>
 <p>
  Location - 200 Tahoe Ave, Roseville, CA 95678 <br />
  Phone Number - 916.782.7722
 </p>
 <h2> Sacramento SPCA </h2>
 <p>
  Location - 6201 Florin Perkins Rd, Sacramento, CA 95828<br />
  Phone Number - 916.383.7387
 </p>
 <h2> San Francisco SPCA Adoption Center </h2>
 <p>
  Location - 250 Florida St, San Francisco, CA 94103 <br />
  Phone Number - 415.522.3500
 </p>
    </div>
  );
};


export default Donation;
