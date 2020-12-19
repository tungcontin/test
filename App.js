import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AwesomeHierarchyGraph from './Components/Tree/'

var root = {
  name: "",
  id: 1,
  hidden: true,
  children: [ {
          name: "Q",
          id: 16,
          no_parent: true,
          imageUrl: { href: 'https://imgur.com/I80W1Q0.png'},
          nodeImageStyle: { imageHeight: 60 , imageWidth: 60, opacity: 1 },
          nodeTextStyle: { fontSize: 12 }
      },
      {
      name: "",
      id: 2,
      no_parent: true,
      hidden: true,
      children: [
      {
            name: "U",
            id: 12,
            no_parent: true,
            imageUrl: { href: "https://audit-controle-interne.com/wp-content/uploads/2019/03/avatar-user-teacher-312a499a08079a12-512x512.png"},
            nodeImageStyle: { imageHeight: 60 , imageWidth: 60, opacity: 1 },
            nodeTextStyle: { fontSize: 12 }
      },
      {
            name: "",
            id: 24,
            hidden: true,
            no_parent: true,
            children: [{
                name: "V",
                id: 25,
                imageUrl: { href: "https://imgur.com/I80W1Q0.png"},
                nodeImageStyle: { imageHeight: 60 , imageWidth: 60, opacity: 1 },
                nodeTextStyle: { fontSize: 12 }
            }, {
                name: "W",
                id: 26,
                imageUrl: { href: "https://imgur.com/I80W1Q0.png"},
                nodeImageStyle: { imageHeight: 60 , imageWidth: 60, opacity: 1 },
                nodeTextStyle: { fontSize: 12 }
            }]
      },
      {
          name: "J",
          id: 12,
          imageUrl: { href: "https://imgur.com/I80W1Q0.png"},
          nodeImageStyle: { imageHeight: 60 , imageWidth: 60, opacity: 1 },
          nodeTextStyle: { fontSize: 12 }
      }, {
          name: "L",
          id: 13,
          no_parent: true,
          imageUrl: { href: "https://audit-controle-interne.com/wp-content/uploads/2019/03/avatar-user-teacher-312a499a08079a12-512x512.png"},
          nodeImageStyle: { imageHeight: 60 , imageWidth: 60, opacity: 1 },
          nodeTextStyle: { fontSize: 12 }
      }, {
          name: "C",
          id: 3,
          imageUrl: { href: "https://audit-controle-interne.com/wp-content/uploads/2019/03/avatar-user-teacher-312a499a08079a12-512x512.png"},
          nodeImageStyle: { imageHeight: 60 , imageWidth: 60, opacity: 1 },
          nodeTextStyle: { fontSize: 12 }
      }, {
          name: "",
          id: 4,
          hidden: true,
          no_parent: true,
          children: [{
              name: "D",
              id: 5,
              imageUrl: { href: "https://audit-controle-interne.com/wp-content/uploads/2019/03/avatar-user-teacher-312a499a08079a12-512x512.png"},
              nodeImageStyle: { imageHeight: 60 , imageWidth: 60, opacity: 1 },
              nodeTextStyle: { fontSize: 12 }
          }, {
              name: "",
              id: 14,
              hidden: true,
              no_parent: true,
              children: [{
                  name: "P",
                  id: 15,
                  imageUrl: { href: "https://imgur.com/I80W1Q0.png"},
                  nodeImageStyle: { imageHeight: 60 , imageWidth: 60, opacity: 1 },
                  nodeTextStyle: { fontSize: 12 }
              }]
          }, {
              name: "E",
              id: 6,
              no_parent: true,
              imageUrl: { href: "https://imgur.com/I80W1Q0.png"},
              nodeImageStyle: { imageHeight: 60 , imageWidth: 60, opacity: 1 },
              nodeTextStyle: { fontSize: 12 }
          }]
      }, {
          name: "K",
          id: 11,
          no_parent: true,
          imageUrl: { href: "https://imgur.com/I80W1Q0.png"},
          nodeImageStyle: { imageHeight: 60 , imageWidth: 60, opacity: 1 },
          nodeTextStyle: { fontSize: 12 }
      }, {
          name: "G",
          id: 7,
          imageUrl: { href: "https://imgur.com/I80W1Q0.png"},
          nodeImageStyle: { imageHeight: 60 , imageWidth: 60, opacity: 1 },
          nodeTextStyle: { fontSize: 12 }
       },
       {
          name: "",
                        id: 23,
                        hidden: true,
                        no_parent: true,
          children: [{
              name: "H",
              id: 8,
              imageUrl: { href: "https://imgur.com/I80W1Q0.png"},
              nodeImageStyle: { imageHeight: 60 , imageWidth: 60, opacity: 1 },
              nodeTextStyle: { fontSize: 12 }
          }, {
              name: "I",
              id: 9,
              imageUrl: { href: "https://imgur.com/I80W1Q0.png"},
              nodeImageStyle: { imageHeight: 60 , imageWidth: 60, opacity: 1 },
              nodeTextStyle: { fontSize: 12 }
          }]
      },
      {
          name: "S",
          id: 22,
          no_parent: true,
          imageUrl: { href: "https://audit-controle-interne.com/wp-content/uploads/2019/03/avatar-user-teacher-312a499a08079a12-512x512.png"},
          nodeImageStyle: { imageHeight: 60 , imageWidth: 60, opacity: 1 },
          nodeTextStyle: { fontSize: 12 }
      }]
  }, {
      name: "M",
      id: 10,
      no_parent: true,
      imageUrl: { href: "https://audit-controle-interne.com/wp-content/uploads/2019/03/avatar-user-teacher-312a499a08079a12-512x512.png"},
      nodeImageStyle: { imageHeight: 60 , imageWidth: 60, opacity: 1 },
      nodeTextStyle: { fontSize: 12 },
      children: [
        
      ]
  }]
}

var siblings = [{
  source: {
      id: 3,
      name: "C"
  },
  target: {
      id: 11,
      name: "K"
  }
}, {
  source: {
      id: 12,
      name: "L"
  },
  target: {
      id: 13,
      name: "J"
  }
}, {
  source: {
      id: 5,
      name: "D"
  },
  target: {
      id: 6,
      name: "E"
  }
}, {
   source: {
       id: 16,
       name: "Q"
   },
   target: {
       id: 10,
       name: "M"
   }
 },
 {
   source: {
       id: 7,
       name: "G"
   },
   target: {
       id: 22,
       name: "S"
   }
 }];

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!Ok</Text>
      <StatusBar style="auto" />
      <AwesomeHierarchyGraph
         root = {root}
         siblings = {siblings}
        />
    </View>
  );
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
