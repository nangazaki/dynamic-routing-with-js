export class Contact {
  handle() {
    const html = `
      <section id="s-contacto">
        <div class="container contacto-layout">
          <img src="/img/contact.svg">

          <form action="">
            <h2>Fale Connosco</h2>

            <input type="text" placeholder="Seu nome">

            <input type="email" placeholder="seunome@exemplo.com">

            <textarea rows="6" placeholder="Mensagem..."></textarea>

            <button>Enviar</button>
          </form>
        </div>
      </section>
    `

    return html
  }
}