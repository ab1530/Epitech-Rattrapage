import React from 'react';
import { View, FlatList, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';


const navBar = ({navigation}) => {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator>
        <Tab.Screen name="home" component={Home}/>
      </Tab.Navigator>
    );
}


const Home = ({ navigation }) => {
    const [token, setToken] = React.useState({});
    const [photos, setPhotos] = React.useState([]);

    React.useEffect(() => {
        getUserImages();
        const unsubscribe = navigation.addListener('focus', () => {
            getUserImages();
        });

        return unsubscribe;
    }, [navigation]);

    const getUserImages = async () => {
        let localToken = await AsyncStorage.getItem('userData');
        localToken = JSON.parse(localToken);
        let x = await setToken(localToken);
        console.log(localToken)
        let post = await axios(
            `https://api.imgur.com/3/account/${localToken.account_username}/images/`,
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${localToken.access_token}`,
                },
            },
        )
            .then((response) => {
                if (response.data.success === true) {
                    return response.data.data;
                } else {
                    return null;
                }
                console.log("yes")
            })
            .catch((error) => console.error("no"))
        if (post[0] == null) {
            return null;
        } else {
            setPhotos(post);
        }
    };

    return (
        <View
            style={{
                flex: 3,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#263889',
                marginTop: 60,
            }}
        >
            <TouchableOpacity onPress={() => {navigation.navigate("SearchPictures")}}>
                <Text>Search</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Fav")}}>
                <Text>Favorits</Text>
            </TouchableOpacity>
            <Text>Profil Page</Text>
            <FlatList
                data={photos}
                renderItem={({ item }) => (
                    <View>
                        <Image
                            style={{ height: 200, width: 200 }}
                            source={{ uri: item.link }}
                        />
                        <Text
                            style={{
                                flex: 1,
                                margin: 5,
                                marginLeft: 10,
                                fontSize: 16,
                                fontWeight: 'bold',
                            }}
                        >
                            {item.title}
                        </Text>
                    </View>
                )}
            />
        </View>
    );
};

export default Home;