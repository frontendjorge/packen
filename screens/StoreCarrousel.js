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
import RadioButton from 'react-native-radio-button';
import NumericInput from 'react-native-numeric-input';
 
const { width, height } = Dimensions.get('window');

import { LatoBold, LatoLight } from '../components/StyledText';

const pillowsRest = 'https://inmoobi.com/MOCK_DATA.json';
 
export default class MyStoreCarousel extends Component {
 
  constructor(props) {
    super(props);
 
    this.state = {
      pillowList: [],
      visible: 8,
      showIndicator:false,
      width: width,
      widthitem: width,
      value: 0
    };
  }
 


  _renderItem ({item, index}) {
    const ishot = item.ishot;
    return (     
      <View style={styles.getSliderBig}>        
        <Image
          source={{uri: item.image}} 
          style={styles.imageSlider}
        />
        <View style={styles.getSlider}>

          <LatoBold style={styles.getSliderTextTitle}>{item.title}</LatoBold>
          <LatoLight style={styles.getSliderTextDesc}>{item.description}</LatoLight>

          <View style={styles.getOptions}>
            <LatoBold style={styles.getLabelColour}>Colour</LatoBold>
            <View style={styles.getColour}>
              <RadioButton
              animation={'bounceIn'}
              innerColor={'#597491'}
              outerColor={'#ffcf44'}
              isSelected={true}
              size={20}
              onPress={() => alert('color 1')}
              />
            </View>
            <View style={styles.getColour}>
            <RadioButton
              animation={'bounceIn'}
              innerColor={'#a4c0cb'}
              outerColor={'#ffcf44'}
              isSelected={true}
              size={20}
              onPress={() => alert('color 2')}
              />
            </View>

            <View style={styles.getColour}>
            <RadioButton
              animation={'bounceIn'}
              innerColor={'#b09f98'}
              outerColor={'#ffcf44'}
              isSelected={true}
              size={20}
              onPress={() => alert('color 3')}
              />
              </View>
              <View style={styles.getColour}>
            <RadioButton
              animation={'bounceIn'}
              innerColor={'#b09f98'}
              outerColor={'#ffcf44'}
              isSelected={true}
              size={20}
              onPress={() => alert('color 4')}
              />
            </View>

         </View>


         <View style={styles.getOptions}>
            <LatoBold style={styles.getLabelColour}>Cantidad</LatoBold>
            <View style={styles.getQuantity}>
              <NumericInput 
              onChange={value => console.log(value)}
              totalWidth={140}
              totalHeight={50} 
              minValue={1}
              maxValue={30}
               />
            </View>
            

         </View>


         

        {ishot   ? (
          <LatoBold style={styles.getHot}>HOT</LatoBold>
          ) : (
          null
          )} 

      </View>
      <View>
        <LatoBold onPress={() => alert('Esto es muy triste. Mi programador aún no me pone una función :(')} style={styles.getBuy}>{item.price} Buy</LatoBold>
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
        pillowList: pillowListdata,
        showIndicator: false
      });
    })
    .catch((error) => {
      console.error(error);
    });
}
 
  render() {
    return (
      <View style={{ flex: 1, paddingRight: 0, paddingLeft: 0 }}>
       
       
        
        <Carousel layout={'tinder'} layoutCardOffset={10}
              ref={(c) => { this._carousel = c; }}
              data={this.state.pillowList}
              renderItem={this._renderItem}
              sliderWidth={this.state.width}
              itemWidth={this.state.widthitem}
              activeAnimationType={'timing'}
              activeSlideAlignment={'center'}
              activeSlideOffset={10}
              inactiveSlideScale={1}
              inactiveSlideOpacity={1}
              autoplay={false}
              loop={true}
            />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  getSliderBig: {
    width: width,
    marginTop: 0,
    flex: 1,
    alignItems: 'center'
  },
  getSlider: {
    flex: 1,
    height: height/2.5,
    width: width -40,
    backgroundColor: '#ffffff',
    shadowColor: "#ccc",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    elevation: 5,
    marginTop: -110,
    marginBottom: 10,
    marginLeft: 0,
    borderRadius: 6,
    alignItems: 'center',
    overflow: 'hidden'
    
  },
  imageSlider: {
    width:'100%',
    height:390,
    marginLeft:0,
    marginTop: 0
  },
  getSliderTitle: {
    marginTop: -80,
    marginLeft: 95,
    width: width/5,
  },
  getSliderTextTitle: {
    color: "#5b7492",
    fontSize: 20,
    marginTop:25,
  },
  getSliderTextDesc: {
    fontSize: 16,
    marginTop:10,
    textAlign: 'center',
    width: width -100,
    color: '#747d7f'
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
  },
  getBuy: {
    backgroundColor: '#5a7392',
    color: '#ffffff',
    width: '60%',
    borderRadius:18,
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'center',
    fontSize: 22,
    marginTop: 10,


  },
  getHot: {
    position: 'absolute',
    right: '-17%',
    marginTop: -4,
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
  },
  getOptions: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: width -90,
    marginTop: 30
  },
  getLabelColour: {
    textAlign: 'left',
    color: '#587391',
    fontSize: 16,
    marginRight: 15,
    marginTop:6,
    marginLeft: 25
  },
  getColour: {
    marginRight: 15
  },
  getOptionsSize: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    flexDirection: 'row',
    width: width -90,
    marginTop: 20
  },
});