<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12>
				<v-card>
					<v-card-title>
						<h1 class="primary--text">{{meetup.title}}</h1>
					</v-card-title>
					<v-card-media 
						:src="meetup.imageUrl" 
						height="400px">
					</v-card-media>
					<v-card-text>
						<p class="info--text">{{meetup.date | date}}-- {{meetup.location}}</p>

						{{meetup.description}}
						
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn color="primary">
							Register
							</v-btn>
					</v-card-actions>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
	props: ['id'],
	computed: {
		meetup () {
			return this.$store.getters.loadedMeetup(
				this.id
			)
		}
	}

}
</script>
