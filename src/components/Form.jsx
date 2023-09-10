import '../css/Form.css'
import { useState } from 'react'
import db from '../db'
import { addDoc, collection } from "firebase/firestore"


function Form () {
    const [cliente, setCliente] = useState("")
    const [cnpj, setCnpj] = useState("")
    const [valor, setValor] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const docRef = await addDoc(collection(db, "Clientes"), {
                cliente,
                cnpj,
                valor
            })
        } catch (error) {
            console.log("Erro ao adicionar documento", error)
        }
        setCliente("")
        setCnpj("")
        setValor("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="nomeEmpresa">Nome da Empresa:</label>
            <input type="text" id='nomeEmpresa' placeholder='Digite o nome da empresa..' value={cliente} onChange={(e) => setCliente(e.target.value)} />
            <label htmlFor="cnpj">CNPJ da empresa:</label>
            <input type="number" id='cnpj' placeholder='Digite o CNPJ da empresa..' value={cnpj} onChange={(e) => setCnpj(e.target.value)} />
            <label htmlFor="valor">Valor contratual:</label>
            <input type="number" id='valor' placeholder='Digite o valor..' value={valor} onChange={(e) => setValor(e.target.value)} />
            <button type='submit'>Enviar</button>
        </form>
    )
}

export default Form