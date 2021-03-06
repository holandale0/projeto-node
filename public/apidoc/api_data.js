define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./public/apidoc/main.js",
    "group": "D__projetos_nodejs_api_novo_agendamento_public_apidoc_main_js",
    "groupTitle": "D__projetos_nodejs_api_novo_agendamento_public_apidoc_main_js",
    "name": ""
  },
  {
    "type": "get",
    "url": "/v1/coberturas/:idConvenio/:idEmpresa/:idPlano/:idProduto/:idUnidade",
    "title": "- Retonar informações de cobertura",
    "name": "API_Novo_Agendamento",
    "group": "cobertura",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idConvenio",
            "description": "<ul> <li>Identificação do convênio.</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idEmpresa",
            "description": "<ul> <li>Identificação do empresa.</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idPlano",
            "description": "<ul> <li>Identificação do plano.</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idProduto",
            "description": "<ul> <li>Identificação do produto.</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idUnidade",
            "description": "<ul> <li>Identificação do unidade.</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso:",
          "content": " HTTP/1.1 200 OK\n{\n    \"convenio\": 8,\n    \"empresa\": 139,\n    \"plano\": 70,\n    \"produto\": 1,\n    \"unidade\": 118,\n    \"permiteAgendar\": false,\n    \"preco\": 172.32,\n    \"inicioVigencia\": \"1998-12-05T00:00:00.000Z\",\n    \"fimVigencia\": null,\n    \"inicioBloqueio\": null,\n    \"docAutorizacao\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FleuryApiNovoAgendamentoNotFound",
            "description": "<ul> <li>Informações de cobertura não localizadas.</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"FleuryApiNovoAgendamentoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/convenios/coberturaRoutes.js",
    "groupTitle": "cobertura"
  },
  {
    "type": "get",
    "url": "/v1/convenios/:idConvenio",
    "title": "- Retonar informações de convenio",
    "name": "API_Novo_Agendamento",
    "group": "convenio",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idConvenio",
            "description": "<ul> <li>Identificação de convenio.</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": 4,\n       \"ativo\": true,\n       \"nome\": \"Sul América                             \",\n       \"internet\": true\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FleuryApiNovoAgendamentoNotFound",
            "description": "<ul> <li>Informações de convenio não localizadas.</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"FleuryApiNovoAgendamentoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/convenios/convenioRoutes.js",
    "groupTitle": "convenio"
  },
  {
    "type": "get",
    "url": "/v1/convenioEmpresas/:code",
    "title": "- Retonar informações de convenioEmpresa",
    "name": "API_Novo_Agendamento",
    "group": "convenioEmpresa",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<ul> <li>Identificação de convenioEmpresa.</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso:",
          "content": "  HTTP/1.1 200 OK\n{\n   \"code\": \"55|70\",\n   \"ativo\": false,\n   \"convenio\": 55,\n   \"empresa\": 70,\n   \"internet\": true,\n   \"validaReceita\": 0\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FleuryApiNovoAgendamentoNotFound",
            "description": "<ul> <li>Informações de convenioEmpresa não localizadas.</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"FleuryApiNovoAgendamentoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/convenios/convenioEmpresaRoutes.js",
    "groupTitle": "convenioEmpresa"
  },
  {
    "type": "get",
    "url": "/v1/empresas/:idEmpresa",
    "title": "- Retonar informações de empresa",
    "name": "API_Novo_Agendamento",
    "group": "empresa",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idEmpresa",
            "description": "<ul> <li>Identificação de empresa.</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": 2,\n       \"ativo\": true,\n       \"nome\": \"Care Plus Medicina Assistencial         \"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FleuryApiNovoAgendamentoNotFound",
            "description": "<ul> <li>Informações de empresa não localizadas.</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"FleuryApiNovoAgendamentoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/convenios/empresaRoutes.js",
    "groupTitle": "empresa"
  },
  {
    "type": "get",
    "url": "/v1/horariosFuncionamento/:idHorario",
    "title": "- Retonar informações de horarioFuncionamento",
    "name": "API_Novo_Agendamento",
    "group": "horarioFuncionamento",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idHorario",
            "description": "<ul> <li>Identificação de horarioFuncionamento.</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": 120,\n       \"domingo\": {},\n       \"segunda\": {\n           \"horaInicio\": \"06:30\",\n           \"horaFim\": \"15:00\",\n           \"horaInicioColeta\": \"06:30\",\n           \"horaFimColeta\": \"12:30\"\n       },\n       \"terca\": {\n           \"horaInicio\": \"06:30\",\n           \"horaFim\": \"15:00\",\n           \"horaInicioColeta\": \"06:30\",\n           \"horaFimColeta\": \"12:30\"\n       },\n       \"quarta\": {\n           \"horaInicio\": \"06:30\",\n           \"horaFim\": \"15:00\",\n           \"horaInicioColeta\": \"06:30\",\n           \"horaFimColeta\": \"12:30\"\n       },\n       \"quinta\": {\n           \"horaInicio\": \"06:30\",\n           \"horaFim\": \"15:00\",\n           \"horaInicioColeta\": \"06:30\",\n           \"horaFimColeta\": \"12:30\"\n       },\n       \"sexta\": {\n           \"horaInicio\": \"06:30\",\n           \"horaFim\": \"15:00\",\n           \"horaInicioColeta\": \"06:30\",\n           \"horaFimColeta\": \"12:30\"\n       },\n       \"sabado\": {\n           \"horaInicio\": \"06:30\",\n           \"horaFim\": \"12:30\",\n           \"horaInicioColeta\": \"06:30\",\n           \"horaFimColeta\": \"12:00\"\n       },\n       \"feriado\": {}\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FleuryApiNovoAgendamentoNotFound",
            "description": "<ul> <li>Informações de horarioFuncionamento não localizadas.</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"FleuryApiNovoAgendamentoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/estrutura-corporativa/horarioFuncionamentoRoutes.js",
    "groupTitle": "horarioFuncionamento"
  },
  {
    "type": "get",
    "url": "/v1/marcas/:idMarca",
    "title": "- Retonar informações de marca",
    "name": "API_Novo_Agendamento",
    "group": "marca",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idMarca",
            "description": "<ul> <li>Identificação de marca.</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"code\": \"AM\",\n       \"ativo\": true,\n       \"nome\": \"amais\",\n       \"logo\": \"\\\\\\\\iota\\\\apl\\\\GerenImp\\\\Imagens\\\\amais.gif\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FleuryApiNovoAgendamentoNotFound",
            "description": "<ul> <li>Informações de marca não localizadas.</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"FleuryApiNovoAgendamentoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/estrutura-corporativa/marcaRoutes.js",
    "groupTitle": "marca"
  },
  {
    "type": "get",
    "url": "/v1/fleury/notificacoes/:tipo/:inicio",
    "title": "- Retonar informações de notificacaoFleury",
    "name": "API_Novo_Agendamento",
    "group": "notificacaoFleury",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<ul> <li>Identificação de tipo de notificação.</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "inicio",
            "description": "<ul> <li>Data de inicio.</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n   [\n       {\n           \"id\": null,\n           \"code\": \"AM\",\n           \"tipo\": \"MARCA\",\n           \"instante\": null\n       },\n       {\n           \"id\": null,\n           \"code\": \"CP\",\n           \"tipo\": \"MARCA\",\n           \"instante\": null\n       },\n       {\n           \"id\": null,\n           \"code\": \"FL\",\n           \"tipo\": \"MARCA\",\n           \"instante\": null\n       },\n       {\n           \"id\": null,\n           \"code\": \"FM\",\n           \"tipo\": \"MARCA\",\n           \"instante\": null\n       },\n       {\n           \"id\": null,\n           \"code\": \"LA\",\n           \"tipo\": \"MARCA\",\n           \"instante\": null\n       },\n       {\n           \"id\": null,\n           \"code\": \"NO\",\n           \"tipo\": \"MARCA\",\n           \"instante\": null\n       },\n       {\n           \"id\": null,\n           \"code\": \"WE\",\n           \"tipo\": \"MARCA\",\n           \"instante\": null\n       }\n   ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FleuryApiNovoAgendamentoNotFound",
            "description": "<ul> <li>Informações de notificacaoFleury não localizadas.</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"FleuryApiNovoAgendamentoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/notificacoes/notificacaoFleuryRoutes.js",
    "groupTitle": "notificacaoFleury"
  },
  {
    "type": "get",
    "url": "/v1/wise/notificacoes/:tipo/:inicio",
    "title": "- Retonar informações de notificacaoWise",
    "name": "API_Novo_Agendamento",
    "group": "notificacaoWise",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tipo",
            "description": "<ul> <li>Identificação de tipo de notificação.</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "inicio",
            "description": "<ul> <li>Data de inicio.</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n   [\n       {\n           \"id\": \"\",\n           \"tipo\": \"REGIONAL\",\n           \"instante\": null\n       },\n       {\n           \"id\": \"BA\",\n           \"tipo\": \"REGIONAL\",\n           \"instante\": null\n       },\n       {\n           \"id\": \"DF\",\n           \"tipo\": \"REGIONAL\",\n           \"instante\": null\n       },\n       {\n           \"id\": \"PE\",\n           \"tipo\": \"REGIONAL\",\n           \"instante\": null\n       },\n       {\n           \"id\": \"PR\",\n           \"tipo\": \"REGIONAL\",\n           \"instante\": null\n       },\n       {\n           \"id\": \"RJ\",\n           \"tipo\": \"REGIONAL\",\n           \"instante\": null\n       },\n       {\n           \"id\": \"RS\",\n           \"tipo\": \"REGIONAL\",\n           \"instante\": null\n       },\n       {\n           \"id\": \"SP\",\n           \"tipo\": \"REGIONAL\",\n           \"instante\": null\n       }\n   ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FleuryApiNovoAgendamentoNotFound",
            "description": "<ul> <li>Informações de notificacaoWise não localizadas.</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"FleuryApiNovoAgendamentoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/notificacoes/notificacaoWiseRoutes.js",
    "groupTitle": "notificacaoWise"
  },
  {
    "type": "get",
    "url": "/v1/pessoas/:idPessoa",
    "title": "- Retonar informações de pessoaFisica",
    "name": "API_Novo_Agendamento",
    "group": "pessoaFisica",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idPessoa",
            "description": "<ul> <li>Identificação de pessoaFisica.</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": 46764,\n       \"nome\": \"ADELAIDE FLORENCIO JUREMA\",\n       \"titulo\": \"Dra.\",\n       \"sexo\": \"FEMININO\",\n       \"dataNascimento\": \"1979-06-09\",\n       \"dataNascimentoFicticia\": false,\n       \"emails\": [\n           {\n               \"endereco\": null,\n               \"notificacao\": false\n           },\n           {\n               \"endereco\": null,\n               \"notificacao\": true\n           },\n           {\n               \"endereco\": null,\n               \"notificacao\": true\n           },\n           {\n               \"endereco\": null,\n               \"notificacao\": true\n           },\n           {\n               \"endereco\": null,\n               \"notificacao\": true\n           },\n           {\n               \"endereco\": null,\n               \"notificacao\": true\n           },\n           {\n               \"endereco\": null,\n               \"notificacao\": true\n           }\n       ],\n       \"telefones\": [\n           {\n               \"ddi\": null,\n               \"ddd\": 11,\n               \"numero\": null,\n               \"ramal\": null,\n               \"tipo\": \"C. RESI.\",\n               \"notificacao\": false,\n               \"divulgacao\": false\n           },\n           {\n               \"ddi\": null,\n               \"ddd\": null,\n               \"numero\": null,\n               \"ramal\": null,\n               \"tipo\": \"E-MAIL\",\n               \"notificacao\": true,\n               \"divulgacao\": false\n           },\n           {\n               \"ddi\": null,\n               \"ddd\": null,\n               \"numero\": null,\n               \"ramal\": null,\n               \"tipo\": \"C. CONS.\",\n               \"notificacao\": true,\n               \"divulgacao\": false\n           },\n           {\n               \"ddi\": null,\n               \"ddd\": 11,\n               \"numero\": null,\n               \"ramal\": null,\n               \"tipo\": \"TEL. RESIDENCIAL\",\n               \"notificacao\": true,\n               \"divulgacao\": true\n           },\n           {\n               \"ddi\": null,\n               \"ddd\": 11,\n               \"numero\": null,\n               \"ramal\": null,\n               \"tipo\": \"CELULAR\",\n               \"notificacao\": true,\n               \"divulgacao\": false\n           },\n           {\n               \"ddi\": null,\n               \"ddd\": 11,\n               \"numero\": null,\n               \"ramal\": null,\n               \"tipo\": \"CELULAR\",\n               \"notificacao\": true,\n               \"divulgacao\": false\n           },\n           {\n               \"ddi\": null,\n               \"ddd\": 11,\n               \"numero\": null,\n               \"ramal\": null,\n               \"tipo\": \"TEL. COMERCIAL\",\n               \"notificacao\": true,\n               \"divulgacao\": true\n           }\n       ],\n       \"endereco\": {\n           \"pais\": \"BR\",\n           \"estado\": \"SP\",\n           \"cidade\": \"GUARULHOS\",\n           \"bairro\": \"JARDIM SANTA MARIA\",\n           \"logradouro\": \"RUA MERCURIO\",\n           \"numero\": null,\n           \"complemento\": null,\n           \"cep\": \"07133470\"\n       },\n       \"documentoProfissional\": {\n           \"ativo\": 1,\n           \"tipo\": \"CRM\",\n           \"numero\": \"9829\",\n           \"uf\": \"SP\",\n           \"profissionalFleury\": true\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FleuryApiNovoAgendamentoNotFound",
            "description": "<ul> <li>Informações de pessoaFisica não localizadas.</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"FleuryApiNovoAgendamentoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/pessoas-fisicas/pessoaFisicaRoutes.js",
    "groupTitle": "pessoaFisica"
  },
  {
    "type": "get",
    "url": "/v1/planos/:idPlano",
    "title": "- Retonar informações de plano de saúde",
    "name": "API_Novo_Agendamento",
    "group": "plano",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idPlano",
            "description": "<ul> <li>Identificação de plano.</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": 232,\n       \"ativo\": true,\n       \"nome\": \"Especial                      \",\n       \"convenio\": 42,\n       \"empresa\": 56,\n       \"internet\": true,\n       \"exigeCrm\": true,\n       \"validadeDe\": \"1900-01-01T00:00:00.000Z\",\n       \"validadeAte\": \"9999-12-31T00:00:00.000Z\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FleuryApiNovoAgendamentoNotFound",
            "description": "<ul> <li>Informações de plano não localizadas.</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"FleuryApiNovoAgendamentoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/convenios/planoSaudeRoutes.js",
    "groupTitle": "plano"
  },
  {
    "type": "get",
    "url": "/v1/regionais/:idRegional",
    "title": "- Retonar informações de regional",
    "name": "API_Novo_Agendamento",
    "group": "regional",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "idRegional",
            "description": "<ul> <li>Identificação de regional.</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"code\": \"BA\",\n       \"ativo\": true,\n       \"sigla\": \"Bahia\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FleuryApiNovoAgendamentoNotFound",
            "description": "<ul> <li>Informações de regional não localizadas.</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"FleuryApiNovoAgendamentoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/estrutura-corporativa/regionalRoutes.js",
    "groupTitle": "regional"
  },
  {
    "type": "get",
    "url": "/v1/unidadesAtendimento/:idUnidade",
    "title": "- Retonar informações de unidadeAtendimento",
    "name": "API_Novo_Agendamento",
    "group": "unidadeAtendimento",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idUnidade",
            "description": "<ul> <li>Identificação de unidadeAtendimento.</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": 100,\n       \"ativo\": true,\n       \"nome\": \"ALPHAVILLE\",\n       \"unidadeFisica\": \"ALPHAVILLE\",\n       \"marca\": \"amais\",\n       \"classificacao\": \"ATENDIMENTO_MOVEL\",\n       \"linhaNegocio\": \"ATENDIMENTO\",\n       \"agendamento\": \"S\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FleuryApiNovoAgendamentoNotFound",
            "description": "<ul> <li>Informações de unidadeAtendimento não localizadas.</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"FleuryApiNovoAgendamentoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/estrutura-corporativa/unidadeAtendimentoRoutes.js",
    "groupTitle": "unidadeAtendimento"
  },
  {
    "type": "get",
    "url": "/v1/unidadesFicticias/:idUnidade",
    "title": "- Retonar informações de unidadeFicticia",
    "name": "API_Novo_Agendamento",
    "group": "unidadeFicticia",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idUnidade",
            "description": "<ul> <li>Identificação de unidadeFicticia.</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": 115,\n       \"ativo\": false,\n       \"nome\": \"ATEND. MÓVEL LIMÃO            \",\n       \"unidadeAtendimento\": null,\n       \"agendamento\": \"N\"\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FleuryApiNovoAgendamentoNotFound",
            "description": "<ul> <li>Informações de unidadeFicticia não localizadas.</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"FleuryApiNovoAgendamentoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/estrutura-corporativa/unidadeFicticiaRoutes.js",
    "groupTitle": "unidadeFicticia"
  },
  {
    "type": "get",
    "url": "/v1/unidadesFisicas/:idUnidade",
    "title": "- Retonar informações de unidadeFisica",
    "name": "API_Novo_Agendamento",
    "group": "unidadeFisica",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "idUnidade",
            "description": "<ul> <li>Identificação de unidadeFisica.</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Sucesso:",
          "content": "HTTP/1.1 200 OK\n   {\n       \"id\": 100,\n       \"ativo\": true,\n       \"nome\": \"ALPHAVILLE\",\n       \"regional\": \"\",\n       \"endereco\": {\n           \"pais\": \"BR\",\n           \"estado\": \"SP\",\n           \"cidade\": \"Barueri                                 \",\n           \"bairro\": \"Tamboré\",\n           \"logradouro\": \"Alameda Araguaia\",\n           \"numero\": \"2400\",\n           \"complemento\": \"\",\n           \"cep\": \"06455000\"\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "FleuryApiNovoAgendamentoNotFound",
            "description": "<ul> <li>Informações de unidadeFisica não localizadas.</li> </ul>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"FleuryApiNovoAgendamentoNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./routes/estrutura-corporativa/unidadeFisicaRoutes.js",
    "groupTitle": "unidadeFisica"
  }
] });
