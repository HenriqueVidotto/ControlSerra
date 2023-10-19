import { useMemo } from "react";
import { PaginaBase } from "../../ui/layouts";
import {
  FerramentasDaListagem,
  FerramentasDeDetalhes,
} from "../../ui/components";
import { useSearchParams } from "react-router-dom";

function EditarCliente() {

    return (
      <PaginaBase
        titulo="Clientes"
        barraDeFerramentas={<FerramentasDeDetalhes />}>
        Clientes
      </PaginaBase>
    );
  
}

export default EditarCliente