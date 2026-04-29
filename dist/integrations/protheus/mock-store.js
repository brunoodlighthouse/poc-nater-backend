const mockDocuments = new Map([
    [
        '35240114200166000187550010000001231234567890',
        {
            documento: '123456',
            tipo: 'NFE',
            chaveAcesso: '35240114200166000187550010000001231234567890',
            cliente: {
                codigo: 'C0001',
                nome: 'Joao da Silva',
                documento: '12345678901',
            },
            isVendaFutura: false,
            statusAtual: 'pendente',
            itens: [
                {
                    id: '001',
                    codigoProduto: 'PROD-1234',
                    descricao: 'Adubo NPK 10-10-10 - 50kg',
                    qtdTotal: 20,
                    qtdEntregue: 0,
                    unidade: 'SC',
                },
                {
                    id: '002',
                    codigoProduto: 'PROD-4567',
                    descricao: 'Calcario Premium - 25kg',
                    qtdTotal: 10,
                    qtdEntregue: 0,
                    unidade: 'SC',
                },
            ],
        },
    ],
    [
        '35240114200166000187550010000004561234567890',
        {
            documento: '456789',
            tipo: 'NFCE',
            chaveAcesso: '35240114200166000187550010000004561234567890',
            cliente: {
                codigo: 'C0002',
                nome: 'Maria Souza',
                documento: '98765432100',
            },
            isVendaFutura: false,
            statusAtual: 'parcial',
            entregadorNome: 'Carlos Mota',
            entregueEm: '28/04/2026 10:15',
            itens: [
                {
                    id: '001',
                    codigoProduto: 'PROD-7890',
                    descricao: 'Semente Milho Safra Ouro',
                    qtdTotal: 8,
                    qtdEntregue: 3,
                    unidade: 'SC',
                },
            ],
        },
    ],
    [
        '35240114200166000187550010000007891234567890',
        {
            documento: '789123',
            tipo: 'NFE',
            chaveAcesso: '35240114200166000187550010000007891234567890',
            cliente: {
                codigo: 'C0003',
                nome: 'Carlos Pereira',
                documento: '45645645612',
            },
            isVendaFutura: true,
            statusAtual: 'pendente',
            itens: [
                {
                    id: '001',
                    codigoProduto: 'PROD-2222',
                    descricao: 'Defensivo Agricola Plus',
                    qtdTotal: 4,
                    qtdEntregue: 0,
                    unidade: 'UN',
                },
            ],
        },
    ],
    [
        '35240114200166000187550010000009991234567890',
        {
            documento: '999000',
            tipo: 'NFE',
            chaveAcesso: '35240114200166000187550010000009991234567890',
            cliente: {
                codigo: 'C0004',
                nome: 'Ana Costa',
                documento: '22233344455',
            },
            isVendaFutura: false,
            statusAtual: 'finalizado',
            entregadorNome: 'Fredy Almeida',
            entregueEm: '28/04/2026 14:30',
            itens: [
                {
                    id: '001',
                    codigoProduto: 'PROD-3333',
                    descricao: 'Racao Bovino Max',
                    qtdTotal: 12,
                    qtdEntregue: 12,
                    unidade: 'SC',
                },
            ],
        },
    ],
]);
const mockEntregadores = new Map([
    ['E0042', { codigo: 'E0042', nome: 'Fredy Almeida', ativo: true }],
    ['E0197', { codigo: 'E0197', nome: 'Carlos Mota', ativo: true }],
    ['E0255', { codigo: 'E0255', nome: 'Luciana Prado', ativo: true }],
]);
const appliedDeliveries = new Set();
function clone(value) {
    return JSON.parse(JSON.stringify(value));
}
function formatDate(value) {
    const day = String(value.getDate()).padStart(2, '0');
    const month = String(value.getMonth() + 1).padStart(2, '0');
    const year = value.getFullYear();
    const hour = String(value.getHours()).padStart(2, '0');
    const minute = String(value.getMinutes()).padStart(2, '0');
    return `${day}/${month}/${year} ${hour}:${minute}`;
}
export function getMockDocumentByAccessKey(chaveAcesso) {
    const document = mockDocuments.get(chaveAcesso);
    return document ? clone(document) : null;
}
export function getMockDocumentByNumber(documento) {
    for (const document of mockDocuments.values()) {
        if (document.documento === documento) {
            return clone(document);
        }
    }
    return null;
}
export function getMockEntregadorByCodigo(codigo) {
    const entregador = mockEntregadores.get(codigo);
    return entregador ? clone(entregador) : null;
}
export function listMockEntregadores() {
    return Array.from(mockEntregadores.values()).map(clone);
}
export function applyMockDelivery(input) {
    if (appliedDeliveries.has(input.idempotencyKey)) {
        return;
    }
    const document = mockDocuments.get(input.chaveAcesso);
    if (!document) {
        return;
    }
    for (const itemInput of input.itens) {
        const item = document.itens.find((entry) => entry.id === itemInput.id);
        if (!item) {
            continue;
        }
        item.qtdEntregue = Math.min(item.qtdTotal, item.qtdEntregue + itemInput.qtdEntregue);
    }
    const hasPendingItems = document.itens.some((item) => item.qtdEntregue < item.qtdTotal);
    document.statusAtual = hasPendingItems ? 'parcial' : 'finalizado';
    document.entregadorNome = input.entregadorNome;
    document.entregueEm = formatDate(new Date());
    appliedDeliveries.add(input.idempotencyKey);
}
//# sourceMappingURL=mock-store.js.map