import NetflixSeriesData from '../api/NetfilxSeriesData.json';
import { SeriesCard } from './SeriesCard';

export const Netflix = () => {
    return (
        <ul className="grid grid-three--cols">
            {
                NetflixSeriesData.map((curElem) => {
                    return <SeriesCard key={curElem.id} curElem={curElem}/>
                })
            }
        </ul>
    )
};

