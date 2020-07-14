import React from "react"
import styled from "styled-components"
import { Submit, Button, Search } from "../Inputs"
import { Title, Text, TextStrong, TextSmall } from "../Text"

export class Infos extends React.Component {
  constructor(props) {
    super(props)
    this.input = React.createRef()
  }
  render() {
    return (
      <>
        <Box>
          <div className="relative pa4">
            <Search ref={this.input}/>
            <Button onClick={() => this.props.onSend(this.input.current.value)}>Enviar</Button>
          </div>
          <Title>Confirme o seu local</Title>
          <Text>Ajude o seu prestador a localiza-lo mais rapidamente, ajuste sua localização acima!</Text>
          <Submit>CONFIRMAR O LOCAL DA OCORRÊNCIA</Submit>
          <Placa>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Volkswagen_logo_2019.svg/768px-Volkswagen_logo_2019.svg.png" width="40px" height="40px" alt="Logo"/>
            <div className="flex flex-column">
              <Text>PLACA</Text>
              <TextStrong>IXS-8269</TextStrong>
            </div>
            <div className="flex flex-column">
              <Text>PROTOCOLO</Text>
              <TextSmall>1457845856894</TextSmall>
            </div>
          </Placa>
        </Box>
      </>
    )
  }
}

export const Box = styled.div.attrs({
  className: "w-100 absolute bottom-0 br4 br--top shadow-2"
})`
  background: white;
`

export const Placa = styled.div.attrs({
  className: "w-100 ph4 pv2 flex items-center justify-between"
})`
  background: #F9F9F9;
`