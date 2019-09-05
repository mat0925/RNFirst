/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import CustomButton from './CustomButton';

type Props = {};
export default class App extends React.Component<Props> {
  constructor(props){
    super(props);
  }  
    render(){return (
        <View style={styles.firstcontainer}>
        <View style={styles.header}/>
          <View style={styles.secondTitle}>
            <Text style={{fontSize:30, color:'#595757'}}>당신의 육아가 행복이 되도록</Text>
            <View style={styles.line}/>
            <Text style={{fontSize:30, color:'#595757'}}>당신과 아이를 연결합니다</Text>  
        </View>
        <View style={styles.main}>
        <Image style={{height:'100%', width:'100%', resizeMode:'contain'}}
                source={require("./monitIcon.png")}/>
      </View>
      <View style={styles.button}>
        <CustomButton
          buttonColor={'#595757'}
          title={'회원가입'}
          onPress={() => alert('회원가입 버튼')}/>
        <CustomButton
          buttonColor={'#f2a47b'}
          title={'로그인'}
          onPress={() => alert('로그인 버튼')}/>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  firstcontainer:{
    flex:1,
    padding:10,
    backgroundColor:'white',
  },
 container:{
   flex: 1,
   padding: 10,
   backgroundColor:'white',
 },
 line:{
   width:'100%',
   height:'2%',
   backgroundColor:'#f2a47b'
 },
 header:{
   width:'100%',
   height:'5%',
 },
 title:{
  width:'100%',
  height:'10%',
  marginBottom:30,
 },
 secondTitle:{
   width:'100%',
   height:'15%',
 },
 main:{
   flex:1,
   paddingBottom:20,
   alignItems:'center',
   justifyContent:'center',
 },
 button:{
   width:'100%',
   height:'20%',
 }
});