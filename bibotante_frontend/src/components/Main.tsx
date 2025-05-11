import type React from 'react';
import type { Candidates, NewVoterList, PartyLists } from '../types';
import dataFileService from '../services/dataFile';
import Selection from './Selection';
import { useState } from 'react';

interface Props {
  candidates: Candidates[];
  partyLists: PartyLists[];
  setNewVoterLists: React.Dispatch<React.SetStateAction<NewVoterList>>,
  newVoterLists: NewVoterList
}

const Main = ({candidates, partyLists, setNewVoterLists, newVoterLists}: Props) => {
  const [message, setMessage] = useState('');

  const downloadFile = (content:string) => {
        const link = document.createElement("a");
         const file = new Blob([content], { type: 'text/plain' });
         link.href = URL.createObjectURL(file);
         link.download = "kodigo.txt";
         link.click();
         URL.revokeObjectURL(link.href)
        }
  const saveVoterLists = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    try {
      await 
        dataFileService
        .createTextFile(newVoterLists)
        .then(data => {downloadFile(data)
          console.log(data)
        });

        setTimeout(() => {
          setMessage('')
        }, 10000)
    } catch (error: unknown) {
      console.log(error);
    }
  }
  return (
    <main>
        {message && <p className='message'>{message}</p>}
        <h1>Voter's Kodigo Generator</h1>
        <h2>For Gattareños use only</h2>
        <h3>Gattaran, Cagayan, Philippines</h3>
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