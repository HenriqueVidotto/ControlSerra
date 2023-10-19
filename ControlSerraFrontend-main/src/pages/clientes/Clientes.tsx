import { useMemo } from "react";
import { PaginaBase } from "../../ui/layouts";
import {
  FerramentasDaListagem,
  FerramentasDeDetalhes,
} from "../../ui/components";
import { useSearchParams } from "react-router-dom";

function Clientes() {
  const [searchParams, setSearchParams] = useSearchParams();

  const busca = useMemo(() => {
    return searchParams.get("busca") || "";
  }, [searchParams]);
  return (
    <PaginaBase
      titulo="Clientes"
      barraDeFerramentas={<FerramentasDeDetalhes />}>
      Clientes
    </PaginaBase>
  );
}

export default Clientes;
