import style from "@/app/styles/Layout.module.css"
import Navegador from "./Navegador"

export default function Layout(props){
    return (
        <div className={style.layout}>
            
            <div className={style.header}>
                <div className={style.titulo}>
                    <h3>NextJs</h3>
                </div>
                <div className={style.links}>
                    <Navegador destino="/" texto="Home"/>
                    <Navegador destino="/module" texto="Module"/>
                    <Navegador destino="/client" texto="Navegação"/>
                    <Navegador destino="/state" texto="Estado"/>
                    <Navegador destino="/integration" texto="Integração"/>
                </div>
            </div>

            <hr className={style.hr}/>

            <div className={style.content}>
                {props.children}
            </div>
        </div>
    )
}