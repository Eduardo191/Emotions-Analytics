export function onAffectiva() {

    let divStream = document.getElementById('affectiva');
    let width = 640;
    let height = 480;
    let faceMode = window.affdex.FaceDetectorMode.SMALL_FACES;
    let detector = new window.affdex.CameraDetector(divStream, width, height, faceMode);

    detector.addEventListener("onInitializeSuccess", function () {
        console.log('Deu certo');
    });

    detector.addEventListener("onInitializeFailure", function () {
        console.log('Deu ruim');
    });

    detector.start();
}
