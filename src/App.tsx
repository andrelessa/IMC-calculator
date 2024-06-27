import styles from './App.module.css';
import poweredImage from './assets/powered.png';
import arrow from './assets/leftarrow.png';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { useState } from 'react';
import { calcImc, levels, Level } from './helpers/imc';
import { Levels } from './components/Levels';
import { injectStyle } from 'react-toastify/dist/inject-style';
import { ToastContainer, toast } from 'react-toastify';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  const [height, setHeight] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [imcLevel, setImcLevel] = useState<Level | undefined>(undefined);

  const handleHeight = (h: number): void => setHeight(h);
  const handleWeight = (w: number): void => setWeight(w);

  if (typeof window !== 'undefined') {
    injectStyle();
  }

  const handleBtnClick = (): void => {
    height && weight
      ? setImcLevel(calcImc(weight, height))
      : toast.error('Preencha todos os campos!');
    return;
  };

  const handleArrowClick = (): void => {
    setImcLevel(undefined);
    setHeight(0);
    setWeight(0);
  };

  return (
    <div className={styles.main}>
      <header>
        <img src={poweredImage} alt="IMC Calculator" />
      </header>
      <main className={styles.container}>
        <section className={styles.leftSide}>
          <ToastContainer />
          <Analytics />
          <h1>Calcule o seu IMC.</h1>
          <p>
            O aplicativo IMC é uma ferramenta desenvolvida para ajudar pessoas a
            controlarem sua saúde e avaliarem seu peso com precisão. O Índice de
            Massa Corporal (IMC) é uma medida utilizada em todo o mundo para
            avaliar se uma pessoa está no peso ideal e o aplicativo permite
            calcular o seu IMC de forma rápida e fácil.
          </p>

          <Input
            placeHolder="Digite a sua altura. Ex.: 1.5 ou 1(em metros)"
            value={height}
            change={handleHeight}
            disabled={imcLevel ? true : false}
          />
          <Input
            placeHolder="Digite o seu Peso. Ex.: 70.5 ou 70(em Kg)"
            value={weight}
            change={handleWeight}
            disabled={imcLevel ? true : false}
          />

          <Button imc={handleBtnClick} disabled={imcLevel ? true : false} />
        </section>
        <section className={styles.rightSide}>
          {imcLevel && (
            <>
              <div className={styles.backArrow} onClick={handleArrowClick}>
                <img src={arrow} alt="" />
              </div>
              <Levels data={imcLevel} />
            </>
          )}

          {!imcLevel &&
            levels.map((level, index) => {
              if (level.yourImc) {
                level.yourImc = undefined;
              }
              return <Levels key={index} data={level} />;
            })}
        </section>
      </main>
    </div>
  );
};
export default App;
