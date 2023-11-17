import uberi from './assets/uberizacao.jpg';
import hardware from './assets/hardware.jpg';
import cisco from './assets/cisco.png';
import nightflix from './assets/nightflix.png';
import feira from './assets/feiraciencia.JPG'
import teodolito from './assets/teodolito.jpg';
import sabao from './assets/sabao.jpg';
import polusom from './assets/polusonora.jpg';
import estacoes from './assets/estacoes.jpg';
import videoart from './assets/videoart.png';
import ucrania from './assets/ucran.jpg'
import profile from './assets/profileimg2.png';
import sdance from './assets/streetdance.png';
import grafit from './assets/grafite.png';
import finance from './assets/finance.png';
import area from './assets/area.jpg';
import Typed from 'typed.js';
import React from 'react';
import './App.css';

function MyComponent() {

}

function App() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Estudante', 'Desenvolvedor Java', 'Dev Back-End'],
      typeSpeed:130,
      backSpeed:200,
      startDelay:300,
      loop: false
    })
  });

  return (
    <div className="App">
      <header className="App-header">
        <a class="logo">Portfolio</a>

        <nav class="navbar">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#ch">Humanas</a>
          <a href="#cn">Natureza</a>
          <a href="#math">Math</a>
          <a href="#ling">Linguagens</a>
          <a href="#ti">TI</a>
        </nav>
      </header>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Olá, me chamo</h3>
          <h1>Bruno Leonardo</h1>
          <h3>e sou um  <span ref={el} /></h3>
          <p>Sou um desenvolvedor de programação que está sempre em busca de conhecimento.</p>
          <div className="home-sci">
            <a href="https://github.com/brunols7" target="_blank"><i class='bx bxl-github'></i></a>
            <a href="https://www.linkedin.com/in/brunols7/" target="_blank"><i class='bx bxl-linkedin-square' ></i></a>

          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div class="about-img">
          <img src={profile}/>
        </div>
        <div className="about-text">
          <h2>About <span>Me</span></h2>
          <h4>Back-End Developer!</h4>
          <p>I'm a self-taught programming developer, continuously seeking to learn. With my proactive nature, I'm always looking for innovative solutions and tackling challenges head-on. My communication skills allow me to collaborate effectively in a team, turning ideas into functional code.</p>
          <ul>
            <h3>Hard Skills:</h3>
            <li>Java</li>
            <li>Spring</li>
            <li>SQL</li>
            <li>Python</li>
          </ul>
        </div>
      </section>
      <section className="about" id="ch">
        <div className="general-text">
          <h2>Ciências Humanas</h2>
          <h4>Simulação ONU - 4ºBI 2023</h4>
          <p>A Simulação da ONU foi uma atividade onde um debate onde havia um problema central e diversas delegações debateriam em busca de soluções.<br/>
          <br/>
          Participar do debate sobre refugiados enriqueceu meu conhecimento e me fez refletir sobre a importância da solidariedade e compreensão em um mundo globalizado.</p>
          <h4>Uberização do Trabalho</h4>
          <p>Explorar a "Uberização do Trabalho" foi muito interessante. Explorar a "Uberização do Trabalho" revelou uma dualidade intrigante entre a flexibilidade aclamada e a insegurança laboral. As entrevistas com profissionais refletiram não apenas uma transformação nas dinâmicas de trabalho, mas também levantaram questões éticas e sociais, provocando uma reconsideração urgente dos modelos regulatórios em um cenário laboral em constante evolução.</p>
          <h4>Movimentos da Terra e Estações do Ano</h4>
          <p>O movimento de translação está associado à existência das estações do ano e a dinâmicas climáticas. Essa atividade por mais que foi simples, foi muito interessante porque é um tema que está relacionado totalmente com a nossa vida e o dia-a-dia, clima, estações, etc.</p>
        </div>
        <div class="general-img">
          <img src={ucrania}/>
          <img src={uberi}/>
          <img src={estacoes}/>
        </div>
      </section>
      <section className="about" id="cn">
        <div className="general-text">
         <h2>Ciências da Natureza</h2>
         <h4>Poluição Sonora</h4>
         <p>Foi uma atividade legal, pois vimos sobre como a poluição sonora afeta bastante. Utilizamos um aplicativo para medir os decibéis e testamos em diferentes lugares para ver como o som ambiente pode afetar nossa audição em longo prazo.</p>
         <h4>Sabão de Óleo de Cozinha</h4>
         <p>Fomos para o laboratório fazer esse experimento de criar um sabão com óleo de cozinha usado. Foi muito interassante, pois eu não sabia que dava para fazer isso e realmente foi útil, nós utilizamos o sabão para limpar os nossos tênis brancos.</p>
         <h4>Feira de Ciências</h4>
         <p>Essa atividade foi realizada na minha antiga escola mas foi uma das melhores experiências que eu tive. Meu grupo foi responsável por falar sobre o Sistema Reprodutor, foi muito legal estudar, fazer maquetes e explicar tudo isso para pessoas de diferentes idades e pensamentos.</p>
        </div>
        <div class="general-img">
          <img src={polusom}/>
          <img src={sabao}/>
          <img src={feira}/>
        </div>
      </section>
      <section className="about" id="math">
        <div className="general-text">
         <h2>Matemática</h2>
         <h4>Teodolito</h4>
         <p>Com certeza foi uma das melhores experiências que eu tive, além da parte de fazer o teodolito, fazer os calculos, todo o processo foi incrivel, jamais irei esquecer as boas risadas e discussões nesse dia.</p>
         <h4>Educação Financeira</h4>
         <p>Aprender educação financeira na aula foi incrível porque me proporcionou insights valiosos sobre como o dinheiro funciona, desmistificando conceitos e oferecendo uma compreensão clara das práticas financeiras. Agora, consigo entender melhor como fazer meu dinheiro trabalhar a meu favor, tornando todo o processo financeiro mais transparente e acessível.</p>
         <h4>Área</h4>
         <p>
Foi incrível aprender geometria na aula de matemática, pois reacendeu minha paixão por formas e medidas, relembrando conceitos fundamentais que são essenciais no nosso dia a dia. Aprendizado que, sem dúvida, faz toda a diferença!</p>
        </div>
        <div class="general-img">
          <img src={teodolito}/>
          <img src={finance}/>
          <img src={area}/>
        </div>
      </section>
      <section className="about" id="ling">
        <div className="general-text">
          <h2>Linguagens</h2>
          <h4>Vídeo Arte</h4>
          <p>A atividade <span>"Vídeo Arte"</span> foi uma das melhores que já fiz e participei, foi uma experiência muito boa para eu me desenvolver com minha critividade com o tema "NO SENSE".</p>
          <h4>Arte de Rua</h4>
          <p>A atividade <span>"Arte de Rua"</span> foi muito boa, realizamos as artes de rua, como, grafite, piche e também lambe-lambe. </p>
          <h4>Street Dance</h4>
          <p>A atividade <span>"Street Dance"</span> foi uma experiência única, todos os processos dessa atividade foram incríveis, os ensaios e a apresentação. Muito diversão e desenvolvimento em grupo!</p>
        </div>
        <div class="general-img">
          <img src={videoart}/>
          <img src={sdance}/>
          <img src={grafit}/>
        </div>
      </section>
      <section className="about" id="ti">
      <div className="general-text">
        <h2>TI</h2>
        <h4>Roteamento</h4>
        <p>Essa atividade foi muito difícil porém foi muito legal a experiência. Tivemos que medir toda a área da P1 e da biblioteca, planejar um plano de internet, roteadores e todo plano de cabeamento para ter internet em toda região.</p>
        <h4>Montagem e Conserto de Computadores</h4>
        <p>Nessa atividade nós aprendemos a montar e desmontar computadores, realizar troca de peças, identificar erros e como consertar, limpeza e etc. Na minha opinião foi a melhor atividade que já tive, pois eu aprendi muita coisa principalmente na prática e agora não preciso mais levar meu computador no técnico!</p>
        <h4>Aplicação com Banco de Dados</h4>
        <p>Nessa atividade, fiz um sistema de streaming baseado na Netflix. Nele você podia consultar o catálogo de filmes e séries, podendo filtrar entre as séries e também podia adicionar ou remover a mídia do catálogo. Utilizei Python para fazer tudo e o SQLite como banco de dados.</p>
      </div>
      <div class="general-img">
          <img src={cisco}/>
          <img src={hardware}/>
          <img src={nightflix}/>
        </div>
      </section>
    </div>
  );
}

export default App;
