import React from "react";

const PlaceholderCep = () => {
    new Promise(resolve => {
        if (document.querySelectorAll(".vtex-address-form-4-x-input").length > 0) {
            return resolve(Array.from(document.querySelectorAll(".vtex-address-form-4-x-input")));
        }

        const observer = new MutationObserver(() => {
            if (document.querySelectorAll(".vtex-address-form-4-x-input").length > 0) {
                resolve(document.querySelectorAll(".vtex-address-form-4-x-input"));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true,
        });
    }).then((els: any) => {
        els[0].placeholder = "Digite seu CEP";
    });

    return <></>;
};

export default PlaceholderCep;