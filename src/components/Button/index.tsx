import styles from './Button.module.css';

type props = {
  imc: () => void;
  disabled: boolean;
};

export const Button = ({ imc, disabled }: props) => {
  return (
    <button className={styles.btnStyle} onClick={imc} disabled={disabled}>
      Calcular
    </button>
  );
};
