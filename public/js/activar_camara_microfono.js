const d = document;

export function activarCamaraMicrofono(videoSelector) {
    const $videoElem = d.querySelector(videoSelector);

    let webCamSettings = {
        video: false,
        audio: false
    };

    d.addEventListener("click", (e) => {
        const onOffWebcam = (video, audio) => {
            if (video != null)
                webCamSettings.video = video;
            if (audio != null)
                webCamSettings.audio = audio;

            camera(webCamSettings, $videoElem);

            async function camera(settings,$videoElem){
                try{
                    if (webCamSettings.video == false && webCamSettings.audio == false) {
                        const tracks = $videoElem.srcObject.getTracks();
                        tracks.forEach(t => t.stop());
                        $videoElem.srcObject = null;
                    }
                    else{
                        let stream  = await navigator.mediaDevices.getUserMedia(settings);
                        $videoElem.srcObject = stream;
                    }
                }catch(error){
                    console.log(error);
                }
            }

        };
        if (e.target.matches(".active_camera") || e.target.matches(".active_camera *")) {
            const $elem = d.querySelector(".camera_buttom");
            $elem.innerHTML = `
                <i class="fa-sharp fa-solid fa-camera"></i>
            `;
            console.log($elem);
            $elem.classList.remove("active_camera");
            $elem.classList.add("desactive_camera");
            onOffWebcam(true, null);
        }
        else if (e.target.matches(".desactive_camera") || e.target.matches(".desactive_camera *")) {
            const $elem = d.querySelector(".camera_buttom");
            $elem.innerHTML = `
                <i class="fa-sharp fa-solid fa-camera-slash"></i>
            `;
            $elem.classList.remove("desactive_camera");
            $elem.classList.add("active_camera");
            onOffWebcam(false, null);
        }

        if (e.target.matches(".active_microphone") || e.target.matches(".active_microphone *")) {
            const $elem = d.querySelector(".microphone_buttom");
            $elem.innerHTML = `
                <i class="fa-solid fa-microphone"></i>
            `;
            $elem.classList.remove("active_microphone");
            $elem.classList.add("desactive_microphone");
            onOffWebcam(null, true);
        }
        else if (e.target.matches(".desactive_microphone") || e.target.matches(".desactive_microphone *")) {
            const $elem = d.querySelector(".microphone_buttom");
            $elem.innerHTML = `
                <i class="fa-solid fa-microphone-slash"></i>
            `;
            $elem.classList.remove("desactive_microphone");
            $elem.classList.add("active_microphone");
            onOffWebcam(null, false);
        }

    })

}