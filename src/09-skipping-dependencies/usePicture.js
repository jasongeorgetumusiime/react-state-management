import { useMemo, useState } from "react";
import { useNetwork } from "./useNetwork";

export const usePicture = (date) => {

  let [test] = useState('test')

  let options = useMemo(() => ({
    url: `./url?data=${date}`,
    headers: { test },
    method: 'GET'
  }), [date, test])

  let {data, loading} = useNetwork(options)
  return {picture: data, loading};
}