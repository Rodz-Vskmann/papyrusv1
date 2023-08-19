import React from 'react';
import './styles.css';

const UserPage = () => {
  return (
    <div className="user-page">
      <header className="header">
        <img className="profile-image" src="profile.jpg" alt="User Profile" />
        <h1 className="username">Nome do Usuário</h1>
        <p className="description">Desenvolvedor de Software | Estudante de Direito</p>
      </header>
      <section className="about">
        <h2>Sobre Mim</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
          pulvinar facilisis justo mollis, auctor consequat urna.</p>
      </section>
      <section className="skills">
        <h2>Habilidades</h2>
        <div className="skill">JavaScript <div className="progress"><div className="progress-bar js"></div></div></div>
        <div className="skill">React <div className="progress"><div className="progress-bar react"></div></div></div>
        {/* Adicione mais habilidades aqui */}
      </section>
      <section className="contact">
        <h2>Contato</h2>
        <p>Email: exemplo@email.com</p>
        <p>Telefone: (00) 00000-0000</p>
      </section>
    </div>
  );
};

export default UserPage;
