console.pretty = function(c) {
    
  // get type of input
  var inputType = typeof c;
  var args = arguments;
  
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
                border: '2px solid cornsilk'
              },
    warning: {
                text: 'indianred',
                back: 'cornsilk',
                border: '2px solid indianred'
              }
  }
   
  // different action dependng on type  
  switch(inputType) {
    case 'string' :
        console.log('%c' + c, 'color:' + colourSchemes.standard.text + '');
        break;
    case 'object' :
        if ( !null ) { 
            if ( c.constructor === Array ) {
                if ( c[0] != null ) { 
                    console.group('%cArray: ', 'color:' + colourSchemes.warning.text + '');
                        c.forEach(function(item, i){
                            console.log('%c '+ i + ' => ' + item  + ' ', 'color:' + colourSchemes.standard.text + '');
                        });          
                    console.log('%cArgs-> ' + arguments + '', 'color:' + colourSchemes.warning.text + '');     
                    console.groupEnd();  
				}
                else {
                  console.log('%c' + 'Empty array!', 'color:' + colourSchemes.warning.text + '; background-color:' + colourSchemes.warning.back + '; border:' + colourSchemes.warning.border + '');
                }  
			}               
            else {
                console.group('%cObject: ', 'color:' + colourSchemes.warning.text + '');
                    Object.keys(c).forEach(function(key) {
                        console.log(key, c[key]);
                    });     
                    console.log('%cArgs-> ' + arguments + '', 'color:' + colourSchemes.warning.text + '');  
                console.groupEnd();
            }                    
        }
        else {
          console.log('%c' + 'null!', 'color:' + colourSchemes.warning.text + '; background-color:' + colourSchemes.warning.back + '; border:' + colourSchemes.warning.border + '');
        }
        break;        
    case 'boolean' :
        console.log('%c' + c, 'color:' + colourSchemes.special.text + '; background-color:' + colourSchemes.special.back + '');
        break;    
      case 'function' :
          
        break;
    case 'undefined' :
        console.log('%c' + 'undefined!', 'color:' + colourSchemes.warning.text + '; background-color:' + colourSchemes.warning.back + '; border:' + colourSchemes.warning.border + '');
        break;
    default :
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
