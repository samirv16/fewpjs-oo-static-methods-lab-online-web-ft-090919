class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-\s']+/g, '')
  }
  
  static titleize(string) {
    let exclude = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
    let arr = string.split(' ')
    let final = []

    for ( let i = 0; i < arr.length; i++ ) {
      // If it's the first word, titleize it and push into new array by calling this.capitalize from above
      if (i == 0) {
        final.push( this.capitalize(arr[i]) )
      } else {
        // if any words from exclude array match any words from `arr`, push that word into the new array
        if ( exclude.includes(arr[i]) ) {
          final.push( arr[i] )
        } else {
          // If the word doesn't match any words in in exclude array, titleize and push into new array
          final.push( this.capitalize(arr[i]) )
        }
      }
    }
    // turn array of words back into a string
    return final.join(' ')
  }
}