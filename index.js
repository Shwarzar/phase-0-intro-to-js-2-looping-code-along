    function writeCards(names) {
    const thankYou = [];
    for (let i = 0; i < names.length; i++) {
      thankYou.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return thankYou;
  }
  
  function countDown(x) {
    while (x >= 0) {
      console.log(x);
      x--;
    }
  }
  
  const writeCardsResult = writeCards(['Guadalupe', 'Ollie', 'Aki']);
  console.log(writeCardsResult);
  
  countDown(10);
  