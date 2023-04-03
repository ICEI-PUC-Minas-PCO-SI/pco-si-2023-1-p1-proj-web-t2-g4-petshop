# Especificações do Projeto

A aplicação web ira facilitar a vida tanto do cliente quanto do dono de um petshop, fazendo que o atendimento online maximize a produtividade de tempo para eles. Para entender melhor a perspectiva do usuário, será utilizado o método das personas, que é a representação fictícia do cliente ideal. Ela é baseada em dados reais sobre comportamento e características demográficas dos clientes. Também serão contadas as histórias pessoais dos usuários,com suas motivações, objetivos, desafios e preocupações. Diante dessas informações será feito o levantamento de requisitos funcionais, que correspondem a uma funcionalidade que deve estar presente na aplicação, e requisitos não funcionais, que  correspondem a uma característica técnica, seja de usabilidade, desempenho, confiabilidade, segurança e outros mais. E por fim, as restrições do projeto, que nada mais são as regras que devem ser seguidas para desenvolver a aplicação.

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
|Tutor De Pets/usuario | Ser capaz de registrar meus pets e consultar serviços e disponibilidade dos mesmos. | Agilidade, simplicidade, eficiência. |
|Dono Do Dog&Cats/administrador | Ser capaz de gerenciar os clientes. | Organização e Controle de clientes. |
|Tutor De Pets/usuario | Consumir serviços e conctatar a empresa. | Agilidade, simplicidade, eficiência. |
|Dono Do Dog&Cats/administrador |Controlar o estoque de produtos para garantir que sempre haja itens disponíveis para execução dos trabalhos oferecido aos clientes. | Organização e controle maior sobre o estoque. |
|Veterinário/Clinica | Ter controle maior de suas consultas e marcações. | Agilidade e organização. |
|Tutor De Pets/usuario | Ter acesso a clinicas confiaveis. | Segurança e Praticidade. |
|Dono Do Dog&Cats/administrador | Cadastrar sua empresa e serviços. |Visibilidade e maior numero de clientes. |
## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| O sistema deve permitir o  cadastro de produtos | ALTA | João Vitor Vitalino da Silva Roveda |
|RF-002| O sistema deve permitir o cadastro de pessoas  | ALTA | Carolina Alves Baião Pessoa |
|RF-003| O sistema deve permitir o agendamento de serviço | ALTA | Guilherme Souto Borges da Costa |
|RF-004| O sistema deve permitir o gerenciamento de perfis | MÉDIA | Arthur Magalhães Fonseca |
|RF-005| O sistema deve permitir o registro de serviço | ALTA | Erick Fabrício Rodrigues Ribeiro |
|RF-006| O sistema deve permitir o acesso e controle do estoque | MÉDIA | Gabriel Leandro Emerick de Azevedo |
|RF-007| O sistema deve permitir o cadastro dos pets | ALTA | Gabriel Henrique de Jesus Paiva |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| O sistema deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| O sistema deve ser confiavel para que os clientes possam dar exclusividade no nossa empresa | MEDIA |
|RNF-004| O sistema deve ter segurança em qualquer aplicação que o cliente for utilizar  | ALTA |
|RNF-005| O sistema deve ter disponibilidade que é excepcional para qualquer duvida do cliente | ALTA |
|RNF-006| O sistema deve estar sempre em otimo funcionamento livre de erros | ALTA |



## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre.|
|02| Não pode ser desenvolvido um módulo de backend.|
|03| Prioridade dos requisitos. Os requisitos RF-001, RF-002, RF-003, RF-005 e RF-007 possuem prioridade alta, enquanto RF-004 e RF-006 possuem prioridade média.|
|04| Responsabilidade pelos requisitos. Cada requisito possui um responsável designado para sua implementação. Caso o responsável não possa cumprir com sua responsabilidade, será necessário realocar o requisito para outro membro da equipe.|
|05| Requisitos não funcionais. Os requisitos RNF-001 e RNF-002 apresentam restrições específicas relacionadas ao desempenho e à compatibilidade do sistema.
|06| Problemas de conexão com o banco de dados.|
|07| Falhas no processamento de pagamentos.|
|08| Problemas de escalabilidade do sistema.|
|09| Dificuldade de integração com sistemas externos.|
|10| Incompatibilidade com determinados dispositivos e navegadores.|
|11| Problemas de segurança.|
|12| Problemas de desempenho.|

## Diagrama de caso de uso
![diagrama drawio](https://user-images.githubusercontent.com/110940580/229305474-2664fa99-9d63-4af4-b993-73e3866fab71.png)
