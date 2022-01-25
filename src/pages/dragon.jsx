import { useLocation, Link } from "react-router-dom";

import './dragons.css';

export default function Dragon() {

    const location = useLocation();
    const { dragon } = location.state;

    return (
        <>
            <div className="align-card">
            <div className="formbgEd">
                <div id="table"><br></br>
                <br></br><h2>Dragon-Credi Completo:</h2>
             
                <br></br><p><span>Id:</span> {dragon.id}</p>
                        <p><span>Data de criação:</span> {dragon.createdAt}</p>
                        <p><span>Dragon-Name:</span> {dragon.name}</p>
                        <p><span>Tipo de Dragon-Credi:</span> {dragon.type}</p>
                        <p><span>Observação:</span> {dragon.histories}</p>

        <div className="col-12 d-flex justify-content-end">
            <Link to={"/dragon"}><button type="submit" className="button cursor-pointer" id="botaoDanger">Voltar</button></Link>
        </div>
    </div>
                </div>
            </div>
        </>
    )
}