USE [BDCORP]
GO

/****** Object:  StoredProcedure [dbo].[pr_CA_PESS_FIS_s_PessoaFisicaById]    Script Date: 25/06/2018 15:13:43 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO






/*----------------------------------------------------------------------------------------------------------------
BANCO DE DADOS.: BDCORP
NOME DO OBJETO.: pr_CA_PESS_FIS_s_PessoaFisicaById
SISTEMA/PROJETO: Agendamento - Integração WISE - Pessoa Fisica
DESCRIÇÃO .....: Busca por uma pessoa fisica com base no ID.
AUTOR..........: Leonardo Holanda Araujo - Opah IT Consulting
DATA...........: 25/06/2018
MOTIVO.........: Recuperar a pessoa fisica com base no id.
Resultado(s)...: Retornar pessoa fisica com base no id.
Objetivo(s)....: Retornar pessoa fisica com base no id.
Versão.........: 1.0
------------------------------------------------------------------------------------------------------------------
            
PARÂMETRO(S):
			NOME       : @ID_PEFI_CD_PESSOA_FISICA INT
			DESCRIÇÃO  : ID da pessoa fisica
            OBRIGATÓRIO: SIM    
            
------------------------------------------------------------------------------------------------------------------
            
TESTE 1:
[dbo].[pr_CA_PESS_FIS_s_PessoaFisicaById]
	@ID_PEFI_CD_PESSOA_FISICA = 1
    
*/ ---------------------------------------------------------------------------------------------------------------
/*----------------------------------------------------------------------------------------------------------------
[01]Data : 25/06/2018
Autor(es) : Leonardo Holanda Araujo - Opah IT Consulting 
Projeto : Agendamento - Integração WISE - Pessoa Fisica
Motivo(S) : Criação da procedure.
----------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------  

----------------------------------------------------------------------------------------------------------------- */


CREATE PROCEDURE [dbo].[pr_CA_PESS_FIS_s_PessoaFisicaById]


@ID_PEFI_CD_PESSOA_FISICA INT


AS

BEGIN -- [01] Início

SELECT DISTINCT

PEFI.ID_PEFI_CD_PESSOA_FISICA as id,
PEFI.PEFI_NO_NOME + ' ' + PEFI.PEFI_NO_SOBRENOME + ' ' + PEFI.PEFI_NO_COMPLEMENTO_NOME as nome,
PEFI.ID_TIPF_SL_TITULO as titulo,
PEFI.PEFI_CD_SEXO as sexo,
PEFI.PEFI_DH_NASCIMENTO as dataNascimento,
PEFI.PEFI_IN_DT_NASC_FICTICIA as dataNascimentoFicticia


FROM 

PE_CDTB_PESSOA_FISICA_PEFI PEFI WITH(NOLOCK)



WHERE 


PEFI.ID_PEFI_CD_PESSOA_FISICA = @ID_PEFI_CD_PESSOA_FISICA

    
    
  
END -- [01] Fim




GO

