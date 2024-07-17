import AgenciaTupiniquimImage from "../../images/logo-agencia-tupiniquim.png";
import MgrImage from '../../images/logo-mgr.svg';
import TKimage from '../../images/TimeKeeping-img.jpg';
import BrasilExportImage from '../../images/brasil_export_logo.jpg';
import ObraLeanImage from '../../images/obra_lean_logo.jpg';
import WilsonSonsImage from '../../images/wilson_sons_logo.png';


export const experiences = [
  {
    logo: MgrImage,
    title: 'ModalGR',
    period: 'Janeiro de 2024 - Atual',
    description: 'Desenvolvedor Front-End/Mobile', 
    projects: [
      {
        name: 'Wilson Sons - Flutter Developer',
        projectPeriod: 'Jul de 2024 - Atual',
        description: 'Responsável por integrar APIs para exibição dinâmica de dados, criar componentes reutilizáveis e modulares, implementar funcionalidades interativas e garantir que as telas sejam responsivas.',
        image: WilsonSonsImage
      },
      {
        name: 'Obra Lean - React Developer',
        projectPeriod: 'Jun de 2024 - Atual',
        description: 'Minhas responsabilidades incluem a criação de componentes reutilizáveis e modulares, a implementação de funcionalidades interativas, a integração com APIs para a exibição dinâmica de dados e a garantia de que as telas sejam responsivas e acessíveis em diferentes dispositivos e navegadores. Também colaboro estreitamente com designers para transformar layouts em experiências de usuário atraentes e intuitivas.',
        image: ObraLeanImage
      },
      {
        name: 'TimeKeeping - Angular Developer',
        projectPeriod: 'Abr de 2024 - Atual',
        description: 'Este sistema facilita a gestão do tempo e proporciona uma visão clara e detalhada das alocações de horas, permitindo uma administração mais precisa e informada dos recursos e das tarefas dentro da organização. Utilizei o Angular para o desenvolvimento de novos módulos e telas.',
        image: TKimage
      },
      {
        name: 'Fórum Brasil Export - Flutter Developer',
        projectPeriod: 'Mar de 2024 - Atual',
        description: 'Versão Mobile do TimeKeeping, desenvolvida em Flutter, para facilitar a gestão do tempo e proporcionar uma visão clara e detalhada das alocações de horas, permitindo uma administração mais precisa e informada dos recursos e das tarefas dentro da organização.',
        image: BrasilExportImage
      },
      {
        name: 'TimeKeeping App - Flutter Developer',
        projectPeriod: 'Mar de 2024 - Jun 2024',
        description: 'Utilizando o Flutter, desenvolvi novas telas para um portal de notícias com funcionalidades avançadas e uma interface intuitiva e responsiva. Este portal oferece aos usuários acesso fácil e rápido às últimas notícias e atualizações do setor de infraestrutura, transportes e logística.',
        image: TKimage
      },
    ]
  },
  {
    logo: AgenciaTupiniquimImage,
    title: 'Agência Tupiniquim',
    period: 'Setembro de 2023 - Dezembro de 2023',
    description: 'Desenvolvedor WordPress',
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
