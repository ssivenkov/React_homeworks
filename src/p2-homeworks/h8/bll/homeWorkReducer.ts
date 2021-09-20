import {UserType} from "../HW8";

type actionType = {
    type: string
    payload: string | number
}

export const homeWorkReducer = (state: UserType[], action: actionType): UserType[] => {
    const stateCopy = state.slice();
    switch (action.type) {
        case 'sort':
            if (action.payload === 'up') {
                console.log(stateCopy.sort((a: UserType, b: UserType) => a.name > b.name ? 1 : -1))
                return stateCopy.sort((a: UserType, b: UserType) => a.name > b.name ? 1 : -1);
            }
            if (action.payload === 'down') {
                return stateCopy.sort((a: UserType, b: UserType) => a.name < b.name ? 1 : -1);
            }
            return state;
        case 'check':
            return stateCopy.filter((el: UserType) => el.age >= 18)
        default:
            return state;
    }
}