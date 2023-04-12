import React from 'react';
import {ContainerMensage, MensageError} from './styles';

const Mensage = () => {
  return (
    <ContainerMensage>
      <MensageError>
        Erro ao acessar o banco de dados ! O sistema utiliza a API REST
        <a href="https://www.abibliadigital.com.br"> www.abibliadigital.com.br </a>e ela tem uma limitação de 20
        requisições por hora, assim, o sistema fica temporariamente offline.
      </MensageError>
      <MensageError>
        Aproveite esse tempo para orar. Deus não só quer falar com você através da sua palavra mas também lhe escultar.
      </MensageError>
    </ContainerMensage>
  );
};

export default Mensage;
