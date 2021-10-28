import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AsyncStorage,StyleSheet, Text, View,Platform,Modal } from 'react-native';
import Avatar from './components/Avatar';
import Constants from 'expo-constants';
import AuthorRow from './components/AuthorRow';
import Card from './components/Card';
import CardList from './components/CardList';
import Feed from './screens/Feed';
import CommentInput from './components/CommentInput';
import NavigationBar from './components/NavigationBar';
import Comments from './screens/Comments';

const items =[
  {id:1,author:'Atiqur Rahman'},
  {id:2,author:'Mushfiqul Haque'},
  {id:3,author:'Nahian Ibn Asad'},
  {id:4,author:'Farhan Ishmam'},
  {id:5,author:'Tofazzol Hassan'},
  {id:6,author:'Boshir Ahmed'},
];
const ASYNC_STORAGE_COMMENTS_KEY='ASYNC_STORAGE_COMMENTS_KEY';

export default class App extends React.Component {

  state={
    commentsForItem:{},
    showModal:false,
    selectedItemId:null,
  };

  async componentDidMount() {
    try{
      const commentsForItem=await AsyncStorage.getItem(
        ASYNC_STORAGE_COMMENTS_KEY
      );

      this.setState({
        commentsForItem:commentsForItem?JSON.parse(commentsForItem):{},
      });
    } catch(e){
      console.log('Failed to load comments');
    }
  }

  openCommentScreen = id => {
    this.setState({
      showModal:true,
      selectedItemId:id,
    });
  };

  closeCommentScreen=()=>{
    this.setState({
      showModal:false,
      selectedItemId:null,
    });
  };

  onSubmitComment=(text)=>{
    const {selectedItemId,commentsForItem}=this.state;
    const comments=commentsForItem[selectedItemId]||[];

    const updated={
      ...commentsForItem,
      [selectedItemId]:[...comments,text],
    };

    this.setState({commentsForItem:updated});

    try{
      AsyncStorage.setItem(ASYNC_STORAGE_COMMENTS_KEY,JSON.stringify(updated));
    } catch(e){
      console.log('failed to save comment ',text,' for ',selectedItemId);
    }
  };

  render(){

    const{commentsForItem,showModal,selectedItemId}=this.state;

    return (
      <View style={styles.container}>
        <Feed
        style={styles.feed}
        items={items}
        commentsForItem={commentsForItem}
        onPressComments={this.openCommentScreen}
        />
        <Modal
        visible={showModal}
        animationType="slide"
        onRequestClose={this.closeCommentScreen}
        >
          <Comments
          style={styles.comments}
          comments={commentsForItem[selectedItemId]||[]}
          onClose={this.closeCommentScreen}
          onSubmitComment={this.onSubmitComment}
          />
        </Modal>
      </View>
    );
  }
}

const platformVersion = Platform.OS==='ios'?parseInt(Platform.Version,10):Platform.Version;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  feed:{
    flex:1,
    marginTop:
    Platform.OS==='android'||platformVersion<11
    ? Constants.statusBarHeight:0,
  },
  comments:{
    flex:1,
    marginTop:
    Platform.OS==='ios'&&platformVersion<11
    ? Constants.statusBarHeight:0,
  },
});
