import { ReactNode, useState } from "react";

interface listProps {
  children: ReactNode;
  items: any[];
}

function ListGroup({ children, items }: listProps) {
  const isNull = items.length === 0 ? <h1>ERROR NO HAY LISTA</h1> : null;
  var [selectedIndex, setIndex] = useState(-1);

  const [state, addNumber] = useState(0);

  return (
    <>
      <div className="container">
        <h1> {children}</h1>
        {isNull}
        <ul className="list-group">
          {items.map((city, index) => (
            <li
              key={city}
              className={
                selectedIndex === index
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => setIndex(index)}
            >
              {city}
            </li>
          ))}
        </ul>
      </div>

      <div className="container">
        {state > 5 ? <p>Contador= {state}</p> : null}
        <button className="btn btn-lg" onClick={() => addNumber(state + 1)}>
          Cliqueame
        </button>
      </div>
    </>
  );
}

export default ListGroup;
