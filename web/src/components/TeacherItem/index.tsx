import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem(){
    return(
    <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/43651116?s=460&u=31b371c40e5ad52f69eef2c7ef0b249765944fb9&v=4" alt="eu"/>
            <div>
            <strong>Uchoa</strong>
            <span> Química</span>
            </div>
        </header>

        <p>
        Entusiasta das melhores tecnologias de química avançada. 
        <br/> <br/>
        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.

        </p>

            <footer>
        <p>
            Preço/hora
            <strong> R$ 80,00</strong>
            </p>
            <button type="button">
            <img src={whatsappIcon} alt="whatsapp"/>
             Entrar em contato
            </button>
            </footer>
    </article>
    );
}

export default TeacherItem;