import axios from "axios";
import { apiBaseUrl } from "../constants";
import { type NewVoterList } from "../types";

const createTextFile = async (formData: NewVoterList) => {
    const { data } = await axios.post(`${apiBaseUrl}/data`, formData);
    return data;
}

export default {
    createTextFile
}