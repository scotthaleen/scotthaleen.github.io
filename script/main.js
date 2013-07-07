requirejs.config({
 baseUrl : '../js',
 paths : {
   "zepto" : "zepto.min",
   "bootstrap" : "bootstrap.min",
   "knockout" : "knockout-2.2.1",
   "underscore" : "underscore-min"
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


require(["underscore", "zepto"], 
        function(_, $){

});
