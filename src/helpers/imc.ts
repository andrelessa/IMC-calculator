export type Level = {
  title: string;
  color: string;
  icon: 'up' | 'down';
  imc: number[];
  yourImc?: number;
};

export const levels: Level[] = [
  { title: 'Abaixo do Peso', color: '#00DCFD', icon: 'down', imc: [0, 18.5] },
  { title: 'Saudável', color: '#5DC25E', icon: 'up', imc: [18.6, 24.9] },
  { title: 'Sobrepeso', color: '#EED311', icon: 'down', imc: [25, 30] },
  {
    title: 'Obesidade',
    color: '#F14B3D',
    icon: 'down',
    imc: [30.1, 99],
  },
];

export const calcImc = (w: number, h: number): Level | undefined => {
  const imcCalc: number = +(w / h ** 2).toFixed(2);
  const findLevel: Level | undefined = levels.find((level: Level) => {
    if (imcCalc >= level.imc[0] && imcCalc <= level.imc[1]) {
      level.yourImc = imcCalc;
      return level;
    }
  });
  return findLevel;
};
