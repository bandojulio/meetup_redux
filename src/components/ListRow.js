import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListRow extends Component {

    renderDetail() {
        if (this.props.starship.name === this.props.selectedStarshipName) {
            return (
                <View  style={styles.viewStyle}>
                    <Text>{this.props.starship.manufacturer}</Text>
                </View>
            );
        }
    }

    render() {

        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectStarship(this.props.starship.name)}
            >
                <View>
                    <View style={styles.viewStyle}>
                        <Text style={styles.textStyle}>{this.props.starship.name}</Text>
                    </View>
                    {this.renderDetail()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    viewStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
    textStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};

const mapStateToProps = state => {
    return { selectedStarshipName: state.selectedStarshipName };
};
export default connect(mapStateToProps, actions)(ListRow);