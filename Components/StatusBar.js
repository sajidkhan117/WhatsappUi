import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialIcons, Feather } from '@expo/vector-icons';

export default function StatusBar() {

    const imageArray = [
        { id: 1, url: 'https://media.istockphoto.com/id/1440149723/photo/happy-man-social-media-phone-and-living-room-relax-typing-smartphone-and-online-communication.webp?b=1&s=170667a&w=0&k=20&c=G_u5nOP54j90M_S-qjoFxQi7E_sr4cgnKneIUy0agU0=', alt: 'Image 1' },
        { id: 2, url: 'https://media.istockphoto.com/id/1449070125/photo/software-engineers-using-a-computer-and-having-a-discussion-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=0MxsgNAcPsH_xSEo2NbnCvakUEio3UAoRiFpOo--Y3o=', alt: 'Image 2' },
        { id: 3, url: 'https://media.istockphoto.com/id/1485794147/photo/young-woman-using-a-smart-phone-while-sitting-on-a-couch-in-a-living-room.webp?b=1&s=170667a&w=0&k=20&c=lWg-ruQGgpLLOlHxaLaQZp2Q4ZTfklshk8oAh4Z42F8=', alt: 'Image 3' },
        { id: 4, url: 'https://images.unsplash.com/photo-1597170231297-402809d10a54?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2hhdHNhcHAlMjBkcHxlbnwwfHwwfHx8MA%3D%3D', alt: 'Image 4' },
        { id: 5, url: 'https://media.istockphoto.com/id/1633957958/photo/a-smiling-male-freelancer-with-eyeglasses-using-a-phone-while-working-over-a-laptop.webp?b=1&s=170667a&w=0&k=20&c=WQhcQL5It4ZcjYXXWEmJoAVj_kgFCW1D5JbHs9kHpTY=', alt: 'Image 5' },
        { id: 6, url: 'https://media.istockphoto.com/id/1493903457/photo/korean-man-working-in-latin-america.webp?b=1&s=170667a&w=0&k=20&c=JUbd1SJp0bSZdjmKUZeGfklIY2oFVQULcE9F1yXI_L0=', alt: 'Image 6' },
        { id: 7, url: 'https://media.istockphoto.com/id/1480589800/photo/smiling-caucasian-mature-gray-haired-lady-hold-glasses-speaks-by-phone-with-client-in-living.jpg?s=612x612&w=0&k=20&c=JYhRWkjy9T15j0bup7WIHhlvOzbYrd9HAwJTQNUCkR0=', alt: 'Image 7' },
        { id: 8, url: 'https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.jpg?s=612x612&w=0&k=20&c=yvFDnYMNEJ6WEDYrAaOOLXv-Jhtv6ViBRXSzJhL9S_k=', alt: 'Image 8' },
        // { id: 9, url: 'https://example.com/image9.jpg', alt: 'Image 9' },
        // { id: 10, url: 'https://example.com/image10.jpg', alt: 'Image 10' },
    ];
    return (
        <View style={styles.container}>

            <View style={styles.Messages} >
                <Text>Messages</Text>
              
                <TouchableOpacity>
                    <Feather name="more-vertical" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <ScrollView horizontal={true} >

                {imageArray.map(({ id, url }) => (
                    <View key={id} style={styles.userCard}>
                        <Image
                            source={{
                                uri: url

                            }}

                            style={styles.userImages}

                        />
                    </View>
                ))}


            </ScrollView>

            <ScrollView style={styles.searchContainer}>
                <View style={styles.searchBox}>


                    <MaterialIcons name="search" size={24} color="black" style={{ marginTop: 12, marginLeft: 10, }} />
                    <TextInput
                        style={{ width: '85%', marginLeft: 12 }}
                        placeholder="Search..."
                    />

                </View>
            </ScrollView>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {

        paddingHorizontal: 16,
        // marginBottom: 4,
        // backgroundColor: 'red',
    },
    Messages: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,

    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
        marginBottom: 10,
        borderRadius: 5,

    },
    userImages: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 14,
    },

    searchContainer: {

    },
    searchBox: {
        width: "100%",
        height: 50,
        backgroundColor: 'white',
        borderWidth: 2, // Border width
        borderColor: 'black', // Border color
        borderRadius: 10, // Border radius
        flex: 1,
        flexDirection: 'row',



    },


})