import React, { useState } from 'react';
import './ConnectionPage.css';
import {useNavigate} from 'react-router-dom'
import FirstNavBar from '../../components/1st_Navbar/FirstNavBar';
import girl_icon from '../../Assests/Images/woman_reading.png';
import { AiOutlineEye, AiOutlineEyeInvisible, } from 'react-icons/ai';
import Footer from '../../components/Footer/Footer';

const ConnectionPage = () => {

  let navigate  = useNavigate();

  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [login, setisLogin] = useState(true);
  const [passwordIsVisible, setPasswordIsVisible] = useState(false);
  const [pseudoError, setPseudoError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const submitConnexion = () => {
    if (!pseudo || !password || password.length<6)  {
      if (!pseudo) {
        setPseudoError('Pseudo Obligatoire');
      } else if (pseudo) {
        setPseudoError('')
      }

      if(!password) {
        setPasswordError('Mot de Passe Obligatoire');
      }else if (password.length < 6){
        setPasswordError('Le mot de passe doit comporter au moins 6 caractères');
      }else if(password) {
        setPasswordError('')
      }
    } 
    else if (pseudo === 'Oretta' && password === 'Oretta2024'){ 

      resetError();
      navigate('/discussion')
      alert('Connexion réussie');

    }else if (pseudo !== "Oretta" || password !== "Oretta2024"){

      if(pseudo !== "Oretta") {
        setPseudoError('Pseudo Incorrect')
      }else{
        setPseudoError('')
      }
      if(password !== "Oretta2024") {
        setPasswordError('Mot de Passe Incorrect');
      }else {
        setPasswordError('')
      }
    }

  };

  const submitInscription = () => {

    if (!pseudo || !password || password.length<6)  {

      if (!pseudo) {
        setPseudoError('Pseudo Obligatoire');
      } else if (pseudo) {
        setPseudoError('')
      }

      if(!password) {
        setPasswordError('Mot de Passe Obligatoire');
      }else if (password.length < 6){
        setPasswordError('Le mot de passe doit comporter au moins 6 caractères');
      }else if(password) {
        setPasswordError('')
      }
    } 

    else if (pseudo === 'Oretta1' && password === 'Oretta2024'){ 

      resetError();
      navigate('/discussion')
      alert('Connexion réussie');

    }else if (pseudo !== "Oretta1" || password !== "Oretta2024"){

      if(pseudo !== "Oretta1") {
        setPseudoError('Pseudo Incorrect')
      }else{
        setPseudoError('')
      }
      if(password !== "Oretta2024") {
        setPasswordError('Mot de Passe Incorrect');
      }else {
        setPasswordError('')
      }
    }
  };
  

  const resetError = () => {
    setPseudoError('');
    setPasswordError('');
  };

  const resetData = () => {
    setPseudo('');
    setPassword('');
  };

  // const resetPseudoError = () => {
  //   setPseudoError('');
  // };
  // const resetPasswordError = () => {
  //   setPasswordError('');
  // };

  return (
    <div className='connection-body'>
      <FirstNavBar />
      <main className='connection-main'>
        {login ? <p>Connexion</p> : <p>Inscription</p>}

        <div className="main-section">
          <div className="section1">
            <img src={girl_icon} alt="" />
          </div>
          <form action="" className="section2">
            {login ? (
              <>
                <div className="input-container">
                  <label htmlFor="name">Pseudo</label>
                  <input
                    style={{ borderColor: pseudoError ? 'red' : '#9F4CA7' }}
                    type="text"
                    onChange={(e) => setPseudo(e.target.value)}
                    // onClick={resetPseudoError}
                  />
                  {pseudoError && (
                    <p
                      style={{
                        color: 'red',
                        marginTop: '-16px',
                        fontSize: '0.8rem',
                        textAlign: 'left',
                      }}
                    >
                      {pseudoError}
                    </p>
                  )}
                </div>
                <div className="input-container password">
                  <label htmlFor="">Mot de passe</label>
                  <input
                    style={{ borderColor: passwordError ? 'red' : '#9f4ca7' }}
                    type={passwordIsVisible ? 'text' : 'password'}
                    onChange={(e) => setPassword(e.target.value)}
                    // onClick={resetPasswordError}
                  />
                  {passwordIsVisible && (
                    <div className="eyes_style2">
                      <AiOutlineEye
                        size={24}
                        onClick={() => setPasswordIsVisible(!passwordIsVisible)}
                      />
                    </div>
                  )}
                  {!passwordIsVisible && (
                    <div className="eyes_style2">
                      <AiOutlineEyeInvisible
                        size={24}
                        onClick={() => setPasswordIsVisible(!passwordIsVisible)}
                      />
                    </div>
                  )}
                  {passwordError && (
                    <p
                      style={{
                        color: 'red',
                        marginTop: '-16px',
                        fontSize: '0.8rem',
                        textAlign: 'left',
                      }}
                    >
                      {passwordError}
                    </p>
                  )}
                </div>

                <div className="submit-container">
                  <button
                    className="submit-button"
                    onClick={(e) => {
                      e.preventDefault();
                      submitConnexion();
                
                    }}
                  >
                    Connexion
                  </button>
                  <div className='connection-question'>
                    Vous n'avez pas un compte?{' '}
                    <button
                      className="span-button"
                      onClick={() => {
                        setisLogin(false);
                        resetData();
                        resetError();
                      }}
                    >
                      Inscrivez-vous
                    </button>
                  </div>
                </div>
              </>
            ) : null}

            {!login ? (
              <>
                 <div className="input-container">
                  <label htmlFor="name">Pseudo</label>
                  <input
                    style={{ borderColor: pseudoError ? 'red' : '#9F4CA7' }}
                    type="text"
                    onChange={(e) => setPseudo(e.target.value)}
                    // onClick={resetPseudoError}
                  />
                  {pseudoError && (
                    <p
                      style={{
                        color: 'red',
                        marginTop: '-16px',
                        fontSize: '0.8rem',
                        textAlign: 'left',
                      }}
                    >
                      {pseudoError}
                    </p>
                  )}
                </div>
                <div className="input-container password">
                  <label htmlFor="">Mot de passe</label>
                  <input
                    style={{ borderColor: passwordError ? 'red' : '#9f4ca7' }}
                    type={passwordIsVisible ? 'text' : 'password'}
                    onChange={(e) => setPassword(e.target.value)}
                    // onClick={resetPasswordError}
                  />
                  {passwordIsVisible && (
                    <div className="eyes_style2">
                      <AiOutlineEye
                        size={24}
                        onClick={() => setPasswordIsVisible(!passwordIsVisible)}
                      />
                    </div>
                  )}
                  {!passwordIsVisible && (
                    <div className="eyes_style2">
                      <AiOutlineEyeInvisible
                        size={24}
                        onClick={() => setPasswordIsVisible(!passwordIsVisible)}
                      />
                    </div>
                  )}
                  {passwordError && (
                    <p
                      style={{
                        color: 'red',
                        marginTop: '-16px',
                        fontSize: '0.8rem',
                        textAlign: 'left',
                      }}
                    >
                      {passwordError}
                    </p>
                  )}
                </div>

                <div className="submit-container">
                  <button
                    className="submit-button"
                    onClick={(e) => {
                      e.preventDefault();
                      submitInscription();
                    }}
                  >
                    S'Inscire
                  </button>
                  <div className='connection-question'>
                    Vous avez déjà un compte?{' '}
                    <button
                      className="span-button"
                      onClick={() => {
                        setisLogin(true);
                        resetData();
                        resetError();
                      }}
                    >
                      Connectez-vous
                    </button>
                  </div>
                </div>
              </>
            ) : null}
          </form>
        </div>
      </main>

      <Footer/>
    </div>
  );
};

export default ConnectionPage;
