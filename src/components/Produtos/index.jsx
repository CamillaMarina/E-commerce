import './Produtos.css';

import bolsa from '../../assets/bolsa.png';
import note from '../../assets/portaNotebook.png';
import sandalia1 from '../../assets/sandalia1.png';
import sandalia2 from '../../assets/sandalia2.png';
import tamanco from '../../assets/tamanco.png';
import tenis from '../../assets/tenis.png';


export default function Produtos() {
    return (
        <section className='produtos'>
            <div className="titulos">
                <h2>Produtos</h2>
                <p>
                    Conheça nossos produtos e escolha o que mais combina com você! Perfeitos para acompanhar você em todas as ocasiões, nossos produtos são feitos com materiais de alta qualidade e design moderno.
                </p>

                <div className="produtos_grid">

                    <div className="card">
                        <div className="card-image">
                            <img src={sandalia1} alt="Sandália marrom"/>
                            <span className='badge-venda'>Mais vendidos</span>
                        </div>

                        <div className="card-info">
                            <h3>Sandália Marrom</h3>
                            <p className='preco'>R$ 349,90</p>
                            <button className="btn">Comprar agora</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={sandalia2} alt="Sandália pink"/>
                        </div>

                        <div className="card-info">
                            <h3>Sandália Pink</h3>
                            <p className='preco'>R$ 260,90</p>
                            <button className="btn">Comprar agora</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={tamanco} alt="Tamanco"/>
                        </div>

                        <div className="card-info">
                            <h3>Tamanco</h3>
                            <p className='preco'>R$ 329,90</p>
                            <button className="btn">Comprar agora</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={tenis} alt="Tênis marrom"/>
                        </div>

                        <div className="card-info">
                            <h3>Tênis Marrom</h3>
                            <p className='preco'>R$ 199,90</p>
                            <button className="btn">Comprar agora</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={bolsa} alt="Bolsa vermelha"/>
                            <span className='badge-venda'>Mais vendidos</span>
                        </div>

                        <div className="card-info">
                            <h3>Bolsa Vermelha</h3>
                            <p className='preco'>R$ 400,00</p>
                            <button className="btn">Comprar agora</button>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-image">
                            <img src={note} alt="Capa para notebook"/>
                            <span className='badge-venda'>Mais vendidos</span>
                        </div>

                        <div className="card-info">
                            <h3>Capa para Notebook</h3>
                            <p className='preco'>R$ 170,90</p>
                            <button className="btn">Comprar agora</button>
                        </div>
                    </div>

                    
                </div>
            </div>


        </section>
    )
}