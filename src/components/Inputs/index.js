import styled from "styled-components"

export const Submit = styled.button.attrs({
  tipe: "submit",
  className: "br4 pa2 tc db bn b ph3 pointer"
})`
  margin: 20px auto;
  color: #fff;
  background: #091D3C;
`

export const Button = styled.button.attrs({
  className: "br4 bn pa2 absolute right-2 pointer"
})`
  background: #091D3C;
  color: #fff;
`

export const Search = styled.input.attrs({
  placeholder: "R. Olinda, 40",
  className: "w-100 br4 bn pv2 ph3"
})`
  background: #DFDFDF;
  outline: none;
`