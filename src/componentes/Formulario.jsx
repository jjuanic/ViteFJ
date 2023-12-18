import { useState } from 'react'
import { Link } from 'react-router-dom';

const Formulario = () => {

    // js nativo
    // let nombre = document.getElementById('nombre').value;

    // js con jquery
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');

    const imprimirDatos = () => {
        console.log(nombre)
        console.log(apellido)
        setNombre('');
        setApellido('');
    }

    const borrarDatos = () => {
        setNombre('');
        setApellido('');
    }

    return (
        <>
            <h1 className="text-center mt-5 mb-5">
                Form de Login Admin
            </h1>

            <div className="container">
                <form id="formLogin">
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        // id="nombre" 
                        placeholder="Nombre" 
                        value = {nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Apellido</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Apellido" 
                        value = {apellido}
                        onChange={(e) => setApellido(e.target.value)}
                        required
                        />
                    </div>
                    <div className="mb-3 text-center">
                        <button onClick={ imprimirDatos } type="button" className="btn btn-success w-50">Login</button>
                    </div>
                    <div className="mb-3 text-center">
                        <button onClick={ borrarDatos } className="btn btn-danger w-50">Reset</button>
                    </div>
                </form>
            </div>

            <Link to="/">
            <h2 className="text-center mt-5 mb-5">
                Ir a la página principal
            </h2>
            </Link>

        </>
    )

}
export default Formulario