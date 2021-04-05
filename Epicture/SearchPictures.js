import React from 'react';
import { Alert, View, FlatList, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';



const SearchPictures = ({ navigation }) => {
    const [token, setToken] = React.useState({});
    const [photos, setPhotos] = React.useState([]);
    const [value, setValue] = React.useState("")
    React.useEffect(() => {
        // getUserImages();
        const unsubscribe = navigation.addListener('focus', () => {
            getUserImages();
        });

        return unsubscribe;
    }, [navigation]);

    const getUserImages = async () => {
        let localToken = await AsyncStorage.getItem('userData');
        localToken = JSON.parse(localToken);
        let x = await setToken(localToken);
        let post = await axios(
            "https://api.imgur.com/3/gallery/search/viral/all/1?q=" + value,
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

    const addFavorite = async (e) => {
        let localToken = await AsyncStorage.getItem('userData');
        localToken = JSON.parse(localToken);
        axios("https://api.imgur.com/3/image/"+ e.cover +"/favorite", {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localToken.access_token}`
            }
        })
        .then((response) => {
        })
        .catch((error) => console.error(error))
    
    }

    const notif = e => {
        Alert.alert(
            e.title,
            'My Alert Msg',
            [
              {text: 'Favorite', onPress: () => addFavorite(e)},
              {
                text: 'UP',
                onPress: () => console.log('UP Pressed'),
                style: 'cancel',
              },
              {text: 'Down', onPress: () => console.log('Down Pressed')},
            ],
            {cancelable: false},
          );
          
    }

    const stick = e => {
        console.log(e)
        console.log("iciiiiiiii")
        setValue(e)
        console.log(value)
        getUserImages()
    }

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
            <TouchableOpacity onPress={() => {navigation.navigate("Fav")}}>
                <Text>Fav</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {navigation.navigate("Home")}}>
                <Text>Home</Text>
            </TouchableOpacity>
            <Text>Profil Page</Text>
            <TextInput placeholder="rechercher..." onChangeText={(e) => {stick(e)}}>
            </TextInput>
{console.log('ici')}
            <FlatList
             
                data={photos}
                renderItem={({ item }) => (
                    item.cover ? 
                    <TouchableOpacity onPress={() => notif(item)}>
                    <View>
                        <Image
                            style={{ height: 200, width: 200 }}
                            source={{ uri: "https://i.imgur.com/" + item.cover + ".jpg" }}
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
                    </TouchableOpacity>
                    : <></>
                )}
            />
        </View>
    );
};

export default SearchPictures;