import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Messages() {


    const data = [
        {
            name: "John",
            message: "Hello, how are you?",
            image: 'https://media.istockphoto.com/id/1440149723/photo/happy-man-social-media-phone-and-living-room-relax-typing-smartphone-and-online-communication.webp?b=1&s=170667a&w=0&k=20&c=G_u5nOP54j90M_S-qjoFxQi7E_sr4cgnKneIUy0agU0='
        },
        {
            name: "Alice",
            message: "Hi there!",
            image: 'https://media.istockphoto.com/id/1440149723/photo/happy-man-social-media-phone-and-living-room-relax-typing-smartphone-and-online-communication.webp?b=1&s=170667a&w=0&k=20&c=G_u5nOP54j90M_S-qjoFxQi7E_sr4cgnKneIUy0agU0='
        },
        {
            name: "Bob",
            message: "Nice to meet you!",
            image: 'https://media.istockphoto.com/id/1440149723/photo/happy-man-social-media-phone-and-living-room-relax-typing-smartphone-and-online-communication.webp?b=1&s=170667a&w=0&k=20&c=G_u5nOP54j90M_S-qjoFxQi7E_sr4cgnKneIUy0agU0='
        },
        {
            name: "John",
            message: "Hello, how are you?",
            image: 'https://media.istockphoto.com/id/1440149723/photo/happy-man-social-media-phone-and-living-room-relax-typing-smartphone-and-online-communication.webp?b=1&s=170667a&w=0&k=20&c=G_u5nOP54j90M_S-qjoFxQi7E_sr4cgnKneIUy0agU0='
        },
        {
            name: "Alice",
            message: "Hi there!",
            image: 'https://media.istockphoto.com/id/1440149723/photo/happy-man-social-media-phone-and-living-room-relax-typing-smartphone-and-online-communication.webp?b=1&s=170667a&w=0&k=20&c=G_u5nOP54j90M_S-qjoFxQi7E_sr4cgnKneIUy0agU0='
        },
        {
            name: "Bob",
            message: "Nice to meet you!",
            image: 'https://media.istockphoto.com/id/1440149723/photo/happy-man-social-media-phone-and-living-room-relax-typing-smartphone-and-online-communication.webp?b=1&s=170667a&w=0&k=20&c=G_u5nOP54j90M_S-qjoFxQi7E_sr4cgnKneIUy0agU0='
        }


    ];



    return (
        <View>
            <ScrollView >

                {/* {data.map(({ name, message, image }) => (
                    <View key={name} style={styles.userCard}>
                        <Image
                            source={{
                                uri: image

                            }}

                            style={styles.userImages}
                        />

                        <Text style={styles.userName}>
                            {name}
                        </Text>

                        <Text style={styles.user}>
                            {message}
                        </Text>


                    </View>



                ))} */}

                {data.map(({ name, message, image, }) => (
                    <View key={name} style={styles.UserCard}>
                        <Image
                            source={{
                                uri: image
                            }}
                            style={styles.userImage}
                        />

                        <View style={styles.userDiv}>

                            <Text style={styles.userName}>
                                {name}
                            </Text>

                            <Text style={styles.Address}>
                                {message}
                            </Text>
                        </View>
                    </View>
                ))}

            </ScrollView>
            {/* <Text>Messages</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({

    UserCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'


    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,



    },
    userName: {

        fontSize: 14,
        fontWeight: 'bold'
    },
    userMessage: {

    },

    userDiv: {

    }

})