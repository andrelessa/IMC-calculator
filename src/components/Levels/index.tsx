import { Level } from '../../helpers/imc';
import styles from './Levels.module.css';
import down from '../../assets/down.png';
import up from '../../assets/up.png';

type Props = {
  data: Level;
};

export const Levels = ({ data }: Props) => {
  return (
    <div className={styles.levelStyle} style={{ backgroundColor: data.color }}>
      <div className={styles.levelIconStyle}>
        <img src={data.icon === 'down' ? down : up} alt={data.title} />
      </div>

      <h1 className={styles.levelTitleStyle}>{data.title}</h1>

      {data.yourImc && (
        <p className={styles.yourImc}>Seu IMC é de {data.yourImc} Kg/m²</p>
      )}

      <div className={styles.levelInfosStyle}>
        <>
          IMC está entre <strong>{data.imc[0]}</strong> e{' '}
          <strong>{data.imc[1]}</strong>
        </>
      </div>
    </div>
  );
};
