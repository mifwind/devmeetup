import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		loadedMeetups: [
			{
				imageUrl:
					"http://7oom.ru/wp-content/uploads/piter/sankt_peterburg_foto_01.jpg",
				id: "123",
				title: "Meetup in St. Petersburg",
				date: '2018-01-01'
			},
			{
				imageUrl: "https://www.votpusk.ru/country/ctimages/new/FR01.jpg",
				id: "234",
				title: "Meetup in Paris",
				date: '2017-12-31'
			}
		],
		user: {
			id: 'gsfgd',
			registeredMeetups: ['234']
		}
	},
	mutations: {},
	actions: {},
	getters: {
		loadedMeetups (state){
			return state.loadedMeetups.sort((meetupA, meetupB) => {
				return meetupA.date > meetupB.date
			})
		},
		featuredMeetups (state, getters){
			return getters.loadedMeetups.slice(0, 5)
		},
		loadedMeetup (state){
			return (meetupId) => {
				return state.loadedMeetups.find((meetup) => {
					return meetup.id === meetupId
				})
			}
		}
	}
})