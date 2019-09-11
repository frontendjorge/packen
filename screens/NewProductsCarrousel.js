import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image
} from 'react-native';
import Carousel from 'react-native-looped-carousel-improved';
 
const { width, height } = Dimensions.get('window');

import { LatoBold, LatoLight } from '../components/StyledText';
 
export default class MyCarousel extends Component {
 
  constructor(props) {
    super(props);
 
    this.state = {
      size: { width, height },
    };
  }
 
  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: width-20, height: 100 } });
  }
 
  render() {
    return (
      <View style={{ flex: 1, paddingRight: 10, paddingLeft: 10 }} onLayout={this._onLayoutDidChange}>
        <View><LatoLight style={styles.getTitleModule}>New Products</LatoLight></View>
        <Carousel
          delay={2000}
          style={this.state.size}
          autoplay={false}
          pageInfo={false}
          isLooped={false}
          bullets={false}
          //onAnimateNextPage={(p) => console.log(p)}
        >
          <View style={styles.getSlider}>

            <Image
              source={
                __DEV__
                  ? require('../assets/images/slide1.jpg')
                  : require('../assets/images/slide1.jpg')
              }
              style={styles.imageSlider}
            />
            <View style={styles.getSliderTitle}>
              <LatoBold style={styles.getSliderTextTitle}>Pure White Water</LatoBold>
            </View>
            <View style={styles.getSliderPrice}>
              <LatoBold style={styles.getSliderTextPrice}>$14.50</LatoBold>
            </View>
          </View>
          <View style={styles.getSlider}>

            <Image
              source={
                __DEV__
                  ? require('../assets/images/slide2.jpg')
                  : require('../assets/images/slide2.jpg')
              }
              style={styles.imageSlider}
            />
            <View style={styles.getSliderTitle}>
              <LatoBold style={styles.getSliderTextTitle}>Pure White Water</LatoBold>
            </View>
            <View style={styles.getSliderPrice}>
              <LatoBold style={styles.getSliderTextPrice}>$14.50</LatoBold>
            </View>
          </View>
          <View style={styles.getSlider}>

            <Image
              source={
                __DEV__
                  ? require('../assets/images/slide1.jpg')
                  : require('../assets/images/slide1.jpg')
              }
              style={styles.imageSlider}
            />
            <View style={styles.getSliderTitle}>
              <LatoBold style={styles.getSliderTextTitle}>Pure White Water</LatoBold>
            </View>
            <View style={styles.getSliderPrice}>
              <LatoBold style={styles.getSliderTextPrice}>$14.50</LatoBold>
            </View>
          </View>
          <View style={styles.getSlider}>

            <Image
              source={
                __DEV__
                  ? require('../assets/images/slide2.jpg')
                  : require('../assets/images/slide2.jpg')
              }
              style={styles.imageSlider}
            />
            <View style={styles.getSliderTitle}>
              <LatoBold style={styles.getSliderTextTitle}>Pure White Water</LatoBold>
            </View>
            <View style={styles.getSliderPrice}>
              <LatoBold style={styles.getSliderTextPrice}>$14.50</LatoBold>
            </View>
          </View>
          <View style={styles.getSlider}>

            <Image
              source={
                __DEV__
                  ? require('../assets/images/slide1.jpg')
                  : require('../assets/images/slide1.jpg')
              }
              style={styles.imageSlider}
            />
            <View style={styles.getSliderTitle}>
              <LatoBold style={styles.getSliderTextTitle}>Pure White Water</LatoBold>
            </View>
            <View style={styles.getSliderPrice}>
              <LatoBold style={styles.getSliderTextPrice}>$14.50</LatoBold>
            </View>
          </View>
        </Carousel>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  getSlider: {
    width: width/2.2,
    backgroundColor: '#ffffff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    marginLeft:3,
    marginRight: 6,
    marginBottom: 10,
    borderRadius: 6
  },
  imageSlider: {
    width:75,
    height:75,
    marginLeft:5,
    marginTop: 6
  },
  getSliderTitle: {
    marginTop: -70,
    marginLeft: 90,
    width: width/4,
  },
  getSliderTextTitle: {
    color: "#5b7492",
    fontSize: 15
  },
  getSliderPrice: {
    marginTop: 10,
    marginLeft: 90,
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