import React from 'react';

import instagram from '../../../assets/images/instagram.png';
import linkedin from '../../../assets/images/linkedin.png';
import github from '../../../assets/images/github.svg';

const Footer = () => {
  const links = [
    {
      img: instagram,
      link: 'https://www.instagram.com/woosikka/',
    },
    {
      img: linkedin,
      link: 'https://www.linkedin.com/in/woosik90/',
    },
    { img: github, link: 'https://github.com/wakoong' },
  ];
  return (
    <footer>
      <div />
      <div className='copyRight'>Copyright © 2019, Woosik Koong.</div>
      <div className='socialBtnWrapper'>
        {links.map((res) => (
          <a href={res.link} key={res.link} target='_blank'>
            <img
              className='socialBtn'
              src={res.img}
              alt={JSON.stringify(res.img)}
            />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
