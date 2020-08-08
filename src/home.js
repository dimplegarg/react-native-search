import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header, Icon, SearchBar, Avatar, Card, Rating } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default class Home extends Component {
    state = {
        search: "",
        filter: [
            { id: 1, name: "Amritsiri Sweets", location: "Noida", rating: 5, image: 'https://5.imimg.com/data5/QF/SG/GLADMIN-14386186/jalebi-sweet-500x500.png' },
            { id: 2, name: "Ratanlal Clothes", location: "New Delhi", rating: 3, image: 'https://www.dhresource.com/0x0/f2/albu/g7/M01/D9/69/rBVaSVrNv3-AMXY3AADbOFYiOzs647.jpg' },
            { id: 3, name: "Punjabi Rasoi", location: "Noida", rating: 4, image: 'https://www.dhresource.com/0x0/f2/albu/g7/M01/D9/69/rBVaSVrNv3-AMXY3AADbOFYiOzs647.jpg' },
            { id: 4, name: "Bikanare", location: "Noida", rating: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxU1Qjhx_ooQ62_bU4ureok0sjV1vMvd9Tsg&usqp=CAU' }
        ],
        listFood: [
            { id: 1, name: "Amritsiri Sweets", location: "Noida", rating: 5, image: 'https://5.imimg.com/data5/QF/SG/GLADMIN-14386186/jalebi-sweet-500x500.png' },
            { id: 2, name: "Ratanlal Clothes", location: "New Delhi", rating: 3, image: 'https://www.dhresource.com/0x0/f2/albu/g7/M01/D9/69/rBVaSVrNv3-AMXY3AADbOFYiOzs647.jpg' },
            { id: 3, name: "Punjabi Rasoi", location: "Noida", rating: 4, image: 'https://www.dhresource.com/0x0/f2/albu/g7/M01/D9/69/rBVaSVrNv3-AMXY3AADbOFYiOzs647.jpg' },
            { id: 4, name: "Bikanare", location: "Noida", rating: 2, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxU1Qjhx_ooQ62_bU4ureok0sjV1vMvd9Tsg&usqp=CAU' }
        ]
    }

    handleSearch = search => {
        this.setState({ search }, () => {
            let data = Object.assign([], this.state.filter);
            let filterData = [];
            data.filter(i => {
                if (i.name.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                    i.location.toLowerCase().indexOf(search.toLowerCase()) > -1) {
                    filterData.push(i);
                    return true;
                }
            })
            console.log(data, filterData)
            this.setState({ listFood: filterData })
        })
    }

    render() {
        console.log('list', this.state.listFood)
        return (
            <View>
                <Header
                    leftComponent={<Icon name="menu" onPress={() => this.props.navigation.openDrawer()} />}
                    rightComponent={
                        <View style={{ flexDirection: "row" }}>
                            <Icon name="list" type="feather" onPress={() => this.props.navigation.navigate('List')} style={{ marginRight: 10 }} />
                            <Icon name="bell" type="feather" onPress={() => this.props.navigation.navigate('List')} />
                        </View>
                    }
                    centerComponent={<SearchBar
                        placeholder="Search by name or location"
                        round
                        value={this.state.search}
                        onChangeText={this.handleSearch}
                        containerStyle={{ backgroundColor: "transparent", borderTopWidth: 0, borderBottomWidth: 0, width: "100%" }}
                        inputContainerStyle={{ backgroundColor: "lightgrey", height: 36, alignItems: "center" }}
                        inputStyle={{ fontSize: 14 }}
                    />}
                    rightContainerStyle={{}}
                    leftContainerStyle={{ flex: .4 }}
                    containerStyle={{ backgroundColor: "transparent" }}
                />
                <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                    <View style={{ paddingHorizontal: 15 }}>
                        <View style={{ flexDirection: "row", paddingVertical: 15, justifyContent: "space-evenly" }}>
                            <View style={{ alignItems: "center" }}>
                                <Avatar
                                    size="medium"
                                    rounded
                                    icon={{ name: 'pizza-slice', color: '#df7cff', type: 'font-awesome-5' }}
                                    containerStyle={{ backgroundColor: "#fff", elevation: 5 }}
                                />
                                <Text style={{ fontSize: 14, marginTop: 10 }}>Food</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <Avatar
                                    size="medium"
                                    rounded
                                    icon={{ name: 'hat-cowboy-side', color: '#df7cff', type: 'font-awesome-5' }}
                                    containerStyle={{ backgroundColor: "#fff", elevation: 5 }}
                                />
                                <Text style={{ fontSize: 14, marginTop: 10 }}>Clothes</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <Avatar
                                    size="medium"
                                    rounded
                                    icon={{ name: 'map', color: '#df7cff', type: 'font-awesome-5' }}
                                    containerStyle={{ backgroundColor: "#fff", elevation: 5 }}
                                />
                                <Text style={{ fontSize: 14, marginTop: 10 }}>Travel</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <Avatar
                                    size="medium"
                                    rounded
                                    icon={{ name: 'spa', color: '#df7cff', type: 'font-awesome-5' }}
                                    containerStyle={{ backgroundColor: "#fff", elevation: 5 }}
                                />
                                <Text style={{ fontSize: 14, marginTop: 10 }}>Beauty</Text>
                            </View>
                            <View style={{ alignItems: "center" }}>
                                <Avatar
                                    size="medium"
                                    rounded
                                    icon={{ name: 'gift', color: '#df7cff', type: 'font-awesome-5' }}
                                    containerStyle={{ backgroundColor: "#fff", elevation: 5 }}
                                />
                                <Text style={{ fontSize: 14, marginTop: 10 }}>Gifts</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly" }}>
                            {this.state.listFood.length > 0 ? this.state.listFood.map(i => (
                                <Card
                                    image={{ uri: i.image }}
                                    imageProps={{ resizeMode: "cover" }}
                                    imageStyle={{ width: 155 }}
                                    containerStyle={{ elevation: 5 }}
                                >
                                    <Text style={{ fontSize: 18, fontWeight: "bold" }}>{i.name}</Text>
                                    <View style={{ flexDirection: "row" }}>
                                        <Icon name="location" type="evilicon" color="#df7cff" />
                                        <Text style={{ color: "grey" }}>{i.location}</Text>
                                    </View>
                                    <View style={{}}>
                                        <Rating
                                            ratingCount={5}
                                            startingValue={i.rating}
                                            readonly
                                            imageSize={12}
                                            ratingColor="orange"
                                            type='custom'
                                            style={{ alignItems: "flex-start" }}
                                        />
                                    </View>
                                </Card>
                            ))
                                : <Text>Data not found...</Text>}
                        </View>
                    </View>

                </ScrollView>
            </View>
        )
    }
}