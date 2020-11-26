import React from 'react';
import './App.scss';
import logo from './assets/logo_meli.png';
import notebook1 from './assets/notebook1.webp';

function App() {
  return (
    <div className="App">
      <header>
        <nav>
          <img src={logo} alt="logo"/>
          <div className="search-inputs">
            <input type="text" placeholder="Buscar productos, marcas y más..."/>
            <button>Buscar</button>
          </div>
        </nav>
      </header>
      <body>
        <aside className="categories">
          <h2>Notebook</h2>
          <p>30.906 resultados</p>
          <h3>Categorias</h3>
          <ul className="list">
            <li>Categoria 1</li>
            <li>Categoria 2</li>
            <li>Categoria 3</li>
            <li>Categoria 4</li>
          </ul>
        </aside>
        <section className="products_container">
          <div className="grid_container">
            <img src={notebook1} alt="notebook1"/>
            <span className="price_tag">
              <span className="price_tag_symbol">$</span>
              <span className="price_tag_fraction">39.699</span>
              <span className="price_descount">18% OFF</span>
              <span className="text_green">Llega gratis manana</span>
              <span className="simbol">simbolo verde</span>
            </span>
            <div className="info_tag">
              <h2 className="info_tag_product">Notebook Intel Cloudbook 4gb 64gb Enova Windows</h2>
              <p className="info_tag_oficial_store">por Lalla</p>
           </div>
          </div>
          <div className="grid_container">
            <img src={notebook1} alt="notebook1"/>
            <span className="price_tag">
              <span className="price_tag_symbol">$</span>
              <span className="price_tag_fraction">39.699</span>
              <span className="price_descount">18% OFF</span>
              <span className="text_green">Llega gratis manana</span>
              <span className="simbol">simbolo verde</span>
            </span>
            <div className="info_tag">
              <h2 className="info_tag_product">Notebook Intel Cloudbook 4gb 64gb Enova Windows</h2>
              <p className="info_tag_oficial_store">por Lalla</p>
           </div>
          </div>
          <div className="grid_container">
            <img src={notebook1} alt="notebook1"/>
            <span className="price_tag">
              <span className="price_tag_symbol">$</span>
              <span className="price_tag_fraction">39.699</span>
              <span className="price_descount">18% OFF</span>
              <span className="text_green">Llega gratis manana</span>
              <span className="simbol">simbolo verde</span>
            </span>
            <div className="info_tag">
              <h2 className="info_tag_product">Notebook Intel Cloudbook 4gb 64gb Enova Windows</h2>
              <p className="info_tag_oficial_store">por Lalla</p>
           </div>
          </div>
          <div className="grid_container">
            <img src={notebook1} alt="notebook1"/>
            <span className="price_tag">
              <span className="price_tag_symbol">$</span>
              <span className="price_tag_fraction">39.699</span>
              <span className="price_descount">18% OFF</span>
              <span className="text_green">Llega gratis manana</span>
              <span className="simbol">simbolo verde</span>
            </span>
            <div className="info_tag">
              <h2 className="info_tag_product">Notebook Intel Cloudbook 4gb 64gb Enova Windows</h2>
              <p className="info_tag_oficial_store">por Lalla</p>
           </div>
          </div>
          <div className="grid_container">
            <img src={notebook1} alt="notebook1"/>
            <span className="price_tag">
              <span className="price_tag_symbol">$</span>
              <span className="price_tag_fraction">39.699</span>
              <span className="price_descount">18% OFF</span>
              <span className="text_green">Llega gratis manana</span>
              <span className="simbol">simbolo verde</span>
            </span>
            <div className="info_tag">
              <h2 className="info_tag_product">Notebook Intel Cloudbook 4gb 64gb Enova Windows</h2>
              <p className="info_tag_oficial_store">por Lalla</p>
           </div>
          </div>
          <div className="grid_container">
            <img src={notebook1} alt="notebook1"/>
            <span className="price_tag">
              <span className="price_tag_symbol">$</span>
              <span className="price_tag_fraction">39.699</span>
              <span className="price_descount">18% OFF</span>
              <span className="text_green">Llega gratis manana</span>
              <span className="simbol">simbolo verde</span>
            </span>
            <div className="info_tag">
              <h2 className="info_tag_product">Notebook Intel Cloudbook 4gb 64gb Enova Windows</h2>
              <p className="info_tag_oficial_store">por Lalla</p>
           </div>
          </div>
          <div className="grid_container">
            <img src={notebook1} alt="notebook1"/>
            <span className="price_tag">
              <span className="price_tag_symbol">$</span>
              <span className="price_tag_fraction">39.699</span>
              <span className="price_descount">18% OFF</span>
              <span className="text_green">Llega gratis manana</span>
              <span className="simbol">simbolo verde</span>
            </span>
            <div className="info_tag">
              <h2 className="info_tag_product">Notebook Intel Cloudbook 4gb 64gb Enova Windows</h2>
              <p className="info_tag_oficial_store">por Lalla</p>
           </div>
          </div>
        </section>
      </body>
    </div>
  );
}

export default App;
