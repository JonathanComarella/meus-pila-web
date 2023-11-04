import React from 'react';
import {ReactComponent as MainImage} from 'core/assets/images/main-image.svg';
import ButtonIcon from 'core/components/ButtonIcon';
import {Link} from 'react-router-dom';
import './styles.scss';

const Home = () =>(
  <div className="home-container">
    <div className="home-content card-base border-radius-20">
      
      <div className="home-text">
        <h1 className="text-title">
          Seu dinheiro organizado de forma simples e prática <br /> 
        </h1>
     
        <p className="text-subtitle">
          Ajudaremos você a ter o controle <br /> da sua vida financeira.
        </p>
        <Link to="/products" className="startSearchBtn">
          <ButtonIcon text="CADASTRAR" />
        </Link>
        
      </div>

      <div className="col-6">
        <MainImage className="main-image"/>
      </div>
    </div>
  </div>
);

export default Home;