USE [BDCORP]
GO

/****** Object:  StoredProcedure [dbo].[pr_CA_EST_CORP_s_HorarioFuncionamentoById]    Script Date: 11/06/2018 13:50:49 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO


/*----------------------------------------------------------------------------------------------------------------
BANCO DE DADOS.: BDCORP
NOME DO OBJETO.: pr_CA_EST_CORP_s_HorarioFuncionamento
SISTEMA/PROJETO: Agendamento - Integra��o WISE
DESCRI��O .....: Busca por hor�rios de funcionamento com base no id da unidade.
AUTOR..........: Leonardo Holanda Araujo - Opah IT Consulting
DATA...........: 25/05/2018
MOTIVO.........: Listar todos os hor�rios de funcionamento com base no id da unidade.
Resultado(s)...: Retornar todos os hor�rios de funcionamento com base no id da unidade.
Objetivo(s)....: Retornar todos os hor�rios de funcionamento com base no id da unidade.
Vers�o.........: 1.0
------------------------------------------------------------------------------------------------------------------
            
PAR�METRO(S):
			NOME       : @ID_UNID_CD_UNIDADE INT
			DESCRI��O  : Id da unidade
            OBRIGAT�RIO: SIM    
            
------------------------------------------------------------------------------------------------------------------
            
TESTE 1:
[dbo].[pr_CA_EST_CORP_s_HorarioFuncionamentoById]
	@ID_UNID_CD_UNIDADE = 1
    
*/ ---------------------------------------------------------------------------------------------------------------
/*----------------------------------------------------------------------------------------------------------------
[01]Data : 07/06/2018
Autor(es) : Leonardo Holanda Araujo - Opah IT Consulting 
Projeto : Agendamento - Integra��o WISE - Estrutura Corporativa
Motivo(S) : Cria��o da procedure.
----------------------------------------------------------------------------------------------------------------

-----------------------------------------------------------------------------------------------------------------  

----------------------------------------------------------------------------------------------------------------- */


CREATE PROCEDURE [dbo].[pr_CA_EST_CORP_s_HorarioFuncionamentoById]


@ID_UNID_CD_UNIDADE INT


AS

BEGIN -- [01] In�cio


SELECT HOUN.ID_UNID_CD_UNIDADE as id,  
                   HOUN.HOUN_SL_DIA_SEMANA as dia, 
                   HOUN.HOUN_HR_INICIO_FUNC as horaInicio, 
                   HOUN.HOUN_HR_FIM_FUNC as horaFim, 
                   HOUN.HOUN_HR_INICIO_COLETA as horaInicioColeta, 
                   HOUN.HOUN_HR_FIM_COLETA as horaFimColeta 
                   FROM CP_CDTB_HORARIO_FUNCIONAMENTO_HOUN HOUN WITH(NOLOCK)
                   WHERE HOUN.ID_UNID_CD_UNIDADE = @ID_UNID_CD_UNIDADE 
                   ORDER BY HOUN.HOUN_SL_DIA_SEMANA ;
    
    
  
END -- [01] Fim
GO


