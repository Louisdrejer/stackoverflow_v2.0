import {useState, useEffect} from 'react'
import './SearchPage.css'
import DropdownMenues from '../../Components/DropdownMenues';
import SubmitBox from '../../Components/SubmitBox';
export default function SearchPage() {
    const defaultTopic = 'TOPIC';
    const defaultLanguage = 'LANGUAGE';
    const defaultSkillLevel = 'SKILL LEVEL';

  const [selectedTopic, setSelectedTopic] = useState(defaultTopic);
  const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);
  const [selectedSkillLevel, setSelectedSkillLevel] = useState(defaultSkillLevel);
  const [SearchTerm, setSearchTerm] = useState('')
  
  const handleTopicChange = (topic) => {
    setSelectedTopic(topic);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  const handleSkillLevelChange = (skillLevel) => {
    setSelectedSkillLevel(skillLevel);
  };

  useEffect(() => {
    
    if (selectedSkillLevel !== defaultSkillLevel && selectedLanguage !== defaultLanguage && selectedTopic !== defaultTopic ) {
      console.log(selectedTopic,selectedLanguage, selectedSkillLevel)
    }
  }, [selectedLanguage, selectedSkillLevel, selectedTopic]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      console.log(SearchTerm);
    }
  };
  return (
    <div className="profileBackground">
      <div className="profileBackground2">
      <div className="SearchHeader">DISCOVER ANSWERS</div>
      <div className="SearchPageDropDown">
          <div className="filterText">FILTER TAGS</div>
          <DropdownMenues/>
          
        </div>
        <input
          type="text"
          className='SPSearch'
          placeholder="Search tags"
          value={SearchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
         <div className="searchResultsbox">
            <div className="searchResults">SEARCH RESULTS</div>

         </div>
      </div>
</div>
  )
}
