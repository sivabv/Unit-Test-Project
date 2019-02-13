function Search() {
 
    function getState(stateListObject, val) {
      var state= stateListObject.filter(st =>{
        return st.abbr.toLowerCase() === val.toLowerCase() || st.name.toLowerCase() === val.toLowerCase();
      });
      // console.log(state[0].largest_city);
      // console.log(state[0].capital);
      return state[0];
    }
  
    return {
      getState
    }
  
  }
  
  module.exports = Search();
  