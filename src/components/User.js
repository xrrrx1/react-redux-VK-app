import React, {Component} from 'react'
import {render} from 'react-dom'
import PropTypes from 'prop-types'

class User extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        handleLogin: PropTypes.func.isRequired,
        error: PropTypes.string.isRequired
    };

    render() {
        const { name, error, handleLogin } = this.props;
        let template;

        if (name) {
            template = <p>Привет, {name}!</p>
        } else {

            template = <button className='btn' onClick={handleLogin}>Войти</button>
        }

        return <div className='ib user'>
            {template}
            {error ? <p className='error'> {error}. <br /> Попробуйте еще раз.</p> : ''}
        </div>
    }
}

export default User