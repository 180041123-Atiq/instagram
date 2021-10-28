import {FlatList} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import {getImage} from './api';
import Card from './Card';
import Comments from '../screens/Comments';

const keyExtractor = ({id})=> id.toString();
function rnd(){ return (Math.floor((Math.random() * 17) + 1)).toString();}



export default class CardList extends React.Component{
    
    renderItem=({item:{id,author}})=>{
        
        const{commentsForItem,onPressComments}=this.props;
        const comments=commentsForItem[id];
        
        return (
            <Card
            fullname={author}
            linkText={`${comments?comments.length:0} Comments`}
            image={getImage(id)}
            onPressLinkText={()=>onPressComments(id)}
            />
        );
    };

    render(){
        const{items,commentsForItem}=this.props;

        return (
            <FlatList
            data={items}
            renderItem={this.renderItem}
            keyExtractor={keyExtractor}
            extraData={commentsForItem}
            />
        );
    }
}