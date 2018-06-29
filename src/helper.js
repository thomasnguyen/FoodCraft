let helpers =  {
    formatTime : function(input) {
        if (input === ""){
            return "???"
        }
        var reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/;
          var hours = 0, minutes = 0, seconds = 0, totalseconds;

          if (reptms.test(input)) {
            var matches = reptms.exec(input);
            if (matches[1]) hours = Number(matches[1]);
            if (matches[2]) minutes = Number(matches[2]);
            if (matches[3]) seconds = Number(matches[3]);
            totalseconds = hours * 3600  + minutes * 60 + seconds;
          }
     return (totalseconds / 60) + ' mins';
    },
  
    calcIngredient(ingredients){
        if (ingredients !== undefined) {
            return ingredients.split("\n").length;
        }
    },

  splitIngredient(ingredients){
      if (ingredients !== undefined)
        return ingredients.split("\n");
  }
  }

  
  export default helpers;