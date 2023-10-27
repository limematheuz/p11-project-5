import "./Footer.css";
import iconchat from "../components/img/iconchat.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-links">
            <h4>DECATHLON EMPRESA</h4>
            <ul>
              <li><a href="#">Quiénes somos</a></li>
              <li><a href="#">Canal ético</a></li>
              <li><a href="#">Trabaja con nosotros</a></li>
              <li><a href="#">Sala de prensa</a></li>
              <li><a href="#">Decathlon afiliados</a></li>
              <li><a href="#">Decathlon Marketplace</a></li>
              <li><a href="#">Vende en Decathlon.es</a></li>
              <li><a href="#">Sostenibilidad</a></li>
              <li><a href="#">Innovación</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>CAMPAÑAS COMERCIALES</h4>
            <ul>
              <li><a href="#">Single Day</a></li>
              <li><a href="#">Regalos para deportistas</a></li>
              <li><a href="#">Rebajas</a></li>
              <li><a href="#">Botas de futbol</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>COMPRA / POST-COMPRA</h4>
            <ul>
              <li><a href="#">Método de entrega/Gasto de envío</a></li>
              <li><a href="#">Cambios y devoluciones</a></li>
              <li><a href="#">Factura formato electrónico</a></li>
              <li><a href="#">Métodos de pago</a></li>
              <li><a href="#">Envío Canarias/Ceuta/Melilla/Andorra</a></li>
              <li><a href="#">Tu opinión cuenta</a></li>
              <li><a href="#">Comunicados seguridad</a></li>
              <li><a href="#">Preguntas frecuentes</a></li>
              <li><a href="#">Clasificación de nuestros productos</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>SERVICIOS</h4>
            <ul>
              <li><a href="#">Alquiler</a></li>
              <li><a href="#">Soporte técnicos</a></li>
              <li><a href="#">Tarjeta regalo</a></li>
              <li><a href="#">Clubes, colegios y empresas</a></li>
              <li><a href="#">Personalización</a></li>
              <li><a href="#">Financiación</a></li>
              <li><a href="#">Extensión de garantía</a></li>
              <li><a href="#">Extensión de garantía</a></li>
              <li><a href="#">Postventa</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>VENTAJAS</h4>
            <ul>
              <li><a href="#">Decathlon Live</a></li>
              <li><a href="#">Ventajas y servicioss</a></li>
              <li><a href="#">Decathlon segunda vida</a></li>
              <li><a href="#">Revender mis productosl</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>PREGÚNTANOS LO QUE QUIERAS</h4>
            <div className="social-link">
                <img className="icon" src={iconchat}/>
                <a href="#">PREGÚNTANOS LO QUE QUIERAS</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
