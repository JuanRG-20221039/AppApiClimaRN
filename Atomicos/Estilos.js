import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#3da1ff',
    },
    main:{
        marginTop:80
    },
    fondoB:{
        backgroundColor:'#ffffff',
        width:300,
        height:100,
        borderRadius:10,
        
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 10,
    },
    fondoBC:{
        marginTop:10,
        marginLeft:10,
    },
    FlatList1:{
        backgroundColor:'#d9efff',
        width:340,
        height:200,
        borderRadius:10,
        marginTop:20,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 10,
    },
    FlatList2:{
        backgroundColor:'#ffffff',
        width:340,
        height:170,
        borderRadius:10,
        marginTop:20,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 10,
    },
    center:{
        alignItems:'center',
        justifyContent:'center',
    },
    texto1:{
        fontSize:20,
        marginTop:10
    },
    chora:{
        backgroundColor:'#b0c0ff',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        margin:10,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 10,
    },
    fondoB2:{
        backgroundColor:'#ffffff',
        width:340,
        height:120,
        borderRadius:10,
        marginTop:20,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 3.84,
        elevation: 10,
    },
    fondoBC2:{
        marginTop:10,
        marginLeft:10,
    },
    titulo:{
        fontSize:30,
        marginBottom:10,
    },
    img:{
        width:600,
        height:600,
        position: 'absolute',
        marginTop:-80,
    },
  });

export { styles };