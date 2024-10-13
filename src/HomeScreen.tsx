import {
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Text>profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Chat');
          }}>
          <Text>Chat</Text>
        </TouchableOpacity>
        <View>
          <Text>Hell owlrd</Text>
        </View>
        <TextInput
          placeholder="enter name"
          style={{
            borderColor: '#000',
            borderWidth: 3,
            padding: 5,
            height: 43,
            width: 350,
            margin: 'auto',
          }}
        />
        <Switch />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
