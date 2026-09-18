const particleContainer =
    document.getElementById("particles");


/* ---------------- PARTICLES ---------------- */

for (let i = 0; i < 45; i++) {

    const particle =
        document.createElement("div");

    particle.className = "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        (5 + Math.random() * 12) + "s";

    particle.style.animationDelay =
        -(Math.random() * 12) + "s";

    particle.style.opacity =
        0.15 + Math.random() * 0.6;

    particleContainer.appendChild(
        particle
    );
}


/* ---------------- DOWNLOAD EFFECT ---------------- */

const downloadButton =
    document.querySelector(
        ".download-button"
    );


downloadButton.addEventListener(
    "click",
    () => {

        downloadButton.innerHTML =
            '<span class="button-arrow">✓</span> DOWNLOAD STARTED';

        setTimeout(() => {

            downloadButton.innerHTML =
                '<span class="button-arrow">▶</span> DOWNLOAD PIXEL SHOOTER';

        }, 2500);

    }
);


/* ---------------- MOUSE PARALLAX ---------------- */

document.addEventListener(
    "mousemove",
    (event) => {

        const x =
            (event.clientX /
                window.innerWidth -
                0.5) * 2;

        const y =
            (event.clientY /
                window.innerHeight -
                0.5) * 2;


        const reticle =
            document.querySelector(
                ".reticle"
            );


        if (reticle) {

            reticle.style.transform =
                `translate(${x * 8}px, ${y * 8}px) rotate(45deg)`;

        }

    }
);