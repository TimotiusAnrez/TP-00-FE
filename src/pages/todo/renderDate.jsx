export default function renderDate() {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };
    return new Date().toLocaleString("en-EN", options);
};