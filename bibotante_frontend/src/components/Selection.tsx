import type { Candidates, NewVoterList, PartyLists } from '../types';

interface Props {
  candidates: Candidates[];
  partyLists: PartyLists[];
  setNewVoterLists: React.Dispatch<React.SetStateAction<NewVoterList>>,
  newVoterLists: NewVoterList
}
const Selection = ({candidates, partyLists, setNewVoterLists, newVoterLists}: Props) => {
  const senatorialCandidates = candidates.filter(candidate => candidate.position === 'Senator');
  const representativeCandidates = candidates.filter(candidate => candidate.position === 'Representative');
  const governorCandidates = candidates.filter(candidate => candidate.position === 'Governor');
  const viceGovernorCandidates = candidates.filter(candidate => candidate.position === 'Vice-Governor');
  const boardMemberCandidates = candidates.filter(candidate => candidate.position === 'Board_Member');
  const mayorCandidates = candidates.filter(candidate => candidate.position === 'Mayor');
  const viceMayorCandidates = candidates.filter(candidate => candidate.position === 'Vice-Mayor');
  const sbCandidates = candidates.filter(candidate => candidate.position === 'Sangguniang_Bayan');

  const limitChecked = (maxChecked: number, name: string) => {
    const checkboxes = document.querySelectorAll(`input[type="checkbox"][name=${name}]`);

    checkboxes.forEach(checkbox   => {
      checkbox.addEventListener('change', () => {
        const checkedCount = document.querySelectorAll(`input[type="checkbox"][name=${name}]:checked`).length;
        if (checkedCount > maxChecked) {
          (checkbox as HTMLInputElement).checked = false ;
          alert(`You can only select up to ${maxChecked} options.`);     
        }
      });
    });
  }

  const handleChange = (e: React.SyntheticEvent) => {
    const {value, checked, name,} = e.target as HTMLInputElement;
    const {senators, board_member, sangguniang_bayan} = newVoterLists;
    switch (name) {
      case 'Senator':
        if(checked && senators.length < 12){
          void limitChecked(12, name);
          setNewVoterLists({
            ...newVoterLists,
            senators: [...senators, value]
          })
        } else {
          setNewVoterLists({
            ...newVoterLists,
            senators: newVoterLists.senators.filter(senator => senator !== value)
          })
        };
        break;
      case 'Board_Member':
        void limitChecked(3, name);
        if(checked && board_member.length < 3){
          setNewVoterLists({
            ...newVoterLists,
            board_member:[...board_member, value]
          })
        } else {
          setNewVoterLists({
            ...newVoterLists,
            board_member: newVoterLists.board_member.filter(bm => bm !== value)
          })
        };
        break;
      case 'Sangguniang_Bayan':
        void limitChecked(8, name);
        if(checked && sangguniang_bayan.length < 8){
          setNewVoterLists({
            ...newVoterLists,
            sangguniang_bayan:[...sangguniang_bayan, value]
          })
        } else {
          setNewVoterLists({
            ...newVoterLists,
            sangguniang_bayan: newVoterLists.sangguniang_bayan.filter(sb => sb !== value)
          })
        };
        break; 
      default:
        break;
    }
  }

  const handleRadioChange = (e: React.SyntheticEvent) => {
    const { value, name } = e.target as HTMLInputElement;

    switch (name) {
      case 'Representative':
        setNewVoterLists({
          ...newVoterLists,
          representative: value
        })
        break;
      case 'Governor':
        setNewVoterLists({
          ...newVoterLists,
          governor: value
        })
        break;
      case 'Vice-Governor':
        setNewVoterLists({
          ...newVoterLists,
          vice_governor: value
        })
        break;
      case 'Mayor':
        setNewVoterLists({
          ...newVoterLists,
          mayor: value
        })
        break;
      case 'Vice-Mayor':
        setNewVoterLists({
          ...newVoterLists,
          vice_mayor: value
        })
        break;
      default:
        break;
    }
  }

  const parseCandidates_CB = (candidates: Candidates[]) => {
    return candidates
      .map((candidate, index) => 
        <div key={`${candidate.id}`} className='cell'>
          <input
            name={`${candidate.position}`}
            key={`${candidate.id}`}
            id={`${(candidate.lastName).replace(/\s/g, "")}_${candidate.id}`}
            type='checkbox' 
            value={
              (`${index+1} ${candidate.lastName}, ${candidate.firstName} (${candidate.partyInitials})`)
              .toUpperCase()}
              onChange={handleChange}
            />
            <label htmlFor={`${candidate.lastName}_${candidate.id}`}>
              {
                (`${index+1} ${candidate.lastName}, ${candidate.firstName} (${candidate.partyInitials})`)
                .toUpperCase()
              }
            </label> 
        </div>
        )
  }
  const parseCandidates_Radio = (candidates: Candidates[]) => {
    return candidates
      .map((candidate, index) => 
        <div key={`${candidate.id}`} className='cell'>
        <input
          key={`${candidate.id}`}
          name={`${candidate.position}`}
          id={`${candidate.lastName}_${candidate.firstName}`}
          type='radio' 
          value={
            (`${index+1} ${candidate.lastName}, ${candidate.firstName} (${candidate.partyInitials})`)
            .toUpperCase()}
            onChange={handleRadioChange}
          />
          <label htmlFor={`${candidate.lastName}_${candidate.firstName}`}>
            {
              (`${index+1} ${candidate.lastName}, ${candidate.firstName} (${candidate.partyInitials})`)
              .toUpperCase()
            }
          </label> 
        </div>
        )
  }

  const partyListSelection = partyLists
    .map((party, index) => 

      party.name !== "Wage Hike" ?
     <div key={`${party.id}`} className='cell'>
      <input 
        name='partyList'
        key={`${party.id}`} 
        type='radio' 
        id={`${party.name}`} 
        value={`${index+1} ${(party.name).toUpperCase()}`}
        onChange={(e) => setNewVoterLists({...newVoterLists, party_list:e.target.value})}
      />
      <label htmlFor={`${party.name}`} >{`${index+1} ${(party.name).toUpperCase()}`}</label>
    </div>
    : ''
      )
  
  return (
    <div className='mainContainer'>
      <div className='category'>
        <div className='title green'>
          <h2>SENATOR / Vote for 12</h2>
          <h3>(Bumoto ng hindi hihigit sa 12)</h3>
        </div>
        <div className='selections senators'>
          {parseCandidates_CB(senatorialCandidates)}
        </div>
      </div>
      <div className='category'>
        <div className='title blue'>
          <h2>MEMBER, HOUSE OF REPRESENTATIVES / Vote for 1</h2>
          <h3>(Bumoto ng hindi hihigit sa 1)</h3>
        </div>
        <div className='selections'>
          {parseCandidates_Radio(representativeCandidates)}
        </div>
      </div>
      <div className='category'>
        <div className='title green'>
          <h2>PROVINCIAL GOVERNOR / Vote for 1</h2>
          <h3>(Bumoto ng hindi hihigit sa 1)</h3>
        </div>
        <div className='selections'>
          {parseCandidates_Radio(governorCandidates)}
        </div>
      </div>
      <div className='category'>
        <div className='title blue'>
          <h2>PROVINCIAL VICE-GOVERNOR / Vote for 1</h2>
          <h3>(Bumoto ng hindi hihigit sa 1)</h3>
        </div>
        <div className='selections'>
          {parseCandidates_Radio(viceGovernorCandidates)}
        </div>
      </div>
      <div className='category'>
        <div className='title green'>
          <h2>MEMBER, SANGGUNIANG PANLALAWIGAN / Vote for 3</h2>
          <h3>(Bumoto ng hindi hihigit sa 3)</h3>
        </div>
        <div className='selections boardMember'>
          {parseCandidates_CB(boardMemberCandidates)}
        </div>
      </div>
      <div className='category'>
        <div className='title blue'>
          <h2>MAYOR / Vote for 1</h2>
          <h3>(Bumoto ng hindi hihigit sa 1)</h3>
        </div>
        <div className='selections'>
          {parseCandidates_Radio(mayorCandidates)}
        </div>
      </div>
      <div className='category'>
        <div className='title green'>
          <h2>VICE-MAYOR / Vote for 1</h2>
          <h3>(Bumoto ng hindi hihigit sa 1)</h3>
        </div>
        <div className='selections'>
          {parseCandidates_Radio(viceMayorCandidates)}
        </div>
      </div>
      <div className='category'>
        <div className='title blue'>
          <h2>MEMBER, SANGGUNIANG BAYAN / Vote for 8</h2>
          <h3>(Bumoto ng hindi hihigit sa 8)</h3>
        </div>
        <div className='selections sb'>
          {parseCandidates_CB(sbCandidates)}
        </div>
      </div>
      <div className='category'>
        <div className='title green'>
          <h2>PARTY LIST / Vote for 1</h2>
          <h3>(Bumoto ng hindi hihigit sa 1)</h3>
        </div>
        <div className='selections partyList'>
          {partyListSelection}
        </div>
      </div>
      <button className="save" type='submit'>Save</button>
    </div>
  )
}

export default Selection