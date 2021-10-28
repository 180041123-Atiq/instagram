import {Image,StyleSheet,View,ActivityIndicator} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import AuthorRow from './AuthorRow';

export default class Card extends React.Component{
    static propTypes={
        fullname:PropTypes.string.isRequired,
        linkText:PropTypes.string,
        onPressLinkText:PropTypes.func,
    };

    static defaultProps={
        linktext:'',
        onPressLinkText:()=>{},
    };

    state={
        loading:true,
    };

    handleLoad=()=>{
        this.setState({loading:false});
    };

    render(){
        const {fullname,image,linkText,onPressLinkText}=this.props;
        const {loading}=this.state;

        return(
            <View style={styles.container}>
                <AuthorRow
                fullname={fullname}
                linkText={linkText}
                onPressLinkText={onPressLinkText}
                />
                <View style={styles.image}>
                    {loading&&(
                        <ActivityIndicator style={StyleSheet.absoluteFill} size={'large'}/>
                    )}
                    <Image style={styles.image} source={image} onLoad={this.handleLoad}/>
                </View>  
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'stretch',
    },
    image:{
        flex:1,
        width:null,
        height:220,
        resizeMode:'contain',
    },
});