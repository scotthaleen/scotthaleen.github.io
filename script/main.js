requirejs.config({
 baseUrl : '../js'
 paths : {
   "zepto" : "../js/zepto.min",
   "bootstrap" : "../js/bootstrap.min"
   "knockout" : "../js/knockout-2.2.1",
   "underscore" : "../js/underscore"
   /* hasher, crossroads, signals */
 },
 shim: {
   "underscore": {
     "exports" : "_"
   },
   "bootstrap" : {
     deps: ["zepto"],
     exports: "$"
   }
 },
  config: {
    text : {
      env : 'xhr'
    }
  }
});


require([underscore, zepto], 
        function(_, $){

});
