window.onload = function() {
	generateNewSplash();

}
// ily :3 -aj
// ily :3 -ava

generateNewSplash = function() {	
	// 
	const splashes = [
		"Also play Half-Life!",
		"beautiful big titty butt naked women dont fall out the sky you know",
		"aj wuz heer",
		"I LOVE AJJJJJ - awa",
        "42",
        "lllloooonnnnggggtttteeeexxxxtttt",
        "tell em to bring out the whole ocean 🦀🐟🐠🐡🦈🦦🐬🦭🐳🐋🐙🦑🦐🐚🪸🪼🐌",
        "Also play garn47, in theaters, ITS AWESOME!",
        "Also play Slime Rancher!",
        "Also play Slime Rancher 2!",
		"Nier: Automata looks cool",
	];

	const randomSplash = splashes[Math.floor(Math.random() * splashes.length)];
	const splashElement = document.getElementById("splash");	

	splashElement.innerText = randomSplash;

	// 
	splashElement.style.fontSize = 50 - randomSplash.length + "px";
}