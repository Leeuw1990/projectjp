import React from 'react';
import jpImage from '../../assets/jpmuziekmaken.jpg';
import styles from './home.module.css'
import ContentBlock from "../../components/ContentBlock/ContentBlock";

function Home() {
    return(
        <div className={styles.home}>
            <ContentBlock
                headerText='Home'
                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid distinctio dolor est facilis maxime recusandae repellat saepe veniam voluptatum? Minima natus numquam obcaecati officia possimus praesentium quis reiciendis, tempore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid distinctio dolor est facilis '
            />
            <img className={styles.picture} alt='foto van jp' src={jpImage}/>
            <ContentBlock
                headerText='Home'
                text='Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid distinctio dolor est facilis maxime recusandae repellat saepe veniam voluptatum? Minima natus numquam obcaecati officia possimus praesentium quis reiciendis, tempore? Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid distinctio dolor est facilis '
            />
        </div>
    );
}

export default Home;