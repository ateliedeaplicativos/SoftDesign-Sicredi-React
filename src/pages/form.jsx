import { useState } from "react";
import { postDragon, putDragon } from "../util/api";
import { useLocation, Link } from "react-router-dom";

import './dragons.css';

export default function Form(props) {

    const location = useLocation();
    const {dragon} = location.state;
    const [name, setName] = useState(dragon.name);
    const [type, setType] = useState(dragon.type);
    const [histories, setHistories] = useState(dragon.histories);
    const [status, setStatus] = useState(false);

    const handleSubmit = (e) => {

        if (dragon.hasOwnProperty("id")) {
            putDragon({
                id: dragon.id,
                name: name,
                type: type,
                histories: histories
            }).then(response => setStatus(response.status))
        } else {
            postDragon({
                name: name,
                type: type,
                histories: histories
            }).then(response => setStatus(response.status))
        }
        e.preventDefault();
    }

    return (
    <>
        <div className="align-card">
            <div className="formbgEd">
                <div id="table">
                <br></br><h2>Editar Dragon-Credi:</h2>
                <br></br><form className="row g-3">              
        <div className="col-md-8">
            <label className="form-label">Dragon-Name:</label>
            <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div className="col-md-4">
            <label className="form-label">Tipo de Dragon-Credi:</label>
            <select className="form-select" defaultValue={type} onChange={(e) => setType(e.target.value)}>
                <option value="Simples">Simples</option>
                <option value="Master">Master</option>
                <option value="Premium">Premium</option>
                <option value="Black">Black</option>
            </select>
        </div>
        <div className="col-12">
            <label className="form-label">Observações:</label>
            <textarea className="form-control" onChange={(e) => setHistories([e.target.value])} value={histories} />
        </div>
        <div className="col-12 d-flex justify-content-center">
            {status === 201 ? <div>Dragon-Credi Adicionado com Sucesso!</div>
                : status === 200 ? <div>Dragon-Credi Atualizado com Sucesso!</div> 
                    : status ? "Unexpected error!" : null }
        </div>
        <div className="col-12 d-flex justify-content-end">
            <button type="submit" className="button cursor-pointer" id="botao" onClick={handleSubmit}>Atualizar</button>
            <Link to={"/dragon"}><button type="submit" className="button cursor-pointer" id="botaoDanger">Voltar</button></Link>
        </div>
    </form>

                </div>
            </div>
        </div>
    </>


    )
}