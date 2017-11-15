import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableHighlight, TouchableOpacity, Button } from 'react-native';
import SlidingUpPanel from 'rn-sliding-up-panel';
import axios from 'axios';

export default class RailWays extends Component {
  state = {
    visible: false,
    allow: false,
    var: '',
    as: false,
    ceoJson: [],
    nijeceoJson: [],
    n: '0',
  }
  prona = {
    var: false
  }
  componentWillMount() {
    axios.get('http://192.168.0.15:8000/railways')
      .then(response => {
        this.setState({ ceoJson: response.data.menuTrees[1].menuTree }); 
        this.setState({ nijeceoJson: response.data.menuTrees[1].menuTree})
      } 
    );
      
  }
  renderRailways() {

    return this.state.ceoJson.map(rail => 
      <TouchableHighlight key={rail.menuId} onPress={() => { this.setState({ var: rail.menuId }) }} underlayColor="white">
        <View style={styles.button}>
          <Text>{rail.title}</Text>
        </View>
      </TouchableHighlight>
    );
  }
  enderRailways() {
    
        return this.state.ceoJson.map(rail =>
          <View key={rail.menuId} >
          {this.state.var == rail.menuId ?  this.state.ceoJson.map(rail => ); : null}
          </View>
        );
      }

      senderRailways() {
        
             return this.state.nijeceoJson.map(child => 
                
                    <Text style={styles.textStyle} key={child.menuId}> {child.title} </Text>
                
              );
            }

  functionName() {
    return <Text> ssss </Text>
  }
  functionNames() {
    return <Text> aaaaa </Text>
  }
  render() {
    return (


      <View style={styles.container}>

        <View style={styles.navbar}>

          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end', marginTop: '2.5%' }}>
          
            {this.renderRailways()}

          </View>
        </View>
        <View style={styles.content}>

          <Image
            style={{ width: '100%', height: '100%', }}
            source={{ uri: 'http://www.planwallpaper.com/static/images/880665-road-wallpapers.jpg' }}
          >
         {this.enderRailways()}
            <SlidingUpPanel 
              ref={c => this._panel = c}
              visible={this.state.visible}
              allowDragging={this.state.allow}
              onRequestClose={() => this.setState({ visible: false })}>
              <View style={styles.main_panel}>
              
                <ScrollView contentContainerStyle={styles.scroll}>
{this.renderRailways()}
                </ScrollView>
                
                
              </View>
            </SlidingUpPanel>
          </Image>
        </View>
        <View style={styles.footbar}>
          <TouchableOpacity onPress={() => { this.setState({ visible: true }); this._panel.transitionTo(0); }}  >
            <Text>Show panel</Text>
          </TouchableOpacity>

          {this.enderRailways()}
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4169e1',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  navbar: {
    height: '12%',
    width: '100%',
    backgroundColor: 'white',
  },
  content: {

    backgroundColor: 'yellow',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footbar: {
    height: '9%',
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'white',

  },

  button: {
    marginBottom: 30,
    width: 200,
    alignItems: 'center',
  },

  main_panel: {
    height: '40%',
    marginTop: '23%',
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    borderColor: 'white',
  },
  scroll: { 
    flexDirection: 'row', 
    flex: 1, backgroundColor: 'red', width: '100%' }
});
