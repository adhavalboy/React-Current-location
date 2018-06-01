    
      import React, { Component } from "react";
      import { AppRegistry, StyleSheet, Dimensions, Image, View, StatusBar, TouchableOpacity } from "react-native";
      import { Container, Text } from "native-base";
      
      import MapView from 'react-native-maps';
      import Polyline from '@mapbox/polyline';
      // Importing Stack Navigator library to add multiple activities.
import { StackNavigator } from 'react-navigation';

const util=require('util');
      
      class LocationA extends Component {
        static navigationOptions ={
          title:'Map',
        };
        constructor(props) {
          super(props);
      
          this.state = {
            latitude: null,
            longitude: null,
            error: null,
            concat: null,
            latitudeDelta: null,
            longitudeDelta: null,
            coords:[],
            
          };
      
        }
      
        componentDidMount() {
          navigator.geolocation.getCurrentPosition(
             (position) => {
               this.setState({
                 latitude: position.coords.latitude,
                 longitude: position.coords.longitude,
                 error: null,
               });
        
             },
             (error) => this.setState({ error: error.message }),
             { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
           );
      
         }
      
 
        render() {
       
          return (
          
            <MapView style={styles.map} initialRegion={{
            latitude:20.5937,
            longitude:78.9629,
            latitudeDelta: 0.00522,
              longitudeDelta:Dimensions.get("window").width / Dimensions.get("window").height * 0.00522
            }}>
      
            {!!this.state.latitude && !!this.state.longitude && <MapView.Marker
               coordinate={{"latitude":this.state.latitude,"longitude":this.state.longitude}}
               title={"Your Location"}
             />}
      
            </MapView>
          );
        }
      }
      
      const styles = StyleSheet.create({
        map: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
      });
      
      export default LocationA;
