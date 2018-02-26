import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import ListRow from './ListRow';

class StarshipList extends Component {
    componentWillMount() {
        const list = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = list.cloneWithRows(this.props.starships);
    }

    renderRow(starship) {
        return <ListRow starship={starship} />;
    }

    render() {
        return(
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    return { starships: state.starships };
};

export default connect(mapStateToProps)(StarshipList);