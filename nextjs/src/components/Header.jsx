import style from "@/app/styles/Header.module.css"

export default function Header(props){
    return (
        <header className={style.header}>
            <h1>{props.titulo}</h1>
        </header>
    )
}