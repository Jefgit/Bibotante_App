export type Candidates = {
    id: string,
    position: string,
    firstName: string,
    lastName: string,
    partyInitials: string
};

export type PartyList = {
    id: string,
    name: string
};

export interface NewVoterList {
    senators: string[];
    representative: string;
    governor: string;
    vice_governor: string;
    board_member: string[];
    mayor: string;
    vice_mayor: string;
    sangguniang_bayan: string[];
    party_list: string;
}