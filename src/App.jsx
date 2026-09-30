import { useState } from 'react'
import './App.css'
import MemberCard from './components/TeamMemberCard'
import { team } from './Data/Data'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <h1>hey guys </h1>
        {
          team.map(member=>{

            return <MemberCard name={member.name} role={member.role}/>
          })
        }
        
       
        
    </>
  )
}

export default App
