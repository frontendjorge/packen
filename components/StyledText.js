import React from 'react';
import { Text } from 'react-native';

export function MonoText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'space-mono' }]} />
  );
}

export function LatoBold(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'lato-bold' }]} />
  );
}

export function LatoLight(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'lato-light' }]} />
  );
}
