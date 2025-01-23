import "bootstrap/dist/css/bootstrap.min.css";
const Header = ({ Teams, membersInCurrentTeam }) => {
  return (
    <header className="container ">
      <div className="row justify-content-center mt-3 mb-4">
        <div className="col-8">
          <h1>Team Member alloctaion</h1>
          <h3>
            {Teams} has {membersInCurrentTeam} Members
          </h3>
        </div>
      </div>
    </header>
  );
};
export default Header;
