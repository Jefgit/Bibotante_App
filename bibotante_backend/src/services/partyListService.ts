import partyLists from "../../data/partyList";
import { PartyList } from "../types";

const getPartyLists = (): PartyList[] => {
    return partyLists;
};

export default {
    getPartyLists
};