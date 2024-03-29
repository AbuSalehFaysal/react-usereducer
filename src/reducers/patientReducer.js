export const patientState = {
    patients: []
}

export const PatientReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            const newPatient = {
                id: action.id,
                name: action.name,
            }
            const allPatients = [...state.patients, newPatient]
            return {patients: allPatients}
            break;

        case 'REMOVE_PATIENT':
            // console.log(action);
            const remaining = state.patients.filter(pt=>pt.id !== action.id)
            const newState = {patients: remaining}
            return newState;
            break;

        default:
            break;
    }
}