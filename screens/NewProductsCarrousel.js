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
 
export default class MyCarousel extends Component {
 
  constructor(props) {
    super(props);
 
    this.state = {
      pillowList: [],
      visible: 8,
      loading: true,
      width: width - 20,
      widthitem: width /2 - 9,
      height: 90
    };
  }
 


  _renderItem ({item, index}) {
    return (     
        <View style={styles.getSlider}>
        <Image
          source={{uri: item.image}} 
          style={styles.imageSlider}
        />
        <View style={styles.getSliderTitle}>
          <LatoBold style={styles.getSliderTextTitle}>{item.title}</LatoBold>
        </View>
        <View style={styles.getSliderPrice}>
          <LatoBold style={styles.getSliderTextPrice}>{item.price}</LatoBold>
        </View>
      </View>
    );
}

 componentDidMount() {


    this.getPillowsFromApiAsync()

}

 getPillowsFromApiAsync() {
  return fetch(pillowsRest)
    .then((response) => response.json())
    .then((responseJson) => {
     
      const pillowListdata = responseJson;
      this.setState({
        pillowList: pillowListdata
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
 
  render() {
    return (
      <View style={{ flex: 1, paddingRight: 10, paddingLeft: 10 }}>
        <View><LatoLight style={styles.getTitleModule}>New Products</LatoLight></View>
       
        
        <Carousel layout={'default'} layoutCardOffset={10}
              ref={(c) => { this._carousel = c; }}
              data={this.state.pillowList}
              renderItem={this._renderItem}
              sliderWidth={this.state.width}
              itemWidth={this.state.widthitem}
              activeAnimationType={'timing'}
              activeSlideAlignment={'start'}
              activeSlideOffset={10}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              autoplay={true}
              loop={true}
            />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  getSlider: {
    height: 100,
    backgroundColor: '#ffffff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 5,
    marginLeft:2,
    marginRight:4,
    marginBottom: 10,
    borderRadius: 6
  },
  imageSlider: {
    width:85,
    height:90,
    marginLeft:5,
    marginTop: 5
  },
  getSliderTitle: {
    marginTop: -80,
    marginLeft: 95,
    width: width/5,
  },
  getSliderTextTitle: {
    color: "#5b7492",
    fontSize: 13
  },
  getSliderPrice: {
    marginTop: 10,
    marginLeft: 95,
    width: width/4,
  },
  getSliderTextPrice: {
    color: "#ffcb4b",
    fontSize: 15
  },
  getTitleModule: {
    color: "#5b7492",
    fontSize: 15,
    marginBottom:10,
    marginLeft:7,
  }
});