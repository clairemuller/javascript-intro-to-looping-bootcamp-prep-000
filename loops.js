 const forLoop = (array) => {
   for (let i = 0; i < 25; i++) {
     if (i === 1) {
       return "I am 1 strange loop.";
     } else if (i < 25) {
       return "I am ${i} strange loops.";
     } else {
       return "Error!";
     }
   }
 };