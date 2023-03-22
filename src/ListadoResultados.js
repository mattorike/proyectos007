function ListadoResultados(props) {
  return (
    <ul>
        <hr></hr>
        <center>
      {props.resultados.map((elemento) => 
        <li>La suma de {elemento.valor1} y {elemento.valor2} es {elemento.resultado}</li>
        
      )}
      </center>
    </ul>
  );
}

export default ListadoResultados;