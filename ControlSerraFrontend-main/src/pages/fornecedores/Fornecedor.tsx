import React from 'react'
import { useParams } from "react-router-dom";

function Fornecedor() {
 
    const { id } = useParams();
    return <div>Fonercedor: {id}</div>;
  
}

export default Fornecedor