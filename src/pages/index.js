import React from "react"
import Lucas from "../../static/lucas.jpg"
import "../styles/index.css"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Stack from "../components/Stack"
import Title from "../components/Title"
import Grid from "../components/Grid"
import GridColumn from "../components/GridColumn"

export default function Home() {
  return (
    <Layout>
      <Grid reverse>
        <GridColumn>
          <Stack>
            <Title>
              Olá, eu sou o <span className="highlight-primary">Lucas</span>
            </Title>
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
              seu ou da sua empresa. É sério, eu posso te ajudar principalmente{" "}
              <strong>em tarefas envolvendo front-end</strong> de forma muito
              tranquila. Ainda com dúvidas da minha capacidade? Dá uma olhada
              nos meus <a href="#portfolio">últimos trabalhos.</a>
            </p>
            <p>
              Por fim, acho que para terminar essa apresentação, falta uma foto
              né? Bom, eu tenho como hobbye a fotografia, então aqui vai uma das
              minhas mais recentes:
            </p>
          </Stack>
        </GridColumn>

        <GridColumn className="has-center-align" col="is-md-5">
          <img
            className="my-perfil has-shadow is-rounded"
            src={Lucas}
            alt="Eu"
          />
        </GridColumn>
      </Grid>
    </Layout>
  )
}
