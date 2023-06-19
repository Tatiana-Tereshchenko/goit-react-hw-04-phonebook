import { Component } from 'react';
import PropTypes from 'prop-types'; 
import css from './Filter.module.css';


export class Filter extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label className={css.label}>
        Filter contacts by name:
        <input className={css.text} type="text" value={value} onChange={onChange} />
      </label>
    );
  }
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};