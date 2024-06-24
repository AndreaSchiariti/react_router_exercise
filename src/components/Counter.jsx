import { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({ startingValue = 0, valueToAddOrRemove = 1 }) {
  const [counter, setCounter] = useState(startingValue);
  useEffect(() => {
    console.log(counter);
  }, [counter]);

  function handleIncrement() {
    setCounter((count) => count + valueToAddOrRemove);
  }

  function handleDecrement() {
    setCounter((count) => count - valueToAddOrRemove);
  }

  function handleReset() {
    setCounter(startingValue);
  }

  return (
    <div>
      <CounterDisplay stateValue={counter} />
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

/* 
    - Risposta domanda esericizio State -1 
    --"Quando richiami la funzione setter per incrementare il counter il    --
    --parametro dovrebbe essere un valore immediato o una funzione? Perchè?"--

    è meglio una funzione per variare il valore di counter attraverso
    operandi perchè la setter function non è immediata, bensì React 
    la "elaborerà il prima possibile". 
    Con un valore immediato quindi la libreria non riuscirà a leggere 
    il cambiamento."Spezzettando" invece la funzione con piccole funzioni 
    interne React riuscià a interporre il calcolo e a quel punto l'hook 
    registrerà il cambio dello state value.
    Nel caso di un cambio dello state value a un valore specifico, ad 
    esempio se volessimo resettarlo, il valore immediato sarà il più
    indicato, perchè a quel punto stiamo ridando un valore preciso allo
    state value. 
*/
