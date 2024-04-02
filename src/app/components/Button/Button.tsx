import { FaArrowRightLong } from "react-icons/fa6";
import style from "./button.module.css"
import { gothic_a1 } from "@/app/ui/fonts";

// interfaces.ts
interface Props {
    content: string;
    styles: object;
  }

export default function Button (props: Props) {
    return (
        <button className={`${style.button} ${gothic_a1.className}`} style={props.styles}>
            {props.content}
            <FaArrowRightLong className={`${style.icon}`}/>
        </button>
    )
}