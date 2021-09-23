// Code your solution here
drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, string){
    const result=drivers.filter(function(item){
        return item.toUpperCase()===string.toUpperCase()
    })
    return result
}

function fuzzyMatch(drivers, string){
    const result=drivers.filter((item)=>item[0].toUpperCase()===string[0].toUpperCase())
    return result;
}
const driversList = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(driversList,string){
      const result=driversList.filter((item)=>item.name.toUpperCase()===string.toUpperCase())
      return result
  }

  