var schimpfwort = ["hure", "ficker", "arsch", "pisser"];

      for(var i = 0; i <= schimpfwort.length; i++){
        if(text.match(schimpfwort[i])){
          text = text.replace(schimpfwort[i], "****");
        }
      }
