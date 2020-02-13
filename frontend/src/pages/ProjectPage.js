import React from 'react';
import { Route, withRouter } from 'react-router-dom';

const ItemPage = props => {
    return (
        <main id="item-page-container">
            <Route path="/post/:id/:name?" render={({ match }) => match.params.id}></Route>
        </main>
    );
};

export default withRouter(ItemPage);
