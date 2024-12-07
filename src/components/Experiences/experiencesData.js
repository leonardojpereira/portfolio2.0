import AgenciaTupiniquimImage from "../../assets/images/logo-agencia-tupiniquim.png";
import MgrImage from '../../assets/images/logo-mgr.svg';
import TKimage from '../../assets/images/TimeKeeping-img.jpg';
import BrasilExportImage from '../../assets/images/brasil_export_logo.jpg';
import ObraLeanImage from '../../assets/images/obra_lean_logo.jpg';
import WilsonSonsImage from '../../assets/images/wilson_sons_logo.png';
import ConcaisImage from '../../assets/images/concais-logo.svg';


export const experiences = [
  {
    logo: MgrImage,
    title: 'ModalGR',
    period: 'Janeiro de 2024 - Atual',
    description: 'Desenvolvedor Front-End/Mobile', 
    projects: [
      {
        name: 'Concais S.A | Front-End Developer',
        projectPeriod: 'Ago de 2024 - Atual',
        description: 'No projeto da Concais, atuei como desenvolvedor front-end, sendo responsável pelo desenvolvimento de todas as telas do sistema de gerenciamento de convidados. Minha principal tarefa foi garantir a integração das rotas do backend, assegurando a comunicação eficiente entre o front-end e a API. O sistema gerencia a entrada e saída de convidados dos navios atracados, proporcionando uma interface amigável e funcional para o usuário.',
        image: ConcaisImage,
        tecnologies: ['Angular' , 'TypeScript', 'HTML', 'CSS', 'Git', 'Azure DevOps']
      },
      {
        name: 'Wilson Sons | Mobile Developer',
        projectPeriod: 'Jul de 2024 - Ago 2024',
        description: 'Responsável por integrar APIs para exibição dinâmica de dados, criar componentes reutilizáveis e modulares, implementar funcionalidades interativas e garantir que as telas sejam responsivas.',
        image: WilsonSonsImage,
        tecnologies: ['Flutter', 'Android Studio', 'Git', 'Azure DevOps']
      },
      {
        name: 'Obra Lean | Front-End Developer',
        projectPeriod: 'Jun de 2024 - Ago 2024',
        description: 'O sistema Obra Lean é uma plataforma de gerenciamento de obras que oferece uma visão clara e detalhada do progresso de cada projeto, permitindo uma administração mais eficiente e informada dos recursos e das tarefas dentro da organização. Utilizei o React para desenvolver novos módulos e telas.',
        image: ObraLeanImage,
        tecnologies: ['React' , 'TypeScript', 'Styled-Components', '.NET', 'Git', 'Azure DevOps']
      },
      {
        name: 'TimeKeeping | Front-End Developer',
        projectPeriod: 'Abr de 2024 - Ago 2024',
        description: 'Versão Mobile do TimeKeeping, desenvolvida em Flutter, para facilitar a gestão do tempo e proporcionar uma visão clara e detalhada das alocações de horas, permitindo uma administração mais precisa e informada dos recursos e das tarefas dentro da organização.',
        image: TKimage,
        tecnologies: ['Angular' , 'TypeScript', 'HTML', 'CSS', 'Git', 'Azure DevOps']
      },
      {
        name: 'Fórum Brasil Export | Mobile Developer',
        projectPeriod: 'Mar de 2024 - Jul 2024',
        description: 'Utilizando o Flutter, desenvolvi novas telas para um portal de notícias com funcionalidades avançadas e uma interface intuitiva e responsiva. Este portal oferece aos usuários acesso fácil e rápido às últimas notícias e atualizações do setor de infraestrutura, transportes e logística.',
        image: BrasilExportImage,
        tecnologies: ['Flutter' , 'Android Studio', 'Git', 'Azure DevOps']
      },
      {
        name: 'TimeKeeping App | Mobile Developer',
        projectPeriod: 'Mar de 2024 - Jun 2024',
        description: 'Este sistema facilita a gestão do tempo e proporciona uma visão clara e detalhada das alocações de horas, permitindo uma administração mais precisa e informada dos recursos e das tarefas dentro da organização. Utilizei o Angular para o desenvolvimento de novos módulos e telas.',
        image: TKimage,
        tecnologies: ['Flutter' , 'Android Studio', 'Git', 'Azure DevOps']
      },
    ]
  },
  {
    logo: AgenciaTupiniquimImage,
    title: 'Agência Tupiniquim',
    period: 'Setembro de 2023 - Dezembro de 2023',
    description: 'Desenvolvedor Front-End/WordPress',
    activity: [
      'Desenho de funcionalidades para demandas e organização do desenvolvimento.',
      'Desenvolvimento web via WordPress.',
      'Escrita de código de manutenção reutilizável em projetos de desenvolvimento de site e software.',
      'Criação de maquetes e protótipos de qualidade a partir de desenhos UI/UX.',
      'Criação de wireframes para páginas web e modelos de e-mail.',
      'Colaboração com desenvolvedores back-end e web designers para melhoria da usabilidade.',
      'Testes e otimizações de sites, códigos e ativos para máxima velocidade e desempenho em diferentes dispositivos e navegadores.',
      'Definição de linguagem (PHP).',
      'Estruturação PHP, HTML e CSS.',
      'Criação de documentação da programação.',
      'Realização periódica de backups.',
    ], 
  }
];
