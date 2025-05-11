import { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import {type Candidates, type PartyLists, type NewVoterList } from './types';
import candidateService from './services/candidates';
import partyListService from './services/partyLists';
import Footer from './components/Footer';


const App = () => {
  const [candidates, setCandidates] = useState<Candidates[]>([]);
  const [partyLists, setPartyList] = useState<PartyLists[]>([]);
  const [newVoterLists, setNewVoterLists] = 
    useState<NewVoterList>({
                            senators: [],
                            representative: '',
                            governor: '',
                            vice_governor: '',
                            board_member: [],
                            mayor: '',
                            vice_mayor: '',
                            sangguniang_bayan: [],
                            party_list: ''
                          });

  useEffect(() => {
    const fetchCandidates = async() => {
      const candidates = await candidateService.getCandidates();
      setCandidates(candidates);
    }

    const fetchPartyLists = async () => {
      const partyLists = await partyListService.getPartyLists();
      setPartyList(partyLists);
    }

    void fetchCandidates();
    void fetchPartyLists();
  },[])

  console.log(newVoterLists);

  return (
    <>
      <Header/>
      <Main 
        candidates = {candidates} 
        partyLists = {partyLists} 
        setNewVoterLists = {setNewVoterLists}    
        newVoterLists= {newVoterLists}
      />
      <Footer />
    </>
  )
}

export default App