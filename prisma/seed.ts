import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Iniciando seed...');

  // Lojas
  const lojas = [
    { codigo: '001', nome: 'Filial Centro', ativa: true },
    { codigo: '002', nome: 'Filial Norte', ativa: true },
    { codigo: '003', nome: 'Filial Sul', ativa: true },
    { codigo: '999', nome: 'Filial Desativada', ativa: false },
  ];

  for (const loja of lojas) {
    await prisma.loja.upsert({
      where: { codigo: loja.codigo },
      update: { nome: loja.nome, ativa: loja.ativa },
      create: loja,
    });
  }
  console.log(`  ${lojas.length} lojas inseridas`);

  // Entregadores
  const entregadores = [
    { codigo: 'E0042', nome: 'Fredy Almeida', ativo: true },
    { codigo: 'E0197', nome: 'Carlos Mota', ativo: true },
    { codigo: 'E0255', nome: 'Luciana Prado', ativo: true },
    { codigo: 'E0300', nome: 'Roberto Gomes', ativo: true },
    { codigo: 'E0999', nome: 'Jose Inativo', ativo: false },
  ];

  for (const entregador of entregadores) {
    await prisma.entregador.upsert({
      where: { codigo: entregador.codigo },
      update: { nome: entregador.nome, ativo: entregador.ativo },
      create: entregador,
    });
  }
  console.log(`  ${entregadores.length} entregadores inseridos`);

  // Documentos Protheus (simulam respostas do ERP)
  const documentos = [
    {
      chaveAcesso: '35240114200166000187550010000001231234567890',
      payload: {
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
          {
            id: '003',
            codigoProduto: 'PROD-5678',
            descricao: 'Fertilizante Organico - 20kg',
            qtdTotal: 15,
            qtdEntregue: 0,
            unidade: 'SC',
          },
        ],
      },
    },
    {
      chaveAcesso: '35240114200166000187550010000004561234567890',
      payload: {
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
    },
    {
      chaveAcesso: '35240114200166000187550010000007891234567890',
      payload: {
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
    },
    {
      chaveAcesso: '35240114200166000187550010000009991234567890',
      payload: {
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
    },
    {
      chaveAcesso: '35240114200166000187550010000011111234567890',
      payload: {
        documento: '111222',
        tipo: 'NFE',
        chaveAcesso: '35240114200166000187550010000011111234567890',
        cliente: {
          codigo: 'C0005',
          nome: 'Pedro Santos',
          documento: '55566677788',
        },
        isVendaFutura: false,
        statusAtual: 'pendente',
        itens: [
          {
            id: '001',
            codigoProduto: 'PROD-4444',
            descricao: 'Cimento CP-II 50kg',
            qtdTotal: 30,
            qtdEntregue: 0,
            unidade: 'SC',
          },
          {
            id: '002',
            codigoProduto: 'PROD-5555',
            descricao: 'Areia Lavada - m3',
            qtdTotal: 2.5,
            qtdEntregue: 0,
            unidade: 'KG',
          },
          {
            id: '003',
            codigoProduto: 'PROD-6666',
            descricao: 'Vergalhao CA-50 10mm',
            qtdTotal: 100,
            qtdEntregue: 0,
            unidade: 'UN',
          },
          {
            id: '004',
            codigoProduto: 'PROD-7777',
            descricao: 'Tijolo Ceramico 6 furos',
            qtdTotal: 500,
            qtdEntregue: 0,
            unidade: 'UN',
          },
        ],
      },
    },
  ];

  for (const doc of documentos) {
    await prisma.documentoProtheus.upsert({
      where: { chaveAcesso: doc.chaveAcesso },
      update: { payload: doc.payload },
      create: doc,
    });
  }
  console.log(`  ${documentos.length} documentos Protheus inseridos`);

  // Sessao de demonstracao (para vincular fila_documentos)
  const sessao = await prisma.sessao.upsert({
    where: { dispositivoId: 'tablet-demo-001' },
    update: {},
    create: {
      token: 'token-demo-seed-001',
      lojaCodigo: '001',
      lojaNome: 'Filial Centro',
      dispositivoId: 'tablet-demo-001',
    },
  });
  console.log('  1 sessao de demonstracao criada');

  // Fila de documentos
  const filaEntries = [
    {
      sessaoId: sessao.id,
      documentoNumero: '123456',
      documentoChave: '35240114200166000187550010000001231234567890',
      clienteNome: 'Joao da Silva',
      qtdItens: 3,
      status: 'pendente',
      payloadProtheus: documentos[0].payload,
      consultadoEm: new Date(Date.now() - 2 * 60 * 1000), // 2 min atras
    },
    {
      sessaoId: sessao.id,
      documentoNumero: '456789',
      documentoChave: '35240114200166000187550010000004561234567890',
      clienteNome: 'Maria Souza',
      qtdItens: 1,
      status: 'parcial',
      payloadProtheus: documentos[1].payload,
      consultadoEm: new Date(Date.now() - 18 * 60 * 1000), // 18 min atras
    },
    {
      sessaoId: sessao.id,
      documentoNumero: '789123',
      documentoChave: '35240114200166000187550010000007891234567890',
      clienteNome: 'Carlos Pereira',
      qtdItens: 1,
      status: 'pendente',
      payloadProtheus: documentos[2].payload,
      consultadoEm: new Date(Date.now() - 45 * 60 * 1000), // 45 min atras
    },
    {
      sessaoId: sessao.id,
      documentoNumero: '999000',
      documentoChave: '35240114200166000187550010000009991234567890',
      clienteNome: 'Ana Costa',
      qtdItens: 1,
      status: 'finalizado',
      payloadProtheus: documentos[3].payload,
      consultadoEm: new Date(Date.now() - 3 * 60 * 60 * 1000), // 3h atras
    },
    {
      sessaoId: sessao.id,
      documentoNumero: '111222',
      documentoChave: '35240114200166000187550010000011111234567890',
      clienteNome: 'Pedro Santos',
      qtdItens: 4,
      status: 'pendente',
      payloadProtheus: documentos[4].payload,
      consultadoEm: new Date(Date.now() - 5 * 60 * 1000), // 5 min atras
    },
  ];

  for (const entry of filaEntries) {
    await prisma.filaDocumento.upsert({
      where: {
        id: (
          await prisma.filaDocumento.findFirst({
            where: {
              sessaoId: entry.sessaoId,
              documentoChave: entry.documentoChave,
            },
            select: { id: true },
          })
        )?.id ?? '00000000-0000-0000-0000-000000000000',
      },
      update: {
        status: entry.status,
        payloadProtheus: entry.payloadProtheus,
        consultadoEm: entry.consultadoEm,
      },
      create: entry,
    });
  }
  console.log(`  ${filaEntries.length} documentos na fila inseridos`);

  console.log('Seed concluido com sucesso!');
}

main()
  .catch((error) => {
    console.error('Erro ao executar seed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
