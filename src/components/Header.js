import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1 className="h1">{title}</h1>
      <Button onClick={onAdd} color={showAdd ? "red" : "green" } text={showAdd ? "Close" : "Add"} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// How to do CSS in JS
// const headingStyle = {
//     color: 'blue',
//     display: 'flex',
//     justifyContent: 'center',
//     backgroundColor: 'red'

// }

export default Header;
