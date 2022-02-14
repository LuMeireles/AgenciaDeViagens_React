import React from "react";
import { Link } from "react-router-dom";
import "../css/style.css";



export default function Menu() {
    return (

<nav class="navbar navbar-expand-lg navbar-light bg-light">
<Link class="navbar-brand" to="/"><img src="./img/logo.jpeg" alt="#" id="foto-logo"/></Link>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alterna navegação">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <Link class="nav-link" to="/">Home<span class="sr-only">(Página atual)</span></Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="/Promocoes">Promoções</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="/Destino">Destino</Link>
    </li>
    <li class="nav-item">
      <Link class="nav-link" to="/Contato">Contato</Link>
    </li>
  </ul>
</div>
</nav>
    );
}