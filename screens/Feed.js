import{
    ActivityIndicator,
    Text,
    ViewPropTypes,
    SafeAreaView,
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import {fetchImages} from '../components/api';
import CardList from '../components/CardList';

export default class Feed extends React.Component{

    render(){
        const{style,items,commentsForItem,onPressComments}=this.props;

        return (
            <SafeAreaView style={style}>
                <CardList 
                items={items}
                commentsForItem={commentsForItem}
                onPressComments={onPressComments}
                />
            </SafeAreaView>
        );
    }
}