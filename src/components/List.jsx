import { useState, useEffect } from 'react'
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore"
import db from '../db'
import '../css/List.css'

function List () {
    const [cadastros, setCadastros] = useState([])

    useEffect(() => {
        // Função para buscar dados do Firebase
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, "Clientes")); // Substitua "sua_colecao" pelo nome da sua coleção no Firebase
            const dados = [];
            querySnapshot.forEach((doc) => {
              dados.push({ id: doc.id, ...doc.data() });
            });
            setCadastros(dados);
          } catch (error) {
            console.error("Erro ao buscar dados no Firestore: ", error);
          }
        };
    
        fetchData(); // Chame a função para buscar os dados quando o componente for montado
      }, []);

      const handleExcluir = async (id) => {
        try {
          const docRef = doc(db, "Clientes", id); // Substitua "Clientes" pelo nome da sua coleção
          await deleteDoc(docRef);
          const newCadastros = cadastros.filter((cadastro) => cadastro.id !== id);
      setCadastros(newCadastros);
          
        } catch (error) {
            console.error("Erro", error)
        }
    }

    return (
        <div className='container'>
            <div className="conteudo">
                <p>EMPRESA</p>
                <p>CNPJ</p>
                <p>VALOR</p>
            </div>
            {cadastros.map((cadastro) => (
             <div key={cadastro.id} className='listClient'>  
            <p>{cadastro.cliente.toUpperCase()}</p>
            <p>{cadastro.cnpj}</p>
            <p>R$ {cadastro.valor}</p>
            <button onClick={() => handleExcluir(cadastro.id)}>Excluir</button>
            </div>  
            )
            )}
        </div>
    )
}

export default List