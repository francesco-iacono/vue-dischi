// {
//     "poster": "https://www.onstageweb.com/wp-content/uploads/2018/09/bon-jovi-new-jersey.jpg",
//     "title": "New Jersey",
//     "author": "Bon Jovi",
//     "genre": "Rock",
//     "year": "1988"
// },


var app = new Vue({
  el: '#app',
  data: {
    discs: [],
    genres: [
      'All'
    ],
    valueGenre: 'All'
  },
  methods: {
    getGenre: function () {
      console.log(this.valueGenre);
    }
  },
  mounted: function () {
      axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then( (result) => {
          this.discs = result.data.response;
          this.discs.forEach((item, i) => {
            if (!this.genres.includes(item.genre)) {
                this.genres.push(item.genre);
            }
          }
        );
       }
    );
  }
});
