import React from 'react'
import StartBox from './startBox'
import reactlogo from "../assets/react.svg"

export const Dashboard = () => {
  return (
    <div>dashboard
        <StartBox logo={reactlogo} date="7 days" value="1000" title="Total Revenue"/>
    </div>
  )
}
