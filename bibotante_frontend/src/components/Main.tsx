import type React from 'react';
import type { Candidates, NewVoterList, PartyLists } from '../types';
import dataFileService from '../services/dataFile';
import Selection from './Selection';

interface Props {
  candidates: Candidates[];
  partyLists: PartyLists[];
  setNewVoterLists: React.Dispatch<React.SetStateAction<NewVoterList>>,
  newVoterLists: NewVoterList
}

const Main = ({candidates, partyLists, setNewVoterLists, newVoterLists}: Props) => {

  const saveVoterLists = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      await dataFileService.createTextFile(newVoterLists);
    } catch (error: unknown) {
      console.log(error);
    }
  }
  return (
    <main>
        <form onSubmit={saveVoterLists}>
            <Selection 
              candidates={candidates} 
              partyLists={partyLists} 
              setNewVoterLists = {setNewVoterLists}
              newVoterLists =  {newVoterLists}
            />
        </form>
    </main>
  )
}

export default Main