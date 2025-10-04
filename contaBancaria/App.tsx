import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Campos from "./Campos";
import Botao from "./Botao";

export default function App() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [limite, setLimite] = useState(2500);
  const [estudante, setEstudante] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <Campos
          nome={nome}
          setNome={setNome}
          idade={idade}
          setIdade={setIdade}
          sexo={sexo}
          setSexo={setSexo}
          limite={limite}
          setLimite={setLimite}
          estudante={estudante}
          setEstudante={setEstudante}
        />
        <Botao nome={nome} idade={idade} sexo={sexo} limite={limite} estudante={estudante} />
      </ScrollView>
    </SafeAreaView>
  );
}
