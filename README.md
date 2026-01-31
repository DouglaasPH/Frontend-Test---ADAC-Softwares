# Landing Page

Este projeto foi desenvolvido com o objetivo de implementar uma landing page a partir de um design fornecido no Figma, seguindo fielmente o layout e as diretrizes visuais apresentadas.

Durante o desenvolvimento, foram aplicados conceitos fundamentais de frontend, incluindo a transformação de designs em código funcional, a organização de componentes, a adoção de boas práticas de desenvolvimento e a criação de uma interface totalmente responsiva. Além disso, o projeto foi devidamente documentado, garantindo clareza no processo de setup, build e execução da aplicação.

<br>

Design: https://www.figma.com/design/ZPNUmaiz9mBy3vdKDQUass/Figma-startup-landing-page-dark--Community-?node-id=0-3517&t=IcLMAHcBHtFiKVsF-1

<br>
Acesse o projeto em produção: https://[seu-projeto].vercel.app

<br>

## Tecnologias Utilizadas

- TypeScript
- React
- Vite
- Tailwind CSS
- Framer Motion
- Node.js

<br>

## Funcionalidades

- [x] Layout totalmente responsivo
- [x] Menu mobile animado
- [x] Animações ao scroll
- [x] Animações de hover em botões
- [x] Deploy na Vercel

<br>

## Estrutura do Projeto

```
Frontend-Test---ADAC-Softwares/
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
│
├── font --> Arquivos para fonte
├── public
└── src
    │   index.css
    │   main.tsx
    │
    ├── assets
    │   ├── contents
    │   │   ├── contents-macbook-pro.png
    │   │   └── contents-screen.png
    │   │
    │   ├── cta
    │   │   └── cta-thumbnail.jpg
    │   │
    │   ├── features
    │   │   ├── features-image-1.png
    │   │   ├── features-image-2.png
    │   │   ├── features-vector-1.svg
    │   │   ├── features-vector-2.svg
    │   │   └── features-vector-3.svg
    │   │
    │   ├── footer
    │   │   ├── footer-icon-cell.svg
    │   │   ├── footer-icon-facebook.svg
    │   │   ├── footer-icon-linkedin.svg
    │   │   ├── footer-icon-location.svg
    │   │   └── footer-icon-twitter.svg
    │   │
    │   ├── gallery
    │   │   ├── gallery-image-1.jpg
    │   │   ├── gallery-image-2.jpg
    │   │   ├── gallery-image-3.jpg
    │   │   ├── gallery-image-4.jpg
    │   │   ├── gallery-image-5.jpg
    │   │   ├── gallery-image-6.jpg
    │   │   └── gallery-image-7.jpg
    │   │
    │   ├── hero
    │   │   └── hero-image.png
    │   │
    │   ├── navbar
    │   │   ├── hamburguer.svg
    │   │   └── logo.svg
    │   │
    │   ├── partners
    │   │   ├── partners-icon-1.svg
    │   │   ├── partners-icon-2.svg
    │   │   ├── partners-icon-3.svg
    │   │   ├── partners-icon-4.svg
    │   │   ├── partners-icon-5.svg
    │   │   └── partners-icon-6.svg
    │   │
    │   └── testimonials
    │       ├── testimonials-claire-bell.png
    │       ├── testimonials-francisco-lane.png
    │       ├── testimonials-jorge-murphy.png
    │       └── testimonials-ralph-fisher.png
    │
    └── components
        ├── Contents.tsx
        ├── Cta.tsx
        ├── Features.tsx
        ├── Footer.tsx
        ├── Gallery.tsx
        ├── Hero.tsx
        ├── Navbar.tsx
        ├── Partners.tsx
        └── Testimonials.tsx
```

<br>

## Como rodar o projeto localmente?

Primeiro, instale este repositório em sua máquina. Depois, você deve rodar os seguintes comandos:

```bash
npm install
```

```bash
npm run dev
```
