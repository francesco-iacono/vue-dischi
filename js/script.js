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
  },
  methods: {

  },
  mounted: function () {
      axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then( (result) => {
          this.discs = result.data.response;
          console.log(this.discs);
       }
    );
  }
});
