USE [BDCORP]
GO

/****** Object:  StoredProcedure [dbo].[pr_CA_EST_CORP_s_UnidadeFisicaById]    Script Date: 11/06/2018 17:07:35 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO





/*----------------------------------------------------------------------------------------------------------------
BANCO DE DADOS.: BDCORP
NOME DO OBJETO.: pr_CA_EST_CORP_s_UnidadeFisicaById
SISTEMA/PROJETO: Agendamento - Integra��o WISE
DESCRI��O .....: Busca por unidade fisica com base no id.
AUTOR..........: Leonardo Holanda Araujo - Opah IT Consulting
DATA...........: 11/06/2018
MOTIVO.........: Recuperar um registro de unidade fisica com base no id.
Resultado(s)...: Retornar um registro de unidade fisica com base no id.
Objetivo(s)....: Retornar um registro de unidade fisica com base no id.
Vers�o.........: 1.0
------------------------------------------------------------------------------------------------------------------
            
PAR�METRO(S):
			NOME       : @ID_UNID_CD_UNIDADE INT
			DESCRI��O  : ID da unidade
            OBRIGAT�RIO: SIM    
            
------------------------------------------------------------------------------------------------------------------
            
TESTE 1:
[dbo].[pr_CA_EST_CORP_s_UnidadeFisicaById]
	@ID_UNID_CD_UNIDADE = 1
    
*/ ---------------------------------------------------------------------------------------------------------------
/*----------------------------------------------------------------------------------------------------------------
[01]Data : 11/06/2018
Autor(es) : Leonardo Holanda Araujo - Opah IT Consulting 
Projeto : Agendamento - Integra��o WISE - Estrutura Corporativa
Motivo(S) : Cria��o da procedure.
----------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------  

----------------------------------------------------------------------------------------------------------------- */


CREATE PROCEDURE [dbo].[pr_CA_EST_CORP_s_UnidadeFisicaById]


@ID_UNID_CD_UNIDADE INT


AS

BEGIN -- [01] In�cio

SELECT DISTINCT

UNID.ID_UNID_CD_UNIDADE as id,
UNID.UNID_DT_INATIVIDADE as ativo,
UNID.UNID_NO_UNIDADE as nome,
'' as regional, -- N�O TEM ESSA INFORMA��O (JOIN EM QUAL TABELA ???)
UNID.UNID_NO_PAIS as pais,
UNID.UNID_SL_ESTADO as estado,
UNID.UNID_NO_MUNICIPIO as cidade,
UNID.UNID_NO_BAIRRO as bairro,
UNID.UNID_NO_LOGRADOURO as logradouro,
UNID.UNID_NR_ENDERECO as numero,
'' as complemento, -- N�O TEM ESSA INFORMA��O
UNID.UNID_NR_CEP as cep

FROM 

CP_CDTB_UNIDADE_UNID UNID WITH(NOLOCK)

--JOIN CC_CDTB_ESCRITORIO_VENDA_ESVE ESVE

--ON UNID.ID_UNID_CD_UNIDADE = ESVE.ID

WHERE 

UNID.ID_UNID_CD_UNIDADE = @ID_UNID_CD_UNIDADE
  
END -- [01] Fim



GO


