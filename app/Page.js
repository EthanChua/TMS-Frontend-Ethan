import React from "react"

import Container from "./Container"

function Page(props) {
  return <Container class={`body-content ${props.class ? props.class : ""}`}>{props.children}</Container>
}

export default Page
