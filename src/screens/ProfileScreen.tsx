import {Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>Profile Screen </Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text>back to home</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;
