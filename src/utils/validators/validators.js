export const requiredField = (value) =>
    value ? undefined : "Field is required!";

export const maxLength = (maxLength) => (value) =>
    value && value.length <= maxLength
        ? undefined
        : `Max length is ${maxLength} symbols`;
