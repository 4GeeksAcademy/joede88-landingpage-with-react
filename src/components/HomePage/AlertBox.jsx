import Alert from "react-bootstrap/Alert";
import BotonGenerico from "./BotonGenerico";

const AlertBox = () => {
    return(
  <Alert variant="secondary">
    <h1>A Warm Welcome!</h1>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum maxime fugit iste. Vero doloremque facere iusto quaerat illo placeat? Nemo velit eaque nisi, quia laborum nihil quasi nostrum obcaecati non?
      </p>
      <BotonGenerico texto="Clicame" margen="30px" ></BotonGenerico>
  </Alert>
    )
}

export default AlertBox