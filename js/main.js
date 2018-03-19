const vm = new Vue({
  el : "#app",
  data : {
    welcomeMessage : "Welcome to your first Vue app",

    hasVue : false,

    vuemessage : "You can haz vue!",

    targetUrl : "http:vuejs.org",

    anchorOff : true,

    moviedata : [
       { name: "Star Wars the Force Awakens", thumb: "forceawakens.jpg", vidsource: "forceawakens.mp4", description: "yet another star wars movie"},
       { name: "Stranger Things", thumb: "strangerthings.jpg", vidsource: "strangerthings.mp4", description: "don't get lost in the upside down"},
       { name: "Marvel's the Avengers", thumb: "avengers.jpg", vidsource: "avengers.mp4", description: "who dies in Infinity War? I vote Thor"}
   ],

   moviename : "movie name goes here",
   moviedescription : "movie description goes here",
   moviesource : "null"
 },

 methods : {
   loadMovie(e) {
     e.preventDefault();

     console.log(e.currentTarget);

     //find the href (name of the video) and use it to filter the collection
     dataKey = e.currentTarget.href.substring(e.currentTarget.href.lastIndexOf('/') +1);

     //filter the collection and use the video name as a ref
     currentData = this.moviedata.filter(video => video.vidsource === dataKey);

     //update the view witht he relevant info
     this.moviename = currentData[0].name;
     this.moviedescription = currentData[0].description;
     this.moviesource = dataKey;
   }
 }

});
