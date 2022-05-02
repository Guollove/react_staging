import React, { Component } from 'react';
import { View, Text } from 'react-native';

class AlbumList extends Component {
    constructor(props){
        super(props); 
        this.state = { 
            albums: [] 
        };
        this.renderAlbums = this.renderAlbums.bind(this);
    }


    renderAlbums() {
        return (
            <View /> // return your Albums here as you need
        );
    }

     render() {
         return (
            <View>
              {this.renderAlbums()}
            </View>
        );
    }
}


export default AlbumList;