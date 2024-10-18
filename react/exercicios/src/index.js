import React from 'react'
import { createRoot } from 'react-dom/client'
import Pai from './components/Pai'
import Filho from './components/Filho'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
    <div>
        <Pai nome="Noc" sobrenome="Jhonson">
            <Filho nome="Noki" />
            <Filho nome="Luisin" />
            <Filho nome="Flisntons" />
            <Filho nome="Luís" />
        </Pai>
    </div>
)
