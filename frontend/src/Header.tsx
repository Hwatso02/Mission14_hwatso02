import logo from './MovieLogo.png';

//create function for Header
function Header(props: any) {
  return (
    <header className="row">
      <div className="col-2">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="col-8">
        <h4>{props.slogan}</h4>
      </div>
    </header>
  );
}

//make function accessible to other files
export default Header;
