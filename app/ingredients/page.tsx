import Link from "next/link";
import React from "react";

const IngredientsPage = () => {
    return (
        <div>
            IngredientsPage
            <div>
                <label className="label">
                    <span className="label-text">
                        What ingredients do you have?
                    </span>
                </label>
                <div className="join">
                    <input
                        className="input input-bordered join-item"
                        placeholder="Ingredient"
                    />
                    <button className="btn join-item">Add</button>
                </div>
            </div>
            <div>
                <span className="badge badge-primary badge-outline">Egg</span>
                <span className="badge badge-primary badge-outline">Spam</span>
                <span className="badge badge-primary badge-outline">Rice</span>
                <span className="badge badge-primary badge-outline">
                    Kimchi
                </span>
            </div>
            <div>
                <button className="btn btn-primary">
                    <Link href="/recipes">Match with recipes</Link>
                </button>
            </div>
        </div>
    );
};

export default IngredientsPage;
