USE [BDCORP]
GO

/****** Object:  StoredProcedure [dbo].[pr_CA_CONV_s_CoberturaByID]    Script Date: 27/06/2018 12:34:36 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO





/*----------------------------------------------------------------------------------------------------------------
BANCO DE DADOS.: BDCORP
NOME DO OBJETO.: pr_CA_CONV_s_CoberturaByID
SISTEMA/PROJETO: Agendamento - Integração WISE - Convênios
DESCRIÇÃO .....: Busca por cobertura com base em ID
AUTOR..........: Leonardo Holanda Araujo - Opah IT Consulting
DATA...........: 25/05/2018
MOTIVO.........: Consultar cobertura com base nos parâmetros.
Resultado(s)...: Retornar cobertura com base nos parâmetros.
Objetivo(s)....: Retorna cobertura com base nos parâmetros.
Versão.........: 1.0
------------------------------------------------------------------------------------------------------------------

PARÂMETRO(S):
			NOME       : @ID_CONV_CD_CONVENIO AS INTEGER
			DESCRIÇÃO  : ID do convênio.
            OBRIGATÓRIO: SIM   
			
			NOME       : @ID_EMCV_CD_EMPRCONVENIO AS INTEGER
			DESCRIÇÃO  : ID do empresa.
            OBRIGATÓRIO: SIM  
			
			NOME       : @ID_PLSA_CD_PLANOSAUDE AS INTEGER
			DESCRIÇÃO  : ID do plano.
            OBRIGATÓRIO: SIM   
			
			NOME       : @ID_PROD_CD_PRODUTO AS INTEGER
			DESCRIÇÃO  : ID do produto.
            OBRIGATÓRIO: SIM    
			
		    NOME       : @ID_UNID_CD_UNIDADE AS INTEGER
			DESCRIÇÃO  : ID do unidade.
            OBRIGATÓRIO: SIM      
            
------------------------------------------------------------------------------------------------------------------
            
TESTE:
[dbo].[pr_CA_CONV_s_CoberturaByID]
	ID_CONV_CD_CONVENIO = 8
	ID_EMCV_CD_EMPRCONVENIO = 139
	ID_PLSA_CD_PLANOSAUDE = 70
	ID_PROD_CD_PRODUTO = 1
	ID_UNID_CD_UNIDADE = 118
	
*/ ---------------------------------------------------------------------------------------------------------------
/*----------------------------------------------------------------------------------------------------------------
[01]Data : 25/05/2018
Autor(es) : Leonardo Holanda Araujo - Opah IT Consulting 
Projeto : Agendamento - Integração WISE - Convênios
Motivo(S) : Criação da procedure.
----------------------------------------------------------------------------------------------------------------
[02]Data : 20/06/2018
Autor(es) : Leonardo Holanda Araujo - Opah IT Consulting 
Projeto : Agendamento - Integração WISE - Convênios
Motivo(S) : retorno da coluna preco.
-----------------------------------------------------------------------------------------------------------------  
[03]Data : 25/06/2018
Autor(es) : Leonardo Holanda Araujo - Opah IT Consulting 
Projeto : Agendamento - Integração WISE - Convênios
Motivo(S) : ajustes relacionados a envio de parâmetros nulos: 
@ID_CONV_CD_CONVENIO = NULL, @ID_EMCV_CD_EMPRCONVENIO = NULL, @ID_PLSA_CD_PLANOSAUDE = NULL
-----------------------------------------------------------------------------------------------------------------  
[04]Data : 27/06/2018
Autor(es) : Leonardo Holanda Araujo - Opah IT Consulting 
Projeto : Agendamento - Integração WISE - Convênios
Motivo(S) : ajuste na execução / retorno da proc. sp_TUSF_s que retorna o preço do exame
-----------------------------------------------------------------------------------------------------------------  
-----------------------------------------------------------------------------------------------------------------  
-----------------------------------------------------------------------------------------------------------------  
-----------------------------------------------------------------------------------------------------------------  
----------------------------------------------------------------------------------------------------------------- */

