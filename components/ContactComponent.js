import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { View, Text, ScrollView } from 'react-native';
import { CAMPSITES } from '../shared/campsites';
import { Card } from 'react-native-elements';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES
        };
    }

    static navigationOptions = {
        title: 'Contact'
    };

    render() {
        return (
            <ScrollView>
                 <Card wrapperStyle={{margin: 20}} title='CONTACT INFORMATION'>
                    <Text>
                            1 Nucamp Way
                    </Text>
                    <Text style={{marginBottom: 10}}>
                    Seattle, WA 98001
                            U.S.A.
                    </Text>
                    <Text>
                            Phone: 1-206-555-1234
                            Email: campsites@nucamp.co
                    </Text>
                </Card>
            </ScrollView>
        );

        
    }
}

export default Contact;