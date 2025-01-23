    import "bootstrap/dist/css/bootstrap.min.css";
    import femaleProfile from "./images/femaleProfile.jpg";
    import maleProfile from "./images/maleProfile.jpg";


    const Employees = ({employees,handlleOnClick,Teams,handlleOnChange}) => {
    return (
        <main className="container">
        <div className="row justify-content-center mb-3 mt-3">
            <div className="col-6">
                <select className="form-select form-select-lg" style={{cursor:'pointer'}} onChange={handlleOnChange}>
                    <option value='TeamA'>Team A</option>
                    <option value='TeamB'>Team B</option>
                    <option value='TeamC'>Team C</option>
                    <option value='TeamD'>Team D</option>
                </select>
            </div>
        </div>
        <div className="row mt-6 justify-content-center ">
            <div className="col-sm-4 col-md-6 col-8  ">
            <div className="card-collection">
                {employees.map((employee) => (
                <div
                    className={(employee.teamName === Teams?'card m-2 standout':'card m-2')}
                    style={{cursor:"pointer"}}
                    id={employee.id
                    }
                    onClick={handlleOnClick}    
                >
                {(employee.gender==='male'?  <img className="card-img-top" src={maleProfile} />:   <img className="card-img-top" src={femaleProfile} />)}
                    <div className="card-body">
                    <h5 className="card-title">Full Name: {employee.fullname}</h5>
                    <p className="card-text">
                        Designation: {employee.designation}
                        TeamName: {employee.teamName}
                    </p>
                    </div>
                </div>
                ))}
            </div>
            </div>
        </div>
        </main>
    );
    };
    export default Employees;
