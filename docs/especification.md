# Especificações do Projeto

A aplicação web tem o intuito de facilitar a vida tanto do cliente quanto do dono de um petshop, fazendo que o atendimento online maximize a produtividade de tempo para eles. Para entender melhor a perspectiva do usuário, será utilizado o método das personas, que é a representação fictícia do cliente ideal. Ela é baseada em dados reais sobre comportamento e características demográficas dos clientes. Também serão contadas as histórias pessoais dos usuários,com suas motivações, objetivos, desafios e preocupações. Diante dessas informações será feito o levantamento de requisitos funcionais, que correspondem a uma funcionalidade que deve estar presente na aplicação, e requisitos não funcionais, que  correspondem a uma característica técnica, seja de usabilidade, desempenho, confiabilidade, segurança e outros mais. E por fim, as restrições do projeto, que nada mais são as regras que devem ser seguidas para desenvolver a aplicação.

## Personas
Matheus Magalhães tem 23 anos e tem seu próprio negócio, é dono de sua própria padaria, ele pensa muito em desenvolver mais o seu projeto e na maioria do tempo quando não está trabalhando está em casa sozinho jogando seu videogame, ele é  independente e arca com maioria dos seus problemas, e muitas vezes por seguir a vida dessa maneira ele se sente muito sozinho e por isso ele decidiu ter um cachorro de estimação, ele é uma pessoa muito protetora e apegado com tudo, por isso é um dos nossos primeiros clientes, houve uma identificação enorme com o nosso trabalho pois proporcionamos uma proximidade maior do cliente com o seu pet.

Ludmilla Rodrigues tem 17 anos, está no terceiro ano do ensino médio e irá prestar vestibular no ano atual. Por conta da pressão e por estar estudando o dia inteiro, resolveu adotar um gato, que sempre foi sua paixão, para que pudesse lhe distrair a cabeça. Entretanto, por não ter clínicas veterinárias perto de sua casa, ela procura uma plataforma confiável que a auxilie a encontrar bons médicos veterinários para cuidar de seu animalzinho. 

Júlia Santos tem 35 anos, é uma mulher solteira, sem filhos e de classe média e adotou um gato há 10 anos, quando saiu da casa de seus pais. Foi promovida a um cargo maior na empresa em que trabalha, e com isso, novas responsabilidades surgiram, fazendo com que ela tivesse menos tempo para dedicar ao seu pet. Contudo, por seu gatinho ser mais velho, começou a apresentar problemas de saúde, e que, por conta do cotidiano agitado de sua dona, não foram percebidos imediatamente. Ao perceber do comportamento estranho de seu bichinho, Júlia imediatamente procurou ajuda de um médico veterinário, em que tivesse a facilidade e praticidade de poder marcar uma consulta sem precisar ligar ou mandar mensagem, podendo consultar os dias e horários disponíveis sem burocracia, de modo que sua única preocupação fosse em comparecer no dia marcado. 

Cristiano Aveiro tem 45 anos é um ex-futebolista e também é casado, possui 4 filhos e 5 cachorros, sempre foi uma pessoa bem focada e sempre teve grande vocação para tudo que fez, por isso teve uma grande carreira na área do futebol, agora depois de tudo o que passou na área de futebol e toda sua carreira e em sua própria vida, ele procura sempre estar mais em sua zona de conforto e sempre busca facilitar mais as coisas, então por possuir uma família bem grande e grande quantidade de cachorros nosso trabalho o ajudou muito e facilitou muito a sua vida em questão sobre o cuidado com os seus pets.

Helena Freire tem 54 anos é casada, tem um filho já maior de idade, esse seu filho sempre quis ter um irmãozinho, mas infelizmente ela não pode lhe dar, então com o tempo ela decidiu adotar um cachorro para seu filho, como ela é uma mulher que trabalha muito e sempre viaja para vários lugares o nosso trabalho lhe ajuda a cuidar melhor do pet do seu filho e ficar menos preocupada e desta maneira pode dar mais prioridade ainda ao trabalho com essa preocupação a menos. 

José Afonso tem 76 anos, é viúvo e possui 3 filhos já independentes. Por morar sozinho e seus filhos não poderem estar presentes diariamente com ele, decidiram presenteá-lo com um cachorro para que José ficasse menos solitário. Porém, por ele não ser tão independente, precisa de ajuda em tarefas como levar o animal para vacinar, ou para fazer consultas de rotina. Dessa forma, seus filhos procuraram uma resolução prática e ágil, de forma que pudessem resolver tudo seguramente via internet, tendo boas opções de profissionais disponíveis e precisassem apenas ajudar apenas no traslado de ida e volta para o veterinário.


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Usuário do sistema  | Registrar minhas tarefas           | Não esquecer de fazê-las               |
|Administrador       | Alterar permissões                 | Permitir que possam administrar contas |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA |  |
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA | |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
