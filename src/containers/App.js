import React, {Component} from 'react'
import { connect } from 'react-redux'
import {render} from 'react-dom'
import PropTypes from 'prop-types'
import User from "../components/User";
import Page from "../components/Page";
import {getPhotos} from "../ActionCreators/pageAC";
import {handleLogin} from "../ActionCreators/userAC";

class App extends Component {
    static propTypes = {
        user: PropTypes.object.isRequired,
        page: PropTypes.object.isRequired,
        getPhotos: PropTypes.func.isRequired,
        handleLogin: PropTypes.func.isRequired
    };

    render() {
        const { user, page, getPhotos, handleLogin} = this.props;

        return (
            <div className={'app'}>
                <User name={user.name} handleLogin={handleLogin} error={user.error} />
                <Page photos={page.photos} year={page.year} getPhotos={getPhotos} fetching={page.fetching} error={page.error} />
            </div>
        )
    }
}

export default connect((state) => ({
    user: state.user,
    page: state.page
}), { getPhotos, handleLogin })(App);