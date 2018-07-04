USE [BDCORP]
GO

/****** Object:  StoredProcedure [dbo].[pr_CA_NOTIF_s_NotificacaoWise]    Script Date: 02/07/2018 16:26:25 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO




/*----------------------------------------------------------------------------------------------------------------
BANCO DE DADOS.: BDCORP
NOME DO OBJETO.: pr_CA_NOTIF_s_NotificacaoWise
SISTEMA/PROJETO: Agendamento - Integração WISE
DESCRIÇÃO .....: Busca por notificação (wise) com base nos parâmetros.
AUTOR..........: Leonardo Holanda Araujo - Opah IT Consulting
DATA...........: 25/05/2018
MOTIVO.........: Retornar notificação (wise) com base nos parâmetros.
Resultado(s)...: Retornar notificação (wise) com base nos parâmetros.
Objetivo(s)....: Retornar notificação (wise) com base nos parâmetros.
Versão.........: 1.0
------------------------------------------------------------------------------------------------------------------
            
PARÂMETRO(S):
			NOME       : @TIPO AS VARCHAR(30)
			DESCRIÇÃO  : Nome do domínio 
            OBRIGATÓRIO: SIM    
            
            NOME       : @INICIO AS DATETIME
			DESCRIÇÃO  : Data
            OBRIGATÓRIO: SIM 
            
            
------------------------------------------------------------------------------------------------------------------
            
TESTE 1:
[dbo].[pr_CA_NOTIF_s_NotificacaoWise]
	@TIPO = CONVENIO
    @INICIO = 02/01/2018 - 00:00:00
    
    
    
*/ ---------------------------------------------------------------------------------------------------------------
/*----------------------------------------------------------------------------------------------------------------
[01]Data : 25/05/2018
Autor(es) : Leonardo Holanda Araujo - Opah IT Consulting 
Projeto : Agendamento - Integração WISE - Convênios
Motivo(S) : Criação da procedure.
----------------------------------------------------------------------------------------------------------------
[02]Data : 02/07/2018
Autor(es) : Leonardo Holanda Araujo - Opah IT Consulting 
Projeto : Agendamento - Integração WISE - Convênios
Motivo(S) : Campos DH_ULT_ATUALIZ em EMCV e PLSA.
-----------------------------------------------------------------------------------------------------------------  

----------------------------------------------------------------------------------------------------------------- */


CREATE PROCEDURE [dbo].[pr_CA_NOTIF_s_NotificacaoWise]
(
@TIPO AS VARCHAR(30),
@INICIO AS DATETIME
)

AS

BEGIN -- [01] Início


IF @TIPO = 'CONVENIO' 
    
    BEGIN -- [02] Início
    	
    	SELECT CONV.ID_CONV_CD_CONVENIO as id, 
        'CONVENIO' as tipo, 
        CONV.CONV_DH_ATUALIZACAO as instante
		FROM CV_CDTB_CONVENIO_CONV CONV WITH(NOLOCK)
		WHERE (CONV.CONV_DH_ATUALIZACAO >= @INICIO)
		UNION
		SELECT CONV.ID_CONV_CD_CONVENIO as id, 
        'CONVENIO' as tipo, 
        CONV.CONV_DH_CADASTRO as instante
		FROM CV_CDTB_CONVENIO_CONV CONV WITH(NOLOCK)
		WHERE (CONV.CONV_DH_CADASTRO >= @INICIO)

    
    END -- [02] Fim

ELSE IF @TIPO = 'EMPRESA' 
    	
    BEGIN -- [02] Início
        
    	SELECT EMCV.ID_EMCV_CD_EMPRCONVENIO as id, 
        'EMPRESA' as tipo, 
        null as instante --DATA_ATUALIZACAO as instante
		FROM CV_CDTB_EMPRCONVENIO_EMCV EMCV WITH(NOLOCK)
		WHERE (EMCV.EMCV_DH_ULT_ATUALIZ >= @INICIO)
		UNION
		SELECT EMCV.ID_EMCV_CD_EMPRCONVENIO as id, 
        'EMPRESA' as tipo, 
        null as instante --DATA_INCLUSAO as instante
		FROM CV_CDTB_EMPRCONVENIO_EMCV EMCV WITH(NOLOCK)
		--WHERE (DATA_INCLUSAO >= @INICIO)
		
        
    END -- [02] Fim
        
