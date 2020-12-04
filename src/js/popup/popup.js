const popup = () => {
    const get = (id) => {
        return document.querySelector(id);
    };
    function showpopup() {
        if (get(".menu").classList.contains("active")) {
            get(".menu").classList.remove("active");
        } else {
            get(".menu").classList.add("active");
        }
    }
    get(".header-btn").addEventListener("click", showpopup);
    get(".close-btn").addEventListener("click", showpopup);
};
popup();
export default popup;
