import React from 'react';

import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => (
  <div className="categories">
    <h3 className="categories--title"> { title } </h3>
    <section className="carrousel"> { children } </section>
  </div>
);

export default Categories;
