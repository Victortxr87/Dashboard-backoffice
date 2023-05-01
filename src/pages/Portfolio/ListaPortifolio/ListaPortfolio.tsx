import React, { useEffect, useState } from "react";

import styles from "./ListaPortfolio.module.css";
import { Portfolio, deletePortfolio, getItensPortfolio } from "../../../services/portfolioservice";
import { useNavigate } from "react-router-dom";

const ListaPortfolio: React.FC = () => {

    const navigate = useNavigate();

    const [portfolio, setItensPortfolio] = useState<Portfolio[]>([]);

    const fetchItensPortfolio = async () => {
        try {
            const portfolio = await getItensPortfolio();
            setItensPortfolio(portfolio);
        } catch (error) {
            console.log('Erro ao buscar portfolio', error);
        }
    };

    useEffect(() => {
        fetchItensPortfolio();
    }, []);

    const handleEdit = (portfolio: Portfolio) => {
        navigate("/portfolio/cadastro", { state: portfolio });
    };
    
    const handleDelete = async (id: number) => {
        try {
            await deletePortfolio(id);
            fetchItensPortfolio();
            alert("Portfolio removido com sucesso!");
        } catch (error) {
            console.log("Erro ao remover portfolio", error);
            alert("Erro ao remover portfolio. Tente novamente.");            
        }
    };


    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Título</th>
                    <th>Imagem</th>
                    <th>Link</th>
                    <th>Descrição</th>
                    <th>Ações</th>
                   
            
                  
                </tr>
            </thead>
            <tbody>
                {portfolio.map((itensPortfolio, index) => (
                    <tr key={index}>
                        <td>{itensPortfolio.title}</td>
                        <td><img src={itensPortfolio.image} alt={itensPortfolio.title} className={styles.image} /></td>
                        <td><a href={itensPortfolio.link} target="_blank" rel="noreferrer">{itensPortfolio.link}</a></td>
                        <td>{itensPortfolio.description}</td>
                        <td>
                
                            <button className={styles.editar} onClick={() => handleEdit(itensPortfolio)}>Editar</button>
                            <button className={styles.excluir} onClick={() =>  handleDelete(itensPortfolio.id)}>Excluir</button>

                            
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default ListaPortfolio;