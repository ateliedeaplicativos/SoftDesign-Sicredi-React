import { useState, useEffect } from "react";
import { getDragons, deleteDragon } from "../util/api";
import { Link } from "react-router-dom";
import "./dragons.css"

export default function Dragons() {

    const [dragons, setDragons] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        getDragons().then(response => setDragons(response.data))
    }, [status]);

function sair() {
    window.location.reload(false);
  }

    return (
        <>
            <button className="button danger cursor-pointer" id="alignBtn" onClick={sair}>Sair</button>

<div className="align-card">
    <div className="formbg">
        <div className="card__content__generic">         
            <Link to={`/dragon/form`} state={{ dragon: { name: "", type: "default", histories: [] } }}><button className="button cursor-pointer margin-right-10" id="botao">Add Dragon-Credi</button></Link>           
        </div>
        <table id="table">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Tipo</th>
                    <th>Data de criação</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {/*<tr className="centered">
                    <td colspan="4" class="centered">
                        Nenhum Dragon-Credi cadastrado.
                    </td>
                </tr>*/}
            </tbody>
            {dragons.map((dragon, i) => {
                        return (
                            
                            <tbody key={i}>
                                <tr>
                                    <td className="cursor-pointer">{dragon.name}</td>
                                    <td className="cursor-pointer">{dragon.type}</td>
                                    <td className="cursor-pointer">{dragon.createdAt}</td>
                                    
                                    <td>
                                    <Link to={`/dragon/${dragon.id}`} state={{ dragon: dragon }}>ver
                                    </Link> <Link to={`/dragon/form/${dragon.id}`} state={{ dragon: dragon }}>editar</Link> <button className="btnAlert" onClick={() => deleteDragon(dragon.id).then(response => setStatus(response.status))}>DELETAR</button>
                                    </td>                
                                </tr>
                            </tbody>
                          
                        )
                    })}
        </table>
    </div>
</div>
        </>
    )
}