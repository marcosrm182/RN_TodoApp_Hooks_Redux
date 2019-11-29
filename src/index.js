import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ListItem from './components/ListItem'
import { complete } from './reducers/todos'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    list: {
        alignSelf: 'stretch',
    },
})

const App = ({ data, complete }) => {
    return (
      <View style={styles.container}>
        <FlatList 
            style={styles.list}
            data={data}
            keyExtractor={x => String(x.id)}
            renderItem={({ item }) =>
                <ListItem completed={item.completed} onPress={() => complete(item.id)} desc={item.desc} />}
        />
      </View>
    )
}

const mapStateToProps = state => {
    return { data: state.todos } 
}

const mapDispatchToProps = dispatch => ({
    complete: (id) => dispatch(complete(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)