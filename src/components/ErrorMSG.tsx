import { useNavigate } from "react-router-dom";

import styles from '../styles/ErrorMSG.module.scss'

function ErrorMSG () {
  const navigate = useNavigate()
  return (
    <div className={styles.ErrorContainer}>
        <div className={styles.container}>
            <h1>Presentamos dificultades tecnicas al recargar la pagina. Por favor vuelva al home</h1>
            <button
            onClick={() => navigate(`/`)}
            >
                Volver
            </button>
        </div>
    </div>
  )
}

export default ErrorMSG