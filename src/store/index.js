import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase';

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		loadedMeetups: [
			{
				imageUrl:
					"http://7oom.ru/wp-content/uploads/piter/sankt_peterburg_foto_01.jpg",
				id: "dhfhg",
				title: "Meetup in St. Petersburg",
				location: 'St. Petersburg',
				date: new Date('2018-01-01 12:05')
			},
			{
				imageUrl: "https://www.votpusk.ru/country/ctimages/new/FR01.jpg",
				id: "dfdfhfgg",
				title: "Meetup in Paris",
				location: 'Paris',
				date: new Date('2017-12-02 23:43')
			}
		],
		user: null
	},
	mutations: {
		createMeetup(state, payload) {
			state.loadedMeetups.push(payload)
		},
		setUser(state, payload) {
			state.user = payload
		}
	},
	actions: {
		createMeetup({ commit }, payload) {
			const meetup = {
				title: payload.title,
				location: payload.location,
				imageUrl: payload.imageUrl,
				description: payload.description,
				date: payload.date,
				id: Math.random().toString(36).substr(2, 9)
			}
			//
			commit('createMeetup', meetup)
		},
		signUserUp({ commit }, payload) {
			firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(payload.email, payload.password)
				.then(
					user => {
						const newUser = {
							id: user.user.uid,
							registeredMeetups: []
						}
						commit('setUser', newUser)
					}
				)
				.catch(
					error => {
						console.log(error)
					}
				)
		},
		signUserIn({ commit }, payload) {
			firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).
				then(
					user => {
						const newUser = {
							id: user.uid,
							registeredMeetups: []
						}
						commit('setUser', newUser)
					}
				)
				.catch(
					error => {
						console.log(error)
					}
				)
		}
	},
	getters: {
		loadedMeetups(state) {
			return state.loadedMeetups.sort((meetupA, meetupB) => {
				return meetupA.date > meetupB.date
			})
		},
		featuredMeetups(state, getters) {
			return getters.loadedMeetups.slice(0, 5)
		},
		loadedMeetup(state) {
			return (meetupId) => {
				return state.loadedMeetups.find((meetup) => {
					return meetup.id === meetupId
				})
			}
		},
		user(state) {
			return state.user
		}
	}
})