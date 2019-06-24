import React, { Component } from 'react';
import {View,Animated,StyleSheet} from 'react-native'


class Ball extends Component {
    state = {  }

    componentWillMount(){
        this.position = new Animated.ValueXY(0,0);
        Animated.spring(this.position, {
            toValue: {x:200,y:500}
        }).start();
    }
    render() { 
        return ( 
            <Animated.View style={this.position.getLayout()}>
            <View style={styles.BallStyle}/>
            </Animated.View>
         );
    }
}
 
const styles = StyleSheet.create({
   BallStyle: {
    height:60,
    width:60,
    borderRadius:30,
    borderColor:'black',
    backgroundColor:'black'
   }
})

export default Ball;