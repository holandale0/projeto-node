USE [BDCORP]
GO

/****** Object:  StoredProcedure [dbo].[pr_CA_CONV_s_EmpresaByID]    Script Date: 11/06/2018 13:50:06 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


/*----------------------------------------------------------------------------------------------------------------
BANCO DE DADOS.: BDCORP
NOME DO OBJETO.: pr_CA_CONV_s_EmpresaByID
SISTEMA/PROJETO: Agendamento - Integra��o WISE - Conv�nios
DESCRI��O .....: Busca por empresa com base em ID
AUTOR..........: Leonardo Holanda Araujo - Opah IT Consulting
DATA...........: 21/05/2018
MOTIVO.........: Listar as empresas de acordo com a chave ID passada por par�metro.
Resultado(s)...: Retornar as empresas de acordo com os filtros selecionados.
Objetivo(s)....: Retorna as empresas de acordo com os filtros selecionados.
Vers�o.........: 1.0
------------------------------------------------------------------------------------------------------------------
            
PAR�METRO(S):
			NOME       : @ID_EMCV_CD_EMPRCONVENIO AS INTEGER
			DESCRI��O  : ID da empresa.
            OBRIGAT�RIO: SIM    
            
            
------------------------------------------------------------------------------------------------------------------
            
TESTE:
[dbo].[pr_CA_CONV_s_EmpresaByID]
	@ID_EMCV_CD_EMPRCONVENIO = 6
	
*/ ---------------------------------------------------------------------------------------------------------------
/*----------------------------------------------------------------------------------------------------------------
[01]Data : 21/05/2018
Autor(es) : Leonardo Holanda Araujo - Opah IT Consulting 
Projeto : Agendamento - Integra��o WISE - Conv�nios
Motivo(S) : Cria��o da procedure.
----------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------  

----------------------------------------------------------------------------------------------------------------- */

-- [01] In�cio
CREATE PROCEDURE [dbo].[pr_CA_CONV_s_EmpresaByID]

@ID_EMCV_CD_EMPRCONVENIO BIGINT


AS

BEGIN

SELECT 

EMCV.ID_EMCV_CD_EMPRCONVENIO as id,
EMCV.EMCV_DH_INATIVO as ativo,
EMCV.EMCV_DS_EMPRCONVENIO as nome

FROM CV_CDTB_EMPRCONVENIO_EMCV EMCV WITH(NOLOCK)
INNER JOIN CV_CATB_CONVENIOEMPR_COEM COEM WITH(NOLOCK)
ON EMCV.ID_EMCV_CD_EMPRCONVENIO = COEM.ID_EMCV_CD_EMPRCONVENIO
INNER JOIN  CV_CDTB_CONVENIO_CONV CONV WITH(NOLOCK)
ON CONV.ID_CONV_CD_CONVENIO = COEM.ID_CONV_CD_CONVENIO
WHERE EMCV.ID_EMCV_CD_EMPRCONVENIO = @ID_EMCV_CD_EMPRCONVENIO
AND EMCV.EMCV_DH_INATIVO is NULL

  
END
-- [01] Fim

GO


