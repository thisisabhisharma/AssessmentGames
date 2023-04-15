import React from 'react'
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ToastAndroid,
  Image
} from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Provider } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import Container, { Toast } from 'toastify-react-native'

const HandleClick = async (game, steamUrl) => {
  Toast.success(`${game} Clicked!`, {
    icon: '🚀'
  })
  // ToastAndroid.show(`${game} Clicked!`, ToastAndroid.LONG)
}

const Item = ({ title, steamUrl }) => {
  let appId = steamUrl.slice(-5)
  let img = `https://steamcdn-a.akamaihd.net/steam/apps/${appId}/library_600x900_2x.jpg`
  return (
    <TouchableOpacity
      onPress={() => HandleClick(title, steamUrl)}
      style={styles.item}
    >
      <Image
        style={styles.tinyLogo}
        source={{
          uri: img
        }}
      />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  )
}

const Home = () => {
  const DATA = useSelector(state => state)

  console.log('redux state', DATA)
  return (
    <SafeAreaView style={styles.container}>
      <Container position='bottom' />
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Item title={item.title} steamUrl={item.steamUrl} />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  },
  tinyLogo: {
    width: 50,
    height: 50
  }
})

export default Home
