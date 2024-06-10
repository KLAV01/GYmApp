import { Image, StyleSheet, Text, View } from "react-native";
import { FontFamily, Color, Padding, Border, FontSize } from "@/assets/GlobalStyles";

interface Personal{
    nome: string;
    email: string;
    metas: string;
    cidade: string;
    foto: string;
    telefone: string;
}

interface Props {
    item: Personal;
    onPress?: () => void;
}

export function CardAluno({item, ...rest}: Props){
    return(
        <View style={{flex:1, flexDirection: 'row', borderRadius: 20, overflow: "hidden", marginTop: 15}}>
            <View style={{backgroundColor: Color.colorWhite, width: 100,  borderRadius: Border.br_4xl,
    top: 0,}}>
            {/* <Image style={{width: 100, height: 100}} source={{uri:item.foto}}/> */}
                <Image style={{width: 100, height: 100}} source={{uri:"https://img-cdn.hltv.org/playerbodyshot/jz55adZ3L8AzEywpWzpzqU.png?ixlib=java-2.1.0&w=400&s=3807452dae708e6de73e97ec087a4fe8"}}/>
            </View>
            <View style={{flex:1, backgroundColor: Color.colorWhite, width: '100%'}}>
                <Text style={{top: 20, left: 20, position: "absolute", fontWeight: "500", fontSize: FontSize.size_base}}>{item.nome}</Text>
                <Text style={{top: 50, left: 20, position: "absolute"}}>{item.metas}</Text>
                <View style={styles.difficultyPosition}>
                    <Text style={{color:'#fff'}}>{item.cidade}</Text>
                </View>
                <Text style={{top: 75, left: 20, position: "absolute"}}>{item.telefone}</Text>
            </View>
        </View>
    )
}

export const styles = StyleSheet.create({
    cardPersonal:{
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    difficultyPosition: {
        right: 20,
        paddingVertical: Padding.p_10xs,
        paddingHorizontal: Padding.p_5xs,
        borderBottomLeftRadius: Border.br_7xs,
        borderBottomRightRadius: Border.br_7xs,
        backgroundColor: Color.colorGray_100,
        top: 0,
        position: "absolute",
      }
    
});