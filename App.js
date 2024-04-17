
import { ScrollView, StyleSheet, Text, View } from 'react-native';

// import SearchBar from './Components/SearchBar';
import Messages from './Components/Messages';
import StatusBar from './Components/StatusBar';
import Footer from './Components/Footer';

export default function App() {
  return (
    <View style={styles.container}>

      <ScrollView>
        <View style={styles.WhatsAppContainer}>
          <StatusBar />
          <Messages />
          <Footer />

         

        </View>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({

  WhatsAppContainer: {

  },
});
