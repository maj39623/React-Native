import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { View, Text, ScrollView } from 'react-native';
import { CAMPSITES } from '../shared/campsites';
import { Card } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
            partners: PARTNERS
        };
    }

    static navigationOptions = {
        title: 'About'
    };

    render() {
        const renderPartnerItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{ source: require('./images/images/bootstrap-logo.png')}}
                />
            );
        };
        return (
            <ScrollView>
                <Misson />
                <Card wrapperStyle={{margin: 20}} title='COMMUNITY PARTNERS'>
                    <FlatList
                    data={this.state.partners}
                    renderItem={renderPartnerItem}
                    keyExtractor={item => item.id.toString()}
                    />
                </Card>
            </ScrollView>
        );

        
    }
}

function Misson() {
    return (
        <Card wrapperStyle={{margin: 20}} title='MISSION'>
            <Text style={{margin:10}}>
            We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
            </Text>
        </Card>
    );
}




export default About;