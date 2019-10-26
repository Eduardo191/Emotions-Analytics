import {
    CHANGE_AFFECTIVA_IS_LOADED,
} from "./Types";

export const changeAffectivaIsLoaded = (affectivaIsLoaded: boolean) => {
    return {
        type: CHANGE_AFFECTIVA_IS_LOADED,
        payload: affectivaIsLoaded,
    }
}