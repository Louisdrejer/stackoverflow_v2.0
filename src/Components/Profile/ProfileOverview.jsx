import React from 'react'
import "./Profile.css"
export default function ProfileOverview() {
  return (
    <div className="profileOverviewBox">
          <div className="profileOverviewProfile">
             <div className="profileOverviewUserLogo">
              <div className="profileOverviewSmallUserLogo"></div>
        </div>
      <div className="profileOverviewProfileName">
        ITUCPH
      </div>
      <div className="profileOverviewProfileEmail">
        itucph@email.dk
      </div>
    </div>
    <div className="profileOverviewInfo">
<div className="profileOverviewQuestionLine">
    <div className="PO_Question">Question</div>
    <div className="PO_QuestionNumber">0</div>
</div>
<div className="profileOverviewAnswersLine">
    <div className="PO_Answers">Answers</div>
    <div className="PO_AnswersNumber">0</div>
</div>
<div className="profileOverviewPLLine">
    <div className="PO_PL">Programming Languages</div>
    <div className="PO_PLNumber">0</div>
</div>
</div>
    </div>
  )
}
