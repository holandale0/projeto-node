USE [BDCORP]
GO

/****** Object:  StoredProcedure [dbo].[pr_CA_EST_CORP_s_MarcaById]    Script Date: 11/06/2018 13:51:46 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO



/*----------------------------------------------------------------------------------------------------------------
BANCO DE DADOS.: BDCORP
NOME DO OBJETO.: pr_CA_EST_CORP_s_MarcaById
SISTEMA/PROJETO: Agendamento - Integra��o WISE
DESCRI��O .....: Busca por marca com base no id da unidade.
AUTOR..........: Leonardo Holanda Araujo - Opah IT Consulting
DATA...........: 08/06/2018
MOTIVO.........: Recuperar a marca com base no id.
Resultado(s)...: Retornar marca com base no id.
Objetivo(s)....: Retornar marca com base no id.
Vers�o.........: 1.0
------------------------------------------------------------------------------------------------------------------
            
PAR�METRO(S):
			NOME       : @ID_MCOR_SL_MARCA VARCHAR(4)
			DESCRI��O  : Codigo da marca
            OBRIGAT�RIO: SIM    
            
------------------------------------------------------------------------------------------------------------------
            
TESTE 1:
[dbo].[pr_CA_EST_CORP_s_MarcaById]
	@ID_MCOR_SL_MARCA = AM
    
*/ ---------------------------------------------------------------------------------------------------------------
/*----------------------------------------------------------------------------------------------------------------
[01]Data : 08/06/2018
Autor(es) : Leonardo Holanda Araujo - Opah IT Consulting 
Projeto : Agendamento - Integra��o WISE - Estrutura Corporativa
Motivo(S) : Cria��o da procedure.
----------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------  

----------------------------------------------------------------------------------------------------------------- */


CREATE PROCEDURE [dbo].[pr_CA_EST_CORP_s_MarcaById]


@ID_MCOR_SL_MARCA VARCHAR(4)


AS

BEGIN -- [01] In�cio

SELECT DISTINCT

MCOR.ID_MCOR_SL_MARCA as code,
MCOR.MCOR_DH_INATIVIDADE as ativo,
MCOR.MCOR_NM_MARCA as nome,
MARC.MARC_DS_URL_LOGO as logo

FROM 

CC_CDTB_MARCA_CORPORATIVA_MCOR MCOR WITH(NOLOCK)

JOIN CC_CATB_MARCA_SAP_LEGADO_MSLE MSLE WITH(NOLOCK)

ON MCOR.ID_MCOR_SL_MARCA = MSLE.ID_MCOR_SL_MARCA

JOIN CP_CDTB_MARCA_MARC MARC WITH(NOLOCK)

ON MSLE.ID_MARC_CD_MARCA = MARC.ID_MARC_CD_MARCA

WHERE 

MCOR.ID_MCOR_SL_MARCA = @ID_MCOR_SL_MARCA


    
    
  
END -- [01] Fim

GO


