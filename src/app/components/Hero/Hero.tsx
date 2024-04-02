import { amiko, gotu } from "@/app/ui/fonts"
import style from "./hero.module.css"
import Image from "next/image"

export default function Hero(){
    return (
        <div className={`${style.container}`}>
            <div className={`${style.circle}`}>
            </div>
            <h1 className={`${amiko.className} ${style.title}`}>SUPERHERO !</h1>
            <Image src="/images/hero-image.png" alt="mask" width={630} height={0} className={`${style.mask}`}/>
            <h3 className={`${gotu.className} ${style.subtitle}`}>REAL HELMET</h3>
            <p className={`${gotu.className} ${style.text}`}>
                Disfruta de legendarios cascos de los guerreros más<br/>
                fuertes de los dibujos animados. Diviertete sintiendote<br/>
                un gran superheroe al estilo Marven, DC, Disney y otros!
            </p>
        </div>
    )
}