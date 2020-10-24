import React from 'react';
import { Container } from 'react-bootstrap';

import Menu from '../../components/menu';
import Rodape from '../../components/rodape';


const SemPermissao = () => {
     
    return(
    <div>
        <Menu />
        <Container>
                <h1>Você não tem permissão de acesso nessa página</h1>
        </Container>
        <Rodape />
    </div>
    )
}

export default SemPermissao;