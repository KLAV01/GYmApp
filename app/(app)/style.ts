import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        fontSize: 18,
        //backgroundColor: '#BBF246',
        backgroundColor: '#242A32'
      },

      boxLogin: {
        flex: 1, 
        justifyContent: 'center', 
        width: '80%', 
        gap: 20, 
        backgroundColor: '#192126', 
        borderRadius: 20, 
        padding: 15, 
        height: 400, 
        position: "absolute"
      },

      formGroup:{
        gap: 10
      },

      formInput:{
        backgroundColor:"#fff", 
        height: 50, 
        borderRadius: 20, 
        padding: 8, 
        fontSize: 16
      },
      
      btn:{
        height: 50,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
          width: 0,
          height: 4,
        },
        shadowRadius: 4,
        elevation: 4,
        shadowOpacity: 1,
        backgroundColor: '#192126',
      }
});