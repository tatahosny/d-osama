function toggleMenu() {
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle("active");
}

}
document.getElementById("toggleDarkMode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// تحميل الوضع الليلي المحفوظ
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

// تحميل إحصائيات من API
async function loadDashboardStats() {
    const response = await fetch("https://example.com/api/stats");
    const data = await response.json();

    document.getElementById("taskCount").textContent = data.tasks;
    document.getElementById("userCount").textContent = data.users;
    document.getElementById("topUser").textContent = data.topUser;
}

document.addEventListener("DOMContentLoaded", loadDashboardStats);
