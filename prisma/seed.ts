import { PrismaClient } from '@prisma/client';
import { scryptSync, randomBytes } from 'node:crypto';

const prisma = new PrismaClient();

function hashPassword(password: string): string {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

async function main() {
  console.log('Iniciando seed...');

  // Lojas (senha admin padrao: admin001, admin002, admin003)
  const lojas = [
    { codigo: '001', nome: 'Filial Centro', ativa: true, adminSenhaHash: hashPassword('admin001') },
    { codigo: '002', nome: 'Filial Norte', ativa: true, adminSenhaHash: hashPassword('admin002') },
    { codigo: '003', nome: 'Filial Sul', ativa: true, adminSenhaHash: hashPassword('admin003') },
    { codigo: '999', nome: 'Filial Desativada', ativa: false, adminSenhaHash: null },
  ];

  for (const loja of lojas) {
    await prisma.loja.upsert({
      where: { codigo: loja.codigo },
      update: { nome: loja.nome, ativa: loja.ativa, adminSenhaHash: loja.adminSenhaHash },
      create: loja,
    });
  }
  console.log(`  ${lojas.length} lojas inseridas`);

  // Entregadores
  const entregadores = [
    { codigo: 'E0042', nome: 'Fredy Almeida', lojaCodigo: '001', ativo: true },
    { codigo: 'E0197', nome: 'Carlos Mota', lojaCodigo: '001', ativo: true },
    { codigo: 'E0255', nome: 'Luciana Prado', lojaCodigo: '002', ativo: true },
    { codigo: 'E0300', nome: 'Roberto Gomes', lojaCodigo: '002', ativo: true },
    { codigo: 'E0999', nome: 'Jose Inativo', lojaCodigo: '001', ativo: false },
  ];

  for (const entregador of entregadores) {
    await prisma.entregador.upsert({
      where: { codigo: entregador.codigo },
      update: { nome: entregador.nome, ativo: entregador.ativo },
      create: entregador,
    });
  }
  console.log(`  ${entregadores.length} entregadores inseridos`);

  // Documentos unificados (combinam dados do ERP e webhook)
  const hoje = new Date();
  const documentos = [
    {
      lojaCodigo: '001',
      documentoNumero: '123456',
      chaveAcesso: '35240114200166000187550010000001231234567890',
      tipoDocumento: 'NFE',
      clienteNome: 'Joao da Silva',
      clienteDocumento: '12345678901',
      valorTotal: 4500.00,
      qtdItens: 3,
      status: 'pendente',
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
          { id: '001', codigoProduto: 'PROD-1234', descricao: 'Adubo NPK 10-10-10 - 50kg', qtdTotal: 20, qtdEntregue: 0, unidade: 'SC' },
          { id: '002', codigoProduto: 'PROD-4567', descricao: 'Calcario Premium - 25kg', qtdTotal: 10, qtdEntregue: 0, unidade: 'SC' },
          { id: '003', codigoProduto: 'PROD-5678', descricao: 'Fertilizante Organico - 20kg', qtdTotal: 15, qtdEntregue: 0, unidade: 'SC' },
        ],
      },
      origem: 'webhook',
      recebidoEm: new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), 8, 15),
      consultadoEm: new Date(Date.now() - 2 * 60 * 1000),
    },
    {
      lojaCodigo: '001',
      documentoNumero: '456789',
      chaveAcesso: '35240114200166000187550010000004561234567890',
      tipoDocumento: 'NFCE',
      clienteNome: 'Maria Souza',
      clienteDocumento: '98765432100',
      valorTotal: 320.50,
      qtdItens: 1,
      status: 'parcial',
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
          { id: '001', codigoProduto: 'PROD-7890', descricao: 'Semente Milho Safra Ouro', qtdTotal: 8, qtdEntregue: 3, unidade: 'SC' },
        ],
      },
      origem: 'webhook',
      recebidoEm: new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), 9, 30),
      consultadoEm: new Date(Date.now() - 18 * 60 * 1000),
    },
    {
      lojaCodigo: '001',
      documentoNumero: '789123',
      chaveAcesso: '35240114200166000187550010000007891234567890',
      tipoDocumento: 'NFE',
      clienteNome: 'Carlos Pereira',
      clienteDocumento: '45645645612',
      qtdItens: 1,
      status: 'pendente',
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
          { id: '001', codigoProduto: 'PROD-2222', descricao: 'Defensivo Agricola Plus', qtdTotal: 4, qtdEntregue: 0, unidade: 'UN' },
        ],
      },
      origem: 'consulta',
      recebidoEm: new Date(Date.now() - 45 * 60 * 1000),
      consultadoEm: new Date(Date.now() - 45 * 60 * 1000),
    },
    {
      lojaCodigo: '001',
      documentoNumero: '999000',
      chaveAcesso: '35240114200166000187550010000009991234567890',
      tipoDocumento: 'NFE',
      clienteNome: 'Ana Costa',
      clienteDocumento: '22233344455',
      qtdItens: 1,
      status: 'finalizado',
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
          { id: '001', codigoProduto: 'PROD-3333', descricao: 'Racao Bovino Max', qtdTotal: 12, qtdEntregue: 12, unidade: 'SC' },
        ],
      },
      origem: 'consulta',
      recebidoEm: new Date(Date.now() - 3 * 60 * 60 * 1000),
      consultadoEm: new Date(Date.now() - 3 * 60 * 60 * 1000),
    },
    {
      lojaCodigo: '001',
      documentoNumero: '111222',
      chaveAcesso: '35240114200166000187550010000011111234567890',
      tipoDocumento: 'NFE',
      clienteNome: 'Pedro Santos',
      clienteDocumento: '55566677788',
      valorTotal: 12750.00,
      qtdItens: 4,
      status: 'pendente',
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
          { id: '001', codigoProduto: 'PROD-4444', descricao: 'Cimento CP-II 50kg', qtdTotal: 30, qtdEntregue: 0, unidade: 'SC' },
          { id: '002', codigoProduto: 'PROD-5555', descricao: 'Areia Lavada - m3', qtdTotal: 2.5, qtdEntregue: 0, unidade: 'KG' },
          { id: '003', codigoProduto: 'PROD-6666', descricao: 'Vergalhao CA-50 10mm', qtdTotal: 100, qtdEntregue: 0, unidade: 'UN' },
          { id: '004', codigoProduto: 'PROD-7777', descricao: 'Tijolo Ceramico 6 furos', qtdTotal: 500, qtdEntregue: 0, unidade: 'UN' },
        ],
      },
      origem: 'webhook',
      recebidoEm: new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), 10, 45),
      consultadoEm: new Date(Date.now() - 5 * 60 * 1000),
    },
    {
      lojaCodigo: '001',
      documentoNumero: '333444',
      chaveAcesso: '35240114200166000187550010000033341234567890',
      tipoDocumento: 'NFE',
      clienteNome: 'Fernanda Lima',
      clienteDocumento: '11122233344',
      valorTotal: 890.00,
      qtdItens: 2,
      status: 'pendente',
      payload: {
        documento: '333444',
        tipo: 'NFE',
        chaveAcesso: '35240114200166000187550010000033341234567890',
        cliente: {
          codigo: 'C0006',
          nome: 'Fernanda Lima',
          documento: '11122233344',
        },
        isVendaFutura: false,
        statusAtual: 'pendente',
        itens: [
          { id: '001', codigoProduto: 'PROD-8888', descricao: 'Mangueira Irrigacao 50m', qtdTotal: 2, qtdEntregue: 0, unidade: 'UN' },
          { id: '002', codigoProduto: 'PROD-9999', descricao: 'Bomba Dagua 1CV', qtdTotal: 1, qtdEntregue: 0, unidade: 'UN' },
        ],
      },
      origem: 'webhook',
      recebidoEm: new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), 11, 20),
    },
    {
      lojaCodigo: '002',
      documentoNumero: '555666',
      chaveAcesso: '35240114200166000187550010000055561234567890',
      tipoDocumento: 'NFCE',
      clienteNome: 'Ricardo Martins',
      clienteDocumento: '99988877766',
      valorTotal: 150.00,
      qtdItens: 1,
      status: 'pendente',
      payload: {
        documento: '555666',
        tipo: 'NFCE',
        chaveAcesso: '35240114200166000187550010000055561234567890',
        cliente: {
          codigo: 'C0007',
          nome: 'Ricardo Martins',
          documento: '99988877766',
        },
        isVendaFutura: false,
        statusAtual: 'pendente',
        itens: [
          { id: '001', codigoProduto: 'PROD-1010', descricao: 'Enxada Tramontina', qtdTotal: 1, qtdEntregue: 0, unidade: 'UN' },
        ],
      },
      origem: 'webhook',
      recebidoEm: new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate(), 8, 50),
    },
  ];

  // Limpa dados anteriores para evitar conflitos (ordem respeita FKs)
  await prisma.logAlteracao.deleteMany({});
  await prisma.entregaItem.deleteMany({});
  await prisma.entrega.deleteMany({});
  await prisma.adminSessao.deleteMany({});
  await prisma.sessao.deleteMany({});
  await prisma.documento.deleteMany({});

  for (const doc of documentos) {
    await prisma.documento.create({ data: doc });
  }
  console.log(`  ${documentos.length} documentos inseridos`);

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
