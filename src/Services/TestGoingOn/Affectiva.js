// import { store } from "../../../Reducers";
// import { setAffectiva } from "../../../Reducers/Affectiva/Actions";

export async function initializeAffectiva() {

  let divRoot = document.getElementById('affectiva_node');
  let width = 640;
  let height = 480;
  let faceMode = window.affdex.FaceDetectorMode.LARGE_FACES;

  let detector = new window.affdex.CameraDetector(divRoot, width, height, faceMode);

  detector.addEventListener("onImageResultsSuccess", (faces, image) => {
    // store.dispatch(setAffectiva(faces, image));
    console.log(`faces: ${faces} \n image: ${image}`)
  });

  detector.addEventListener("onWebcamConnectSuccess", function() {
    console.log("Conexão com webcam executada com sucesso")
  });
    
  detector.detectAllExpressions();
  detector.detectAllEmotions();
  detector.detectAllEmojis();
  detector.detectAllAppearance();
  
  detector.start();
}