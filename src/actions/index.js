export const selectStarship = (starShipName) => {
    return {
        type: 'select_starship',
        payload: starShipName
    };
};