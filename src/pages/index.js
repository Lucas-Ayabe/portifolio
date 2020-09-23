import React from "react"
import Lucas from "../../static/lucas.jpg"
import "../styles/index.css"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Stack from "../components/Stack"
import Grid from "../components/Grid"
import GridColumn from "../components/GridColumn"

export default function Home() {
  return (
    <Layout>
      <section style={{ position: "relative" }}>
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
                Mas também estou <strong>disponível para contato</strong> caso
                você precise dos meus serviços para te ajudar com algum projeto
                seu ou da sua empresa. É sério, eu posso te ajudar
                principalmente <strong>em tarefas envolvendo front-end</strong>{" "}
                de forma muito tranquila. Ainda com dúvidas da minha capacidade?
                Dá uma olhada nos meus{" "}
                <a href="#portfolio">últimos trabalhos.</a>
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

      <section style={{ marginTop: "4em" }}>
        <h2 className="title">Minhas Skills</h2>
      </section>
    </Layout>
  )
}
