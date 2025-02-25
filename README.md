# 📌 HogMeds – Sistema de Controle de Medicamentos
A Magical Solution for Health Management at Hogwarts

## Tecnologias:

<b>Backend</b>: Node.js com NestJS e TypeScript <br>
<b>Banco de Dados</b>: MongoDB (com abstração para futura migração para MySQL)<br>
<b>Autenticação</b>: JWT<br>
<b>Testes</b>: Vitest<br>
<b>Docker e GitHub</b> para versionamento e deploy<br>

## 🎯 Funcionalidades Principais:

✅ <b>CRUD de Pacientes e Medicamentos</b>: Gerenciamento completo de pacientes e seus respectivos tratamentos.<br>
✅ <b>Registro de Administração de Medicamentos</b>: Log das doses administradas pelos enfermeiros.<br>
✅ <b>Notificações e Alertas</b>: Lembretes automáticos para administração de medicamentos.<br>
✅ <b>Controle de Acesso</b>: Diferentes níveis de acesso (admin, enfermeiro, estudante).<br>
✅ <b>Testes Unitários e de Integração</b>: Para garantir confiabilidade.<br>
✅ <b>Worker para Geração de Relatórios</b>: Relatórios periódicos sobre consumo de medicamentos e pacientes tratados.<br>

## 📌 Arquitetura e Boas Práticas:

- Princípios SOLID aplicados (abstração, separação de responsabilidades, injeção de dependências)<br>
- Camada de abstração para banco de dados (evitando dependência do MongoDB)<br>
- Repositórios para encapsular operações no banco<br>
- Código modular e escalável<br>
