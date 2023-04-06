import { StarIcon } from '@chakra-ui/icons';
import starStyles from "./Rating.module.css";

interface RatingInterface {
    rate: number
}

const Rating = ({rate}: RatingInterface) => {
    const percentage = (rate / 5) * 100;

    return (
        <div>
            <div className={starStyles.starWrapper}>
                <div className={starStyles.star} style={{ width: `${percentage}%` }}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                </div>
                <StarIcon color={'black'}/>
                <StarIcon color={'black'}/>
                <StarIcon color={'black'}/>
                <StarIcon color={'black'}/>
                <StarIcon color={'black'}/>
            </div>
            <span style={{ marginLeft: "0.5em" }}><strong>{rate}</strong></span>
        </div>
    )
}

export default Rating