ELSE IF @TIPO = 'PLANO' 
    
    BEGIN -- [02] Início
        
    	SELECT PLSA.ID_PLSA_CD_PLANOSAUDE as id, 
        'PLANO' as tipo, 
        null as instante --DATA_ATUALIZACAO as instante
		FROM CV_CDTB_PLANOSAUDE_PLSA PLSA WITH(NOLOCK)
		WHERE (PLSA.PLSA_DH_ULT_ATUALIZ >= @INICIO)
		UNION
		SELECT PLSA.ID_PLSA_CD_PLANOSAUDE as id, 
        'PLANO' as tipo, 
        null as instante --DATA_INCLUSAO as instante
		FROM CV_CDTB_PLANOSAUDE_PLSA PLSA WITH(NOLOCK)
		--WHERE (DATA_INCLUSAO >= @INICIO)

        
    END -- [02] Fim
    
  ELSE IF @TIPO = 'MARCA' 
    
    BEGIN -- [02] Início

		SELECT MCOR.ID_MCOR_SL_MARCA as id,
		'MARCA' as tipo,
		null as instante --DATA_ATUALIZACAO as instante
		FROM CC_CDTB_MARCA_CORPORATIVA_MCOR MCOR WITH(NOLOCK)
	    --WHERE (DATA_ATUALIZACAO >= @INICIO)
		UNION
	    SELECT MCOR.ID_MCOR_SL_MARCA as id,
		'MARCA' as tipo,
		null as instante --DATA_INCLUSAO as instante
		FROM CC_CDTB_MARCA_CORPORATIVA_MCOR MCOR WITH(NOLOCK)
	    --WHERE (DATA_INCLUSAO >= @INICIO)

        
    END -- [02] Fim

  ELSE IF @TIPO = 'REGIONAL' 
    
    BEGIN -- [02] Início

		SELECT ESVE.ID_ESVE_SL_ESCRITORIO as id,
		'REGIONAL' as tipo,
		null as instante --DATA_ATUALIZACAO as instante
		FROM CC_CDTB_ESCRITORIO_VENDA_ESVE ESVE WITH(NOLOCK)
	    --WHERE (DATA_ATUALIZACAO >= @INICIO)
		UNION
		SELECT ESVE.ID_ESVE_SL_ESCRITORIO as id,
		'REGIONAL' as tipo,
		null as instante --DATA_INCLUSAO as instante
		FROM CC_CDTB_ESCRITORIO_VENDA_ESVE ESVE WITH(NOLOCK)
	    --WHERE (DATA_INCLUSAO >= @INICIO)

        
    END -- [02] Fim

 ELSE IF @TIPO = 'HORARIO_FUNCIONAMENTO' 
    
    BEGIN -- [02] Início

		SELECT HOUN.ID_UNID_CD_UNIDADE as id,
		'HORARIO_FUNCIONAMENTO' as tipo,
		null as instante --DATA_ATUALIZACAO as instante
		FROM CP_CDTB_HORARIO_FUNCIONAMENTO_HOUN HOUN WITH(NOLOCK)
		--WHERE (DATA_ATUALIZACAO >= @INICIO)
		UNION
		SELECT HOUN.ID_UNID_CD_UNIDADE as id,
		'HORARIO_FUNCIONAMENTO' as tipo,
		null as instante --DATA_INCLUSAO as instante
		FROM CP_CDTB_HORARIO_FUNCIONAMENTO_HOUN HOUN WITH(NOLOCK)
		--WHERE (DATA_INCLUSAO >= @INICIO)
        
    END -- [02] Fim
    

 ELSE IF @TIPO = 'UNIDADE_FISICA' 
    
    BEGIN -- [02] Início

		SELECT UNID.ID_UNID_CD_UNIDADE as id,
		'UNIDADE_FISICA' as tipo,
		null as instante --DATA_ATUALIZACAO as instante
		FROM CP_CDTB_UNIDADE_UNID UNID WITH(NOLOCK)
		--WHERE (DATA_ATUALIZACAO >= @INICIO)
		UNION
		SELECT UNID.ID_UNID_CD_UNIDADE as id,
		'UNIDADE_FISICA' as tipo,
		null as instante --DATA_INCLUSAO as instante
		FROM CP_CDTB_UNIDADE_UNID UNID WITH(NOLOCK)
		--WHERE (DATA_INCLUSAO >= @INICIO)
        
    END -- [02] Fim  

	
 ELSE IF @TIPO = 'UNIDADE_FICTICIA' 
    
    BEGIN -- [02] Início

		SELECT UNIFI.ID_UNFI_CD_UNIDFICTICIA as id,
		'UNIDADE_FICTICIA' as tipo,
		null as instante --DATA_ATUALIZACAO as instante
		FROM CP_CDTB_UNIDADE_FICTICIA_UNFI UNIFI WITH(NOLOCK)
		--WHERE (DATA_ATUALIZACAO >= @INICIO)
		UNION
		SELECT UNIFI.ID_UNFI_CD_UNIDFICTICIA as id,
		'UNIDADE_FICTICIA' as tipo,
		null as instante --DATA_INCLUSAO as instante
		FROM CP_CDTB_UNIDADE_FICTICIA_UNFI UNIFI WITH(NOLOCK)
		--WHERE (DATA_INCLUSAO >= @INICIO)
        
    END -- [02] Fim  
    
  
END -- [01] Fim











GO


