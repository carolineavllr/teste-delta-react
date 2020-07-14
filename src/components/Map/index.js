import React from "react"
import styled from "styled-components"
import mapboxgl from "mapbox-gl"

const Wrapper = styled.div.attrs({
  id: "map",
  className: "w-100"
})`
  height: calc(100vh - 330px);
  background: black;
`
class Map extends React.Component {
  render() {
    return <Wrapper />
  }
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2Fyb2xpbmVhdmVsbGFyIiwiYSI6ImNrY2wzd2lpdzE1MzAycm8ybnpzeTNyMDAifQ.Hpufd53e2o2Yg83ONLqZhw';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.props.coord, // centro em Porto Alegre
      zoom: 12
    })
  }
  componentDidUpdate() {
    this.marker && this.marker.remove();
    this.marker = new mapboxgl.Marker({
      color: '#091D3C',
    })
      .setLngLat(this.props.coord)
      .setPopup(new mapboxgl.Popup().setHTML("<h1>Local do Ocorrêcia</h1>"))
      .addTo(this.map)

    this.map.setCenter(this.props.coord)
    this.map.zoomTo(15)
  }
}

export default Map

