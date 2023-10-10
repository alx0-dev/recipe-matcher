import React from "react";
import PrimaryButton from "./PrimaryButton";
import styles from "./RecipeCard.module.css";
import Image from "next/image";

const RecipeCard = () => {
    return (
        <div className="card card-compact w-96 bg-neutral text-neutral-content shadow-xl">
            <figure>
                <Image
                    src="../../public/next.svg"
                    width={500}
                    height={500}
                    alt="recipe"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">RecipeCard</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <PrimaryButton />
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
