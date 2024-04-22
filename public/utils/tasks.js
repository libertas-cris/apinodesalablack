"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/utils/tasks.ts
var tasks_exports = {};
__export(tasks_exports, {
  DATA: () => DATA
});
module.exports = __toCommonJS(tasks_exports);
var import_date_fns = require("date-fns");
var DATA = [
  { "id": 1, "title": "Definir a data do evento", "owner": "Avaliador/Dono da cl\xEDnica", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 14),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "De prefer\xEAncia at\xE9 o dia 20 daquele m\xEAs.", "status": 0, "daysControl": 14 },
  { "id": 2, "title": "Definir hor\xE1rios de atendimento por hora para os futuros agendamentos.", "owner": "Avaliador/Dono da cl\xEDnica", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 14),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "Exemplo.: Considere 10 pacientes por hor\xE1rio ou quantos couberem na sua sala. 8:00; 9:00; 10:00;", "status": 0, "daysControl": 14 },
  { "id": 3, "title": "Definir o motivo central que d\xE1 raz\xE3o ao evento.", "owner": "Avaliador/Dono da cl\xEDnica", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 14),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "\xC9 o motivo pelo qual voc\xEA falar\xE1 que vai fazer o evento. Alguns exemplos s\xE3o: '10 anos de cl\xEDnica', 'Falei com um fornecedor e ele me deu desconto nisso e aquilo.' ", "status": 0, "daysControl": 14 },
  { "id": 4, "title": "Definir o nome do evento.", "owner": "Avaliador/Dono da cl\xEDnica", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 14),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "Alguns exemplos: Plant\xE3o de Implantes; Botox Day; Invisalign Experience)", "status": 0, "daysControl": 14 },
  { "id": 5, "title": "Encomendar o coquetel com comes e bebes.", "owner": "Livre", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 14),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "Mesa com bolo, sucos, salgados para todos que estiverem nos dias do evento.", "status": 0, "daysControl": 14 },
  { "id": 6, "title": "Fazer uma lista de pacientes que tiveram resultados e poderiam aparecer para conversar com os futuros pacientes.", "owner": "Avaliador/Dono da cl\xEDnica", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 13),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "Uma parte fundamental do Caixa r\xE1pido \xE9 que tenham pacientes l\xE1 no dia do evento. Ent\xE3o, \xE9 importante buscar e garantir que ele vai estar l\xE1 com anteced\xEAncia \xE9 fundamental.", "status": 0, "daysControl": 14 },
  { "id": 7, "title": "Definir brindes para os pacientes que comparecerem e para os que fecharem o tratamento.", "owner": "Avaliador/Dono da cl\xEDnica", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 13),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "Para que os pacientes tenham um est\xEDmulo a mais a aceitarem, \xE9 importante pensar em bons brindes para eles. Alguns exemplos s\xE3o: Kit da Natura; Kit da Botic\xE1rio;", "status": 0, "daysControl": 13 },
  { "id": 8, "title": "Entrar em contato com esses pacientes da lista feita.", "owner": "Pessoa mais pr\xF3xima desse paciente.", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 13),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "A ideia agora \xE9 entrar em contato e convidar os pacientes a aparecerem no dia. Lembrando que quem vai vender sua cl\xEDnica s\xE3o esses pacientes. Importante n\xE3o contar o tempo que eles v\xE3o passar l\xE1.", "status": 0, "daysControl": 13 },
  { "id": 9, "title": "Pensar numa proposta irresist\xEDvel para o paciente.", "owner": "Avaliador/Dono da cl\xEDnica", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 13),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": `Algo que voc\xEA n\xE3o costuma fazer. Exemplos: "Entrada de 10%, com exce\xE7\xE3o de carga imediata"; "Carga imediata \xE9 30% de entrada"; "Algum desconto"; "2 anos de garantia"; "Desconto de 25% para quem pagar \xE0 vista"; "Dar brinde para fechamento";`, "status": 0, "daysControl": 13 },
  { "id": 10, "title": "Fazer o slide da apresenta\xE7\xE3o do Caixa r\xE1pido", "owner": "Avaliador/Dono da cl\xEDnica", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 13),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "[Escrever descri\xE7\xE3o assistindo \xE0 aula de caixa r\xE1pido da Sala Black]. A aula na qual explicamos isso \xE9 essa. Al\xE9m disso, o modelo que voc\xEA pode usar pode ser usado clicando aqui.", "status": 0, "daysControl": 13 },
  { "id": 11, "title": "Separar os v\xEDdeos que vai mostrar para o paciente.", "owner": "Avaliador/Dono da cl\xEDnica", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 10),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "Tarefa a ser dividida em outras.", "status": 0, "daysControl": 10 },
  { "id": 12, "title": "Fa\xE7a uma reuni\xE3o de mobiliza\xE7\xE3o de todos da cl\xEDnica e fale sobre o prop\xF3sito de sorrisso do evento e os v\xEDdeos que ser\xE3o usados. E explique como vai ser o dia. A rotina das avalia\xE7\xF5es e hor\xE1rios.", "owner": "Avaliador/Dono da cl\xEDnica", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 10),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "Reuni\xE3o para explicar, mobilizar e motivar todos da cl\xEDnica do evento que vai acontecer. Desde \xE0 faxineira ao cirurgi\xE3o dentista.", "status": 0, "daysControl": 10 },
  { "id": 13, "title": "Listar os nomes e n\xFAmeros de todos os leads da base que n\xE3o agendaram (mesmo os que falaram que n\xE3o queriam).", "owner": "", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 9),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "", "status": 0, "daysControl": 9 },
  { "id": 14, "title": "Listar os nomes e n\xFAmeros de todos os leads da base que faltaram e n\xE3o apareceram na cl\xEDnica.", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 9),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "Pr\xF3tese \xE9 adiar o problema l\xE1 pra frente. Ent\xE3o, talvez ele queira agora.", "status": 0, "daysControl": 9 },
  { "id": 15, "title": "Listar os nomes e n\xFAmeros de todos que fizeram pr\xF3tese (PPR e PT).", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 9),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "", "status": 0, "daysControl": 9 },
  { "id": 16, "title": "Listar os nomes e n\xFAmeros de todos que receberam proposta, mas n\xE3o fecharam.", "owner": "", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 9),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "", "status": 0, "daysControl": 9 },
  { "id": 17, "title": "Definir a vantagem que esses leads do follow up v\xE3o ter em rela\xE7\xE3o \xE0 proposta antiga que viram.", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 9),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "", "status": 0, "daysControl": 9 },
  { "id": 18, "title": "Criar o grupo vip de interessados no evento.", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 8),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "Importante deixar pelo menos 3 chips como administradores do grupo para se precaver de bloqueios.", "status": 0, "daysControl": 8 },
  { "id": 19, "title": "Criar o grupo vip de agendados para o evento.", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 8),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "Importante deixar pelo menos 3 chips como administradores do grupo para se precaver de bloqueios.", "status": 0, "daysControl": 8 },
  { "id": 20, "title": "Criar o grupo vip de comparecidos do evento.", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 8),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "Importante deixar pelo menos 3 chips como administradores do grupo para se precaver de bloqueios.", "status": 0, "daysControl": 8 },
  { "id": 21, "title": "Comprar bal\xF5es met\xE1licos para colocar com a logo do evento.", "owner": "Livre", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 7),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "\xC9 importante que por mais simples que seja o Caixa r\xE1pido na sua cl\xEDnica, seja um dia que tenha cara de evento mesmo. Se puder incluir a logo do evento, melhor ainda.", "status": 0, "daysControl": 7 },
  { "id": 22, "title": "Gravar v\xEDdeo scriptado convidando para o grupo de interessados no evento, enviar 1 a 1.", "owner": "Avaliador", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 6),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "Clique aqui para ver um exemplo desse v\xEDdeo.", "status": 0, "daysControl": 6 },
  { "id": 23, "title": "Conversar com sua equipe ou pessoas pr\xF3ximas para serem clientes ocultos nos grupos.", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 6),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "Procurar por pessoas que v\xE3o te elogiar, fazer perguntas estrat\xE9gicas e ajudar na conten\xE7\xE3o e na anima\xE7\xE3o do grupo. As pessoas s\xE3o movidas pelas outras. Ent\xE3o, nada mais justo.", "status": 0, "daysControl": 6 },
  { "id": 24, "title": "Criar link do grupo de interessados para ser enviado junto da mensagem.", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 6),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "Basta ir no whatsapp do grupo, depois em 'membros', depois 'convidar via link' e pegar esse link.", "status": 0, "daysControl": 6 },
  { "id": 25, "title": "Mandar v\xEDdeo scriptado convidando para o grupo de interessados no evento no 1 a 1. E enviar o texto com o link do grupo", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 5),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "Clique aqui para ver como enviar.", "status": 0, "daysControl": 5 },
  { "id": 26, "title": "Abrir o grupo das 18h \xE0s 19h para responder d\xFAvidas.", "owner": "", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 5),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "Aqui voc\xEA e a equipe v\xE3o respondendo as pessoas. \xC9 fundamental que tenham clientes ocultos.", "status": 0, "daysControl": 5 },
  { "id": 27, "title": "Gravar v\xEDdeo scriptado explicando como vai ser o evento apertando na escassez para ser enviado dentro do grupo de interessados convidando para agendarem.", "owner": "Avaliador", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 4),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "Fala da miss\xE3o, do prop\xF3sito, d\xE1 as boas vindas no grupo e fala como vai ser o grupo. Clique aqui para ver um exemplo desse v\xEDdeo.", "status": 0, "daysControl": 4 },
  { "id": 28, "title": "Mandar v\xEDdeo scriptado explicando como vai ser o evento dentro do grupo de interessados convidando para agendarem.", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 4),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "", "status": 0, "daysControl": 4 },
  { "id": 29, "title": "Gravar o v\xEDdeo 2 scriptado explicando como vai ser o evento apertando na escassez para ser enviado dentro do grupo de interessados convidando para agendarem.", "owner": "Avaliador", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 3),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "", "status": 0, "daysControl": 3 },
  { "id": 30, "title": "Mandar o v\xEDdeo 2 scriptado explicando como vai ser o evento dentro do grupo de interessados convidando para agendarem.", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 3),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "", "status": 0, "daysControl": 3 },
  { "id": 31, "title": "Come\xE7ar a mudar a foto de perfil do grupo para a porcentagem de vagas agendadas para aquele dia.", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 3),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "Pegue as imagens padr\xE3o de template clicando aqui.", "status": 0, "daysControl": 3 },
  { "id": 32, "title": "Remover as pessoas que forem agendando do grupo e mandando a mensagem de agradecimento.", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 3),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "", "status": 0, "daysControl": 3 },
  { "id": 33, "title": "Gravar v\xEDdeo falando que vai abrir o grupo dos interessados 12h para tirar d\xFAvidas", "owner": "Avaliador", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 2),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "", "status": 0, "daysControl": 2 },
  { "id": 34, "title": "Mandar v\xEDdeo falando que vai abrir o grupo dos interessados 12h para tirar d\xFAvidas", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 2),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "", "status": 0, "daysControl": 2 },
  { "id": 35, "title": "Abrir o grupo 12h para tirar d\xFAvidas dos interessados", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 2),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "", "status": 0, "daysControl": 2 },
  { "id": 36, "title": "Mudar o nome do grupo para '\xC9 AMANH\xC3'", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 1),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "", "status": 0, "daysControl": 1 },
  { "id": 37, "title": "Ligar para quem n\xE3o agendou seguindo o script.", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 1),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "O script para essa liga\xE7\xE3o pode ser acessado clicando aqui.", "status": 0, "daysControl": 1 },
  { "id": 38, "title": "Gravar o v\xEDdeo 1 scriptado dando boas vindas dentro do grupo de agendados.", "owner": "Avaliador", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 1),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "", "status": 0, "daysControl": 1 },
  { "id": 39, "title": "Mandar o v\xEDdeo 2 scriptado explicando como vai ser o evento dentro do grupo de interessados convidando para agendarem.", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 1),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "", "status": 0, "daysControl": 1 },
  { "id": 40, "title": "Gravar um v\xEDdeo ou preparar uma imagem mostrando os preparativos do evento para ser enviado nos grupos.", "owner": "Avaliador/CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 1),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "Mostrar os enfeites, os bal\xF5es na recep\xE7\xE3o, os preparativos. Se quiser um exemplo, \xE9 s\xF3 clicar aqui.", "status": 0, "daysControl": 1 },
  { "id": 41, "title": "Mandar imagem ou v\xEDdeo mostrando os preparativos do evento no grupo de interessados.", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 1),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "", "status": 0, "daysControl": 1 },
  { "id": 42, "title": "Mandar imagem ou v\xEDdeo mostrando os preparativos do evento no grupo de agendados.", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 1),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "", "status": 0, "daysControl": 1 },
  { "id": 43, "title": "Sempre que um paciente fechar contrato, enviar foto l\xE1 dentro do grupo.", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 0),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "Clique aqui para ver o modelo de mensagem que enviamos.", "status": 0, "daysControl": 0 },
  { "id": 44, "title": "Sempre que um paciente fechar contrato, comemorar e parabenizar na frente de todos os outros.", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 0),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "", "status": 0, "daysControl": 0 },
  { "id": 45, "title": "Gravar v\xEDdeo falando que surgiu 3 vagas convidando para agendar no grupo de interessados.", "owner": "Avaliador", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 0),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "", "status": 0, "daysControl": 0 },
  { "id": 46, "title": "Mandar v\xEDdeo falando que surgiu 3 vagas convidando para agendar no grupo de interessados.", "owner": "CRC", "dueDate": (0, import_date_fns.format)(
    (0, import_date_fns.addDays)(/* @__PURE__ */ new Date(), 0),
    "yyyy-MM-dd'T'HH:mm:ss'Z'"
  ), "description": "", "status": 0, "daysControl": 0 }
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DATA
});
