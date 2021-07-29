import React from 'react';
import styles from './about.module.css';
import ContentBlock from "../../components/ContentBlock/ContentBlock";


function About() {
    return(
        <div className={styles.about}>
            <ContentBlock
            headerText='Who I am?'
            text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid distinctio dolor est facilis maxime recusandae repellat saepe veniam voluptatum? Minima natus numquam obcaecati officia possimus praesentium quis reiciendis, tempore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid distinctio dolor est facilis '
            />
            <ContentBlock
                headerText='Who I am?'
                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid distinctio dolor est facilis maxime recusandae repellat saepe veniam voluptatum? Minima natus numquam obcaecati officia possimus praesentium quis reiciendis, tempore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid distinctio dolor est'
            />
            <ContentBlock
                headerText='Who I am?'
                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid distinctio dolor est facilis maxime recusandae repellat saepe veniam voluptatum? Minima natus numquam obcaecati officia possimus praesentium quis reiciendis, tempore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid distinctio dolor'
            />
            <ContentBlock
                headerText='Who I am?'
                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid distinctio dolor est facilis maxime recusandae repellat saepe veniam voluptatum? Minima natus numquam obcaecati officia possimus praesentium quis reiciendis, tempore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid distinctio dolor'
            />
            <ContentBlock
                headerText='Who I am?'
                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid distinctio dolor est facilis maxime recusandae repellat saepe veniam voluptatum? Minima natus numquam obcaecati officia possimus praesentium quis reiciendis, tempore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid distinctio dolor'
            />

        </div>
    );
}

export default About;