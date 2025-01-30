# Projeto de Reserva de Carros Online

## Visão Geral do Projeto

Este projeto tem como objetivo oferecer uma plataforma online onde os usuários podem reservar carros de forma prática e segura. Foi desenvolvido com tecnologias modernas para garantir uma experiência rápida, confiável e intuitiva.

### Principais Tecnologias
- **Next.js**: Para renderização no lado do servidor e construção de uma aplicação React escalável.
- **TypeScript**: Proporciona tipagem estática, garantindo melhor qualidade e experiência de desenvolvimento.
- **Zod**: Para validação de esquemas, assegurando a integridade dos dados dos formulários.
- **React Hook Form**: Para gerenciar o estado e a validação dos formulários de forma eficiente.

## Protótipo
![prototipo-main](https://github.com/user-attachments/assets/431cd239-865b-4327-9d3d-71a6a1ac9d85)


## Começando

Primeiro, clone o repositório:

```bash
git clone https://github.com/your-repo/car-reservation.git
cd car-reservation
```

Em seguida, instale as dependências:

```bash
npm install
# ou
yarn install
# ou
pnpm install
# ou
bun install
```

Agora, inicie o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Estrutura de Arquivos
```
/car-reservation
├── app
│   ├── page.tsx          # Ponto de entrada principal da aplicação
│   └── components        # Componentes reutilizáveis de UI
├── styles                # Estilos globais e específicos de componentes
├── types                 # Tipos e interfaces TypeScript
├── utils                 # Funções utilitárias e helpers
├── validations           # Esquemas Zod para validação de formulários
└── README.md             # Documentação do projeto
```

## Uso

Esta plataforma permite que os usuários reservem carros online, selecionando modelos e períodos de tempo específicos. As submissões dos formulários são validadas usando **Zod**, e o **React Hook Form** gerencia o estado dos formulários, garantindo uma experiência fluida para o usuário.


