import React, {useState} from 'react'
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import  './App.css'
import PinkCircle from './components/PinkCircle';
import { useForm } from 'react-hook-form';

function App() {
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
      setValue('name', '');
      setValue('email', '');
      setValue('message', '');
      alert("Feedback was successfuly sent!"); 
    })
    .catch((err) => {
      console.log(err.message);
    });
  };

  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm();

  const onSubmit = (data: any) => {
    addPost(data);
  };

  console.log(watch("example")); 

  return (
    <div className="App">
      <div className="street-view"></div>
      <PinkCircle id="pink-circle-1"/>
      <div className="main">
        <h1 className="title">Reach out to us!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="input-name" 
            type="text" 
            {...register("name", { setValueAs: v => v.trim(), required:true, minLength: 1, maxLength: 100 })}
            maxLength={100}
            placeholder="Your name*"
          />
          {errors.name && (<p className='eror-messsage'>This field is required!</p>)}

          <input
            className="input-email"
            type="text" 
            {...register("email", { required:true, pattern: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/ })}
            placeholder="Your email*"
          />
          {errors.email && (<p className='eror-messsage'>Pleace, enter valid email!</p>)}

          <input
            className="input-message"
            type="text" 
            {...register("message", { setValueAs: v => v.trim(), required:true, minLength: 1, maxLength: 500 })}
            maxLength={500}
            placeholder="Your message*"
          />
          {errors.message && (<p className='eror-messsage'>This field is required!</p>)}

          <button type="submit" >Send Message</button>
        </form>
      </div>
      <div className="footer p-relative" >
      <PinkCircle id="pink-circle-2"/>
      </div>
    </div>
  );
}

export default App;