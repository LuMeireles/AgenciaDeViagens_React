import React from "react";
import "../css/style.css";


export default function Promocoes() {
    return (
        <main>
            <h2>Pacotes e Promoções</h2>
        <hr/>
        <p>Aqui, na Eco Tour você visita os lugares mais lindos do Brasil e faz ecoturismo.
        Contamos com serviços de hospedagem, guia turístico e instrutores treinados esportes Ecoturismo.</p><br/>
        <h3>Aventura é com a gente!</h3>
    <br/>
    <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
            <div className="card">
                <img src="./img/ecobonito.jpg"  class="card-img-top" id="img-card" alt="Bonito MS"/>
                <div className="card-body">
                    <h5 className="card-title">Pacote para Bonito-MS - 7 dias</h5>
                    <p className="card-text">Considerado um dos destinos mais bonitos de ecoturismo no Brasil.É um destino de Snorkeling, Rapel e 
                    mergulho em grutas.</p>
                    <strike>R$5.000,00</strike><br/>
                    <p class="lista">R$4.500,00</p>
                    <a href="https://localhost:44312/Passagems" class="btn btn-primary">Compre</a>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src="./img/passeiobuggy.jpg"  class="card-img-top" id="img-card" alt="Lençóis maranhense"/>
                <div className="card-body">
                    <h5 className="card-title">Pacote para os Lençóis Maranhenses-MA - 4 dias</h5>
                    <p className="card-text">A região é famosa pelas altas dunas de areia branca, que são uma ótima opção para quem deseja passear 
                    de Buggy.</p>
                    <strike>R$3.000,00</strike><br/>
                    <p class="lista">R$2.500,00</p>
                    <a href="https://localhost:44312/Passagems" class="btn btn-primary">Compre</a>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src="./img/mergulho.jpg" class="card-img-top" id="img-card" alt="Bom Jardim, Nobres - MT" />
                <div className="card-body">
                    <h5 className="card-title">Pacote para Nobres-MT - 4 dias</h5>
                    <p className="card-text">Nobres é um ótimo destino para mergulho e flutuação e também é o ambiente ideal para quem busca 
                    paisagens encantadoras.</p>
                    <strike>R$3.000,00</strike><br/>
                    <p class="lista">R$2.500,00</p>
                    <a href="https://localhost:44312/Passagems" class="btn btn-primary">Compre</a>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card">
                <img src="./img/jalapao-corrida.jpg" class="card-img-top" id="img-card" alt="Jalapão TO"/>
                <div className="card-body">
                    <h5 className="card-title">Pacote para o Jalapão-TO - Com guia</h5>
                    <p className="card-text">Você encontrará, além de belas paisagens, muitas trilhas, estradas de terra, rios, cachoeiras, e 
                    espaços naturais intactos.O Parque Estadual do Jalapão é outro destino que parece ter sido criado especialmente para o ecoturismo, pois é lar 
                    das belezas naturais mais interessantes e espetaculares que nosso país tem a oferecer.</p>
                    <strike>R$3.000,00</strike><br/>
                    <p class="lista">R$2.900,00</p>
                    <a href="https://localhost:44312/Passagems" class="btn btn-primary">Compre</a>
                </div>
            </div>
        </div>
    </div>
    <br/>
</main>
    );
}