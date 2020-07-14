import React from "react"
import { Container } from "../Container"
import { Infos } from "../Infos"
import Map from "../Map"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      coord: [-51.2305, -30.033]
    }
  }
  updateCoord(value) {
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURI(value)}.json?access_token=pk.eyJ1IjoiY2Fyb2xpbmVhdmVsbGFyIiwiYSI6ImNrY2wzd2lpdzE1MzAycm8ybnpzeTNyMDAifQ.Hpufd53e2o2Yg83ONLqZhw`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        return result.features[0].center
      })
      .then ((center) => {
        this.setState({
          coord: center
        })
      })
  }
  render() {
    return (
      <Container>
        <Map coord={this.state.coord}/>
        <Infos onSend={this.updateCoord.bind(this)}/>
      </Container>
    );
  }
}

export default App;
