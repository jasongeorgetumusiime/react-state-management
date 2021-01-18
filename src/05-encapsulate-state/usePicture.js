import { useEffect, useState } from "react";

const fetchPicture = async (date, setPicture) => {
  try{
    let response = await fetch(`/pictures?date=${date}`)
    let json = await response.json()
    setPicture(json)
  }catch (error) {
    console.log(error);
  }
}

export const usePicture = (date) => {
  let [picture, setPicture] = useState();

  useEffect(() => {
    fetchPicture(date, setPicture)
  }, [date])

  return picture;
}