import candidateData from "../../data/candidates";
import { Candidates } from "../types";

const getCandidates = (): Candidates[] => {
    return candidateData;
};

export default {
    getCandidates
};