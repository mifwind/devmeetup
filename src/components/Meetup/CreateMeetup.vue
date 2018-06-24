<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<h1 class="primary--text">Create new meetup</h1>
			</v-flex>
		</v-layout>

		<v-layout row>
			<v-flex xs12>
				<form @submit.prevent="onCreateMeetup">
					<v-layout row>
						<v-flex xs12 sm6 offset-sm3>
							<v-text-field
								name="title"
								label="Title"
								id="title"
								v-model="title"
								required
							></v-text-field>
						</v-flex>
					</v-layout>

					<v-layout row>
						<v-flex xs12 sm6 offset-sm3>
							<v-text-field
								name="location"
								label="Location"
								id="location"
								v-model="location"
								required
							></v-text-field>
						</v-flex>
					</v-layout>

					<v-layout row>
						<v-flex xs12 sm6 offset-sm3>
							<v-btn raised class="primary" @click="onPickFile">Upload image</v-btn>
							<input 
								type="file" 
								hidden 
								ref="fileInput" 
								accept="image/*"
								@change="onFilePicked"
								/>
						</v-flex>
					</v-layout>

					<v-layout row>
						<v-flex xs12 sm6 offset-sm3>
							<img :src="imageUrl" width="100%">
						</v-flex>
					</v-layout>

					<v-layout row>
						<v-flex xs12 sm6 offset-sm3>
							<v-text-field
								name="description"
								label="Description"
								id="description"
								v-model="description"
								multi-line
								required
							></v-text-field>
						</v-flex>
					</v-layout>

					<v-layout row>
						<v-flex xs12 sm6 offset-sm3>
							<h4>Chose a Date & Time</h4>
						</v-flex>
					</v-layout>

					<v-layout row>
						<v-flex xs12 sm6 offset-sm3>
							<v-date-picker 
								v-model="date"
								></v-date-picker>
						</v-flex>
					</v-layout>

					<v-layout row>
						<v-flex xs12 sm6 offset-sm3>
							<v-time-picker v-model="time" format="24hr"></v-time-picker>
						</v-flex>
					</v-layout>

					<v-layout row>
						<v-flex xs12 sm6 offset-sm3>
							<v-btn 
								class="primary" 
								:disabled="!formIsValid"
								type="submit">Create Meetup</v-btn>
						</v-flex>
					</v-layout>

				</form>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      location: "",
      imageUrl: "",
      description: "",
      date: new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate(),
      picker: null,
      landscape: false,
      reactive: false,
			time: '00:00',
			image: null
    };
  },
  computed: {
    formIsValid() {
			console.log()
      return (
        this.title.length &&
        this.location.length &&
        this.imageUrl.length &&
				this.description.length && 
				this.date.length &&
				this.time
      );
    },
    submittableDateTime() {
			let date = this.date + " " + this.time;
			
      return new Date(date)
    }
  },
  methods: {
    onCreateMeetup() {
      if (!this.formIsValid) return;

			if (!this.image){
				return
			}
      const meetupData = {
        title: this.title,
        location: this.location,
        image: this.image,
        description: this.description,
        date: this.submittableDateTime
      };
      this.$store.dispatch("createMeetup", meetupData);
      this.$router.push("/meetups");
		},
		onPickFile(){
			this.$refs.fileInput.click();
		},
		onFilePicked(event){
			const files = event.target.files;
			let filename = files[0].name;

			if(filename.lastIndexOf('.') <= 0){
				return alert('please add a valid file!')
			}

			const fileReader = new FileReader();
			fileReader.addEventListener('load', () => {
				this.imageUrl = fileReader.result;
			});
			fileReader.readAsDataURL(files[0]);
			this.image = files[0];
		}
  }
};
</script>
