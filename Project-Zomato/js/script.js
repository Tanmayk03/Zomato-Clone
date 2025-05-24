document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll("header ul li a");

    navLinks.forEach(link => {
        const text = link.textContent.trim().toLowerCase();

        link.addEventListener("click", (e) => {
            e.preventDefault();

            if (text === "login") {
                showModal("Login to your account");
            } else if (text === "sign up") {
                showModal("Create a new account");
            } else if (text === "add restaurant") {
                window.location.href = "https://www.zomato.com/partner";
            } else if (text === "investor relation") {
                window.open("https://www.zomato.com/investor-relations", "_blank");
            }
        });
    });

    function showModal(title) {
        const modal = document.createElement("div");
        modal.className = "custom-modal";
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-btn">&times;</span>
                <h2>${title}</h2>
                <p>This is a demo modal. Add your form or message here.</p>
            </div>
        `;
        document.body.appendChild(modal);

        document.querySelector(".close-btn").onclick = () => modal.remove();
        modal.onclick = (e) => {
            if (e.target === modal) modal.remove();
        };
    }
});
