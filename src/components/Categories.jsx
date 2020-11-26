import React from 'react';

import '../assets/styles/components/Categories.scss';
/**
 * Constanetes para texto elementos html
 */
const categoriesTitleText = "Lo ultimo ~ The Witcher";

const Categories = ({ children, title }) => (
    <div className="categories">
        <h3 className="categories--title"> { title } </h3>
        <section className="carrousel"> { children } </section>
    </div>
);

export default Categories;  