USE [BDCORP]
GO

/****** Object:  StoredProcedure [dbo].[pr_CA_CONV_s_ConvenioEmpresaById]    Script Date: 25/06/2018 08:43:40 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO




/*----------------------------------------------------------------------------------------------------------------
BANCO DE DADOS.: BDCORP
NOME DO OBJETO.: pr_CA_CONV_s_ConvenioEmpresaById
SISTEMA/PROJETO: Agendamento - Integra��o WISE - Conv�nios
DESCRI��O .....: Busca por um registro de relacionamento ConvenioXEmpresa com base no ID
AUTOR..........: Leonardo Holanda Araujo - Opah IT Consulting
DATA...........: 25/06/2018
MOTIVO.........: Busca por um registro de relacionamento ConvenioXEmpresa com base no ID.
Resultado(s)...: Busca por um registro de relacionamento ConvenioXEmpresa com base no ID.
Objetivo(s)....: Busca por um registro de relacionamento ConvenioXEmpresa com base no ID.
Vers�o.........: 1.0
------------------------------------------------------------------------------------------------------------------

PAR�METRO(S):
			NOME       : @CODE AS VARCHAR
			DESCRI��O  : ID_CONVENIO + ID_EMPRESA concatenados em forma de varchar.
            OBRIGAT�RIO: SIM           
            
------------------------------------------------------------------------------------------------------------------
            
TESTE:
[dbo].[pr_CA_CONV_s_ConvenioEmpresaById]
	@CODE = '55|70'	
	
*/ ---------------------------------------------------------------------------------------------------------------
/*----------------------------------------------------------------------------------------------------------------
[01]Data : 25/06/2018
Autor(es) : Leonardo Holanda Araujo - Opah IT Consulting 
Projeto : Agendamento - Integra��o WISE - Conv�nios
Motivo(S) : Cria��o da procedure.
----------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------  

----------------------------------------------------------------------------------------------------------------- */

-- [01] In�cio
CREATE PROCEDURE [dbo].[pr_CA_CONV_s_ConvenioEmpresaById]

@CODE VARCHAR(30)


AS

BEGIN

DECLARE	@ID_EMCV_CD_EMPRCONVENIO VARCHAR(15) , @ID_CONV_CD_CONVENIO VARCHAR(15)

SET @ID_CONV_CD_CONVENIO = (SUBSTRING(@CODE,0,CHARINDEX('|',@CODE,0)));

SET @ID_EMCV_CD_EMPRCONVENIO = (SUBSTRING(@CODE,CHARINDEX('|',@CODE)+1,LEN(@CODE)));

SELECT 

@CODE as code,
COEM.COEM_DH_INATIVO as ativo,
COEM.ID_CONV_CD_CONVENIO as convenio,
COEM.ID_EMCV_CD_EMPRCONVENIO as empresa,
COEM.COEM_IN_INTERNET as internet,
COEM.COEM_NR_VALIDADERECEITA as validaReceita


FROM CV_CATB_CONVENIOEMPR_COEM COEM WITH(NOLOCK)
--INNER JOIN CV_CDTB_EMPRCONVENIO_EMCV EMCV WITH(NOLOCK)
--ON EMCV.ID_EMCV_CD_EMPRCONVENIO = COEM.ID_EMCV_CD_EMPRCONVENIO
--INNER JOIN CV_CDTB_CONVENIO_CONV CONV WITH(NOLOCK)
--ON CONV.ID_CONV_CD_CONVENIO = COEM.ID_CONV_CD_CONVENIO

WHERE COEM.ID_EMCV_CD_EMPRCONVENIO = CONVERT(INT,@ID_EMCV_CD_EMPRCONVENIO)
AND COEM.ID_CONV_CD_CONVENIO = CONVERT(INT,@ID_CONV_CD_CONVENIO)



  
END
-- [01] Fim



GO


