import { ChangeEvent } from 'react';
import styles from './Input.module.css';

type Props = {
  value: number;
  placeHolder?: string;
  change: (n: number) => void;
  disabled: boolean;
};

export const Input = ({ value, placeHolder, change, disabled }: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    change(+e.target.value);

  return (
    <input
      type="number"
      className={styles.inputStyle}
      value={value > 0 ? value : ''}
      placeholder={placeHolder}
      onChange={handleChange}
      disabled={disabled}
    />
  );
};
