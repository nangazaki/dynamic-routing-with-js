export class About {
  handle() {
    const html = `
    <section id="s-sobre">
    <div class="container layout-sobre">
        <div>
            <p class="paragraph-head">Conheça-nos</p>
            <h2>About</h2>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Voluptatibus, error velit magnam eaque sequi deserunt,
                omnis aliquam natus officia dolores iusto explicabo fugit?
                Blanditiis maxime, sequi eligendi voluptates saepe earum.
            </p>
            <button>Peça o seu orçamento</button>
        </div>
        <img src="/img/about.svg" width="50%">
    </div>
</section>
    `

    return html
  }
}