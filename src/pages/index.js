import React, { useState, useEffect } from "react"
import Lucas from "../../static/lucas.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt, faGlobe } from "@fortawesome/free-solid-svg-icons"
import { faHtml5, faPhp } from "@fortawesome/free-brands-svg-icons"
import "../styles/index.css"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Stack from "../components/Stack"
import Grid from "../components/Grid"
import GridColumn from "../components/GridColumn"
import { Card } from "../components/Card"

export default function Home() {
  const [repositorys, setRepositorys] = useState([])

  const getPinnedRepositorys = () => {
    const endpoint = `https://api.github.com/users/Lucas-Ayabe/starred?sort=updated`
    fetch(endpoint)
      .then(response => response.json())
      .then(setRepositorys)
  }

  useEffect(getPinnedRepositorys, [])

  return (
    <Layout>
      <section tabIndex="1" id="content" className="content">
        <Grid reverse>
          <GridColumn>
            <Stack>
              <h1 className="title">
                Olá, eu sou <span className="min-sm-only">o</span>{" "}
                <span className="highlight-primary">Lucas</span>
              </h1>
              <p>
                Bem-vindo ao meu site. Meu nome é Lucas Akira Ayabe, mas pode me
                chamar só de Lucas, e atualmente sou desenvolvedor web.
              </p>
              <p>
                Eu criei este site para documentar o que eu ando fazendo e
                estudando através de posts que você pode ler{" "}
                <Link to="/posts">clicando aqui.</Link>
              </p>
              <p>
                Mas também estou{" "}
                <Link to="/contact">disponível para contato</Link> caso você
                precise dos meus serviços para te ajudar com algum projeto seu
                ou da sua empresa. É sério, eu posso te ajudar principalmente{" "}
                <strong>em tarefas envolvendo front-end</strong> de forma muito
                tranquila. Ainda com dúvidas da minha capacidade? Dá uma olhada
                nos meus <a href="#portfolio">últimos trabalhos.</a>
              </p>
            </Stack>
          </GridColumn>

          <GridColumn className="has-center-align" col="is-md-5">
            <figure className="my-perfil">
              <img className="photo" src={Lucas} alt="Uma foto minha." />
            </figure>
          </GridColumn>
        </Grid>
      </section>

      <section
        className="has-center-align has-md-left-align"
        style={{ marginTop: "4em" }}
      >
        <h2 className="title">Minhas Skills</h2>

        <Grid style={{ marginTop: "1.5em" }}>
          <GridColumn col="is-md-6">
            <div style={{ fontSize: ".9em" }}>
              <Stack style={{ display: "block" }} flow="16px">
                <FontAwesomeIcon size="3x" icon={faHtml5} />
                <h2 className="title -sm">Front-End</h2>
                <p>
                  Manda um hello e vamos ver como dar vida as suas telas - seja
                  do seu sistema, seja do seu site -{" "}
                  <strong>da ideia para o código</strong> da melhor forma
                  possível.
                </p>
              </Stack>
            </div>
          </GridColumn>

          <GridColumn col="is-md-6">
            <div style={{ fontSize: ".9em" }}>
              <Stack style={{ display: "block" }} flow="16px">
                <FontAwesomeIcon size="3x" icon={faGlobe} />
                <h2 className="title -sm">Web Design</h2>
                <p>
                  Essa habilidade me permite te ajudar a criar um site bonito,
                  moderno, atualizado as últimas tendências, aplicando técnicas
                  e conceitos e <strong>UI e UX design</strong>.
                </p>
              </Stack>
            </div>
          </GridColumn>

          <GridColumn col="is-md-6">
            <div style={{ fontSize: ".9em" }}>
              <Stack style={{ display: "block" }} flow="16px">
                <FontAwesomeIcon size="3x" icon={faMobileAlt} />
                <h2 className="title -sm">Design responsivo</h2>
                <p>
                  Pode deixar comigo, que seu site/sistema irá{" "}
                  <strong>se adaptar a qualquer dispositivo</strong> garantindo
                  uma experiência customizada para os seus clientes.
                </p>
              </Stack>
            </div>
          </GridColumn>

          <GridColumn col="is-md-6">
            <div style={{ fontSize: ".9em" }}>
              <Stack style={{ display: "block" }} flow="16px">
                <FontAwesomeIcon size="3x" icon={faPhp} />
                <h2 className="title -sm">Back-End</h2>
                <p>
                  Caso você precise de um desenvolvedor PHP para o seu back-end,
                  estou a sua disposição, <strong>entregando a solução</strong>{" "}
                  para você seguindo as melhores práticas.
                </p>
              </Stack>
            </div>
          </GridColumn>
        </Grid>
      </section>

      <section id="portfolio" className="section">
        <h2 className="title">Últimos Projetos</h2>

        <Grid>
          {repositorys &&
            repositorys.map(repository => (
              <GridColumn key={repository.id} col="is-md-6">
                <Card>
                  <Stack flow=".25em">
                    <a href={repository.homepage}>
                      <h3>{repository.name}</h3>
                    </a>
                    <p>{repository.description}</p>
                  </Stack>
                </Card>
              </GridColumn>
            ))}
        </Grid>
      </section>
    </Layout>
  )
}
