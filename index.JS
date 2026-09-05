/* ========================================
   HAPPY BIRTHDAY KAKAK
   SECTION 1 — JAVASCRIPT
   ======================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ========================================
       ELEMEN SECTION 1
       ======================================== */

    const opening =
        document.getElementById("opening");

    const openSurprise =
        document.getElementById("open-surprise");

    const audioSection1 =
        document.getElementById("audio-section-1");

    const musicButtonSection1 =
        document.getElementById("music-button-section-1");


    /* ========================================
       MUSIK SECTION 1
       ======================================== */

    if (
        audioSection1 &&
        musicButtonSection1
    ) {

        musicButtonSection1.addEventListener(
            "click",
            function () {

                /* -------------------------------
                   JIKA MUSIK SEDANG BERHENTI
                   ------------------------------- */

                if (audioSection1.paused) {

                    audioSection1
                        .play()
                        .then(function () {

                            musicButtonSection1.textContent =
                                "🔊 Musik ON";

                            musicButtonSection1.classList.add(
                                "music-on"
                            );

                            musicButtonSection1.setAttribute(
                                "aria-pressed",
                                "true"
                            );

                        })
                        .catch(function (error) {

                            console.error(
                                "Audio Section 1 gagal diputar:",
                                error
                            );

                        });

                    return;
                }


                /* -------------------------------
                   JIKA MUSIK SEDANG BERJALAN
                   ------------------------------- */

                audioSection1.pause();

                musicButtonSection1.textContent =
                    "🎵 Putar Musik";

                musicButtonSection1.classList.remove(
                    "music-on"
                );

                musicButtonSection1.setAttribute(
                    "aria-pressed",
                    "false"
                );

            }
        );


        /* ----------------------------------------
           JIKA AUDIO BERHENTI KARENA SEBAB LAIN
           ---------------------------------------- */

        audioSection1.addEventListener(
            "pause",
            function () {

                if (!audioSection1.ended) {

                    musicButtonSection1.textContent =
                        "🎵 Putar Musik";

                    musicButtonSection1.classList.remove(
                        "music-on"
                    );

                    musicButtonSection1.setAttribute(
                        "aria-pressed",
                        "false"
                    );

                }

            }
        );

    }


    /* ========================================
       TOMBOL BUKA KEJUTAN
       SECTION 1 → SECTION 2
       ======================================== */

    if (
        opening &&
        openSurprise
    ) {

        openSurprise.addEventListener(
            "click",
            function () {

                /* --------------------------------
                   CEGAH KLIK BERULANG
                   -------------------------------- */

                if (openSurprise.disabled) {
                    return;
                }

                openSurprise.disabled = true;


                /* --------------------------------
                   CARI SECTION 2
                   -------------------------------- */

                const wishSky =
                    document.getElementById("wish-sky");


                /*
                 * Section 2 belum dibuat pada tahap
                 * Section 1 ini.
                 *
                 * Karena itu jangan membuat elemen
                 * atau alur Section 2 secara
                 * sembarangan di sini.
                 */

                if (!wishSky) {

                    console.warn(
                        "Section 2 belum tersedia."
                    );

                    openSurprise.disabled = false;

                    return;
                }


                /* --------------------------------
                   PINDAH KE SECTION 2
                   -------------------------------- */

                opening.style.display = "none";

wishSky.style.display = "flex";

/* KUNCI SCROLL SELAMA SECTION 2 */
document.body.style.overflow = "hidden";
document.documentElement.style.overflow = "hidden";

window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto"
});


                /* --------------------------------
                   SELESAI PINDAH
                   -------------------------------- */

                openSurprise.disabled = false;

            }
        );

    }

});
/* ========================================
   SECTION 2 — LANGIT HARAPAN
   ======================================== */

const wishSky =
    document.getElementById("wish-sky");

const stars =
    document.querySelectorAll(".wish-star");

const wishPopup =
    document.getElementById("wish-popup");

const closeWish =
    document.getElementById("close-wish");

