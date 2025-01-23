import { useState } from 'react'
import Header from './Header'
import Content from './content'
import Footer from './footer'
import Employees from './Employees'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
function App() {
  const [Teams,setTeams] =useState('')
    const [employees, setEmployees] = useState([
        {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA",
        },
        {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA",
        },
        {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA",
        },
        {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB",
        },
        {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB",
        },
        {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB",
        },
        {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC",
        },
        {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC",
        },
        {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC",
        },
        {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD",
        },
        {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD",
        },
        {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD",
        },
    ]);
    function handlleOnChange(event){
      setTeams(event.target.value)
    }
    
    function handlleOnClick(event){
        const transferEmployee = employees.map((employee)=> employee.id === parseInt(event.currentTarget.id)?
        (employee.teamName=== Teams)?{...employee,teamName:''}:{...employee,teamName:Teams}:employee
        );
        setEmployees(transferEmployee);
        }
  return (
    <>
    <Header Teams= {Teams}
       membersInCurrentTeam = {employees.filter((employee)=>
           employee.teamName === Teams
       ).length}
     />
    <Content/>
    <Employees employees={employees}
       Teams={Teams}
       handlleOnClick={handlleOnClick}
       handlleOnChange={handlleOnChange}
     />
      <Footer/>    
</>
  )
}

export default App
