import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import UserList from '../components/UserList';

const HomeScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: '#6a51ae',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}>
      <StatusBar barStyle={'dark-content'} />
      <View
        style={{
          // backgroundColor: '#f00',
          height: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          alignItems: 'center',
        }}>
        <Text>ChatAPP</Text>
        <Text>Cam</Text>
      </View>
      <UserList />
    </View>
  );
};

export default HomeScreen;
