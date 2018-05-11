<template>
	<v-container grid-list-md>
		<v-layout row wrap>
			<v-flex xs12 class="mb-3">
				<h1>Meetups</h1>
			</v-flex>
		</v-layout>

		<v-layout row wrap>
			<v-flex 
				xs12 sm6 md4 
				v-for="meetup in meetups" :key="meetup.id">

				<v-card>
					<v-card-media 
						:src="meetup.imageUrl" 
						height="200px">
					</v-card-media>
					<v-card-title primary-title>
						<div>
							<h3 class="headline mb-0">{{meetup.title}}</h3>
							<div>{{meetup.date | date}}</div>
						</div>
					</v-card-title>
					<v-card-actions>
						<v-btn flat color="primary" :to="'/meetups/' + meetup.id">
							<v-icon left>arrow_forward</v-icon>
								View meetup
							</v-btn>
					</v-card-actions>
				</v-card>

			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	computed: {
		meetups() {
			return this.$store.getters.loadedMeetups
		}
	}
}
</script>
