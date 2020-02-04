import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    authContainer: {
        paddingHorizontal: 40,
        flex: 1,
        
    },
    input: {
        fontFamily: 'source-regular',
        padding: 10,
        fontSize: 18,
        borderRadius: 6,
        color: '#000',
        marginTop: 5,
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2
    },
    required: {
        color: 'red',
        marginTop: 0,
        marginBottom: 10,
        paddingTop: 0,
        borderColor: 'black',
    }
});