const wishCount =
    document.getElementById("wish-count");

const wishIcon =
    document.getElementById("wish-icon");

const wishTitle =
    document.getElementById("wish-title");

const wishMessage =
    document.getElementById("wish-message");

const sectionTransition =
    document.getElementById("section-transition");


/* ========================================
   7 PESAN ASLI DARI PROJECT LAMA
   ======================================== */

const wishes = [

    {
        icon: "💗",
        title: "Kebahagiaan",
        message:
            "Semoga Kakak selalu menemukan alasan untuk tersenyum, bahkan di hari-hari yang terasa berat. Semoga kebahagiaan selalu datang menghampiri Kakak, dari hal-hal kecil maupun besar. 💗"
    },

    {
        icon: "🌷",
        title: "Kesehatan",
        message:
            "Semoga Kakak selalu diberikan kesehatan dan kekuatan. Jaga diri baik-baik ya, Kak, karena masih banyak hal indah yang menunggu untuk kita jalani bersama. 🌷"
    },

    {
        icon: "❤️",
        title: "Hal yang Membuatku Bangga",
        message:
            "Aku bangga punya Kakak seperti kamu. Bukan karena harus selalu hebat, tapi karena kamu tetap menjadi dirimu sendiri dan terus melangkah sejauh ini. ❤️✨"
    },

    {
        icon: "😊",
        title: "Untuk Senyum Kakak",
        message:
            "Semoga di umur yang baru ini, senyum Kakak semakin sering muncul. Semoga ada banyak hal kecil yang membuat Kakak bahagia, bahkan di hari-hari biasa sekalipun. 😊💗"
    },

    {
        icon: "💗",
        title: "Tentang Hubungan Kakak-Adik",
        message:
            "Mungkin aku tidak selalu mengatakannya, tapi aku bersyukur punya Kakak seperti Kakak. Terima kasih sudah menjadi bagian penting dalam hidupku dan sudah hadir dalam begitu banyak cerita hidupku. 🥹💗"
    },

    {
        icon: "🌙",
        title: "Masa Depan",
        message:
            "Semoga perjalanan Kakak ke depan dipenuhi banyak hal baik, orang-orang yang tulus, dan kesempatan untuk menjadi versi terbaik dari diri Kakak. Apa pun yang terjadi nanti, semoga Kakak selalu menemukan jalan menuju kebahagiaan. 🌙✨"
    },

    {
        icon: "❤️",
        title: "Pesan Terakhir",
        message:
            "Dan kalau Kakak bertanya apa harapan terbesarku untuk Kakak... sederhana saja. Aku cuma ingin melihat Kakak bahagia, tersenyum, dan menjalani hidup yang Kakak inginkan. Selamat ulang tahun, Kak. Terima kasih sudah menjadi Kakakku. ❤️"
    }

];


/* ========================================
   KONDISI SECTION 2
   ======================================== */

let foundStars = 0;

const foundStarsSet = new Set();

let section2TransitionStarted = false;


/* ========================================
   POSISI BINTANG
   ======================================== */

const starPositions = [

    {
        top: "34%",
        left: "15%"
    },

    {
        top: "43%",
        left: "40%"
    },

    {
        top: "32%",
        left: "72%"
    },

    {
        top: "52%",
        left: "22%"
    },

    {
        top: "55%",
        left: "63%"
    },

    {
        top: "64%",
        left: "38%"
    },

    {
        top: "58%",
        left: "82%"
    }

];


stars.forEach(function (star, index) {

    const position =
        starPositions[index];

    if (!position) {
        return;
    }

    star.style.top =
        position.top;

    star.style.left =
        position.left;

});


/* ========================================
   TUTUP POPUP
   ======================================== */

function closeWishPopup() {

    if (!wishPopup) {
        return;
    }

    wishPopup.classList.add("hidden");

}


if (closeWish) {

    closeWish.addEventListener(
        "click",
        closeWishPopup
    );

}

/* ========================================
   KLIK 7 BINTANG
   ======================================== */

