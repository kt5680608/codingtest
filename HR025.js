// The Hurdle Race
function hurdleRace(k, height) {
    height.sort((a, b) => b - a);
    let most = height[0];
    return most - k > 0 ? most - k : 0;
}
