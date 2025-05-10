import axios from "axios";
import { apiBaseUrl } from "../constants";
import { type Candidates } from "../types";

const getCandidates = async () => {
    const { data } = await axios.get<Candidates[]>(`${apiBaseUrl}/candidates`);
    return data
}

export default {
    getCandidates
};