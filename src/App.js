import React, { useState } from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [signUpMode, setSignUpMode] = useState(false);

  return (
    <div className={`container ${signUpMode ? 'sign-up-mode' : ''}`}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="#" className="sign-in-form">
            <h2 className="title">Connexion</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Nom d'utilisateur" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Mot de passe" />
            </div>
            <input type="submit" value="connexion" className="btn solid" />
            <p className="social-text">Ou connectez vous avec</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
          <form action="#" className="sign-up-form">
            <h2 className="title">Créer un compte</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="nom d'utilisateur" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Adresse mail" />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Mot de passe" />
            </div>
            <input type="submit" className="btn" value="créer un compte" />
            <p className="social-text">Ou connectez vous grace à vos reseaux sociaux</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-google"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>Vous venez d'arriver ?</h3>
            <p>
              Créer vous un compte en quelques clics, c'est facile et rapide
            </p>
            <button className="btn transparent" id="sign-up-btn" onClick={() => setSignUpMode(true)}>
              Créer un compte
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="log" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>Avez vous déjà un compte?</h3>
            <p>
              Connectez vous en renseignant votre nom d'utilisateur et votre mot de passe 
            </p>
            <button className="btn transparent" id="sign-in-btn" onClick={() => setSignUpMode(false)}>
              Connectez vous
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="register" />
        </div>
      </div>
    </div>
  );
}

export default App;
