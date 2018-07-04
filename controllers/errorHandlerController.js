


exports.handle = function(err){

    if(err.TypeError === undefined && err.code === undefined){
        err.code = 'EINTERNAL';
    }

    if(err.name === 'RequestError' && err.code === 'ETIMEOUT'){
        err.code = 'ETIMEOUT-R';
    }else if(err.name === 'ConnectionError' && err.code === 'ETIMEOUT'){
        err.code = 'ETIMEOUT-C';
    }

    return err.code;


}