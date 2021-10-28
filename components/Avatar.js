import React from 'react';
import PropTypes from 'prop-types';
import {ColorPropType,StyleSheet,Text,View} from 'react-native';

export default class Avatar extends React.Component{

    static propTypes={
        initials:PropTypes.string.isRequired,
        size:PropTypes.number.isRequired,
        backgroundColor:ColorPropType.isRequired,
    };

    handleStyle=()=>{
        const {size,initials,backgroundColor}=this.props;

        const stylev=StyleSheet.create({
            container:{
                width: size,
                height: size,
                borderRadius: size / 2,
                backgroundColor:backgroundColor,
            },
        });

        return stylev;
    };

    render(){

        const {size,backgroundColor,initials}=this.props;
        const stylev=this.handleStyle();
        return(
            <View style={[stylev.container,styles.container]}>
                <Text style={styles.text}>{initials}</Text>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
    },
    text :{
        color:'white',
    },
});