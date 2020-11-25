import React from 'react';

import '../assets/styles/components/Categories.scss';
/**
 * Constanetes para texto elementos html
 */
const categoriesTitleText = "Lo ultimo ~ The Witcher";

const Categories = ({ children }) => (
    <div className="categories">
        <h3 className="categories--title"> { categoriesTitleText } </h3>
        <section className="carrousel"> { children } </section>
    </div>
);

export default Categories;