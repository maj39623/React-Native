import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact'
    };

    render() {
        return (
            <ScrollView>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
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
                        </Text> 
                        <Text>
                                Email: campsites@nucamp.co
                        </Text>
                    </Card>
                </Animatable.View>
            </ScrollView>
        );

        
    }
}

export default Contact;