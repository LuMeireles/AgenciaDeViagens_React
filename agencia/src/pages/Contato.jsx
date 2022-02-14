import React from "react";
import "../css/style.css";


export default function Contato() {
    return (
        <main>
            <h2>Fale conosco</h2>
        <tr/>
        <form/>
            <label for="pname">Primeiro nome:</label> <br/>
            <input type="text" id="pname" name="pname"/><br/>
            <label for="sname">Sobrenome:</label><br/>
            <input type="text" id="sname" name="sname"/><br/>
            <label for="num">Idade:</label><br/>
            <input type="number" id="num" name="num"/><br/>
            <label for="mail">E-mail:</label><br/>
            <input type="email" id="mail" name="mail"/><br/>
            <label for="msg">Mensagem:</label><br/>
            <textarea id="msg" name="msg"></textarea>
            <imput type="submit" value="Enviar"/>         
        <form/><br/><br/>
        <table/>
            <tr>
            <td width="30%" align="center">
            <img src="./img/o-email.png" width="30px"/>
            <p>contato@ecotour.com</p>
            </td>
            <td width="30%" align="center">
            <img src="./img/telefone.png" width="40px"/>
            <p>(21)2122-2324</p>
            </td>
            <td width="30%" align="center">
            <img src="./img/construcao.png" width="30px"/>
            <p>Av.Rio Branco,45 | Centro - RJ CEP:20090-000</p>
            </td>
        </tr>
        <table/>
        </main>
    );
}