import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableHighlight, Pressable, ScrollView } from 'react-native';

import icon from '../../assets/icon.png';
import Screen from '../../components/Screen';

export default function App() {
  return (
    <Screen>
      <ScrollView>

        <View style={styles.container}>
          <StatusBar style="auto" />

          <View className="bg-slate-100 rounded-lg my-4">
            <Image
              alt="Imagen rando de internet"
              source={{
                uri: "https://tvazteca.brightspotcdn.com/dims4/default/39b3711/2147483647/strip/true/crop/1181x728+50+0/resize/1200x740!/format/jpg/quality/90/?url=http%3A%2F%2Ftv-azteca-brightspot.s3.amazonaws.com%2F97%2Fca%2F6ad68c35412f91c419104c04bbb2%2Fquien-hace-la-voz-de-la-galleta-de-jengibre-en-shrek.jpg",
              }}
              style={{ width: 200, height: 200 }}
            />
          </View>

          <Text style={styles.colorText}>Inicio de react native!</Text>
          <View className="mb-5">
            <Image
              blurRadius={0} // Desenfoque de la imagen
              source={icon} // Imagen local
              style={{
                width: 100,
                height: 100,
                resizeMode: "center",
              }}
            />
          </View>

          <View className="bg-gray-300 p-5 rounded-lg">
            <Text style={styles.colorText}>
              Seccion de botones:
            </Text>

            {/* Boton nativo: */}
            <Button
              title="Boton nativo"
              onPress={() => alert("Notificacion nativa de android")}
            />

            {/* Boton personalizable: */}
            <TouchableHighlight
              underlayColor={"#09f"}
              onPress={() => alert("Hola, este es un boton personalizable")}
              style={{
                width: 200,
                height: 50,
                backgroundColor: "green",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                margin: 20,
              }}
            >
              <Text style={{ color: "white", fontSize: 20, fontWeight: 'bold' }}>Pulsa aqui</Text>
            </TouchableHighlight>

            {/* Boton mas customizable */}
            <Pressable
              onPress={() => alert('Este es otro boton mas customizable')}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "blue" : "green",
                  margin: 20,
                  padding: 20,
                  alignItems: 'center',
                },
                styles.wrapperCustom,
              ]}
            >
              {({ pressed }) => (
                <Text
                  style={{
                    fontSize: pressed ? 32 : 16,
                    fontWeight: 'bold'
                  }}
                >
                  {pressed ? "Pressed" : "Press Me"}
                </Text>
              )}
            </Pressable>
          </View>

        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 24,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 18
  }
});
