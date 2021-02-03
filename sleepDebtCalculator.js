const getSleepHours = day => {
  switch(day) {
    case 'monday':
      return 10;
    case 'tuesday':
      return 10;
    case 'wednesday':
      return 10;
    case 'thursday':
      return 10;
    case 'friday':
      return 13;
    case 'saturday':
      return 13;
    case 'sunday':
      return 10;
    default: 
      return 'Error. Enter a day of the week.';
  }
};

const getActualSleepHours = () => 
  getSleepHours('monday') + 
  getSleepHours('tuesday') + 
  getSleepHours('wednesday') + 
  getSleepHours('thursday') + 
  getSleepHours('friday') + 
  getSleepHours('saturday') + 
  getSleepHours('sunday');

// Number of sleep hours on given day 
console.log(getSleepHours('monday'));
// Total number of sleep hours per week 
console.log(getActualSleepHours());

const getIdealSleepHours = (idealHours) => {
  return idealHours * 7;
}; 

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(13);

  if (actualSleepHours === idealSleepHours) {
    console.log('Way to go! You got the perfect amount of sleep!');
  } else if (actualSleepHours > idealSleepHours) {
    console.log(`You got ${actualSleepHours - idealSleepHours} more sleep hours than needed!`);
  } else if (actualSleepHours < idealSleepHours) {
    console.log(`Go rest! You got ${idealSleepHours - actualSleepHours} less sleep hours than you needed this week.`)
  } else {
    console.log('Error! Cannot calculate.');
  }
};

calculateSleepDebt();
