import axios from "axios";
import API from "./constants";

export async function getAllNuns() {
  var nunsList = axios
    .get(API.ENDPOINT.NUNS.ALL)
    .then((response) => response.data)
    .catch((error) => console.log("Error: ", error));
  return nunsList;
}

export async function updateNun(idNun) {
  axios
    .post(API.ENDPOINT.NUN_UPDATE + idNun)
    .then((response) => response.data)
    .catch((error) => console.log("Error: ", error));
}
