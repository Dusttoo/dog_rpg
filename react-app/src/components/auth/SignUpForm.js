import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { uploadFile } from '../../store/file_upload';
import { signUp } from '../../store/session';
import { ImageUpload } from '../FileUpload';

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [kennelName, setKennelName] = useState('')
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  // const [images, setImages] = React.useState([]);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();


  const onSignUp = async (e) => {
    e.preventDefault();
    // const fileForm = {
    //   'user_id': 1,
    //   'file': images[0].data_url
    // }
    // console.log(fileForm)
    if (password === repeatPassword) {

      const data = await dispatch(signUp(username, email, password));
      // const image = await dispatch(uploadFile(fileForm))
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  const updateKennel = (e) => {
    setKennelName(e.target.value);
  };



  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form onSubmit={onSignUp}>
      <div>
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>User Name</label>
        <input
          type="text"
          name="username"
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div>
        <label>Kennel Name</label>
        <input
          type="text"
          name="kennel"
          onChange={updateKennel}
          value={kennelName}
        ></input>
      </div>
      {/* <ImageUpload images={images} setImages={setImages}/> */}
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div>
        <label>Repeat Password</label>
        <input
          type="password"
          name="repeat_password"
          onChange={updateRepeatPassword}
          value={repeatPassword}
          required={true}
        ></input>
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
