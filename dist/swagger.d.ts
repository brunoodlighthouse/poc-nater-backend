import type { FastifyInstance } from 'fastify';
import type { FastifyDynamicSwaggerOptions } from '@fastify/swagger';
import type { FastifySwaggerUiOptions } from '@fastify/swagger-ui';
export declare const errorResponseRef: {
    $ref: string;
};
export declare function buildErrorResponses(statuses: number[]): {
    [k: string]: {
        $ref: string;
    };
};
export declare function okResponseSchema(data: Record<string, unknown>): {
    type: string;
    required: string[];
    properties: {
        ok: {
            type: string;
            enum: boolean[];
        };
        data: Record<string, unknown>;
    };
};
export declare const lojaSchema: {
    type: string;
    required: string[];
    properties: {
        id: {
            type: string;
            description: string;
        };
        codigo: {
            type: string;
            description: string;
        };
        nome: {
            type: string;
            description: string;
        };
    };
};
export declare const lojaAtivaSchema: {
    required: string[];
    properties: {
        ativa: {
            type: string;
            description: string;
        };
        id: {
            type: string;
            description: string;
        };
        codigo: {
            type: string;
            description: string;
        };
        nome: {
            type: string;
            description: string;
        };
    };
    type: string;
};
export declare const clienteSchema: {
    type: string;
    required: string[];
    properties: {
        codigo: {
            type: string;
        };
        nome: {
            type: string;
        };
        documento: {
            type: string;
        };
    };
};
export declare const itemDocumentoSchema: {
    type: string;
    required: string[];
    properties: {
        id: {
            type: string;
        };
        codigoProduto: {
            type: string;
        };
        descricao: {
            type: string;
        };
        qtdTotal: {
            type: string;
        };
        qtdEntregue: {
            type: string;
        };
        unidade: {
            type: string;
        };
    };
};
export declare const entregaDetalheItemSchema: {
    type: string;
    required: string[];
    properties: {
        id: {
            type: string;
        };
        codigoProduto: {
            type: string;
        };
        descricao: {
            type: string;
        };
        unidade: {
            type: string;
        };
        qtdTotal: {
            type: string;
        };
        qtdJaEntregue: {
            type: string;
        };
        qtdPendente: {
            type: string;
        };
    };
};
export declare const entregaHistoricoItemSchema: {
    type: string;
    required: string[];
    properties: {
        itemIdProtheus: {
            type: string;
        };
        descricao: {
            type: string;
        };
        unidade: {
            type: string;
        };
        qtdTotal: {
            type: string;
        };
        qtdEntregue: {
            type: string;
        };
    };
};
export declare const entregaHistoricoSchema: {
    type: string;
    required: string[];
    properties: {
        id: {
            type: string;
            format: string;
        };
        status: {
            type: string;
            enum: string[];
        };
        entregadorCodigo: {
            type: string;
        };
        entregadorNome: {
            type: string;
        };
        motivoPendencia: {
            anyOf: ({
                type: string;
                enum: string[];
            } | {
                type: string;
                enum?: undefined;
            })[];
        };
        iniciadaEm: {
            type: string;
            format: string;
        };
        finalizadaEm: {
            anyOf: ({
                type: string;
                format: string;
            } | {
                type: string;
                format?: undefined;
            })[];
        };
        itens: {
            type: string;
            items: {
                type: string;
                required: string[];
                properties: {
                    itemIdProtheus: {
                        type: string;
                    };
                    descricao: {
                        type: string;
                    };
                    unidade: {
                        type: string;
                    };
                    qtdTotal: {
                        type: string;
                    };
                    qtdEntregue: {
                        type: string;
                    };
                };
            };
        };
    };
};
export declare const entregaEmAndamentoItemSchema: {
    type: string;
    required: string[];
    properties: {
        itemIdProtheus: {
            type: string;
        };
        descricao: {
            type: string;
        };
        unidade: {
            type: string;
        };
        qtdTotal: {
            type: string;
        };
        qtdEntregue: {
            type: string;
        };
    };
};
export declare const entregaEmAndamentoSchema: {
    type: string;
    required: string[];
    properties: {
        id: {
            type: string;
            format: string;
        };
        documento: {
            type: string;
        };
        modo: {
            type: string;
            enum: string[];
        };
        iniciadaEm: {
            type: string;
            format: string;
        };
        entregador: {
            type: string;
            required: string[];
            properties: {
                codigo: {
                    type: string;
                };
                nome: {
                    type: string;
                };
            };
        };
        itens: {
            type: string;
            items: {
                type: string;
                required: string[];
                properties: {
                    itemIdProtheus: {
                        type: string;
                    };
                    descricao: {
                        type: string;
                    };
                    unidade: {
                        type: string;
                    };
                    qtdTotal: {
                        type: string;
                    };
                    qtdEntregue: {
                        type: string;
                    };
                };
            };
        };
    };
};
export declare const swaggerOptions: FastifyDynamicSwaggerOptions;
export declare const swaggerUiOptions: FastifySwaggerUiOptions;
export declare function registerSwaggerSchemas(app: FastifyInstance<any, any, any, any, any>): void;
//# sourceMappingURL=swagger.d.ts.map