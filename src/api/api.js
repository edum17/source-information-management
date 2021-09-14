import axios from "axios";
import API from "./constants";

export async function getAllNuns() {
  var nunsList = axios
    .get(API.ENDPOINT.NUNS.ALL)
    .then((response) => response.data)
    .catch((error) => console.log("Error: ", error));
  return nunsList;
}
