import React from "react";

export const renderField =
    (Element) =>
    ({ input, meta, ...props }) => {
        const hasError = meta.touched && meta.error;
        return (
            <div className={`form-control ${hasError ? "error" : ""}`}>
                <div>
                    <Element {...input} {...props} />
                </div>
                {hasError && <span> {meta.error} </span>}
            </div>
        );
    };
