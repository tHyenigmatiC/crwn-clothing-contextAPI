import React from 'react';

import withRouter from '../with-router/withRouter.component';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, navigate, linkUrl, location }) => {
  let pathname = window.location.pathname;
  if (pathname.charAt( pathname.length -1 ) !== '/') pathname += '/';
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => navigate(`${pathname}${linkUrl}`)}
    >
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
};

export default withRouter(MenuItem);
