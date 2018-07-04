USE [BDCORP]
GO

/****** Object:  StoredProcedure [dbo].[pr_CA_CONV_s_PlanoSaudeByID]    Script Date: 11/06/2018 13:48:45 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


/*----------------------------------------------------------------------------------------------------------------
BANCO DE DADOS.: BDCORP
NOME DO OBJETO.: pr_CA_CONV_s_PlanoSaudeByID
SISTEMA/PROJETO: Agendamento - Integra��o WISE - Conv�nios
DESCRI��O .....: Busca por plano de sa�de com base em ID
AUTOR..........: Leonardo Holanda Araujo - Opah IT Consulting
DATA...........: 21/05/2018
MOTIVO.........: Listar os planos de sa�de de acordo com a chave ID passada por par�metro.
Resultado(s)...: Retornar os planos de acordo com os filtros selecionados.
Objetivo(s)....: Retorna os planos de acordo com os filtros selecionados.
Vers�o.........: 1.0
------------------------------------------------------------------------------------------------------------------
            
            
PAR�METRO(S):
			NOME       : @ID_PLSA_CD_PLANOSAUDE AS INTEGER
			DESCRI��O  : ID do plano de sa�de.
            OBRIGAT�RIO: SIM   
            
            
------------------------------------------------------------------------------------------------------------------
            
TESTE:
[dbo].[pr_CA_CONV_s_PlanoSaudeByID]
    @ID_PLSA_CD_PLANOSAUDE = 264
	
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
CREATE PROCEDURE [dbo].[pr_CA_CONV_s_PlanoSaudeByID]

@ID_PLSA_CD_PLANOSAUDE INT

AS

BEGIN

SELECT 
PLSA.ID_PLSA_CD_PLANOSAUDE as id,
PLSA.PLSA_DH_INATIVO as ativo,
PLSA.PLSA_DS_PLANOSAUDE as nome,
PLSA.ID_CONV_CD_CONVENIO as convenio,
PLSA.ID_EMCV_CD_EMPRCONVENIO as empresa,
PLSA.PLSA_IN_INTERNET as internet,
PLSA.PLSA_IN_SOLICCRM as exigeCrm,
PLSA.PLSA_DH_VALIDADE_DE as validadeDe,
PLSA.PLSA_DH_VALIDADE_ATE as validadeAte

FROM CV_CDTB_PLANOSAUDE_PLSA PLSA WITH(NOLOCK)

WHERE PLSA.ID_PLSA_CD_PLANOSAUDE = @ID_PLSA_CD_PLANOSAUDE
AND PLSA.PLSA_DH_INATIVO is NULL


  
END
-- [01] Fim

GO


