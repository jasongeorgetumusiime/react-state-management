import { useEffect, useState } from "react";

let intiallyDark = window.matchMedia('(prefers-color-scheme: dark)').matches


export const useDarkMode = () => {
  let [dark, setDark] = useState(intiallyDark);

  const listener = event => {
      setDark(event.matches)
  }

  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', listener);

    console.log(window.matchMedia('(prefers-color-scheme: dark)'))

    return () =>
      window.matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', listener);
  }, [])

  return dark
}