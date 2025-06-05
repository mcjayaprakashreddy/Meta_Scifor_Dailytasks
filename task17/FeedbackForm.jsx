import React, { useState } from 'react'

const FeedbackForm = () => {
   const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedbackData = {
      fullname: fullname,
      email: email,
      rating: rating
    };

    fetch('https://jsonplaceholder.typicode.com/posts', { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(feedbackData)
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      alert('Feedback submitted successfully!');
      setFullname('');
      setEmail('');
      setRating('');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Something went wrong!');
    });
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Full Name" 
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          required
        /><br /><br />

        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        /><br /><br />

        <select 
          value={rating} 
          onChange={(e) => setRating(e.target.value)} 
          required
        >
          <option value="">--Select Rating--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select><br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm