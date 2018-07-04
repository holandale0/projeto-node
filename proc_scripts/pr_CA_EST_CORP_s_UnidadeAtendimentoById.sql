USE [BDCORP]
GO

/****** Object:  StoredProcedure [dbo].[pr_CA_EST_CORP_s_UnidadeAtendimentoById]    Script Date: 20/06/2018 17:19:17 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO








/*----------------------------------------------------------------------------------------------------------------
BANCO DE DADOS.: BDCORP
NOME DO OBJETO.: pr_CA_EST_CORP_s_UnidadeAtendimentoById
SISTEMA/PROJETO: Agendamento - Integração WISE
DESCRIÇÃO .....: Busca por unidade fisica com base no id.
AUTOR..........: Leonardo Holanda Araujo - Opah IT Consulting
DATA...........: 20/06/2018
MOTIVO.........: Recuperar um registro de unidade atendimento com base no id.
Resultado(s)...: Retornar um registro de unidade atendimento com base no id.
Objetivo(s)....: Retornar um registro de unidade atendimento com base no id.
Versão.........: 1.0
------------------------------------------------------------------------------------------------------------------
            
PARÂMETRO(S):
			NOME       : @ID_UNID_CD_UNIDADE INT
			DESCRIÇÃO  : ID da unidade
            OBRIGATÓRIO: SIM    
            
------------------------------------------------------------------------------------------------------------------
            
TESTE 1:
[dbo].[pr_CA_EST_CORP_s_UnidadeAtendimentoById]
	@ID_UNID_CD_UNIDADE = 1
    
*/ ---------------------------------------------------------------------------------------------------------------
/*----------------------------------------------------------------------------------------------------------------
[01]Data : 20/06/2018
Autor(es) : Leonardo Holanda Araujo - Opah IT Consulting 
Projeto : Agendamento - Integração WISE - Estrutura Corporativa
Motivo(S) : Criação da procedure.
----------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------  

----------------------------------------------------------------------------------------------------------------- */


ALTER PROCEDURE [dbo].[pr_CA_EST_CORP_s_UnidadeAtendimentoById]


@ID_UNID_CD_UNIDADE INT


AS

BEGIN -- [01] Início


SELECT distinct

UNID.ID_UNID_CD_UNIDADE as id,
UNID.UNID_DT_INATIVIDADE as ativo,
UNID.UNID_NO_UNIDADE as nome,
CENT.CENT_NM_CENTRO as unidadeFisica,
MCOR.MCOR_NM_MARCA as marca,
UNID.UNID_CD_CLASSIFICACAO as classificacao,
NEGC.ID_NEGC_SL_NEGOCIO as linhaNegocio,
UNID.UNID_IN_AGENDAMENTO as agendamento
  
        
  FROM [BDCORP].[dbo].[CC_CDTB_MARCA_CORPORATIVA_MCOR] AS MCOR WITH(NOLOCK)
  INNER JOIN [BDCORP].[dbo].[CC_CATB_MARCA_ESCRITORIO_MAES] AS MAES WITH(NOLOCK)
	ON MAES.ID_MCOR_SL_MARCA = MCOR.ID_MCOR_SL_MARCA 
  INNER JOIN [BDCORP].[dbo].[CC_CDTB_ESCRITORIO_VENDA_ESVE] AS ESVE WITH(NOLOCK)
	ON ESVE.ID_ESVE_SL_ESCRITORIO = MAES.ID_ESVE_SL_ESCRITORIO
  INNER JOIN [BDCORP].[dbo].[CC_CATB_MARCA_SAP_LEGADO_MSLE] AS MSLE WITH(NOLOCK)
	ON MSLE.ID_MCOR_SL_MARCA = MCOR.ID_MCOR_SL_MARCA
	AND MSLE.ID_ESVE_SL_ESCRITORIO = ESVE.ID_ESVE_SL_ESCRITORIO
  INNER JOIN [BDCORP].[dbo].[CP_CDTB_MARCA_MARC] AS MARC WITH(NOLOCK)
	ON MARC.ID_MARC_CD_MARCA = MSLE.ID_MARC_CD_MARCA 
  INNER JOIN [BDCORP].[dbo].[CC_CDTB_CENTRO_CENT] AS CENT WITH(NOLOCK)
	ON CENT.ID_ESVE_SL_ESCRITORIO = ESVE.ID_ESVE_SL_ESCRITORIO
  INNER JOIN [BDCORP].[dbo].[CC_CATB_MARCA_ESCRITORIO_NEGOCIO_MENE] AS MENE WITH(NOLOCK)
	ON MENE.ID_MAES_CD_MARCA_ESCRITORIO = MAES.ID_MAES_CD_MARCA_ESCRITORIO
  INNER JOIN [BDCORP].[dbo].[CC_CDTB_NEGOCIO_NEGC] AS NEGC WITH(NOLOCK)
	ON NEGC.ID_NEGC_SL_NEGOCIO = MENE.ID_NEGC_SL_NEGOCIO
  INNER JOIN [BDCORP].[dbo].[CC_CDTB_LOCAL_ATENDIMENTO_LATE] AS LATE WITH(NOLOCK)
	ON LATE.ID_CENT_SL_CENTRO = CENT.ID_CENT_SL_CENTRO
	AND LATE.ID_NEGC_SL_NEGOCIO = MENE.ID_NEGC_SL_NEGOCIO
	--AND LATE.ID_MCOR_SL_MARCA = MAES.ID_MCOR_SL_MARCA
  INNER JOIN [BDCORP].[dbo].[CC_CATB_UNID_FISICA_LOCAL_UFLO] AS UFLO WITH(NOLOCK)
	ON UFLO.ID_LATE_CD_LOCAL = LATE.ID_LATE_CD_LOCAL
  INNER JOIN [BDCORP].[dbo].[CP_CDTB_UNIDADE_UNID] AS UNID WITH(NOLOCK)
	ON UNID.ID_UNID_CD_UNIDADE = UFLO.ID_UNID_CD_UNIDADE
	OR UNID.ID_UNID_CD_UNIDADE= UFLO.UFLO_CD_UNID_REALIZA_ATEND
	AND UNID_DT_INATIVIDADE IS NULL


	WHERE UNID.ID_UNID_CD_UNIDADE = @ID_UNID_CD_UNIDADE
    AND UNID_CD_CLASSIFICACAO IN (1,9) 
	AND NEGC.ID_NEGC_SL_NEGOCIO IN ('CH','HO','UA')

  
END -- [01] Fim






GO


