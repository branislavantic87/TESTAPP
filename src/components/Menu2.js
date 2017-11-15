import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import axios from 'axios';

class Menu2 extends Component {

    renderMenus2() {
        return this.props.menu.children.map(child => 
            
                <Text style={styles.textStyle} key={child.menuId}> {child.title} </Text>
            
        );
    }
    render() {
        return (
            <View style={styles.menu1Container}>
                <TouchableHighlight key={this.props.menu.menuId} onPress={() => { this.setState({ var: this.props.menu.menuId }) }} underlayColor="white">
        <View style={styles.button}>
          <Text>{this.props.menu.title}</Text>
        </View>
      </TouchableHighlight>
                
                {this.renderMenus2()}
            </View>
        );
    }
}

const styles = {
    menu1Container: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderBottomWidth: 0
    },
    textStyle: {
        paddingLeft: 15
    }
}

export default Menu2;
