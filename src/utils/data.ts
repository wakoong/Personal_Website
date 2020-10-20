import robinhood from '../assets/images/rh-gorilla.png';
import CP from '../assets/images/CoachPlayer.png';
import bmotivate from '../assets/images/nba-gorilla.png';
import rh1 from '../assets/images/rh-preview.png';
// import rh2 from '../assets/images/rh-preview-2.png';
import bmotivate1 from '../assets/images/bmotivate-1.png';
import bilo1 from '../assets/images/bilo-1.png';
import milo from '../assets/images/milo.png';

interface IProjectData {
  title: string,
  subtitle?: string,
  description: string[],
  path: string,
  url: string,
  tags: string[],
  thumbnailImage: any,
  images?: any[]
}

export const projectData:IProjectData[] = [
  {
    thumbnailImage: robinhood,
    title: 'RH Gains',
    subtitle:
      'Robinhood account management app that keeps track of the history of capital gains and losses',
    description: [`A stock trading and investing app, Robinhood, provides information on gains and losses of stocks that you currently hold.
    However, it does not provide information on capital gains and losses, which means you have no information on how much you have gained or lost from selling stocks.
    Therefore, using the unofficial robinhood api(https://github.com/aurbano/robinhood-node), I have created tables of history of capital gains and losses.`,
    `Disclaimer: The api is unofficial and does not provide a full history of my transactions. Also, this project is only limited to my personal account,
    but I may expand this project for other users if I do find a more reliable api`
    ],
    path: 'rh',
    url: 'localhost:1234/projects/rh',
    tags: ['React', 'TypeScript', 'Redux', 'D3.js'],
    images: [rh1]
  },
  {
    thumbnailImage: bmotivate,
    title: 'BMotivate',
    subtitle:
      "Blog website that shares motivating stories of professional athletes overcoming their struggles",
    description: [`Sports have been around my life growing up and helped shaped my identity.
    I find myself in awe whenever I am introduced to another story of how a professional athlete stay disciplined and focuesed to achieve great things.
    These stories not only motivate me to work harder but also helps me overcome my current struggles. I hope to convery these stories in my own words to viewers in Korea because
    the impact sports have on a society is not as big as it is in America. I want to make these inspiring stories more accessible to Korean viewers and help them overcome their
    struggles as they did for me.`, `Some of the main considerations that I had while develping this website were - how to effectively and creativley
    architect CSS, how to manage loading many big images, how to scale and increase performance of the website going forward.`,
    `Disclaimer: The website currently is live but it is only displayed with content placeholder`
  ],
    path: 'bmotivate',
    url: 'https://www.bmotivate.com',
    tags: ['React', 'Gatsby', 'GraphQL', 'CSS-in-JS'],
    images: [bmotivate1]
  },
  {
    thumbnailImage: milo,
    title: 'Bilo',
    subtitle:
      'ECommerce and blog website that produces creative pet cartoons and shares stories of adopted pets',
    description: [`My family appreciates having animals as part of our family. We have adopted two pets: Bas and Milo. We adopted Bas in 2017 in Korea
    and Milo in 2019 in Berkeley. Recently, I have found out that it is a common stereotype in Korea that adopted dogs are considered more fierce and not hygienic.
    I want to break that stereotypes by sharing stories of adopted pet owners in Korea. Also, the ecommerce part of the website showcases various
    designs of cute adopted dogs applied on tshirts, sweaters, socks and more.`, `This website focuses on friendly user experience and interactivity where
    different users can connect based on the common shared experience of having an adopted fluffy friend`],
    path: 'bilo',
    url: 'localhost:1234/projects/bilo',
    tags: ['React', 'Gatsby', 'GraphQL', 'CSS-in-JS'],
    images: [bilo1]
  },
];
