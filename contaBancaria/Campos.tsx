import React from "react";
import { View, Text, TextInput, Switch } from "react-native";
import { Picker } from "@react-native-picker/picker";
import Slider from "@react-native-community/slider";

type Props = {
  nome: string;
  setNome: (val: string) => void;
  idade: string;
  setIdade: (val: string) => void;
  sexo: string;
  setSexo: (val: string) => void;
  limite: number;
  setLimite: (val: number) => void;
  estudante: boolean;
  setEstudante: (val: boolean) => void;
};

export default function Campos({
  nome,
  setNome,
  idade,
  setIdade,
  sexo,
  setSexo,
  limite,
  setLimite,
  estudante,
  setEstudante,
}: Props) {
  return (
    <View style={{ padding: 20 }}>
      <Text>Nome:</Text>
      <TextInput
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
        style={{ borderWidth: 1, padding: 5, marginBottom: 10 }}
      />

      <Text>Idade:</Text>
      <TextInput
        value={idade}
        onChangeText={setIdade}
        placeholder="Digite sua idade"
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 5, marginBottom: 10 }}
      />

      <Text>Sexo:</Text>
      <Picker selectedValue={sexo} onValueChange={setSexo} style={{ marginBottom: 10 }}>
        <Picker.Item label="Selecione..." value="" />
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
        <Picker.Item label="Outro" value="Outro" />
      </Picker>

      <Text>Limite da Conta: R$ {limite.toFixed(2)}</Text>
      <Slider
        minimumValue={500}
        maximumValue={10000}
        step={100}
        value={limite}
        onValueChange={setLimite}
        style={{ marginBottom: 20 }}
      />

      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
        <Text style={{ marginRight: 10 }}>Estudante?</Text>
        <Switch value={estudante} onValueChange={setEstudante} />
      </View>
    </View>
  );
}
