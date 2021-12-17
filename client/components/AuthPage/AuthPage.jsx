import React from 'react';
import AuthForm from './AuthForm/AuthForm';
import Container from './AuthPage.styled';

const AuthPage = () => (
  <Container>
    <div>
      <h1>
        Finding Food Fits for the Fit Minded
      </h1>
      <AuthForm />
    </div>
    <div>
      <img alt="pile of pumpkins" src="/images/kerstin-wrba-zeInZepl_Hw-unsplash.jpg" />
    </div>
  </Container>
);

export default AuthPage;
