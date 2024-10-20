'use client'

import Layout from "@/components/Layout"
import Header from "@/components/Header"
import { useState } from "react"
import style from "@/app/styles/State.module.css"

export default function Estado(){
    const [numero, setNumero] = useState(0)
    
    function incrementar() {
        setNumero(numero + 1)
    }

    return (
        <Layout>
            <Header titulo="Estado"/>
            <div className={style.contagem}>
                <div>{numero}</div>
                <button onClick={incrementar}>Incrementar</button>
            </div>
        </Layout>
    )
}