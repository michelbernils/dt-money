import React from 'react'
import Modal from 'react-modal'
import closeImg from '../../assets/close.svg'
import {Container} from './styles'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;

}

export const NewTransactionModal = ( {isOpen, onRequestClose}: NewTransactionModalProps) => {
    return (
        
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName='react-modal-overlay'
    className='react-modal-content'
    >  

    <button type='button' onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="close icon" />
    </button>

    <Container>
        <h2>Nova Transação</h2>
            <input type="text" placeholder="Nome" name="Name"/>
            <input type="number" placeholder="Preço" name="Price"/>
            <button className="react-modal-entry">
                Entrada
            </button>
            <button className="react-modal-leave">
                Saida
            </button>
            <input type="text" placeholder="Categoria" name="Category"/>
            <button type="submit">Cadastrar</button>
    </Container>
    </Modal>

    )
}
