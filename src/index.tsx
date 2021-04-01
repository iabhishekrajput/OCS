import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { Layout } from "./layout"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <Layout />
  </React.StrictMode>,
  document.getElementById("root"),
)

serviceWorker.unregister()