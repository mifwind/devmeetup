<template>
	<v-container>
		<v-layout row wrap>
			<v-flex xs12 class="mb-3">
				<h1>Meetups</h1>
			</v-flex>

			<v-flex xs12 sm6 md4>

				<v-card>
					<v-card-media 
						src="http://7oom.ru/wp-content/uploads/piter/sankt_peterburg_foto_01.jpg" 
						height="200px">
					</v-card-media>
					<v-card-title primary-title>
						<div>
							<h3 class="headline mb-0">Meetup in St. Petersburg</h3>
							<div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
						</div>
					</v-card-title>
					<v-card-actions>
						<v-btn flat color="primary" to="/meetups/1">
							<v-icon left>arrow_forward</v-icon>
								View meetup
							</v-btn>
					</v-card-actions>
				</v-card>

			</v-flex>
		</v-layout>
	</v-container>
</template>