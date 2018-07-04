USE [BDCORP]
GO

/****** Object:  StoredProcedure [dbo].[pr_CA_CONV_s_ConvenioByID]    Script Date: 11/06/2018 13:47:39 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


/*----------------------------------------------------------------------------------------------------------------
BANCO DE DADOS.: BDCORP
NOME DO OBJETO.: pr_CA_CONV_s_ConvenioByID
SISTEMA/PROJETO: Agendamento - Integra��o WISE - Conv�nios
DESCRI��O .....: Busca por conv�nio com base em ID
AUTOR..........: Leonardo Holanda Araujo - Opah IT Consulting
DATA...........: 21/05/2018
MOTIVO.........: Listar os conv�nios de acordo com a chave ID passada por par�metro.
Resultado(s)...: Retornar os conv�nios de acordo com os filtros selecionados.
Objetivo(s)....: Retorna os conv�nios de acordo com os filtros selecionados.
Vers�o.........: 1.0
------------------------------------------------------------------------------------------------------------------

PAR�METRO(S):
			NOME       : @ID_CONV_CD_CONVENIO AS INTEGER
			DESCRI��O  : ID do conv�nio.
            OBRIGAT�RIO: SIM           
            
------------------------------------------------------------------------------------------------------------------
            
TESTE:
[dbo].[pr_CA_CONV_s_ConvenioByID]
	@ID_CONV_CD_CONVENIO = 4	
	
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
CREATE PROCEDURE [dbo].[pr_CA_CONV_s_ConvenioByID]

@ID_CONV_CD_CONVENIO BIGINT

AS

BEGIN


SELECT 

CONV.ID_CONV_CD_CONVENIO as id,
CONV.CONV_DH_INATIVO as ativo,
CONV.CONV_DS_CONVENIO as nome,
CONV.CONV_IN_INTERNET as internet

FROM CV_CDTB_CONVENIO_CONV CONV WITH(NOLOCK)

WHERE CONV.ID_CONV_CD_CONVENIO = @ID_CONV_CD_CONVENIO
AND CONV.CONV_DH_INATIVO is null

  
END
-- [01] Fim

GO


