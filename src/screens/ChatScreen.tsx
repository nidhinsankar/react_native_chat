import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const ChatScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Chat Screen</Text>
      <Button
        title="go to home"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Button
        title="go to profile"
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
    </SafeAreaView>
  );
};

export default ChatScreen;
