import uberi from './assets/uberizacao.jpg';
import hardware from './assets/hardware.jpg';
import automa from './assets/automacao.jpg';
import automati from './assets/automat.jpg';
import cisco from './assets/cisco.png';
import nightflix from './assets/nightflix.png';
import feira from './assets/feiraciencia.JPG'
import teodolito from './assets/teodolito.jpg';
import sabao from './assets/sabao.jpg';
import polusom from './assets/polusonora.jpg';
import estacoes from './assets/estacoes.jpg';
import metav from './assets/meta.jpg';
import meta from './assets/meta1.png';
import ra from './assets/ra.jpg';
import ra1 from './assets/ra1.jpg';
import ia from './assets/ia.jpeg';
import ia1 from './assets/ia1.png';
import ia2 from './assets/ia2.jpeg';
import ra2 from './assets/ra2.jpg';
import ml from './assets/ml1.jpeg';
import ml1 from './assets/ml2.png';
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
      strings: ['Estudante', 'Desenvolvedor Java', 'Devesenvolvedor Back-End'],
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
          <a href="#tec">Tecnologias</a>
    
          <li className='drop'>
          <i href="" class='bx bx-menu'></i>
            <div class="drop-menu">
              <a href="#tec">Automação</a>
              <a href="#meta">MetaVerso</a>
              <a href="#rv">Realidade Aumentada</a>
              <a href="#ia">Inteligência Artificial</a>
              <a href="#ml">Machine Learning</a>
            </div>
          </li>
        </nav>
      </header>
      <section className="home" id="home">
        <div className="home-content">
          <h3>Olá, me chamo</h3>
          <h1>Bruno Leonardo</h1>
          <h3>e sou um  <span ref={el} /></h3>
          <p>Sou um desenvolvedor que está sempre em busca de conhecimento.</p>
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
          <h4>Back-End Developer</h4>
          <p>Sou um desenvolvedor de programação autodidata, buscando aprender continuamente. Com minha proatividade, estou sempre em busca de soluções inovadoras e enfrentando desafios de frente. Minhas habilidades de comunicação me permitem colaborar de forma eficaz em equipe, transformando ideias em códigos funcionais.</p>
          <ul>
            <h3>Hard Skills:</h3>
            <li>▸ Java</li>
            <li>▸ Spring</li>
            <li>▸ React</li>
            <li>▸ SQL</li>
            <li>▸ Python</li>
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
      <section className="about" id="tec">
        <div className="general-text">
          <h2>Automação</h2>
          <h4>O que é?</h4>
          <p>É o uso de sistemas de controle e de tecnologias da informação para reduzir a necessidade de trabalho humano para a produção de equipamentos e serviços.</p>
          <h4>Objetivo</h4>
          <p>O principal objetivo da automação é melhorar os resultados e garantir uma maior produtividade no geral.</p>
        </div>
        <div className='general-img'>
          <img src={automa}/>
          <img src={automati}/>
        </div>
      </section>
      <section className="about" id="meta">
        <div className="general-text">
          <h2>MetaVerso</h2>
          <h4>O que é?</h4>
          <p>É um universo virtual onde as pessoas podem interagir entre si por meio de avatares personalizados.</p>
          <h4>Objetivo</h4>
          <p>O objetivo do metaverso é possibilitar que o universo físico seja complementado pelo mundo virtual.</p>
          <h4>MetaVerso no Mundo Real</h4>
          <p>Irá ampliar a imersão no trabalho remoto, mudar a forma como interagimos e as pessoas vão poder ter qualquer aparência que elas queiram, trazendo inclusão para muitas pessoas.</p>
        </div>
        <div className='general-img'>
          <img src={meta}/>
          <img src={metav}/>
        </div>
      </section>
      <section className="about" id="rv">
        <div className="general-text">
          <h2>Realidade Aumentada</h2>
          <h4>O que é?</h4>
          <p>É uma tecnologia que permite sobrepor elementos virtuais à nossa visão da realidade.</p>
          <h4>Objetivo</h4>
          <p>O objetivo da Realidade Aumentada é ver objetos virtuais no mundo real e construir uma experiência em que o físico e o digital não tenham distinção.</p>
          <h4>Benefício Didático</h4>
          <p>A Realidade Aumentada fornece assistência para as aulas ao criar experiências de aprendizado imersivas, coletivas e compartilhadas.</p>
        </div>
        <div className='general-img'>
          <img src={ra}/>
          <img src={ra1}/>
          <img src={ra2}/>
        </div>
      </section>
      <section className="about" id="ia">
        <div className="general-text">
          <h2>Inteligência Artificial</h2>
          <h4>O que é?</h4>
          <p>A inteligência artificial é um campo da ciência preocupado com a criação de computadores e máquinas que podem raciocinar, aprender e atuar de maneira que normalmente exigiria inteligência humana ou que envolvia dados com escala maior que as pessoas podem analisar.</p>
          <h4>Benefícios</h4>
          <p>Permitem que computadores sejam integrados a diferentes partes do nosso dia a dia, automatizando a rotina e executando atividades com agilidade e segurança.</p>
          <h4>Medos</h4>
          <p>A preocupação de muitas pessoas a respeito da inteligência artificial reside no fenômeno chamado de 'singularidade'. Esse conceito se refere ao momento em que as IAs estarão tão desenvolvidas a ponto de superarem os próprios seres humanos. E também muitos tem medo de perderem seus empregos e serem substituídos por computadores e robôs.</p>
        </div>
        <div className='general-img'>
          <img src={ia}/>
          <img src={ia2}/>
          <img src={ia1}/>
        </div>
      </section>
      <section className="about" id="ml">
        <div className="general-text">
          <h2>Machine Learning</h2>
          <h4>O que é?</h4>
          <p>Machine Learning é uma disciplina da área da Inteligência Artificial que, por meio de algoritmos, dá aos computadores a capacidade de identificar padrões em dados massivos e fazer previsões (análise preditiva).</p>
          <h4>Como o Machine Learning Aprende?</h4>
          <p>Machine Learning é basicamente possibilitar que sistemas possam aprender a tomar decisões a partir de certos algoritmos que fazem análise de dados</p>
          <h4>Onde é Usado?</h4>
          <p>É usado no reconhecimento de fala, a identificação de imagens, o reconhecimento facial ou de expressões faciais, entre outros.</p>
        </div>
        <div className='general-img'>
          <img src={ml1}/>
          <img src={ml}/>
        </div>
      </section>
    </div>
  );
}

export default App;