import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function JogoDaVelha() {
	const [tabuleiro, setTabuleiro] = useState(Array(9).fill(null));
	const [jogadorAtual, setJogadorAtual] = useState("X");

	const combinacoesVencedoras = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const vencedor = combinacoesVencedoras
		.map(([primeiro, segundo, terceiro]) => {
			if (
				tabuleiro[primeiro] &&
				tabuleiro[primeiro] === tabuleiro[segundo] &&
				tabuleiro[primeiro] === tabuleiro[terceiro]
			) {
				return tabuleiro[primeiro];
			}
			return null;
		})
		.find(Boolean);
	const empate = !vencedor && tabuleiro.every(Boolean);

	function jogar(indice) {
		if (tabuleiro[indice] || vencedor || empate) {
			return;
		}

		const novoTabuleiro = [...tabuleiro];
		novoTabuleiro[indice] = jogadorAtual;
		setTabuleiro(novoTabuleiro);
		setJogadorAtual(jogadorAtual === "X" ? "O" : "X");
	}

	return (
		<View style={styles.container}>
			<Text style={styles.titulo}>Jogo da Velha</Text>
			<Text style={styles.vez}>
				{vencedor ? `Vencedor: ${vencedor}` : empate ? "Empate!" : `Vez do jogador: ${jogadorAtual}`}
			</Text>

			<View style={styles.tabuleiro}>
				<View style={styles.linha}>
					{tabuleiro.slice(0, 3).map((valor, indice) => (
						<TouchableOpacity
							key={indice}
							style={styles.celula}
							onPress={() => jogar(indice)}
							disabled={Boolean(vencedor) || empate}
						>
							<Text style={styles.valor}>{valor}</Text>
						</TouchableOpacity>
					))}
				</View>

				<View style={styles.linha}>
					{tabuleiro.slice(3, 6).map((valor, indice) => (
						<TouchableOpacity
							key={indice + 3}
							style={styles.celula}
							onPress={() => jogar(indice + 3)}
							disabled={Boolean(vencedor) || empate}
						>
							<Text style={styles.valor}>{valor}</Text>
						</TouchableOpacity>
					))}
				</View>

				<View style={styles.linha}>
					{tabuleiro.slice(6, 9).map((valor, indice) => (
						<TouchableOpacity
							key={indice + 6}
							style={styles.celula}
							onPress={() => jogar(indice + 6)}
							disabled={Boolean(vencedor) || empate}
						>
							<Text style={styles.valor}>{valor}</Text>
						</TouchableOpacity>
					))}
				</View>
			</View>
			<TouchableOpacity
				style={styles.novoJogo}
				onPress={() => {
					setTabuleiro(Array(9).fill(null));
					setJogadorAtual("X");
				}}
			>
				<Text style={styles.textoNovoJogo}>Novo jogo</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		marginTop: 24,
	},
	titulo: {
		fontSize: 22,
		fontWeight: "bold",
		color: "#14325A",
	},
	vez: {
		marginVertical: 10,
		fontSize: 16,
		color: "#505050",
	},
	tabuleiro: {
		width: 270,
		height: 270,
	},
	linha: {
		flex: 1,
		flexDirection: "row",
	},
	celula: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
		borderColor: "#14325A",
		backgroundColor: "#FFFFFF",
	},
	valor: {
		fontSize: 36,
		fontWeight: "bold",
		color: "#0064A0",
	},
	novoJogo: {
		marginTop: 16,
		backgroundColor: "#0064A0",
		paddingVertical: 10,
		paddingHorizontal: 24,
		borderRadius: 8,
	},
	textoNovoJogo: {
		color: "#FFFFFF",
		fontSize: 16,
		fontWeight: "bold",
	},
});
