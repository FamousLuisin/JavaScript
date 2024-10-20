'use client'

import Layout from "@/components/Layout"
import Header from "@/components/Header"
import styles from "@/app/styles/Client.module.css"
import { useState } from "react"

export default function Integratio(){
    const [client, setClient] = useState({})
    const [cod, setCod] = useState(1)
    
    async function obterClient(){
        const resp = await fetch(`http://localhost:3000/api/clients/${cod}`)
        const obj = await resp.json()
        
        setClient(obj)
    }
    
    return(
        <Layout>
        <Header titulo="Navegação dinâmica" />
        <div className={styles.client}>
            <div className={styles.propriedades}>
                <div className="attr"><input type="number" style={{width: 90}} value={cod} onChange={e => setCod(e.target.value)}/></div>
                <div className="attr"><button onClick={obterClient}>Obter client</button></div>
            </div>
            <div className={styles.propriedades}>
                <div className={styles.attr}>Id</div>
                <div className={styles.attr}>{client.id}</div>
            </div>
            <div className={styles.propriedades}>
                <div className={styles.attr}>Nome</div>
                <div className={styles.attr}>{client.nome}</div>
            </div>
            <div className={styles.propriedades}>
                <div className={styles.attr}>Idade</div>
                <div className={styles.attr}>{client.idade}</div>
            </div>
            <div className={styles.propriedades}>
                <div className={styles.attr}>Gênero</div>
                <div className={styles.attr}>{client.genero}</div>
            </div>
        </div>
        </Layout>
    )
}