console.pretty = function(c) {
    
  // get type of input
  var inputType = typeof c;
  var args = arguments;
  console.log(inputType, arguments);
  
  // colour scheme
  colourSchemes = {
    standard: {
                text: 'lightseagreen',
                back: 'none',
                border: 'none'
              },
    special: {
                text: 'cornsilk',
                back: 'cornflowerblue',
                border: 'none'
              },
    warning: {
                text: 'indianred',
                back: 'cornsilk',
                border: '2px solid indianred'
              }
  } 
  
   /*
  // fn calling console
  function prettyCall( print, text, background, border) {
   var temp = '';
   temp += "'%c";
   temp += print + "',";
   temp += (text) ? "'color:" + text + "'" : '';
   temp += (background) ? "'background-color:" + background + "'" : '';
   temp += (border) ? "'border:" + border + "'" : '';
   return temp;
   console.log( prettyCall(c,colourSchemes.standard.text) );
  }
  */
   
  // different action dependng on type  
  switch(inputType) {
    case 'string' :
        console.log('%c' + c, 'color:' + colourSchemes.standard.text + '');
        break;
    case 'array' :
        console.table(c);
        break;
    case 'object' :
        if ( !null ) {
            if ( 1 == 1 /*one-level deep object*/ ) {
                console.table([c]);
            }
            else {
                console.table(c);
            }
        }
        else {
          console.log('%c' + 'null!', 'color:' + colourSchemes.warning.text + '; background-color:' + colourSchemes.warning.back + '; border:' + colourSchemes.warning.border + '');
        }
        break;        
    case 'boolean' :
        console.log('%c' + c, 'color:' + colourSchemes.special.text + '; background-color:' + colourSchemes.special.back + '');
        break;     
    case 'undefined' :
        console.log('%c' + 'undefined!', 'color:' + colourSchemes.warning.text + '; background-color:' + colourSchemes.warning.back + '; border:' + colourSchemes.warning.border + '');
        break;
    default :
  }

}
