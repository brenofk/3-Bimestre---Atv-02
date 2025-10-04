import React from "react";
import { Button, Alert, Platform } from "react-native";

type Props = {
  nome: string;
  idade: string;
  sexo: string;
  limite: number;
  estudante: boolean;
};

export default function Botao({ nome, idade, sexo, limite, estudante }: Props) {
  const validar = (): string | null => {
    if (!nome.trim()) return "O nome é obrigatório.";
    if (!idade.trim()) return "A idade é obrigatória.";
    const idadeNum = parseInt(idade);
    if (isNaN(idadeNum) || idadeNum < 18) return "Idade inválida. É necessário ter 18 anos ou mais.";
    if (!sexo) return "Selecione o sexo.";
    return null;
  };

  const abrirConta = () => {
    const erro = validar();
    if (erro) {
      if (Platform.OS === "web") {
        alert(erro); // fallback no navegador
      } else {
        Alert.alert("Erro", erro);
      }
      return;
    }

    const mensagem = `Nome: ${nome}
Idade: ${idade}
Sexo: ${sexo}
Limite: R$ ${limite.toFixed(2)}
Estudante: ${estudante ? "Sim" : "Não"}`;

    if (Platform.OS === "web") {
      alert(mensagem); // exibe no navegador
    } else {
      Alert.alert("Conta criada!", mensagem);
    }
  };

  return <Button title="Abrir Conta" onPress={abrirConta} />;
}
