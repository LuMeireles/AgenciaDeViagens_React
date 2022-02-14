import React from "react";
import "../css/style.css";

export default function Home() {
    return (
    <main>
    <h1>Nosso turismo é radical</h1>
        <hr/>
    <div className="card mb-3">
        <img src="./img/jalapao.jpg" class="card-img-top" id="card-img" alt="Jalapão"/>
        <div className="card-body">
            <h2 className="card-title">Viagem inesquecível é com a gente!</h2>
            <p className="card-text">
                Aqui, na Eco Tour você visita os lugares mais lindos do Brasil e faz um ecoturismo bem radical.
                Contamos com serviços de hospedagem, guia turístico e instrutores treinados para proporcionar o melhor ecoturismo.
            </p>
            <a href="https://localhost:44312/Home/Destino" class="btn btn-primary">Ir para Destinos</a>
        </div>
    </div>
    <h3>Destinos para se aventurar pelo Brasil</h3>
    <br/>
    <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
            <div className="card">
                <img src="./img/ecobonito.jpg"  class="card-img-top" id="img-card" alt="Bonito MS"/>
                <div className="card-body">
                    <h5 className="card-title">Bonito-MS</h5>
                    <p className="card-text">Considerado um dos destinos mais bonitos de ecoturismo no Brasil.É um destino de Snorkeling, Rapel e mergulho em grutas.</p>
                    <a href="https://localhost:44312/Passagems" class="btn btn-primary">Compre</a>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src="./img/passeiobuggy.jpg"  class="card-img-top" id="img-card" alt="Lençóis maranhense"/>
                <div className="card-body">
                    <h5 className="card-title">Lençóis Maranhenses-MA</h5>
                    <p className="card-text">A região é famosa pelas altas dunas de areia branca, que são uma ótima opção para quem deseja passear de Buggy.</p>
                    <a href="https://localhost:44312/Passagems" class="btn btn-primary">Compre</a>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src="./img/mergulho.jpg" class="card-img-top" id="img-card" alt="Bom Jardim, Nobres - MT" />
                <div className="card-body">
                    <h5 className="card-title">Nobres-MT</h5>
                    <p className="card-text">Nobres é um ótimo destino para mergulho e flutuação e também é o ambiente ideal para quem busca paisagens encantadoras.</p>
                    <a href="https://localhost:44312/Passagems" class="btn btn-primary">Compre</a>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src="./img/jalapao-corrida.jpg" class="card-img-top" id="img-card" alt="Jalapão-TO"/>
                <div className="card-body">
                    <h5 className="card-title">Jalapão-TO</h5>
                    <p className="card-text">Você encontrará, além de belas paisagens, muitas trilhas, estradas de terra, rios, cachoeiras, e espaços naturais intactos.</p>
                    <a href="https://localhost:44312/Passagems" class="btn btn-primary">Compre</a>
                </div>
            </div>
        </div>
    </div>
    <br/>
    </main>
    
    );
}
