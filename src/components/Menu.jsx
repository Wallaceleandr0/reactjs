import { Link } from 'react-router-dom'
import '../css/Menu.css'

function Menu () {
    return (
        <nav>
            <img src="logo.png"/>
            <Link className='link' to="/">Cadastro</Link>
            <Link className='link' to="/list">Gerenciador</Link>
        </nav>
    )
}

export default Menu