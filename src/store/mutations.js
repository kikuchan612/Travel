export default {
    changeItem(state, name) {
        state.city = name
        try {
            localStorage.city = name
        } catch (e) {}
    }
}