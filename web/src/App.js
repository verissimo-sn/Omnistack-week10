import React, {useEffect} from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


function App() {
  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords;
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    )
  }, []);


  return (
    <div id='app'>
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className='input-block'>
            <label htmlFor='github_username'>Github username</label>
            <input name='github_username' id='github_username' required></input>
          </div>
          
          <div className='input-block'>
            <label htmlFor='techs'>Tecnologias</label>
            <input name='techs' id='techs' required></input>
          </div>

          <div className="input-group">
            <div className='input-block'>
              <label htmlFor='latitude'>Latitude</label>
              <input name='latitude' id='latitude' required></input>
            </div>

            <div className='input-block'>
              <label htmlFor='longitude'>longitude</label>
              <input name='longitude' id='longitude' required></input>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className='dev-item'>
            <header>
              <img src="https://avatars0.githubusercontent.com/u/37086835?s=460&v=4" alt="Verissimo Santos"/>
              <div className='user-info'>
                <strong>Verissimo Santos</strong>
                <span>ReactSJ, React Native, Node js</span>
              </div>
            </header>
            <p>Texto sobre a biografia do usuario github</p>
            <a href="https://github.com/verissimo-sn">Acessar perfil no Github</a>
          </li>
          <li className='dev-item'>
            <header>
              <img src="https://avatars0.githubusercontent.com/u/37086835?s=460&v=4" alt="Verissimo Santos"/>
              <div className='user-info'>
                <strong>Verissimo Santos</strong>
                <span>ReactSJ, React Native, Node js</span>
              </div>
            </header>
            <p>Texto sobre a biografia do usuario github</p>
            <a href="https://github.com/verissimo-sn">Acessar perfil no Github</a>
          </li>
          <li className='dev-item'>
            <header>
              <img src="https://avatars0.githubusercontent.com/u/37086835?s=460&v=4" alt="Verissimo Santos"/>
              <div className='user-info'>
                <strong>Verissimo Santos</strong>
                <span>ReactSJ, React Native, Node js</span>
              </div>
            </header>
            <p>Texto sobre a biografia do usuario github</p>
            <a href="https://github.com/verissimo-sn">Acessar perfil no Github</a>
          </li>
          <li className='dev-item'>
            <header>
              <img src="https://avatars0.githubusercontent.com/u/37086835?s=460&v=4" alt="Verissimo Santos"/>
              <div className='user-info'>
                <strong>Verissimo Santos</strong>
                <span>ReactSJ, React Native, Node js</span>
              </div>
            </header>
            <p>Texto sobre a biografia do usuario github</p>
            <a href="https://github.com/verissimo-sn">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
