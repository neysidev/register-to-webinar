import PropTypes from 'prop-types';

import './index.css';

const Checkbox = ({ name, message }) => {
  return (
    <div className="form-control">
      <input className="checkbox" id={name} type="checkbox" name={name} />
      <label htmlFor={name}>{message}</label>
    </div>
  );
};

Checkbox.propTypes = {
  name: PropTypes.string,
  message: PropTypes.string,
};

export default Checkbox;
