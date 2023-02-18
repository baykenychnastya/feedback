import React, {useState} from 'react'
import { CreateFeedbackDto } from './dto/create-feedback.dto';

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function sendFeedback() {
    console.log(`${name}, ${email}, ${message}`)
    addPost({name, email, message});
  }

  async function addPost(body: CreateFeedbackDto) {
    await fetch('http://localhost:5000/feedbacks', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
    })
   // .then((response) => response.json())
    .then((data) => {
      let data2 = data.json()
      setName('');
      setEmail('');
      setMessage('');      
    })
    .catch((err) => {
      console.log(err.message);
    });
  };

  return (
    <div className="App">

      <input 
        type="text" 
        value={name}
        maxLength={100}
        onChange={event => setName(event.target.value)}
        placeholder="Your name*"
      />

      <input 
        type="text" 
        value={email}
        onChange={event => setEmail(event.target.value)}
        placeholder="Your email*"
      />

      <input
        type="text" 
        value={message}
        onChange={event => setMessage(event.target.value)}
        maxLength={500}
        placeholder="Your message*"
      />

      <button onClick={sendFeedback}>Send Message</button>
    </div>
  );
}

export default App;