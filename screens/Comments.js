import {SafeAreaView,ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';
import NavigationBar from '../components/NavigationBar';

export default class Comments extends React.Component{
    static propTypes={
        style:ViewPropTypes.style,
        comments:PropTypes.arrayOf(PropTypes.string).isRequired,
        onClose:PropTypes.func.isRequired,
        onSubmitComment:PropTypes.func.isRequired,
    };
    
    static defaultProps={
        style:null,
    };

    render(){
        const{style,comments,onClose,onSubmitComment}=this.props;

        return (
            <SafeAreaView style={style}>
                <NavigationBar
                title={'Comments'}
                leftText={'Close'}
                onPressLeftText={onClose}
                />
                <CommentInput
                placeholder={'Leave a comment'}
                onSubmit={onSubmitComment}
                />
                <CommentList items={comments}/>
            </SafeAreaView>
        );
    }
}