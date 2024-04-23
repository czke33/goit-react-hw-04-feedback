
import PropTypes from 'prop-types';
import style from "./section.module.css"
import React from 'react';


function Section(props) {
  const { title, children } = props;
  return (
      <>
      <section className={style.feedback}>
    <h2 className={style.feedbacktitle}> {title}</h2>
    {children}
  </section>
    </>
  );
};

Section.propTypes = {
    title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired, 
}

export default Section;