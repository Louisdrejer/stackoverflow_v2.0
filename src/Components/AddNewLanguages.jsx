import React from 'react';

export default function AddNewLanguages({ onClick }) {
  return (
    <div className="addNewLanguages" onClick={onClick}>
      <div className="addNewLanguagesButton">+</div>
      <div className="addNewLanguagesText">Add A New Language</div>
    </div>
  );
}