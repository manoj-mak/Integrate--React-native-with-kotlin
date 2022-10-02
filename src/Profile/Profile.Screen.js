import React, {Component,useState} from 'react';
import {
  ActivityIndicator,
  BackHandler,
  Animated,
  StyleSheet,
  Image,
  StatusBar,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './Profile.Style';
import {getProfileRequest} from './Profile.Action';
import NoDataView from '../Components/NoDataView';
import colors from '../Themes/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {barStyle} from '../const';
import TestConnectNative from '../TestConnectNative/TestConnectNative';
import {rootTag} from '../../App';


 function ProfileScreen() {


  //fadein and out part

  const opacity = useState(new Animated.Value(1))[0]

  function fadeInImg() {
    Animated.timing(opacity,{
      toValue:1,
      duration:500,
      useNativeDriver:true
    }).start()

  }

  function fadeOutImg() {
    Animated.timing(opacity,{
      toValue:0,
      duration:500,
      useNativeDriver:true
    }).start()
    
  }



//toggle part
  const[isEnabled,setIsEnabled]=useState(true);
  const[text,setText]=useState('Press the toggle to switch off insurance ');

  
  const toggleSwitch=()=>{
    if(isEnabled){
      fadeOutImg();
      setText('Insurance Coverage is OFF');
      
      
   }else{
      fadeInImg();
      setText('Insurance Coverage is ON');
      
      
   }
    setIsEnabled(previousState=>!previousState)
 }
  return(
   
   
    
   
   
   <View style={styles1.container}>

      <StatusBar
          hidden={false}
          backgroundColor='#103166'
          barStyle={barStyle.lightContent}
        />

    <Text style={styles.titleToolbar}>React Native</Text>


    <Animated.Image
      source={require('./ins.png')}  style={[ {width: 200,marginTop:20, height: 200,opacity}  ]} /> 
    
     <Image source={require('./car.png')}  style={{width: 130, height: 130, }}/> 
     
     

     <Text style={styles.titleToolbar}>{text}</Text>

      <Switch
       style={{ transform: [{ scaleX: 2.5 }, { scaleY: 2.5 }] }} 
       trackColor={{false:'grey',true:'green'}}
       thumbColor={isEnabled?'#f4f3f4':'#f4f3f4'}
       ios_backgroundColor='grey'
       onValueChange={toggleSwitch}
       value={isEnabled}
        
       />

     

   </View>

  );

  }

const mapStateToProps = state => {
  return {
    getProfile: state.getProfile,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCallApi: object => dispatch(object),
  };
};

const styles1 =StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#96b3f2',
    alignItems:'center',
   justifyContent:'center',
 },
            
            
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen);
