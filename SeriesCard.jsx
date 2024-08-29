import styles from './Netflix.module.css';
import styled from "styled-components";

export const SeriesCard = (props) => {
    const {img_url, name, rating, description, cast, genre, watch_url} = props.curElem; // Destructuring

//Using Style Objects
    const Button = styled.button({
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
        fontWeight: "bold",
        cursor: "pointer",
    });
    
//Using Template Literals
    const ButtonX = styled.button`
        padding: 1.2rem 2.4rem;
        border: none;
        font-size: 1.6rem;
        background-color: ${(props) => props.rating >= 8.5 ? "#7dcea0" : "#f7dc6f"};
        font-weight: bold;
        cursor: pointer;
    `;

    const ratingClass = rating >= 8.5 ? styles["super-hit"] : styles.average;
    return (
        <li className={styles.card}>
            <div>
                <img src={img_url} alt={name} width="40%" height="40%" /></div>
            <div className={styles["card-content"]}>
                <h2>Name: {name}</h2>
                <h3>Rating: <span className={`${styles.rating} ${ratingClass}`}>{rating}</span></h3>
                <p>Summary: {description}</p>
                <p>Cast: {cast}</p>
                <p>Genre: {genre}</p>
                <a href={watch_url} target='_blank'>
                {/* <button style={btn_style}>Watch Now</button> */}
                <Button>Watch Now</Button>
                </a>
            </div>
        </li>
    );
}