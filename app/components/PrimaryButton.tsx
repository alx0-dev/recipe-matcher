"use client";
import React from "react";

const PrimaryButton = () => {
    return (
        <div>
            <button
                className="btn btn-primary"
                onClick={() => console.log("Recipe Button")}
            >
                PrimaryButton
            </button>
        </div>
    );
};

export default PrimaryButton;
