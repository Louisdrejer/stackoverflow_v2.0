import React from 'react'
import LeftNav from '../Homepage/LeftNav'
import "./Profile.css"
import ProfileHeaderBox from './ProfileHeaderBox'
import ProfileOverview from './ProfileOverview'
import ProfilePL_Overview from './ProfilePL_Overview'

export default function Profile() {
  return (
    <div className="profileBackground">
      <LeftNav />
      <div className="profileOverviewDisplay">
        <ProfileHeaderBox />
        <div className="profileOverviewDisplay2">
          <ProfileOverview />
          <ProfilePL_Overview />
        </div>
      </div>


    </div>

  )
}