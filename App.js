import React, { useState } from "react";
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";

export default function UrnaEletronica() {
	const [votosA, setVotosA] = useState(0);
	const [votosB, setVotosB] = useState(0);
	const [votosC, setVotosC] = useState(0);
	const [nomeMesario, setNomeMesario] = useState("");

	const totalVotos = votosA + votosB + votosC;

	const porcentagem = (votos) =>
		totalVotos === 0 ? 0 : Math.round((votos / totalVotos) * 100);

	const zerarUrna = () => {
		setVotosA(0);
		setVotosB(0);
		setVotosC(0);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.titulo}>Painel de Votacao</Text>

			<TextInput
				style={styles.input}
				placeholder="Nome do mesario"
				value={nomeMesario}
				onChangeText={setNomeMesario}
			/>
			<Text style={styles.mesario}>
				Mesario atual: {nomeMesario || "Nao informado"}
			</Text>

			<View style={styles.candidatoContainer}>
				<Text style={styles.nomeCandidato}>
					Candidato A: {votosA} votos ({porcentagem(votosA)}%)
				</Text>
				<TouchableOpacity
					style={styles.botaoVotar}
					onPress={() => setVotosA((prev) => prev + 1)}
				>
					<Text style={styles.textoBotao}>Votar em A</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.candidatoContainer}>
				<Text style={styles.nomeCandidato}>
					Candidato B: {votosB} votos ({porcentagem(votosB)}%)
				</Text>
				<TouchableOpacity
					style={styles.botaoVotar}
					onPress={() => setVotosB((prev) => prev + 1)}
				>
					<Text style={styles.textoBotao}>Votar em B</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.candidatoContainer}>
				<Text style={styles.nomeCandidato}>
					Candidato C: {votosC} votos ({porcentagem(votosC)}%)
				</Text>
				<TouchableOpacity
					style={styles.botaoVotar}
					onPress={() => setVotosC((prev) => prev + 1)}
				>
					<Text style={styles.textoBotao}>Votar em C</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.rodape}>
				<Text style={styles.totalTexto}>Total de Votos: {totalVotos}</Text>
				<TouchableOpacity style={styles.botaoZerar} onPress={zerarUrna}>
					<Text style={styles.textoBotao}>Zerar Urna</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F5F5F5",
		justifyContent: "center",
		alignItems: "center",
		padding: 20,
	},
	titulo: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
		color: "#14325A",
	},
	input: {
		width: "100%",
		backgroundColor: "#FFFFFF",
		borderWidth: 1,
		borderColor: "#B8C4D0",
		borderRadius: 8,
		padding: 12,
		marginBottom: 8,
	},
	mesario: {
		width: "100%",
		fontSize: 16,
		color: "#505050",
		marginBottom: 18,
	},
	candidatoContainer: {
		width: "100%",
		backgroundColor: "#FFFFFF",
		padding: 15,
		borderRadius: 8,
		marginBottom: 10,
		alignItems: "center",
		elevation: 2,
	},
	nomeCandidato: {
		fontSize: 18,
		marginBottom: 10,
	},
	botaoVotar: {
		backgroundColor: "#0064A0",
		padding: 10,
		borderRadius: 5,
		width: "80%",
		alignItems: "center",
	},
	textoBotao: {
		color: "#FFFFFF",
		fontWeight: "bold",
	},
	rodape: {
		marginTop: 20,
		alignItems: "center",
		width: "100%",
		borderTopWidth: 1,
		borderColor: "#CCCCCC",
		paddingTop: 20,
	},
	totalTexto: {
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 15,
	},
	botaoZerar: {
		backgroundColor: "#808080",
		padding: 15,
		borderRadius: 5,
	},
});
