import React from 'react';
import RestaurantListPage from './RestaurantListPage';

export default class App extends React.Component {
    state = { name: 'viewers' }
    render() {
        return <div>
            <RestaurantListPage/>
            </div>;
    }
}
