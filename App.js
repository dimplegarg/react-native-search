import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Button,
  StatusBar,
  ScrollView
} from 'react-native';
import axios from 'axios';
import {
  Icon,
  SocialIcon,
  SearchBar
} from 'react-native-elements';
import Navigation from './src';

const App = () => {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // useEffect(() => {
  //   try {
  //     const getFoodList = async () => {
  //       const respose = await axios.get('https://api.myjson.com/bins/mbtzw');
  //       console.log('response', respose)
  //     }
  //     getFoodList();
  //   } catch (err) {
  //     console.error('Error Occured : ', err)
  //   }

  // }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor='#fff' />
      <Navigation />
      {/* {!isModalOpen ?
        <View style={styles.container}>
          <Button
            title="Approved Foods List"
            color="#841584"
            onPress={() => setIsModalOpen(true)}
          />
        </View>
        :
        <View style={styles.modalContainer}>
          <SocialIcon
            type='twitter'
            style={{ position: "absolute", right: 20, top: 20 }}
          />
          <ScrollView>
            <View style={styles.modalHeader}>
              <Icon
                name='close'
                color='#000'
                size={40}
                onPress={() => setIsModalOpen(false)}
              />
            </View>

            <View>
              <SearchBar
                placeholder="Type Here..."
                lightTheme
                round
              // onChangeText={this.updateSearch}
              // value={search}
              />
            </View>

            <View>

            </View>
          </ScrollView>
        </View>
      } */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  modalContainer: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  }
});

export default App;
