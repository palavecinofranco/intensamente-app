import { gothic_a1, gotu } from "../../ui/fonts";
import Button from "../Button/Button";
import style from "./navbar.module.css"

export default function Navbar() {
    return (
        <div className={`${style.container}`}>
            <nav className={`${gotu.className} ${style.navbar}`}>
                <li className={`${gothic_a1.className}`}>COMPRAR</li>
                <li>Más vendido</li>
                <li>Nuestras Categorías</li>
                <li>Extras</li>
            </nav>
            <Button styles={{
                width: "100%",
                height: "80px",
                backgroundColor: "#FF7360"
            }} content={"NUEVOS INGRESOS"}/>
        </div>
      );
}

