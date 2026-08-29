
/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");


menuButton.addEventListener("click", function (event) {

    event.stopPropagation();

    menu.classList.toggle("active");

});


/* Close menu when a navigation link is clicked */

const menuLinks = menu.querySelectorAll("a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("active");

    });

});


/* Close menu when clicking anywhere outside it */

document.addEventListener("click", function (event) {

    if (
        !menu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {

        menu.classList.remove("active");

    }

});


/* =========================================================
   PROJECT INFORMATION
   ========================================================= */

const projects = {

    procurement: {

        label: "01 — PROCUREMENT",

        title: "Procurement Performance Dashboard",

        problem:
            "Procurement performance can become difficult to manage when spend, purchase orders, savings, supplier ratings and delivery information are viewed separately. The challenge was to create one clear view that could show where procurement value was being created and where performance gaps needed attention.",

        analysis:
            "The analysis brought procurement information together across spend, purchase orders, savings, supplier performance and delivery. Key procurement indicators were organised into an interactive Power BI dashboard so management could move from overall performance to specific areas requiring attention.",

        findings:
            "The data showed ₦26.9B in procurement spend across 650 purchase orders, with ₦1.8B in savings. Average PO value was ₦41.4M, while on-time delivery stood at 40.5% and average supplier rating was 3.54.",

        impact:
            "The dashboard transforms procurement records into a practical management tool. It makes spend patterns, savings, supplier performance and delivery gaps easier to monitor and provides a stronger basis for procurement decisions.",

        dashboard:
            "assets/procurement-dashboard.pdf"

    },


    sales: {

        label: "02 — DATA ANALYTICS",

        title: "Sales Performance Analysis",

        problem:
            "Overall sales figures can hide important differences between products, customers and markets. The challenge was to move beyond headline revenue and understand what was actually driving business performance.",

        analysis:
            "The analysis examined revenue, profit, units sold, customers, products and geographic performance. Power BI was used to bring these measures together so performance could be explored from different business perspectives.",

        findings:
            "The dataset recorded $55.8M in revenue, $32.7M in profit, 198K units sold and 12K customers, with a 58.6% profit margin. The dashboard also reveals differences in performance across product categories and markets.",

        impact:
            "The dashboard turns sales data into a clearer business intelligence view. It helps identify strong-performing products and markets, understand customer contribution and highlight opportunities for better commercial decision-making.",

        dashboard:
            "assets/sales-dashboard.pdf"

    },


    health: {

        label: "03 — PUBLIC HEALTH",

        title: "Nigeria Public Health Surveillance Dashboard",

        problem:
            "Public health surveillance involves multiple indicators that can be difficult to interpret when cases, deaths, diseases, locations and reporting facilities are viewed separately. The challenge was to bring these dimensions together and make patterns easier to identify.",

        analysis:
            "The dashboard analysed reported cases, deaths and health events across diseases, states, LGAs and reporting facilities. It also examined patterns over time, allowing the data to be explored by disease, location and reporting period.",

        findings:
            "The dataset recorded approximately 7K reported cases, 18K deaths and 3K health events across 5 diseases and 5 reporting facilities. The dashboard highlights differences in disease burden across locations and changes in mortality over time.",

        impact:
            "The dashboard converts complex surveillance records into a clearer visual picture of disease patterns and outcomes. It allows users to compare locations, diseases and periods quickly, supporting stronger public health monitoring and data-informed decisions.",

        dashboard:
            "assets/public-health-dashboard.pdf"

    }

};


/* =========================================================
   PROJECT MODAL
   ========================================================= */

const projectModal = document.getElementById("projectModal");

const modalLabel = document.getElementById("modalLabel");
const modalTitle = document.getElementById("modalTitle");

const modalProblem = document.getElementById("modalProblem");
const modalAnalysis = document.getElementById("modalAnalysis");
const modalFindings = document.getElementById("modalFindings");
const modalImpact = document.getElementById("modalImpact");

const dashboardLink = document.getElementById("dashboardLink");


function openProject(projectName) {

    const project = projects[projectName];

    if (!project) {
        return;
    }


    modalLabel.textContent = project.label;

    modalTitle.textContent = project.title;

    modalProblem.textContent = project.problem;

    modalAnalysis.textContent = project.analysis;

    modalFindings.textContent = project.findings;

    modalImpact.textContent = project.impact;

    dashboardLink.href = project.dashboard;


    projectModal.classList.add("active");

    document.body.classList.add("modal-open");

}


function closeProject() {

    projectModal.classList.remove("active");

    document.body.classList.remove("modal-open");

}


/* Close project popup with Escape */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeProject();

    }

});
