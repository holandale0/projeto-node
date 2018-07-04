USE [BDCORP]
GO

/****** Object:  StoredProcedure [dbo].[pr_CA_PESS_FIS_s_EnderecoPessoaFisicaById]    Script Date: 25/06/2018 15:13:11 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO







/*----------------------------------------------------------------------------------------------------------------
BANCO DE DADOS.: BDCORP
NOME DO OBJETO.: pr_CA_PESS_FIS_s_EnderecoPessoaFisicaById
SISTEMA/PROJETO: Agendamento - Integração WISE - Pessoa Fisica
DESCRIÇÃO .....: Busca por contatos de pessoa fisica com base no ID.
AUTOR..........: Leonardo Holanda Araujo - Opah IT Consulting
DATA...........: 25/06/2018
MOTIVO.........: Recuperar endereço de pessoa fisica com base no id.
Resultado(s)...: Retornar endereço de pessoa fisica com base no id.
Objetivo(s)....: Retornar endereço de pessoa fisica com base no id.
Versão.........: 1.0
------------------------------------------------------------------------------------------------------------------
            
PARÂMETRO(S):
			NOME       : @ID_PEFI_CD_PESSOA_FISICA INT
			DESCRIÇÃO  : ID da pessoa fisica
            OBRIGATÓRIO: SIM    
            
------------------------------------------------------------------------------------------------------------------
            
TESTE 1:
[dbo].[pr_CA_PESS_FIS_s_EnderecoPessoaFisicaById]
	@ID_PEFI_CD_PESSOA_FISICA = 46764
    
*/ ---------------------------------------------------------------------------------------------------------------
/*----------------------------------------------------------------------------------------------------------------
[01]Data : 25/06/2018
Autor(es) : Leonardo Holanda Araujo - Opah IT Consulting 
Projeto : Agendamento - Integração WISE - Pessoa Fisica
Motivo(S) : Criação da procedure.
----------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------  

----------------------------------------------------------------------------------------------------------------- */


CREATE PROCEDURE [dbo].[pr_CA_PESS_FIS_s_EnderecoPessoaFisicaById]


@ID_PEFI_CD_PESSOA_FISICA INT


AS

BEGIN -- [01] Início

SELECT DISTINCT

ENDE.ENDE_NO_PAIS as pais,
ENDE.ENDE_NO_ESTADO as estado,
ENDE.ENDE_NO_MUNICIPIO as cidade,
ENDE.ENDE_NO_BAIRRO_DISTRITO as bairro,
ENDE.ENDE_NO_LOGRADOURO as logradouro,
ENDE.ENDE_NR_LOGRADOURO as numero,
ENDE.ENDE_DS_COMPLEMENTO as complemento,
ENDE.ENDE_CD_CEP as cep


FROM 

PE_CDTB_ENDERECO_ENDE ENDE WITH(NOLOCK)


WHERE 


ENDE.ID_PEFI_CD_PESSOA_FISICA = @ID_PEFI_CD_PESSOA_FISICA
 
  
END -- [01] Fim





GO

