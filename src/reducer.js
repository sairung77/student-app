const initialState = {
    students: [
        { id: 1, name: 'Jeerawuth', score: 99 },
        { id: 2, name: 'Sombat', score: 89 },
        { id: 3, nmae: 'Worawan', score: 73 }
    ]
}
const reducer = (state = initialState, action) => {
    const allStudent = [...state.students];
    switch (action.type) {
        case 'DEL_STUDENT':
            return {
                ...state,
                students: state.students.filter(item => item.id !== action.payload)
            }
        case 'ADD_STUDENT':
            return {
                ...state,
                students: [action.payload, ...state.students]
            }
        case 'EDIT_STUDENT':
            const indexForEdit = allStudent.findIndex((item) => {
                return item.id === action.payload.id;
            });
            allStudent[indexForEdit] = {
                id: action.payload.id,
                name: action.payload.name,
                score: action.payload.score
            }
            return {
                ...state,
                students: allStudent
            }
        default:
            return state;
    }

}
export default reducer;