console.p = function(c) {

  // different action dependng on type
  var inputType = typeof c;
  switch(inputType) {
    case 'object' :
        if ( c != null ) {
            if ( c.constructor === Array ) {
                if ( c[0] != null ) {
                    console.group('%cArray: ', colourScheme.array);
                        c.forEach(function(item, i){
                            console.log('%c '+ i + ' => ' + item  + ' ', colourScheme.array);
                        });
                    console.groupEnd();
				}
                else {
                  console.log('%c' + 'Empty array!', colourScheme.array);
                }
			}
            else {
                console.group('%cObject: ', colourScheme.object);
            		console.log('%c' + JSON.stringify(c, null, '\t') + '', colourScheme.object);
                console.groupEnd();
            }
        }
        else {
          console.log('%c' + 'null!', colourScheme.undefined);
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
		return body[0];
	 }
	  var funcDetails = [getArgs(c),getBody(c)];
		console.group('%cfunction %c' + c.name + '()', colourScheme.function + 'font-size: 12px', colourScheme.function);
	  		funcDetails.forEach(function(item, i){
				var i = (i == 0 ) ? 'params => ' : 'fn => ';
                // if ( typeof item == 'string' ) {
                //     item = item.replace('{','{ \n \t');
                //     item = item.replace(';','; \n \t');
                //     item = item.replace('}','} \n');
                // }
	      			console.log('%c' + i + item + '', colourScheme.function);
	 		});
		console.groupEnd();
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
