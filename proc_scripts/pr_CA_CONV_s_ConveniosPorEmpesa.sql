USE [BDCORP]
GO

/****** Object:  StoredProcedure [dbo].[pr_CA_CONV_s_ConveniosPorEmpesa]    Script Date: 18/06/2018 17:34:59 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO



/*----------------------------------------------------------------------------------------------------------------
BANCO DE DADOS.: BDCORP
NOME DO OBJETO.: pr_CA_CONV_s_ConveniosPorEmpesa
SISTEMA/PROJETO: Agendamento - Integração WISE - Convênios
DESCRIÇÃO .....: Busca por convênios com base no ID da empresa
AUTOR..........: Leonardo Holanda Araujo - Opah IT Consulting
DATA...........: 21/05/2018
MOTIVO.........: Listar todos os convênios relacionados a empresa.
Resultado(s)...: Retornar todos os convênios relacionados a empresa.
Objetivo(s)....: Retorna todos os convênios relacionados a empresa.
Versão.........: 1.0
------------------------------------------------------------------------------------------------------------------

PARÂMETRO(S):
			NOME       : @ID_EMCV_CD_EMPRCONVENIO AS INTEGER
			DESCRIÇÃO  : ID da empresa.
            OBRIGATÓRIO: SIM           
            
------------------------------------------------------------------------------------------------------------------
            
TESTE:
[dbo].[pr_CA_CONV_s_ConveniosPorEmpesa]
	@ID_EMCV_CD_EMPRCONVENIO = 6	
	
*/ ---------------------------------------------------------------------------------------------------------------
/*----------------------------------------------------------------------------------------------------------------
[01]Data : 21/05/2018
Autor(es) : Leonardo Holanda Araujo - Opah IT Consulting 
Projeto : Agendamento - Integração WISE - Convênios
Motivo(S) : Criação da procedure.
----------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------  

----------------------------------------------------------------------------------------------------------------- */

-- [01] Início
ALTER PROCEDURE [dbo].[pr_CA_CONV_s_ConveniosPorEmpesa]

@ID_EMCV_CD_EMPRCONVENIO INT


AS

BEGIN

SELECT 

COEM.ID_CONV_CD_CONVENIO as id

FROM CV_CATB_CONVENIOEMPR_COEM COEM WITH(NOLOCK)
INNER JOIN CV_CDTB_EMPRCONVENIO_EMCV EMCV WITH(NOLOCK)
ON EMCV.ID_EMCV_CD_EMPRCONVENIO = COEM.ID_EMCV_CD_EMPRCONVENIO
INNER JOIN CV_CDTB_CONVENIO_CONV CONV WITH(NOLOCK)
ON CONV.ID_CONV_CD_CONVENIO = COEM.ID_CONV_CD_CONVENIO

WHERE COEM.ID_EMCV_CD_EMPRCONVENIO = @ID_EMCV_CD_EMPRCONVENIO
AND EMCV.EMCV_DH_INATIVO is NULL


  
END
-- [01] Fim


GO


