# WhatsApp Batch Sender

> [!CAUTION]
> Utilizar esse código com listas muito grandes pode fazer com que seu número seja bloqueado pela Meta. Utilize apenas para testes simples, ou considere usar um delay randomico grande entre as mensagens. A regra pra não ser bloqueado é muito incógnita. Qualquer uso é responsabilidade exclusiva do desenvolvedor. You have been warned.

O projeto **WhatsApp Batch Sender** é uma ferramenta que permite o envio de mensagens em massa para contatos individuais no WhatsApp, sem a necessidade de criar grupos ou listas de transmissão.

## Funcionalidades

- Envio de mensagens em lote para contatos específicos.
- Possibilidade de personalizar a mensagem enviada.
- Leitura de contatos a partir de um arquivo CSV.

## Pré-requisitos

- Node.js instalado em sua máquina.

## Instalação

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/matemora/whatsapp-batch-sender.git
   cd whatsapp-batch-sender
   ```

2. **Instalar as dependências:**

   ```bash
   npm install
   ```

## Preparação dos Contatos

1. **Criar um arquivo CSV:**

   Crie um arquivo chamado `contacts.csv` na raiz do projeto com duas colunas: `name` e `number`.

   Exemplo:

   ```csv
   name,number
   João,+5511999999999
   Maria,+5511888888888
   ```

   *Observação:* Os números de telefone podem conter caracteres especiais como `+`, `-`, `(` ou `)`. O script possui uma expressão regular que extrai apenas os dígitos necessários.

2. **Personalizar a mensagem:**

   No arquivo `index.js`, localize a variável que contém a mensagem que será enviada e ajuste conforme necessário.

## Uso

1. **Executar o projeto:**

   ```bash
   npm start
   ```

2. **Conectar ao WhatsApp:**

   Após iniciar o script, um QR code será gerado no terminal. Escaneie-o com o aplicativo do WhatsApp no seu smartphone para estabelecer a conexão.

3. **Envio das mensagens:**

   O script enviará automaticamente a mensagem personalizada para cada contato listado no arquivo `contacts.csv`.

## Considerações Finais

- **Segurança:** Após concluir o envio das mensagens, é recomendável invalidar a sessão do WhatsApp para garantir a segurança da sua conta. Evite manter conexões abertas, especialmente em ambientes não seguros.

- **Funcionalidades Adicionais:** A biblioteca utilizada permite, além do envio de mensagens, a escuta de respostas dos contatos, possibilitando a implementação de lógicas adicionais conforme suas necessidades.

*Observação:* Este projeto é destinado ao uso pessoal e educativo. Certifique-se de utilizar a ferramenta de acordo com os termos de serviço do WhatsApp e respeite a privacidade dos seus contatos.
