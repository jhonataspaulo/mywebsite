import {createContext, useEffect, useState} from 'react';

type ColorContextType = {
  colorTheme: Color;
  setColor: (color: Color) => void;
};

export const ColorContext = createContext({} as ColorContextType);

type ColorProviderProps = {
  children: React.ReactNode;
};

export type Color = {
  color: 'primary' | 'orange' | 'blue';
};

export function ColorProvider({children}: ColorProviderProps) {
  const [colorTheme, setColorTheme] = useState<Color>({color: 'primary'});

  function setColor(color: Color) {
    setColorTheme(color);
  }

  return (
    <ColorContext.Provider
      value={{
        colorTheme,
        setColor
      }}
    >
      {children}
    </ColorContext.Provider>
  );
}
