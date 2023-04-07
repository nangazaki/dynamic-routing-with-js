export class Services {
  handle() {
    const html = `
      <section id="s-servicos">
        <div class="container">
          <h2>Serviços</h2>
          <div class="grid-layout service-card">
            <div class="card">
              <img src="/img/curve-1.png" class="img-service">
              <h6>Serviço 1</h6>
              <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facere iure officiis expedita, nequevoluptatem porro.
              </p>
              <a href="">Mais informações ></a>
            </div>
            <div class="card">
              <img src="/img/research-1.png" class="img-service">
              <h6>Serviço 2</h6>
              <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facere iure officiis expedita, nequevoluptatem porro.
              </p>
              <a href="">Mais informações ></a>
            </div>
            <div class="card">
              <img src="/img/ideia-1.png" class="img-service">
              <h6>Serviço 3</h6>
              <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facere iure officiis expedita, nequevoluptatem porro.
              </p>
              <a href="">Mais informações ></a>
            </div>
            <div class="card">
              <img src="/img/site-map-1.png" class="img-service">
              <h6>Serviço 4</h6>
              <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facere iure officiis expedita, nequevoluptatem porro.
              </p>
              <a href="">Mais informações ></a>
            </div>
          </div>
        </div>
      </section>

      <section id="s-equipe">
        <div class="container">
          <p class="paragraph-head">Conheça os nossos profrissionais</p>
          <h2>Nossa Equipe</h2>
          <div class="flex-layout our-team">
            <div class="person-team">
              <img src="/img/img-1.png">
              <h6>Rick Sanchez</h6>
              <p>Cientista de Dados</p>
            </div>
            <div class="person-team">
              <img src="/img/img-2.png">
              <h6>Chris Evans</h6>
              <p>UI/UX Designer</p>
            </div>
            <div class="person-team">
              <img src="/img/img-3.png">
              <h6>Samuel L. Jackson</h6>
              <p>Desenvolvedor Fullstack</p>
            </div>
          </div>
        </div>
      </section>
    `

    return html
  }
}