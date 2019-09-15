import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image,
  ActivityIndicator,
  FlatList
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
 
const { width, height } = Dimensions.get('window');

import { LatoBold, LatoLight } from '../components/StyledText';

const pillowsRest = 'https://inmoobi.com/MOCK_DATA.json';
 
export default class MyRecomended extends Component {
 
  constructor(props) {
    super(props);
 
    this.state = {
      pillowListReccomended: [],
      visible: 8,
      loading: true,
      width: width - 20,
      widthitem: width /2 - 9,
    };
  }
 




 componentDidMount() {


    this.getRecommendedFromApiAsync()

}

getRecommendedFromApiAsync() {
  return fetch(pillowsRest)
    .then((response) => response.json())
    .then((responseJson) => {
     
      const pillowListdata = responseJson;
      this.setState({
        pillowListReccomended: pillowListdata
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
 
  render() {
    return (
      <View style={{ flex: 1, paddingRight: 10, paddingLeft: 10, width: width}}>
        <LatoLight style={styles.getTitleModule}>The Recommended</LatoLight>
       
  {this.state.pillowListReccomended.map(reco => {
    const ishot = reco.ishot;
    return(     
        <View key={reco.id} style={styles.getRecommendModule}>
          
          {ishot   ? (
          <LatoBold style={styles.getHot}>HOT</LatoBold>
          ) : (
          null
          )} 
          <Image
            source={{uri: 'https://image.freepik.com/foto-gratis/representacion-3d-hermosa-suite-dormitorio-lujo-hotel-television-mesa-trabajo_105762-524.jpg'}} 
            style={styles.imageSlider}
          />
          <LatoBold style={styles.getTitle}>{reco.title}</LatoBold>
          <LatoLight style={styles.getDesc}>{reco.description}</LatoLight>
          <LatoBold style={styles.getPrice}>{reco.price}</LatoBold>
          <LatoBold style={styles.getBuy}>Buy</LatoBold>
        </View>
    )}
  )}

      </View>
    );
  }
}

const styles = StyleSheet.create({
  getRecommendModule: {
    textAlign: 'left',
    width: width - 20,
    height: 140,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom:20,
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 1,
    overflow: 'hidden'
  },
  getTitleModule: {
    color: "#5b7492",
    fontSize: 15,
    marginBottom:10,
    marginLeft:7,
    marginTop:10,
    textAlign: 'left'
  },
  imageSlider: {
    width:130,
    height:120,
    marginTop: 10,
    marginLeft:10,
  },
  getTitle: {
    marginTop: -98,
    color: "#5b7492",
    fontSize: 17,
    marginBottom:5,
    marginLeft:150, 
  },
  getDesc: {
    color: '#888d97',
    fontSize:14,
    marginLeft:150, 
  },
  getPrice: {
    color: "#fdca4b",
    fontSize: 17,
    marginBottom:5,
    marginTop:10,
    marginLeft:150, 
  },
  getBuy: {
    backgroundColor: '#5a7392',
    color: '#ffffff',
    width: '10%',
    borderRadius:20,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 4,
    paddingRight: 4,
    textAlign: 'center',
    fontSize: 15,
    marginLeft: '70%',
    marginTop: -23
  },
  getHot: {
    position: 'absolute',
    marginLeft: '88%',
    marginTop: -5,
    paddingTop:20,
    paddingLeft:10,
    paddingRight:10,
    backgroundColor:'#ffd33f',
    color:'#ffffff',
    borderRadius: 50,
    textAlign: 'center',
    width: 150,
    height: 40,
    transform: [
      { rotate: '50deg'},
    ],
  }
});