-- [01] Início
ALTER PROCEDURE [dbo].[pr_CA_CONV_s_CoberturaByID]

@ID_CONV_CD_CONVENIO INT,
@ID_EMCV_CD_EMPRCONVENIO INT,
@ID_PLSA_CD_PLANOSAUDE INT,
@ID_PROD_CD_PRODUTO INT,
@ID_UNID_CD_UNIDADE INT



AS



BEGIN




DECLARE 
@PROD_QT_USF_PARTICULAR				       numeric(9,2),
@ID_SECA_CD_SECAO_COML 				       smallint,
@PROD_QT_USF_CONVENIO					   numeric(9,2),
@PROD_QT_USF_INFORMADA				       numeric(9,2),
@PROD_QT_USF_MAT_ENVIADO				   numeric(9,2),
@return_code 							   int,
@return_chav 							   varchar(255),
@tp_onln_batc							   char(1),
@ITEM_VL_TEORICO_CALC					   numeric(9,2),
@ITEM_VL_CLIENTE_CALC					   numeric(9,2),
@TACV_IN_CH_DOLAR						   char(1),
@CAAM_NR_FATORCH 						   numeric(5,2),
@TAPR_QT_TOTAL_DOLAR 	 				   numeric(9,2),
@TAPR_QT_TOTAL_CH 						   numeric(9,2),
@TAPR_QT_TOTAL_M2_FILME 				   numeric(7,4),
@INFA_VL_FILME 							   numeric(9,2),
@INFA_VL_EXAME 							   numeric(9,2),
@INFA_VL_FATURAR 						   numeric(9,2),
@CMCV_VL_DOLARATUAL						   numeric(9,4),
@CMCV_NR_VALM2FILME						   numeric(9,2),
@CMCV_NR_VALCHATUAL						   numeric(9,2),
@ID_CMCV_CD_CONV						   int,
@INFA_VL_M2_FILME_DOLAR					   numeric(9,2),
@INFA_VL_DOLAR 							   numeric(9,2),
@TUSF_QT_USS_FILME						   numeric(9,2),
@TUSF_DS_INFORMACAO						   varchar(50),
@ID_DVNG_CD_DIVISAO_NEGOCIO                int,
@amostras 								   int
		
SET NOCOUNT ON

SET @ITEM_VL_TEORICO_CALC					= null;
SET @ITEM_VL_CLIENTE_CALC					= null;
SET @TACV_IN_CH_DOLAR						= null;
SET @CAAM_NR_FATORCH 						= null;
SET @TAPR_QT_TOTAL_DOLAR 	 				= null;
SET @TAPR_QT_TOTAL_CH 						= null;
SET @TAPR_QT_TOTAL_M2_FILME 				= null;
SET @INFA_VL_FILME 							= null;
SET @INFA_VL_EXAME 							= null;
SET @INFA_VL_FATURAR 						= null;
SET @CMCV_VL_DOLARATUAL						= null;
SET @CMCV_NR_VALM2FILME						= null;
SET @CMCV_NR_VALCHATUAL						= null;
SET @ID_CMCV_CD_CONV						= null;
SET @INFA_VL_M2_FILME_DOLAR					= null;
SET @INFA_VL_DOLAR 							= null;
SET @TUSF_QT_USS_FILME						= null;
SET @TUSF_DS_INFORMACAO						= null;
SET @PROD_QT_USF_INFORMADA					= null;


-- Obtém o parâmetro @ID_DVNG_CD_DIVISAO_NEGOCIO a partir de @ID_UNID_CD_UNIDADE
SET @ID_DVNG_CD_DIVISAO_NEGOCIO = (SELECT DISTINCT ID_DVNG_CD_DIVISAO_NEGOCIO FROM CP_CDTB_UNIDADE_UNID WITH(NOLOCK) WHERE ID_UNID_CD_UNIDADE = @ID_UNID_CD_UNIDADE);


