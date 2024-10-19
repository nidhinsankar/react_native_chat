import {useEffect, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await fetch('https://randomuser.me/api/?results=50');
    const data = await response.json();
    setUsers(data.results);
  };

  console.log(users);
  useEffect(() => {
    fetchUsers();
  }, []);

  const renderItem = ({item}) => (
    <View
      style={{
        padding: 20,
        borderBottomWidth: 4,
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Image
        source={{uri: item?.picture?.thumbnail}}
        style={{
          width: 30,
          height: 30,
          borderRadius: 100 / 2,
        }}
      />
      <Text key={item?.login?.uuid}>{item?.name?.first}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text
            style={{
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            Loading users...
          </Text>
        }
      />
    </View>
  );
};

export default UserList;
