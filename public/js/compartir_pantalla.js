const d = document;
export function compartirPantalla(windowSelector) {

    const $windowElem = d.querySelector(windowSelector);
    let displayMediaOptions = {
        video: {
            cursor: "always",
        },
        audio: false
    };

    // document.addEventListener("click", (e) => {
    //     let $windowBoton = document.querySelector("#window_buttom");

    //     if ($windowBoton) {
    //         if (e.target.matches(".active_window") || e.target.matches(".active_window *")) {
    //             console.log("Changing to desactive");
    //             $windowBoton.classList.remove("active_window");
    //             $windowBoton.classList.add("desactive_window");
    //             // shareWindow();
    //         } else if (e.target.matches(".desactive_window") || e.target.matches(".desactive_window *")) {
    //             console.log("Changing to active");
    //             $windowBoton.classList.remove("desactive_window");
    //             $windowBoton.classList.add("active_window");
    //             // stopShareWindow();
    //         }
    //     }
    // });
    d.addEventListener("click", (e) => {


        if (e.target.matches(".active_window") || e.target.matches(".active_window *")) {
            let $windowBoton = d.querySelector("#window_buttom");
            console.log("Changing to desactive");
            $windowBoton.classList.remove("active_window");
            $windowBoton.classList.add("desactive_window");
            shareWindow();
        } else if (e.target.matches(".desactive_window") || e.target.matches(".desactive_window *")) {
            let $windowBoton = d.querySelector("#window_buttom");
            console.log("Changing to active");
            $windowBoton.classList.remove("desactive_window");
            $windowBoton.classList.add("active_window");
            stopShareWindow();
        }

        async function shareWindow() {
            try {
                $windowElem.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
            } catch (error) {
                console.error(error);
            }
        }

        async function stopShareWindow() {
            let tracks = $windowElem.srcObject.getTracks();
            tracks.forEach((x) => x.stop());
            $windowElem.srcObject = null;
        }

    });
}