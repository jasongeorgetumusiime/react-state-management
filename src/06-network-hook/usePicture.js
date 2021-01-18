import { useState } from "react";
import { useNetwork } from "./useNetwork";

export const usePicture = (date) => {
  let {data, loading} = useNetwork({
    url: `./url?data=${date}`
  })
  return {picture: data, loading};
}