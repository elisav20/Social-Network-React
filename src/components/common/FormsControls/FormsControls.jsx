import React from "react";

export const renderField =
    (Element) =>
    ({ input, meta: { touched, error }, ...props }) => {
        const hasError = touched && error;
        return (
            <div className={`form-control ${hasError ? "error" : ""}`}>
                <div>
                    <Element {...input} {...props} />
                </div>
                {hasError && <span> {error} </span>}
            </div>
        );
    };
