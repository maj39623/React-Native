import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import { connect } from 'react-redux';
import { baseUrl } from '../shared/baseUrl';
import Loading from './LoadingComponent'; 
import * as Animatable from 'react-native-animatable';

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
        
        if (this.props.partners.isLoading) {
            return (
                <ScrollView>
                    <Mission />
                    <Card wrapperStyle={{margin: 20}} title='COMMUNITY PARTNERS'>
                        <Loading />
                    </Card>
                </ScrollView>
            )
        }
        if (this.props.partners.errMess) {
            return (
                <ScrollView>
                    <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                        <Mission />
                        <Card
                            title="Community Partners">
                                <Text>{this.props.partners.errMess}</Text>
                        </Card>
                    </Animatable.View>
                </ScrollView>
            )
        }
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
                    <Mission />
                    <Card wrapperStyle={{margin: 20}} title='COMMUNITY PARTNERS'>
                        <FlatList
                        data={this.props.partners.partners}
                        renderItem={renderPartnerItem}
                        keyExtractor={item => item.id.toString()}
                        />
                    </Card>
                </Animatable.View>
            </ScrollView>
        );

        
    }
}

function Mission() {
    return (
        <Card wrapperStyle={{margin: 20}} title='MISSION'>
            <Text style={{margin:10}}>
            We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.
            </Text>
        </Card>
    );
}




export default connect(mapStateToProps)(About);