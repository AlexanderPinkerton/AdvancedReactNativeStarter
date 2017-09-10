/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Body, Title, Left, Right, Content, Footer, FooterTab, Button, Icon } from 'native-base';

import Realm from 'realm';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../Actions'



class AppContainer extends Component {

    constructor(props) {
        super(props);
        this.state = { realm: null};
    }

    componentWillMount() {

        // REALM db test.
        Realm.open({
            schema: [{ name: 'Dog', properties: { name: 'string' } }]
        }).then(realm => {
            realm.write(() => {
                realm.create('Dog', { name: 'Rex' });
            });
            this.setState({ realm });
        });
    }

    reduxTestAction() {
        this.props.countStuff()
        console.log('testing...')
        console.log(this.props)
    }



    render() {

        // Realm test
        const info = this.state.realm
            ? 'Number of dogs in this Wormhole: ' + this.state.realm.objects('Dog').length
            : 'Loading...';

        // TODO: Based on the state of the application, switch the main pages content.

        return (
            <Container>
                <Header>
                    <Left />
                    <Body>
                        <Title>Header</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <View style={styles.container}>
                        <Text style={styles.welcome}>
                            {info}
                        </Text>
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button onPress={()=>{this.reduxTestAction()}} >
                            <Icon name="md-clock" />
                        </Button>
                        <Button active>
                            <Icon active name="md-folder" />
                        </Button>
                        <Button>
                            <Icon name="md-settings" />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});


// Wire up component to redux store
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
    return {
        // Map Redux state to React state
        // ReactVar: ReduxState.ReduxReducerName
        navigationState: state.navigationState,
        count: state.count
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);