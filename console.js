console.pretty = function(c) {
    
  // get type of input
  var inputType = typeof c;
  var args = arguments;
  var isObject = function(a) {
     return (!!a) && (a.constructor === Object);
  };
  console.log(inputType);
  // colour scheme
  colourScheme = {	  
	'string': [
		'color: green',
		'background-color: none',
		'border: none',
		'padding: 2px 4px'
	].join(';'),	    
	'boolean': [
		'color: #fff',
		'background-color: #E76D83',
		'border: none',
		'padding: 2px 4px'
	].join(';'),    
	'undefined': [
		'color: red',
		'background-color: #fff',
		'border: 2px solid red',
		'padding: 2px 4px'
	].join(';'),  
	'function': [
		'color: blue',
		'background-color: none',
		'border: none',
		'padding: 2px'
	].join(';'),	  
	'array': [
		'color: orange',
		'background-color: none',
		'border: none',
		'padding: 2px'
	].join(';'),  
	'object': [
		'color: purple',
		'background-color: none',
		'border: none',
		'padding: 2px'
	].join(';'),
	'type': [
		'color: #D5BBB1',
		'background-color: none',
		'border: none',
		'padding: 2px'
	].join(';')
  }
   	
  // different action dependng on type  
  switch(inputType) {
    case 'object' :
        if ( !null ) { 
            if ( c.constructor === Array ) {
                if ( c[0] != null ) { 
                    console.group('%cArray: ', colourScheme.type);
                        c.forEach(function(item, i){
                            console.log('%c '+ i + ' => ' + item  + ' ', colourScheme.array);
                        });          
                    console.log('%cArgs-> ' + arguments + '', colourScheme.type);     
                    console.groupEnd();  
				}
                else {
                  console.log('%c' + 'Empty array!', colourScheme.array);
                }  
			}               
            else {
//                 console.group('%cObject: ', colourScheme.type);
//                     Object.keys(c).forEach(function(key) {
//                         console.log(key, c[key]);
//                     });     
//                     console.log('%cArgs-> ' + arguments + '', colourScheme.object);  
//                 console.groupEnd();
		    
		// or stringify!?
		console.log(JSON.stringify(c, null, '\t'));
            }                    
        }
        else {
          console.log('%c' + 'null!', colourScheme.type);
        }
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
	      		console.log('%c '+ i + ' => ' + item  + ' ', colourScheme.function);
	 	});    
        break;
		  
		  
    case 'string' :
        console.log('%c' + c, colourScheme.string);
        break;        
    case 'boolean' :
        console.log('%c' + c, colourScheme.boolean ); 
	break;  
    case 'undefined' :
        console.log('%c' + 'undefined!', colourScheme.undefined ); 
	break;
    default :
  }

}