/* ========================================
   KLIK 7 BINTANG
   ======================================== */

stars.forEach(function (star) {

    star.addEventListener("click", function (event) {

        event.preventDefault();
        event.stopPropagation();

        const wishNumber =
            parseInt(
                star.getAttribute("data-wish"),
                10
            );

        const wish =
            wishes[wishNumber - 1];

        if (!wish) {
            return;
        }


        /* ========================================
           HITUNG BINTANG HANYA SEKALI
           ======================================== */

        const alreadyFound =
            foundStarsSet.has(wishNumber);

        if (!alreadyFound) {

            foundStarsSet.add(wishNumber);

            foundStars++;

        }


        /* ========================================
           UPDATE COUNTER
           ======================================== */

        if (wishCount) {

            wishCount.textContent =
                foundStars;

        }


        /* ========================================
           TAMPILKAN PESAN
           ======================================== */

        if (wishIcon) {

            wishIcon.textContent =
                wish.icon;

        }

        if (wishTitle) {

            wishTitle.textContent =
                wish.title;

        }

        if (wishMessage) {

            wishMessage.textContent =
                wish.message;

        }


        /* ========================================
           BUKA POPUP
           ======================================== */

        if (wishPopup) {

            wishPopup.classList.remove(
                "hidden"
            );

        }


        /* ========================================
           TANDA BINTANG SUDAH DITEMUKAN
           ======================================== */

        star.classList.add(
            "star-found"
        );


        /* ========================================
           HAPUS TOMBOL LANJUT LAMA
           ======================================== */

        if (wishPopup) {

            const oldButton =
                wishPopup.querySelector(
                    ".continue-section3"
                );

            if (oldButton) {

                oldButton.remove();

            }

        }


        /* ========================================
           TOMBOL LANJUT SETELAH 7 BINTANG
           ======================================== */

        if (
            wishNumber === 7 &&
            foundStars === 7
        ) {

            const card =
                wishPopup
                    ? wishPopup.querySelector(
                        ".wish-card"
                    )
                    : null;

            if (card) {

                const continueButton =
                    document.createElement(
                        "button"
                    );

                continueButton.type =
                    "button";

                continueButton.className =
                    "continue-section3";

                continueButton.textContent =
                    "Lanjut ke pesan berikutnya ✨";


                /* --------------------------------
                   TAMPILAN TOMBOL
                   -------------------------------- */

                continueButton.style.display =
                    "block";

                continueButton.style.width =
                    "90%";

                continueButton.style.margin =
                    "24px auto 0";

                continueButton.style.padding =
                    "14px 20px";

                continueButton.style.border =
                    "1px solid #ffb6e6";

                continueButton.style.borderRadius =
                    "999px";

                continueButton.style.background =
                    "linear-gradient(90deg, #ff3cab, #d86cff)";

                continueButton.style.color =
                    "#ffffff";

                continueButton.style.fontSize =
                    "17px";

                continueButton.style.fontWeight =
                    "bold";

                continueButton.style.boxShadow =
                    "0 0 10px #ff4fb3, 0 0 20px #d86cff";

                continueButton.style.cursor =
                    "pointer";


                /* --------------------------------
                   MASUKKAN TOMBOL KE POPUP
                   -------------------------------- */

                card.appendChild(
                    continueButton
                );


                /* --------------------------------
                   KLIK TOMBOL LANJUT
                   -------------------------------- */

                continueButton.addEventListener(
                    "click",
                    function () {

                        if (wishPopup) {

                            wishPopup.classList.add(
                                "hidden"
                            );

                        }


                        /* ----------------------------
                           TAMPILKAN TRANSISI LOVE
                           ---------------------------- */

                        if (sectionTransition) {

                            sectionTransition.style.display =
                                "flex";

                            sectionTransition.style.opacity =
                                "1";

                            sectionTransition.classList.add(
                                "active"
                            );

                        }


                        /*
                         * Section 3 BELUM dibuka di sini.
                         *
                         * Saat ini tombol hanya membawa
                         * pengguna ke TRANSISI LOVE.
                         *
                         * Kalimat transisi sudah tersedia
                         * di HTML.
                         */

                    }
                );

            }

        }


    });

});


