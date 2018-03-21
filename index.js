var groupPeople = (names, number) => {
  var len = names.length
  var teams = []
  if ( number > len){
    return 'Team Number Exceeded'
  }
 while( names.length > 0){
    for ( var j = 0; j < number; j++){
      if ( !teams[j]){
        teams.push([])
      }
    if ( names.length < 1){
      break;
    }
    var pos = Math.floor(Math.random() * names.length);
    teams[j].push(names[pos])
    names.splice(pos,1)
  }
 }
  return teams
}

module.exports = groupPeople;
