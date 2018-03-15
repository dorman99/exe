import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Button,
	Text,
	TouchableHighlight,
	FlatList } from 'react-native';

export default class Board extends Component {
	constructor () {
		super()
		this.state = {
			board: [
				[1, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0, 0, 0, 0]
			]}
	}
	render() {
		return (
			<View style={styles.container}>
				{
					this.state.board.map((item, x) => (
						<View key={x} style={styles.row}>
							{
								item.map((val, i) => 
									<View key={i} style={{ backgroundColor: 'red',margin:2,alignItems: 'center',justifyContent:'center',width:30,height:30}}>
										<TouchableHighlight onPress={() => this.incrementNum(x,i)}>
										<Text
										style={{ color: 'white'}}>{val}
										</Text>
									</TouchableHighlight>
									</View>
								)
							}
						</View>
					))
				}
			</View>
		);
	}

	incrementNum = (row, col) => {
		let setter = [
			...this.state.board,
		]
		setter[row][col]++
		if (setter[row][col] > 9) {
			setter[row][col] = 1
		}
		this.setState({
			board:setter
		})
	
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 150,
	},
	row: {
		flexDirection: 'row',
	},
	box: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'black',
		justifyContent: 'center',
		width: 50,
		height: 50
	}
})
