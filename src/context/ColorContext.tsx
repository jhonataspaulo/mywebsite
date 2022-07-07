import {createContext, useEffect, useState} from 'react';
import {json} from 'stream/consumers';

type ColorContextType = {
  colorTheme: Color;
  setTheme: (color: Color) => void;
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

  async function setTheme(theme: Color) {
    const themeTmp = JSON.stringify(theme);
    localStorage.setItem('theme', themeTmp);
    await updateTheme();
  }

  async function updateTheme() {
    let themeLocalStorage = await localStorage.getItem('theme');
    if (!themeLocalStorage) {
      setColorTheme({color: 'primary'});
    } else {
      const theme = JSON.parse(themeLocalStorage) as Color;
      console.log(theme);
      setColorTheme(theme);
    }
  }

  useEffect(() => {
    updateTheme();
  }, []);

  return (
    <ColorContext.Provider
      value={{
        colorTheme,
        setTheme
      }}
    >
      {children}
    </ColorContext.Provider>
  );
}
