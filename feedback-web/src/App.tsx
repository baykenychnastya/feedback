import React, {useState} from 'react'
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import  './App.css'

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
      <div className="street-view"></div>

      <div className="p-relative">
        <div className="pink-circle"></div>
        <div id="pink-eye-left"></div>
        <div id="pink-eye-right"></div>
        <div id="pink-mouth"></div>
      </div>
      <div className="main">
        <h1 className="title">Reach out to us!</h1>
        <form onSubmit={sendFeedback}>
          <input className="input-name" 
            type="text" 
            value={name}
            maxLength={100}
            onChange={event => setName(event.target.value)}
            placeholder="Your name*"
          />
          <input className="input-email"
            type="text" 
            value={email}
            onChange={event => setEmail(event.target.value)}
            placeholder="Your email*"
          />
           
          <input className="input-message"
            type="text" 
            value={message}
            onChange={event => setMessage(event.target.value)}
            maxLength={500}
            placeholder="Your message*"
          />
          <button onClick={sendFeedback}>Send Message</button>
        </form>
      </div>
      <div className="footer">
        <p>Footer content goes here.</p>
      </div>
    </div>
  );
}

export default App;