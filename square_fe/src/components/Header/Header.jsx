/* eslint-disable react/prop-types */
import * as headerStyle from './Header.module.css';

const Header = ({ title, description, buttonText }) => {
  return (
    <header className={headerStyle.pageHeader}>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      {buttonText && <button className={headerStyle.addButton}>{buttonText}</button>}
    </header>
  );
};

export default Header;

