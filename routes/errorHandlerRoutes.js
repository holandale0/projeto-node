/*
Type	                Code	                Description	                        Http Status

ConnectionError	        ELOGIN	                Login failed.	
ConnectionError	        ETIMEOUT	            Connection timeout._________________504
ConnectionError	        EDRIVER	                Unknown driver.	
ConnectionError	        EALREADYCONNECTED	    Database is already connected!	
ConnectionError	        EALREADYCONNECTING	    Already connecting to database!	
ConnectionError	        ENOTOPEN	            Connection not yet open.	
ConnectionError	        EINSTLOOKUP	            Instance lookup failed.	
ConnectionError	        ESOCKET	                Scoket error.	
ConnectionError	        ECONNCLOSED	            Connection is closed._______________500
TransactionError	    ENOTBEGUN	            Transaction has not begun.	
TransactionError	    EALREADYBEGUN	        Transaction has already begun.	
TransactionError	    EREQINPROG	            Can't commit/rollback transaction. 
                                                There is a request in progress.	
TransactionError	    EABORT	                Transaction has been aborted.	
RequestError	        EREQUEST	            Message from SQL Server. 
                                                Error object contains additional 
                                                details.____________________________404
RequestError	        ECANCEL	                Canceled.___________________________499
RequestError	        ETIMEOUT	            Request timeout.____________________408
RequestError	        EARGS	                Invalid number of arguments.	
RequestError	        EINJECT	                SQL injection warning.	
RequestError	        ENOCONN	                No connection is specified for 
                                                that request.	
PreparedStatementError	EARGS	                Invalid number of arguments.	
PreparedStatementError	EINJECT	                SQL injection warning.	
PreparedStatementError	EALREADYPREPARED	    Statement is already prepared.	
PreparedStatementError	ENOTPREPARED	        Statement is not prepared.	
*/




exports.handle = async function(resp,res){



    var code = await resp.code;
    var name = await resp.name;
    var stack = await resp.stack;
    var typeError = await resp.TypeError;

    

    


    if(stack !== undefined && typeError === undefined && code === undefined){
        console.log('-.-.-.-.-.-.-.-.-.-.-.-');
        console.log('Mensagem do erro : '+stack);
        console.log('-.-.-.-.-.-.-.-.-.-.-.-');
        name = 'UndefinedError';
    }


    if(name === 'RequestError'){

        console.log('-.-.-.-.-.-.-.-.-.-.-.-');
        console.log('Código do erro : '+code);
        console.log('-.-.-.-.-.-.-.-.-.-.-.-');
        console.log('Tipor do erro : '+name);
        console.log('-.-.-.-.-.-.-.-.-.-.-.-');

        if(code === 'EREQUEST'){
            res.status(404).json({error: 'FleuryApiNovoAgendamentoNotFound'});
        }else if(code === 'ETIMEOUT'){ 
            res.status(408).json({error: 'FleuryApiNovoAgendamentoRequestTimeout'});
        }else if(code === 'ECANCEL '){
            res.status(499).json({error: 'FleuryApiNovoAgendamentoRequestCanceled'});
        }else if(code === 'ENOCONN '){
                res.status(403).json({error: 'FleuryApiNovoAgendamentoForbidden'});
        }
            
    }else if(name === 'ConnectionError'){

        console.log('-.-.-.-.-.-.-.-.-.-.-.-');
        console.log('Código do erro : '+code);
        console.log('-.-.-.-.-.-.-.-.-.-.-.-');
        console.log('Tipor do erro : '+name);
        console.log('-.-.-.-.-.-.-.-.-.-.-.-');

        if(code === 'ETIMEOUT'){ 
            res.status(504).json({error: 'FleuryApiNovoAgendamentoConnectionTimeout'});
        }else if(code === 'ENOTOPEN'){
            res.status(500).json({error: 'FleuryApiNovoAgendamentoInternalServerError'});
        }else if(code === 'ECONNCLOSED'){
            res.status(500).json({error: 'FleuryApiNovoAgendamentoInternalServerError'});
        }

    }else if(name === 'TransactionError'){

        console.log('-.-.-.-.-.-.-.-.-.-.-.-');
        console.log('Código do erro : '+code);
        console.log('-.-.-.-.-.-.-.-.-.-.-.-');
        console.log('Tipor do erro : '+name);
        console.log('-.-.-.-.-.-.-.-.-.-.-.-');

        res.status(500).json({error: 'FleuryApiNovoAgendamentoInternalServerError'});
        
    }else if(name === 'PreparedStatementError'){

        console.log('-.-.-.-.-.-.-.-.-.-.-.-');
        console.log('Código do erro : '+code);
        console.log('-.-.-.-.-.-.-.-.-.-.-.-');
        console.log('Tipor do erro : '+name);
        console.log('-.-.-.-.-.-.-.-.-.-.-.-');

        res.status(500).json({error: 'FleuryApiNovoAgendamentoInternalServerError'});
        
    }else if(name === 'UndefinedError'){ // NOME DE ERRO CUSTOMIZADO QUE REPRESENTA ERROS DO TIPO 'undefined'

        console.log('-.-.-.-.-.-.-.-.-.-.-.-');
        console.log('Código do erro : '+code);
        console.log('-.-.-.-.-.-.-.-.-.-.-.-');
        console.log('Tipor do erro : '+name);
        console.log('-.-.-.-.-.-.-.-.-.-.-.-');

        
        res.status(500).json({error: 'FleuryApiNovoAgendamentoInternalServerError'});
        
    }else{

        res.status(200).json(resp);

    }

    return await res;



}