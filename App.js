// import React from 'react';
//  import { StyleSheet, Text, View } from 'react-native';

//   const MainApp = () => {

//     const name = '01- hey,this is my life';

//     return (
//          <View style={styles.container}>
//             <View style={styles.innerContainer} />
//             <Text style={styles.title}>
//               <Text style={styles.subtitle}> playing: </Text> {name}
//             </Text>
//          </View>
//            )
//          };

//      const styles = StyleSheet.create({

//        container: {
//           margin:10,
//           marginTop:100,
//           backgroundColor: '#e67e22',
//           borderRadius: 5,
//          },

//        innerContainer: {
//          backgroundColor: '#d35400',
//          height:50,
//          width:140,
//          borderTopLeftRadius: 5,
//          borderBottomLeftRadius: 5,
//          },

//        title: {
//          fontSize:18,
//          fontWeight:'200',
//          color:"#fff",
//          position:'absolute',
//         //  backgroundColor:'transparent',
//          top: 12,
//          left: 10,
//          },

//        subtitle: {
//          fontWeight: "bold"
//          },

//        });

//        export default MainApp;
import React from 'react'
import { StyleSheet, View, Image, ImageBackground } from 'react-native'

const playIcon = require('./src/images/play.jpg')
const volumeIcon = require('./src/images/sound.png')
const hdIcon = require('./src/images/hd.png')
const fullScreenIcon = require('./src/images/fullScreen.png')
const remoteImage = {
  uri: 'https://s3.amazonaws.com/crysfel/public/book/new-york.jpg',
}

const MainApp = () => {
  return (
    <ImageBackground source={remoteImage} style={styles.fullscreen}>
      <View style={styles.container}>
        <Image source={playIcon} style={styles.icon} />
        <Image source={volumeIcon} style={styles.icon} />
        <View style={styles.progressBar}>
          <View style={styles.progressBar} />
        </View>
        <Image source={hdIcon} style={styles.con} />
        <Image source={fullScreenIcon} style={styles.icon} />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  fullscreen: {
    flex: 1,
  },
  container: {
    position: 'absolute',
    backgroundColor: '#202020',
    borderRadius: 5,
    flexDirection: 'row',
    height: 50,
    padding: 5,
    paddingTop: 16,
    bottom: 30,
    right: 10,
    left: 10,
    borderWidth: 1,
    borderColor: '#303030',
  },
  icon: {
    tintColor: '#fff',
    height: 16,
    width: 16,
    marginLeft: 5,
    marginRight: 5,
  },
  progress: {
    backgroundColor: '#000',
    borderRadius: 7,
    flex: 1,
    height: 14,
    margin: 10,
    marginTop: 2,
  },
  progressBar: {
    backgroundColor: '#bf161c',
    borderRadius: 5,
    height: 10,
    margin: 2,
    width: 80,
  },
})

export default MainApp
