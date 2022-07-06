import {ColorContext} from './../context/ColorContext';
import {useContext} from 'react';

export function useColor() {
  const color = useContext(ColorContext);
  return color;
}