--Parâmetros obtidos na tabela de Produtos
SELECT 

@PROD_QT_USF_PARTICULAR	= PROD.PROD_QT_USF_PARTICULAR,
@PROD_QT_USF_CONVENIO = PROD.PROD_QT_USF_CONVENIO,
@PROD_QT_USF_MAT_ENVIADO = PROD.PROD_QT_USF_MAT_ENVIADO,
@ID_SECA_CD_SECAO_COML	= PROD.ID_SECA_CD_SECAO_COML

FROM CP_CDTB_PRODUTO_PROD PROD WITH(NOLOCK)

WHERE PROD.ID_PROD_CD_PRODUTO = @ID_PROD_CD_PRODUTO

--Obtém desconto por volume para o exame

SELECT @amostras = DCVL.DCVL_QT_COBRADA

FROM CP_CDTB_DESC_VOLUME_DCVL DCVL WITH(NOLOCK)

WHERE DCVL.ID_PROD_CD_PRODUTO = @ID_PROD_CD_PRODUTO 

AND DCVL.DCVL_QT_INICIAL 	<= @amostras 

AND DCVL.DCVL_QT_FINAL		>= @amostras



	IF @ID_CONV_CD_CONVENIO IS NOT NULL AND @ID_EMCV_CD_EMPRCONVENIO IS NOT NULL AND @ID_PLSA_CD_PLANOSAUDE IS NOT NULL

		BEGIN

			EXEC	[dbo].[sp_TUSF_s]
				@ID_PROD_CD_PRODUTO 				=@ID_PROD_CD_PRODUTO,
				@ID_DVNG_CD_DIVISAO_NEGOCIO =@ID_DVNG_CD_DIVISAO_NEGOCIO,
				@ID_CONV_CD_CONVENIO 				=@ID_CONV_CD_CONVENIO,
				@ID_EMCV_CD_EMPRCONVENIO 		=@ID_EMCV_CD_EMPRCONVENIO,
				@ID_PLSA_CD_PLANOSAUDE 			=@ID_PLSA_CD_PLANOSAUDE,
				@PROD_QT_USF_PARTICULAR			=@PROD_QT_USF_PARTICULAR,
				@ID_SECA_CD_SECAO_COML 			=@ID_SECA_CD_SECAO_COML,
				@PROD_QT_USF_CONVENIO				=@PROD_QT_USF_CONVENIO,
				@PROD_QT_USF_INFORMADA			=@PROD_QT_USF_INFORMADA,
				@PROD_QT_USF_MAT_ENVIADO		=@PROD_QT_USF_MAT_ENVIADO,
				@return_code								=@return_code,
				@return_chav								=@return_chav,
				@tp_onln_batc								='B',
				@ITEM_VL_TEORICO_CALC				=@ITEM_VL_TEORICO_CALC output,
				@ITEM_VL_CLIENTE_CALC				=@ITEM_VL_CLIENTE_CALC output,
				@TACV_IN_CH_DOLAR						=@TACV_IN_CH_DOLAR output,
				@CAAM_NR_FATORCH 						=@CAAM_NR_FATORCH output,
				@TAPR_QT_TOTAL_DOLAR 	 			=@TAPR_QT_TOTAL_DOLAR output,
				@TAPR_QT_TOTAL_CH 					=@TAPR_QT_TOTAL_CH output,
				@TAPR_QT_TOTAL_M2_FILME 		=@TAPR_QT_TOTAL_M2_FILME output,
				@INFA_VL_FILME 							=@INFA_VL_FILME output,
				@INFA_VL_EXAME 							=@INFA_VL_EXAME output,
				@INFA_VL_FATURAR 						=@INFA_VL_FATURAR output,
				@CMCV_VL_DOLARATUAL					=@CMCV_VL_DOLARATUAL output,
				@CMCV_NR_VALM2FILME					=@CMCV_NR_VALM2FILME output,
				@CMCV_NR_VALCHATUAL					=@CMCV_NR_VALCHATUAL output,
				@ID_CMCV_CD_CONV						=@ID_CMCV_CD_CONV output,
				@INFA_VL_M2_FILME_DOLAR			=@INFA_VL_M2_FILME_DOLAR output,
				@INFA_VL_DOLAR 							=@INFA_VL_DOLAR output,
				@TUSF_QT_USS_FILME					=@TUSF_QT_USS_FILME output,
				@TUSF_DS_INFORMACAO					=@TUSF_DS_INFORMACAO output

				--Seta valores se não houver valor a exibir ao cliente
				IF @ITEM_VL_CLIENTE_CALC IS NULL 
					BEGIN
					SET @ITEM_VL_CLIENTE_CALC = 0;
				END

				SET NOCOUNT OFF


		SELECT DISTINCT

			PLEX.ID_CONV_CD_CONVENIO as convenio,
			PLEX.ID_EMCV_CD_EMPRCONVENIO as empresa,
			PLEX.ID_PLSA_CD_PLANOSAUDE as plano,
			PLEX.ID_PROD_CD_PRODUTO as produto,
			RECV.ID_UNID_CD_UNIDADE as unidade,
			'' as permiteAgendar, -- RN NA APLICAÇÃO
			@amostras * @ITEM_VL_CLIENTE_CALC as preco,
			PLEX.PLEX_DH_INICIOCOBERTURA as inicioVigencia, 
			PLEX.PLEX_DH_FIMCOBERTURA as fimVigencia, 
			PLEX.PLEX_DH_BLOQUEIO as inicioBloqueio,
			PLEX.PLEX_DH_DOCTOAUTORIZ as docAutorizacao

			FROM CV_CATB_PLANOEXAME_PLEX PLEX WITH(NOLOCK)
			INNER JOIN CV_CDTB_PLANOSAUDE_PLSA PLSA WITH(NOLOCK)
				ON PLEX.ID_PLSA_CD_PLANOSAUDE = PLSA.ID_PLSA_CD_PLANOSAUDE
				AND PLEX.ID_EMCV_CD_EMPRCONVENIO = PLSA.ID_EMCV_CD_EMPRCONVENIO
				AND PLEX.ID_CONV_CD_CONVENIO = PLSA.ID_CONV_CD_CONVENIO
			INNER JOIN CV_CDTB_RESTRICAO_CONV_RECV RECV WITH(NOLOCK)
				ON PLSA.ID_CMCV_CD_CONV = RECV.ID_CMCV_CD_CONV
			INNER JOIN CV_CATB_CONVENIOEMPR_COEM COEM WITH(NOLOCK)
				ON PLEX.ID_CONV_CD_CONVENIO = COEM.ID_CONV_CD_CONVENIO
				AND PLEX.ID_EMCV_CD_EMPRCONVENIO = COEM.ID_EMCV_CD_EMPRCONVENIO
			INNER JOIN CV_CDTB_CONVENIO_CONV CONV WITH(NOLOCK)
				ON PLEX.ID_CONV_CD_CONVENIO = CONV.ID_CONV_CD_CONVENIO
			INNER JOIN CV_CDTB_EMPRCONVENIO_EMCV EMCV WITH(NOLOCK)
				ON PLEX.ID_EMCV_CD_EMPRCONVENIO = EMCV.ID_EMCV_CD_EMPRCONVENIO
    

			WHERE PLSA.ID_CONV_CD_CONVENIO = @ID_CONV_CD_CONVENIO
			AND PLSA.ID_EMCV_CD_EMPRCONVENIO = @ID_EMCV_CD_EMPRCONVENIO
			AND PLSA.ID_PLSA_CD_PLANOSAUDE = @ID_PLSA_CD_PLANOSAUDE
			AND PLEX.ID_PROD_CD_PRODUTO = @ID_PROD_CD_PRODUTO
			AND RECV.ID_UNID_CD_UNIDADE = @ID_UNID_CD_UNIDADE
			AND CONV.CONV_DH_INATIVO is NULL
			AND EMCV.EMCV_DH_INATIVO is NULL
			AND PLSA.PLSA_DH_INATIVO is NULL

		END

		
	ELSE 


		BEGIN

			EXEC	[dbo].[sp_TUSF_s]
				@ID_PROD_CD_PRODUTO 				=@ID_PROD_CD_PRODUTO,
				@ID_DVNG_CD_DIVISAO_NEGOCIO =@ID_DVNG_CD_DIVISAO_NEGOCIO,
				@ID_CONV_CD_CONVENIO 				=@ID_CONV_CD_CONVENIO,
				@ID_EMCV_CD_EMPRCONVENIO 		=@ID_EMCV_CD_EMPRCONVENIO,
				@ID_PLSA_CD_PLANOSAUDE 			=@ID_PLSA_CD_PLANOSAUDE,
				@PROD_QT_USF_PARTICULAR			=@PROD_QT_USF_PARTICULAR,
				@ID_SECA_CD_SECAO_COML 			=@ID_SECA_CD_SECAO_COML,
				@PROD_QT_USF_CONVENIO				=@PROD_QT_USF_CONVENIO,
				@PROD_QT_USF_INFORMADA			=@PROD_QT_USF_INFORMADA,
				@PROD_QT_USF_MAT_ENVIADO		=@PROD_QT_USF_MAT_ENVIADO,
				@return_code								=@return_code,
				@return_chav								=@return_chav,
				@tp_onln_batc								='B',
				@ITEM_VL_TEORICO_CALC				=@ITEM_VL_TEORICO_CALC output,
				@ITEM_VL_CLIENTE_CALC				=@ITEM_VL_CLIENTE_CALC output,
				@TACV_IN_CH_DOLAR						=@TACV_IN_CH_DOLAR output,
				@CAAM_NR_FATORCH 						=@CAAM_NR_FATORCH output,
				@TAPR_QT_TOTAL_DOLAR 	 			=@TAPR_QT_TOTAL_DOLAR output,
				@TAPR_QT_TOTAL_CH 					=@TAPR_QT_TOTAL_CH output,
				@TAPR_QT_TOTAL_M2_FILME 		=@TAPR_QT_TOTAL_M2_FILME output,
				@INFA_VL_FILME 							=@INFA_VL_FILME output,
				@INFA_VL_EXAME 							=@INFA_VL_EXAME output,
				@INFA_VL_FATURAR 						=@INFA_VL_FATURAR output,
				@CMCV_VL_DOLARATUAL					=@CMCV_VL_DOLARATUAL output,
				@CMCV_NR_VALM2FILME					=@CMCV_NR_VALM2FILME output,
				@CMCV_NR_VALCHATUAL					=@CMCV_NR_VALCHATUAL output,
				@ID_CMCV_CD_CONV						=@ID_CMCV_CD_CONV output,
				@INFA_VL_M2_FILME_DOLAR			=@INFA_VL_M2_FILME_DOLAR output,
				@INFA_VL_DOLAR 							=@INFA_VL_DOLAR output,
				@TUSF_QT_USS_FILME					=@TUSF_QT_USS_FILME output,
				@TUSF_DS_INFORMACAO					=@TUSF_DS_INFORMACAO output

				--Seta valores se não houver valor a exibir ao cliente
				IF @ITEM_VL_CLIENTE_CALC IS NULL 
					BEGIN
					SET @ITEM_VL_CLIENTE_CALC = 0;
				END

				SET NOCOUNT OFF


			SELECT 

			null as convenio,
			null as empresa,
			null as plano,
			@ID_PROD_CD_PRODUTO as produto,
			@ID_UNID_CD_UNIDADE as unidade,
			'' as permiteAgendar, -- RN NA APLICAÇÃO
			@amostras * @ITEM_VL_CLIENTE_CALC as preco,
			null as inicioVigencia, 
			null as fimVigencia, 
			null as inicioBloqueio, 
			null as docAutorizacao 
    

		END

  
END
-- [01] Fim








GO


