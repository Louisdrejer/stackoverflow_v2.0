import {useState, useEffect} from 'react'
import LeftNav from '../../Components/LeftNav';
import './SearchPage.css'
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
          <div className="SP1dropdown">
            <span>{selectedTopic}</span>
            <div className="SP1dropdown-content">
              <p onClick={() => handleTopicChange('Topic #1')} style={{ cursor: 'pointer' }}>
              Topic #1
              </p>
              <p onClick={() => handleTopicChange('Topic #2')} style={{ cursor: 'pointer' }}>
              Topic #2
              </p>
              <p onClick={() => handleTopicChange('Topic #3')} style={{ cursor: 'pointer' }}>
              Topic #3
              </p>
            </div>
            <div className="SP1arrow-down"></div>
          </div>
          <div className="SP2dropdown">
            <span>{selectedLanguage}</span>
            <div className="SP2dropdown-content">
              <p onClick={() => handleLanguageChange('Python')} style={{ cursor: 'pointer' }}>
                Python
              </p>
              <p onClick={() => handleLanguageChange('Java')} style={{ cursor: 'pointer' }}>
                Java
              </p>
              <p onClick={() => handleLanguageChange('JavaScript')} style={{ cursor: 'pointer' }}>
                JavaScript
              </p>
            </div>
            <div className="SP2arrow-down"></div>
          </div>
          <div className="SP3dropdown">
            <span>{selectedSkillLevel}</span>
            <div className="SP3dropdown-content">
            <p onClick={() => handleSkillLevelChange('Beginner')} style={{ cursor: 'pointer' }}>
                Beginner
              </p>
              <p onClick={() => handleSkillLevelChange('Intermediate')} style={{ cursor: 'pointer' }}>
                Intermediate
              </p>
              <p onClick={() => handleSkillLevelChange('Expert')} style={{ cursor: 'pointer' }}>
                Expert
              </p>
            </div>
            <div className="SP3arrow-down"></div>
          </div>
          
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
