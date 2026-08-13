/*import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";

export default function App() {
  const [contagem, setContagem] = useState(0);

  const precos = [10, 15, 20, 25, 30, 35];

  let contador = 0;

  // contador = contador + 1;

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>"Ola, Turma de INF204!"</Text>

      <Text style={styles.titulo}>"Preços:"</Text>
      {precos.filter((preco) => preco > 20)
        .map((preco) => <Text style={styles.titulo}>{preco}</Text>)}

      {/* <Text style={styles.titulo}>"CONTADOR:"</Text>
      <Text style={styles.numero}>{contagem}</Text>
      <Button
        title="Incrementar +1"
        onPress={() => setContagem(contagem + 1)}
      /> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0f7fa"
  },
  texto: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#00695c"
  },
  titulo: {
    fontSize: 20,
    color: "#333333"
  },
  numero: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#4caf50",
    marginBottom: 20
  }
});*/

/*import React from "react";
import { Text, View, StyleSheet } from "react-native";
export default function App() {
return (
<View style={styles.container}>
<Text style={styles.texto}>"Ola, Turma de ADS306!"</Text>
</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
alignItems: "center",
backgroundColor: "#e0f7fa"
},
texto: {
fontSize: 24,
fontWeight: "bold",
color: "#00695c"
}
})*/
import React, { useState } from "react";
import { Text, View, Button, StyleSheet } from "react-native";
export default function Contador() {
const [contagem, setContagem] = useState(0);

return (
<View style={styles.container}>
<Text style={styles.titulo}>"Contagem Atual:"</Text>
<Text style={styles.numero}>{contagem}</Text>


<View style= {styles.botao}>

<Button
title="Incrementar +1"
onPress={() => setContagem(contagem + 1)}
/></View>

<View style= {styles.botao}>

<Button
title="decrementar -1"
onPress={() => setContagem(contagem - 1)}
/></View>


<View style= {styles.botao}>

<Button
title="contador zero"
onPress={() => setContagem( 0)}
/>
</View>

</View>
);
}
const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: "center",
alignItems: "center",
backgroundColor: "#ffffff"
},
titulo: {
fontSize: 20,
color: "#333333"
},
numero: {
fontSize: 48,
fontWeight: "bold",
color: "#4caf50",
marginBottom: 20
},
botao:{marginBottom:10,

}
})


