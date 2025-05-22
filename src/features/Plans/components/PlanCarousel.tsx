import { useState } from 'react';
import PlanCard from './PlanCard';
import { Plan } from "../types/Plan.types";
import styles from '../PlanPage.module.scss';

interface Props {
  plans: Plan[];
  type: string;
}

const PlanCarousel = ({ plans, type }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === plans.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? plans.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.carousel__container}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {plans.map((plan, index) => (
          <div key={index} className={styles.carousel__slide}>
            <PlanCard plan={plan} type={type} />
          </div>
        ))}
      </div>

      <div className={styles.carousel__pagination}>
        <button className={styles.carousel__button} onClick={prevSlide}>
          &#10094;
        </button>
        <button className={styles.carousel__button} onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default PlanCarousel;