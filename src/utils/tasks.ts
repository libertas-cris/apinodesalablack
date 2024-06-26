import { addDays, format } from "date-fns";


export const DATA = [
  {"id": 1, "title": "Definir a data do evento", "owner": "Avaliador/Dono da clínica", "dueDate": format(addDays(new Date(), 14),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "De preferência até o dia 20 daquele mês.", "status": 0, "daysControl": 14},
  {"id": 2, "title": "Definir horários de atendimento por hora para os futuros agendamentos.","owner": "Avaliador/Dono da clínica", "dueDate": format(addDays(new Date(), 14),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "Exemplo.: Considere 10 pacientes por horário ou quantos couberem na sua sala. 8:00; 9:00; 10:00;", "status": 0, "daysControl": 14},
  {"id": 3, "title": "Definir o motivo central que dá razão ao evento.","owner": "Avaliador/Dono da clínica", "dueDate": format(addDays(new Date(), 14),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "É o motivo pelo qual você falará que vai fazer o evento. Alguns exemplos são: '10 anos de clínica', 'Falei com um fornecedor e ele me deu desconto nisso e aquilo.' ", "status": 0, "daysControl": 14},
  {"id": 4, "title": "Definir o nome do evento.","owner": "Avaliador/Dono da clínica", "dueDate": format(addDays(new Date(), 14),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "Alguns exemplos: Plantão de Implantes; Botox Day; Invisalign Experience)", "status": 0, "daysControl": 14},
  {"id": 5, "title": "Encomendar o coquetel com comes e bebes.","owner": "Livre", "dueDate": format(addDays(new Date(), 14),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "Mesa com bolo, sucos, salgados para todos que estiverem nos dias do evento.", "status": 0, "daysControl": 14},
  {"id": 6, "title": "Fazer uma lista de pacientes que tiveram resultados e poderiam aparecer para conversar com os futuros pacientes.","owner": "Avaliador/Dono da clínica", "dueDate": format(addDays(new Date(), 13),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "Uma parte fundamental do Caixa rápido é que tenham pacientes lá no dia do evento. Então, é importante buscar e garantir que ele vai estar lá com antecedência é fundamental.", "status": 0, "daysControl": 14},
  {"id": 7, "title": "Definir brindes para os pacientes que comparecerem e para os que fecharem o tratamento.","owner": "Avaliador/Dono da clínica", "dueDate": format(addDays(new Date(), 13),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "Para que os pacientes tenham um estímulo a mais a aceitarem, é importante pensar em bons brindes para eles. Alguns exemplos são: Kit da Natura; Kit da Boticário;", "status": 0, "daysControl": 13},
  {"id": 8, "title": "Entrar em contato com esses pacientes da lista feita.","owner": "Pessoa mais próxima desse paciente.", "dueDate": format(addDays(new Date(), 13),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "A ideia agora é entrar em contato e convidar os pacientes a aparecerem no dia. Lembrando que quem vai vender sua clínica são esses pacientes. Importante não contar o tempo que eles vão passar lá.", "status": 0, "daysControl": 13},
  {"id": 9, "title": "Pensar numa proposta irresistível para o paciente.","owner": "Avaliador/Dono da clínica", "dueDate": format(addDays(new Date(), 13),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": `Algo que você não costuma fazer. Exemplos: "Entrada de 10%, com exceção de carga imediata"; "Carga imediata é 30% de entrada"; "Algum desconto"; "2 anos de garantia"; "Desconto de 25% para quem pagar à vista"; "Dar brinde para fechamento";`, "status": 0, "daysControl": 13},
  {"id": 10, "title": "Fazer o slide da apresentação do Caixa rápido","owner": "Avaliador/Dono da clínica", "dueDate": format(addDays(new Date(), 13),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "[Escrever descrição assistindo à aula de caixa rápido da Sala Black]. A aula na qual explicamos isso é essa. Além disso, o modelo que você pode usar pode ser usado clicando aqui.", "status": 0, "daysControl": 13},
  {"id": 11, "title": "Separar os vídeos que vai mostrar para o paciente.","owner": "Avaliador/Dono da clínica", "dueDate": format(addDays(new Date(), 10),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "Tarefa a ser dividida em outras.", "status": 0, "daysControl": 10},
  {"id": 12, "title": "Faça uma reunião de mobilização de todos da clínica e fale sobre o propósito de sorrisso do evento e os vídeos que serão usados. E explique como vai ser o dia. A rotina das avaliações e horários.","owner": "Avaliador/Dono da clínica", "dueDate": format(addDays(new Date(), 10),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "Reunião para explicar, mobilizar e motivar todos da clínica do evento que vai acontecer. Desde à faxineira ao cirurgião dentista.", "status": 0, "daysControl": 10},
  {"id": 13, "title": "Listar os nomes e números de todos os leads da base que não agendaram (mesmo os que falaram que não queriam).","owner": "", "dueDate": format(addDays(new Date(), 9),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "", "status": 0, "daysControl": 9},
  {"id": 14, "title": "Listar os nomes e números de todos os leads da base que faltaram e não apareceram na clínica.","owner": "CRC", "dueDate": format(addDays(new Date(), 9),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "Prótese é adiar o problema lá pra frente. Então, talvez ele queira agora.", "status": 0, "daysControl": 9},
  {"id": 15, "title": "Listar os nomes e números de todos que fizeram prótese (PPR e PT).","owner": "CRC", "dueDate": format(addDays(new Date(), 9),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "", "status": 0, "daysControl": 9},
  {"id": 16, "title": "Listar os nomes e números de todos que receberam proposta, mas não fecharam.","owner": "", "dueDate": format(addDays(new Date(), 9),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "", "status": 0, "daysControl": 9},
  {"id": 17, "title": "Definir a vantagem que esses leads do follow up vão ter em relação à proposta antiga que viram.","owner": "CRC", "dueDate": format(addDays(new Date(), 9),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "", "status": 0, "daysControl": 9},
  {"id": 18, "title": "Criar o grupo vip de interessados no evento.","owner": "CRC", "dueDate": format(addDays(new Date(), 8),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "Importante deixar pelo menos 3 chips como administradores do grupo para se precaver de bloqueios.", "status": 0, "daysControl": 8},
  {"id": 19, "title": "Criar o grupo vip de agendados para o evento.","owner": "CRC", "dueDate": format(addDays(new Date(), 8),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "Importante deixar pelo menos 3 chips como administradores do grupo para se precaver de bloqueios.", "status": 0, "daysControl": 8},
  {"id": 20, "title": "Criar o grupo vip de comparecidos do evento.","owner": "CRC", "dueDate": format(addDays(new Date(), 8),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "Importante deixar pelo menos 3 chips como administradores do grupo para se precaver de bloqueios.", "status": 0, "daysControl": 8},
  {"id": 21, "title": "Comprar balões metálicos para colocar com a logo do evento.","owner": "Livre", "dueDate": format(addDays(new Date(), 7),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "É importante que por mais simples que seja o Caixa rápido na sua clínica, seja um dia que tenha cara de evento mesmo. Se puder incluir a logo do evento, melhor ainda.", "status": 0, "daysControl": 7},
  {"id": 22, "title": "Gravar vídeo scriptado convidando para o grupo de interessados no evento, enviar 1 a 1.","owner": "Avaliador", "dueDate": format(addDays(new Date(), 6),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "Clique aqui para ver um exemplo desse vídeo.", "status": 0, "daysControl": 6},
  {"id": 23, "title": "Conversar com sua equipe ou pessoas próximas para serem clientes ocultos nos grupos.","owner": "CRC", "dueDate": format(addDays(new Date(), 6),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "Procurar por pessoas que vão te elogiar, fazer perguntas estratégicas e ajudar na contenção e na animação do grupo. As pessoas são movidas pelas outras. Então, nada mais justo.", "status": 0, "daysControl": 6},
  {"id": 24, "title": "Criar link do grupo de interessados para ser enviado junto da mensagem.","owner": "CRC", "dueDate": format(addDays(new Date(), 6),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "Basta ir no whatsapp do grupo, depois em 'membros', depois 'convidar via link' e pegar esse link.", "status": 0, "daysControl": 6},
  {"id": 25, "title": "Mandar vídeo scriptado convidando para o grupo de interessados no evento no 1 a 1. E enviar o texto com o link do grupo","owner": "CRC", "dueDate": format(addDays(new Date(), 5),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "Clique aqui para ver como enviar.", "status": 0, "daysControl": 5},
  {"id": 26, "title": "Abrir o grupo das 18h às 19h para responder dúvidas.","owner": "", "dueDate": format(addDays(new Date(), 5),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "Aqui você e a equipe vão respondendo as pessoas. É fundamental que tenham clientes ocultos.", "status": 0, "daysControl": 5},
  {"id": 27, "title": "Gravar vídeo scriptado explicando como vai ser o evento apertando na escassez para ser enviado dentro do grupo de interessados convidando para agendarem.","owner": "Avaliador", "dueDate": format(addDays(new Date(), 4),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "Fala da missão, do propósito, dá as boas vindas no grupo e fala como vai ser o grupo. Clique aqui para ver um exemplo desse vídeo.", "status": 0, "daysControl": 4},
  {"id": 28, "title": "Mandar vídeo scriptado explicando como vai ser o evento dentro do grupo de interessados convidando para agendarem.","owner": "CRC", "dueDate": format(addDays(new Date(), 4),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "", "status": 0, "daysControl": 4},
  {"id": 29, "title": "Gravar o vídeo 2 scriptado explicando como vai ser o evento apertando na escassez para ser enviado dentro do grupo de interessados convidando para agendarem.","owner": "Avaliador", "dueDate": format(addDays(new Date(), 3),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "", "status": 0, "daysControl": 3},
  {"id": 30, "title": "Mandar o vídeo 2 scriptado explicando como vai ser o evento dentro do grupo de interessados convidando para agendarem.","owner": "CRC", "dueDate": format(addDays(new Date(), 3),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "", "status": 0, "daysControl": 3},
  {"id": 31, "title": "Começar a mudar a foto de perfil do grupo para a porcentagem de vagas agendadas para aquele dia.","owner": "CRC", "dueDate": format(addDays(new Date(), 3),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "Pegue as imagens padrão de template clicando aqui.", "status": 0, "daysControl": 3},
  {"id": 32, "title": "Remover as pessoas que forem agendando do grupo e mandando a mensagem de agradecimento.","owner": "CRC", "dueDate": format(addDays(new Date(), 3),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "", "status": 0, "daysControl": 3},
  {"id": 33, "title": "Gravar vídeo falando que vai abrir o grupo dos interessados 12h para tirar dúvidas","owner": "Avaliador", "dueDate": format(addDays(new Date(), 2),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "", "status": 0, "daysControl": 2},
  {"id": 34, "title": "Mandar vídeo falando que vai abrir o grupo dos interessados 12h para tirar dúvidas","owner": "CRC", "dueDate": format(addDays(new Date(), 2),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "", "status": 0, "daysControl": 2},
  {"id": 35, "title": "Abrir o grupo 12h para tirar dúvidas dos interessados","owner": "CRC", "dueDate": format(addDays(new Date(), 2),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "", "status": 0, "daysControl": 2},
  {"id": 36, "title": "Mudar o nome do grupo para 'É AMANHÃ'","owner": "CRC", "dueDate": format(addDays(new Date(), 1),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "", "status": 0, "daysControl": 1},
  {"id": 37, "title": "Ligar para quem não agendou seguindo o script.","owner": "CRC", "dueDate": format(addDays(new Date(), 1),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "O script para essa ligação pode ser acessado clicando aqui.", "status": 0, "daysControl": 1},
  {"id": 38, "title": "Gravar o vídeo 1 scriptado dando boas vindas dentro do grupo de agendados.","owner": "Avaliador", "dueDate": format(addDays(new Date(), 1),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "", "status": 0, "daysControl": 1},
  {"id": 39, "title": "Mandar o vídeo 2 scriptado explicando como vai ser o evento dentro do grupo de interessados convidando para agendarem.","owner": "CRC", "dueDate": format(addDays(new Date(), 1),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "", "status": 0, "daysControl": 1},
  {"id": 40, "title": "Gravar um vídeo ou preparar uma imagem mostrando os preparativos do evento para ser enviado nos grupos.","owner": "Avaliador/CRC", "dueDate": format(addDays(new Date(), 1),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "Mostrar os enfeites, os balões na recepção, os preparativos. Se quiser um exemplo, é só clicar aqui.", "status": 0, "daysControl": 1},
  {"id": 41, "title": "Mandar imagem ou vídeo mostrando os preparativos do evento no grupo de interessados.","owner": "CRC", "dueDate": format(addDays(new Date(), 1),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "", "status": 0, "daysControl": 1},
  {"id": 42, "title": "Mandar imagem ou vídeo mostrando os preparativos do evento no grupo de agendados.","owner": "CRC", "dueDate": format(addDays(new Date(), 1),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "", "status": 0, "daysControl": 1},
  {"id": 43, "title": "Sempre que um paciente fechar contrato, enviar foto lá dentro do grupo.","owner": "CRC", "dueDate": format(addDays(new Date(), 0),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "Clique aqui para ver o modelo de mensagem que enviamos.", "status": 0, "daysControl": 0},
  {"id": 44, "title": "Sempre que um paciente fechar contrato, comemorar e parabenizar na frente de todos os outros.","owner": "CRC", "dueDate": format(addDays(new Date(), 0),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "", "status": 0, "daysControl": 0},
  {"id": 45, "title": "Gravar vídeo falando que surgiu 3 vagas convidando para agendar no grupo de interessados.","owner": "Avaliador", "dueDate": format(addDays(new Date(), 0),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "", "status": 0, "daysControl": 0},
  {"id": 46, "title": "Mandar vídeo falando que surgiu 3 vagas convidando para agendar no grupo de interessados.","owner": "CRC", "dueDate": format(addDays(new Date(), 0),"yyyy-MM-dd'T'HH:mm:ss'Z'"
), "description": "", "status": 0, "daysControl": 0},
]
