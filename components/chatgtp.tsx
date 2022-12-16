import { useState } from 'react'
import styles from '../styles/utils.module.css'


export default function ChatGTP() {
    const [animalInput, setAnimalInput] = useState("");
    const [result, setResult] = useState();
  
    async function onSubmit(event) {
      event.preventDefault();
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ animal: animalInput }),
      });
      const data = await response.json();
      setResult(data.result);
      setAnimalInput("");
    }
    return (
        <div>
          <form className={styles.form} onSubmit={onSubmit}>
            <input
              className={styles.input}
              type="text"
              name="animal"
              placeholder="Enter an animal"
              value={animalInput}
              onChange={(e) => setAnimalInput(e.target.value)}
            />
            <input className={styles.input} type="submit" value="Generate names" />
          </form>
          <div className={styles.result}>{result}</div>
      </div>
    )
}