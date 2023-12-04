import React, { useState, useEffect } from 'react';

export default function LanguageDropDown({onLanguageChange}) {
    const defaultLanguage = 'LANGUAGE';

    const [selectedLanguage, setSelectedLanguage] = useState(defaultLanguage);

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language);
        onLanguageChange(language);
      };
    return (
        <div className="SP2dropdown">
            <span>{selectedLanguage}</span>
            <div className="SP2dropdown-content">
                <p onClick={() => handleLanguageChange('PYTHON')} style={{ cursor: 'pointer' }}>
                    PYTHON
                </p>
                <p onClick={() => handleLanguageChange('JAVA')} style={{ cursor: 'pointer' }}>
                    JAVA
                </p>
                <p onClick={() => handleLanguageChange('JAVASCRIPT')} style={{ cursor: 'pointer' }}>
                    JAVASCRIPT
                </p>
            </div>
            <div className="SP2arrow-down"></div>
        </div>

    )
}


