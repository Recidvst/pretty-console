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
   
  // test elements
  var boolean = true;
  var string = 'string';
  var undefined = undefined;
  var array1 = [1,2,3];
  var array2 = [1,2,[3,4,5],6];
  var array3 = [
    a = { name: "aa", test: "test1" },
    b ={ name: "bb", test: "test2" }
  ];
  var array4 = new Array();
  var object1 = { 
    a : { name: "aa", test: "test1" },
    b : { name: "bb", test: "test2" }
  };
  var object2 = {
    a: 'b',
    c: 'd'
  }
  var object3 = {};
  var func1 = function() { console.log('hi');}
  var func2 = function(a,b,c) { console.log('hi');}
	
	
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
//                 console.group('%cObject: ', 'color:' + colourSchemes.warning.text + '');
//                     Object.keys(c).forEach(function(key) {
//                         console.log(key, c[key]);
//                     });     
//                     console.log('%cArgs-> ' + arguments + '', 'color:' + colourSchemes.warning.text + '');  
//                 console.groupEnd();
		    
		// or stringify!?
		console.log(JSON.stringify(c, null, '\t'));
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
	 function getArgs(func) {
	    var args = func.toString().match(/function\s.*?\(([^)]*)\)/)[1];
	    return args.split(',').map(function(arg) {
	      return arg.replace(/\/\*.*\*\//, '').trim();
	    }).filter(function(arg) {
	      return arg;
	    });
	 }	
	 function getBody(func) {
	    var args = func.toString();
            var body = args.match(/{[\w\W]*}/);
		 return body[0]
	 }
	  var funcDetails = [c.name,getArgs(c),getBody(c)];
	  	funcDetails.forEach(function(item, i){
	      		console.log('%c '+ i + ' => ' + item  + ' ', 'color:' + colourSchemes.standard.text + '');
	 	});    
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
