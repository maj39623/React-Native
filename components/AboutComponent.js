import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl'; 

const mapStateToProps = state => {
    return {
        partners: state.partners
    };
}; 

class About extends Component {

    static navigationOptions = {
        title: 'About'
    };

    render() {
        const renderPartnerItem = ({item}) => {
            return (
                <ListItem
                    title={item.name}
                    subtitle={item.description}
                    leftAvatar={{source: {uri: baseUrl + item.image}}}
                />
            );
        };
        
        return (
            <ScrollView>
                <Misson />
                <Card wrapperStyle={{margin: 20}} title='COMMUNITY PARTNERS'>
                    <FlatList
                    data={this.props.partners.partners}
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




export default connect(mapStateToProps)(About);