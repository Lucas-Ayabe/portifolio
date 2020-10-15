import React from "react"
import Field from "../components/Field"
import TextField from "../components/TextField"
import Layout from "../components/Layout"
import Stack from "../components/Stack"

const Contact = () => {
  return (
    <Layout>
      <Stack>
        <h1 className="title">Contato</h1>

        <form method="POST">
          <Stack style={{ alignItems: "flex-start" }} flow="1.5em">
            <Field
              identity="email"
              type="email"
              placeholder="Digite o seu e-mail aqui"
            >
              E-mail
            </Field>

            <TextField placeholder="Digite a sua mensagem aqui">
              Mensagem
            </TextField>

            <div>
              <button className="button -primary">Enviar mensagem</button>
            </div>
          </Stack>
        </form>
      </Stack>
    </Layout>
  )
}

export default Contact
