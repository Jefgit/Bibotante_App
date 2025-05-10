import axios from 'axios';
import { apiBaseUrl } from '../constants';
import { type PartyLists } from '../types';

const getPartyLists = async () => {
    const { data } = await axios.get<PartyLists[]>(`${apiBaseUrl}/partylists`);
    return data;
}

export default {
    getPartyLists
}