/* ========================================
   TUTUP POPUP
   ======================================== */

if (wishPopup) {

    wishPopup.addEventListener(
        "click",
        function (event) {

            if (
                event.target === wishPopup
            ) {

                closeWishPopup();

            }

        }
    );

}


/* ========================================
   SETELAH POPUP DITUTUP
   CEK APAKAH SUDAH 7/7
   ======================================== */

if (wishPopup) {

    wishPopup.addEventListener(
        "click",
        function (event) {

            if (
                event.target === wishPopup
            ) {

                closeWishPopup();

            }

        }
    );

}

/* =====================================================
   SECTION 3 — PESAN ULANG TAHUN
   ===================================================== */

(function () {

    const birthdayMessage =
        document.getElementById("birthday-message");

    const nextSection4 =
        document.getElementById("next-section-4");

    const sectionTransition =
        document.getElementById("section-transition");


    /* =================================================
       KONDISI AWAL SECTION 3
       ================================================= */

    if (birthdayMessage) {

        birthdayMessage.style.display = "none";

    }


    /* =================================================
       FUNGSI MENAMPILKAN SECTION 3
       ================================================= */

    function showSection3() {

        if (!birthdayMessage) {
            return;
        }


        /* ---------------------------------------------
           Sembunyikan transisi Love
           --------------------------------------------- */

        if (sectionTransition) {

            sectionTransition.classList.remove(
                "active"
            );

            sectionTransition.style.display =
                "none";

        }

        /* ---------------------------------------------
           Tampilkan Section 3
           --------------------------------------------- */

        if (wishSky) {
              wishSky.style.display = "none";
}
           birthdayMessage.style.display =
            "flex";


        birthdayMessage.classList.remove(
            "transition-enter"
        );


        void birthdayMessage.offsetWidth;


        birthdayMessage.classList.add(
            "transition-enter"
        );


        /* ---------------------------------------------
           Pindahkan posisi ke awal Section 3
           --------------------------------------------- */

        birthdayMessage.scrollIntoView({
            behavior: "auto",
            block: "start"
        });

    }


    /* =================================================
       TIMER SECTION 3
       ================================================= */

    let section3Timer = null;


    function startSection3Timer() {

        /*
         * Jangan membuat timer ganda.
         */
/* KUNCI SCROLL SELAMA TRANSISI SECTION 2 */
document.body.style.overflow = "hidden";
document.documentElement.style.overflow = "hidden";

section3Timer = setTimeout(
    function () {

        section3Timer = null;

        /* BUKA SCROLL SAAT SECTION 3 MUNCUL */
        document.body.style.overflow = "";
        document.documentElement.style.overflow = "";

        showSection3();

        },
        7000
    );
    }



    /* =================================================
       DETEKSI TRANSISI LOVE
       ================================================= */

    /*
     * MutationObserver digunakan supaya Section 3
     * muncul setelah transisi Love benar-benar aktif.
     *
     * Tidak mengunci scroll body.
     */

    if (sectionTransition) {

        const observer =
            new MutationObserver(
                function () {

                    const isActive =
                        sectionTransition.classList.contains(
                            "active"
                        );

                    if (isActive) {

                        startSection3Timer();

                    }

                }
            );


        observer.observe(
            sectionTransition,
            {
                attributes: true,
                attributeFilter: [
                    "class",
                    "style"
                ]
            }
        );

    }


       /* =================================================
       SECTION 3 → SECTION 4
       KEJUTAN TERAKHIR
       ================================================= */

    if (nextSection4) {

        nextSection4.addEventListener(
            "click",
            function () {

                const finalSurprise =
                    document.getElementById(
                        "final-surprise"
                    );

                const finalTransition =
                    document.getElementById(
                        "final-transition"
                    );

                const birthdayCake =
                    document.getElementById(
                        "birthday-cake"
                    );

                const cakeCounter =
                    document.getElementById(
                        "cake-counter"
                    );

                const finalMessage =
                    document.getElementById(
                        "final-message"
                    );

                const fireworksContainer =
                    document.getElementById(
                        "fireworks-container"
                    );


                /* -----------------------------------------
                   CEK ELEMEN SECTION 4
                   ----------------------------------------- */

                if (
                    !finalSurprise ||
                    !finalTransition ||
                    !birthdayCake ||
                    !cakeCounter ||
                    !finalMessage
                ) {

                    console.warn(
                        "Elemen Section 4 belum lengkap."
                    );

                    return;

                }


                /* -----------------------------------------
                   SEMBUNYIKAN SECTION 3
                   ----------------------------------------- */

                if (birthdayMessage) {

                    birthdayMessage.style.display =
                        "none";

                }


                /* -----------------------------------------
                   TAMPILKAN SECTION 4
                   ----------------------------------------- */

                finalSurprise.style.display =
                    "block";

                finalSurprise.classList.remove(
                    "final-show"
                );

                void finalSurprise.offsetWidth;

                finalSurprise.classList.add(
                    "final-show"
                );


                /* -----------------------------------------
                   RESET KONDISI KUE
                   ----------------------------------------- */

                let cakeTaps = 0;

                cakeCounter.textContent =
                    "0 / 3";

                finalMessage.style.display =
                    "none";

                birthdayCake.style.display =
                    "inline-flex";


                /* -----------------------------------------
                   PINDAH KE AWAL SECTION 4
                   ----------------------------------------- */

                setTimeout(
                    function () {

                        finalSurprise.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    },
                    100
                );


                /* -----------------------------------------
                   TOMBOL KUE
                   ----------------------------------------- */

                function handleCakeTap() {

                    cakeTaps++;

                    if (cakeTaps > 3) {

                        cakeTaps = 3;

                    }


                    cakeCounter.textContent =
                        cakeTaps + " / 3";


                    /* Efek kecil setiap tap */

                    birthdayCake.classList.remove(
                        "cake-tap"
                    );

                    void birthdayCake.offsetWidth;

                    birthdayCake.classList.add(
                        "cake-tap"
                    );


                    /* -------------------------------------
                       TAP KE-3
                       ------------------------------------- */

                    if (cakeTaps === 3) {

                        birthdayCake.disabled =
                            true;

                        birthdayCake.style.pointerEvents =
                            "none";


                        setTimeout(
                            function () {

                                birthdayCake.style.display =
                                    "none";

                                cakeCounter.style.display =
                                    "none";


                                finalMessage.style.display =
                                    "block";


                                finalMessage.classList.remove(
                                    "final-message-show"
                                );

                                void finalMessage.offsetWidth;

                                finalMessage.classList.add(
                                    "final-message-show"
                                );


                                /* -------------------------
                                   EFEK KEMBANG API
                                   ------------------------- */

                                if (
                                    fireworksContainer
                                ) {

                                    fireworksContainer.innerHTML =
                                        "";

                                    for (
                                        let i = 0;
                                        i < 18;
                                        i++
                                    ) {

                                        const spark =
                                            document.createElement(
                                                "span"
                                            );

                                        spark.className =
                                            "firework-spark";

                                        spark.textContent =
                                            "✦";

                                        spark.style.setProperty(
                                            "--x",
                                            (
                                                Math.random() *
                                                240 -
                                                120
                                            ) + "px"
                                        );

                                        spark.style.setProperty(
                                            "--y",
                                            (
                                                Math.random() *
                                                180 -
                                                90
                                            ) + "px"
                                        );

                                        fireworksContainer.appendChild(
                                            spark
                                        );

                                    }

                                }

                            },
                            500
                        );

                    }

                }


                /* -----------------------------------------
                   HINDARI EVENT LISTENER GANDA
                   ----------------------------------------- */

                birthdayCake.onclick =
                    handleCakeTap;

            }

        );

    }


})();

