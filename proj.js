let currentStory = 0;

function story1() {
    currentStory = 1;
    document.getElementById("leftHeader").innerHTML = "Story 1";
    document.getElementById("filler").innerHTML = "Fill in the blanks on the right, then click Reveal Story!";
    document.getElementById("imageFiller").src = "PICS/oiauia.gif";
    document.getElementById("rightHeader").innerHTML = "Fill in the blanks!";
    document.getElementById("storyForm").style.display = "block";
    document.getElementById("storyForm").innerHTML = `
        <input id="name" type="text" placeholder="Name 1">
        <input id="clothing" type="text" placeholder="Clothing Item">
        <input id="objectsPlural" type="text" placeholder="Objects (plural)">
        <input id="desk" type="text" placeholder="Desk/Chair">
        <input id="verbIng" type="text" placeholder="Verb ending in -ing">
        <input id="celebrity" type="text" placeholder="Celebrity/YouTuber">
        <input id="weirdObjectSingular" type="text" placeholder="Object">
        <input id="foodPlural" type="text" placeholder="Food (plural)">
        <input id="name2" type="text" placeholder="Name 2">
        <input id="verbIng2" type="text" placeholder="Verb ending in -ing">
        <input id="phrase" type="text" placeholder="Phrase">
        <input id="place" type="text" placeholder="Place">
        <input id="randomObjectSingular" type="text" placeholder="Random Object">
    `;
    document.getElementById("revealBtn").style.display = "block";
    document.getElementById("resetStoryBtn").style.display = "block";
    document.getElementById("storyOutput").innerHTML = "";
    document.getElementById("leftContent").innerHTML = "";
    document.getElementById("rightImage").src = "PICS/quill.png";
}

function story2() {
    currentStory = 2;
    document.getElementById("leftHeader").innerHTML = "Story 2";
    document.getElementById("filler").innerHTML = "Fill in the blanks on the right, then click Reveal Story!";
    document.getElementById("imageFiller").src = "PICS/angy.gif";
    document.getElementById("rightHeader").innerHTML = "Fill in the blanks!";
    document.getElementById("storyForm").style.display = "block";
    document.getElementById("storyForm").innerHTML = `
        <input id="name" type="text" placeholder="Name">
        <input id="key" type="text" placeholder="Key on Keyboard">
        <input id="objectsPlural" type="text" placeholder="Objects (plural)">
        <input id="phrase" type="text" placeholder="Phrase">
        <input id="randomObjectSingular" type="text" placeholder="Random Object">
        <input id="verbIng" type="text" placeholder="Verb ending in -ing">
        <input id="foodPlural" type="text" placeholder="Food (plural)">
        <input id="celebrity" type="text" placeholder="Celebrity">
        <input id="weirdObjectSingular" type="text" placeholder="Weird Object">
        <input id="desk" type="text" placeholder="Desk/Chair">
        <input id="schoolSupplies" type="text" placeholder="School Supplies">
    `;
    document.getElementById("revealBtn").style.display = "block";
    document.getElementById("resetStoryBtn").style.display = "block";
    document.getElementById("storyOutput").innerHTML = "";
    document.getElementById("leftContent").innerHTML = "";
    document.getElementById("rightImage").src = "PICS/quill.png";
}

function story3() {
    currentStory = 3;
    document.getElementById("leftHeader").innerHTML = "Story 3";
    document.getElementById("filler").innerHTML = "Fill in the blanks on the right, then click Reveal Story!";
    document.getElementById("imageFiller").src = "PICS/huh.gif";
    document.getElementById("rightHeader").innerHTML = "Fill in the blanks!";
    document.getElementById("storyForm").style.display = "block";
    document.getElementById("storyForm").innerHTML = `
        <input id="name" type="text" placeholder="Name">
        <input id="filename" type="text" placeholder="Filename">
        <input id="objectsPlural" type="text" placeholder="Objects (plural)">
        <input id="funnyChar" type="text" placeholder="Name">
        <input id="verbIng" type="text" placeholder="Verb ending in -ing">
        <input id="randomObjectSingular" type="text" placeholder="Object">
        <input id="phrase" type="text" placeholder="Phrase">
        <input id="songTitle" type="text" placeholder="Song Title">
        <input id="celebrity" type="text" placeholder="Celebrity">
        <input id="foodPlural" type="text" placeholder="Food (plural)">
    `;
    document.getElementById("revealBtn").style.display = "block";
    document.getElementById("resetStoryBtn").style.display = "block";
    document.getElementById("storyOutput").innerHTML = "";
    document.getElementById("leftContent").innerHTML = "";
    document.getElementById("rightImage").src = "PICS/quill.png";
}

function story4() {
    currentStory = 4;
    document.getElementById("leftHeader").innerHTML = "Story 4";
    document.getElementById("filler").innerHTML = "Fill in the blanks on the right, then click Reveal Story!";
    document.getElementById("imageFiller").src = "PICS/maxwell.gif";
    document.getElementById("rightHeader").innerHTML = "Fill in the blanks!";
    document.getElementById("storyForm").style.display = "block";
    document.getElementById("storyForm").innerHTML = `
        <input id="animalSingular" type="text" placeholder="Animal">
        <input id="vehicleSingular" type="text" placeholder="Vehicle">
        <input id="celebrity" type="text" placeholder="Celebrity">
        <input id="objectSingular" type="text" placeholder="Object">
        <input id="phrase" type="text" placeholder="Phrase">
        <input id="liquid" type="text" placeholder="Liquid">
        <input id="verbIng" type="text" placeholder="Verb ending in -ing">
        <input id="objectsPlural" type="text" placeholder="Objects (plural)">
        <input id="weirdObjectSingular" type="text" placeholder="Object">
        <input id="foodPlural" type="text" placeholder="Food (plural)">
    `;
    document.getElementById("revealBtn").style.display = "block";
    document.getElementById("resetStoryBtn").style.display = "block";
    document.getElementById("storyOutput").innerHTML = "";
    document.getElementById("leftContent").innerHTML = "";
    document.getElementById("rightImage").src = "PICS/quill.png";
}

function story5() {
    currentStory = 5;
    document.getElementById("leftHeader").innerHTML = "Story 5";
    document.getElementById("filler").innerHTML = "Fill in the blanks on the right, then click Reveal Story!";
    document.getElementById("imageFiller").src = "PICS/uhm.gif";
    document.getElementById("rightHeader").innerHTML = "Fill in the blanks!";
    document.getElementById("storyForm").style.display = "block";
    document.getElementById("storyForm").innerHTML = `
        <input id="name1" type="text" placeholder="Name 1">
        <input id="name2" type="text" placeholder="Name 2">
        <input id="place" type="text" placeholder="Place">
        <input id="adj" type="text" placeholder="Adjective">
        <input id="animalSingular" type="text" placeholder="Animal">
        <input id="objectsPlural" type="text" placeholder="Objects (plural)">
        <input id="verbIng" type="text" placeholder="Verb ending in -ing">
        <input id="liquid" type="text" placeholder="Liquid">
        <input id="celebrity" type="text" placeholder="Celebrity">
        <input id="foodPlural" type="text" placeholder="Food (plural)">
        <input id="phrase" type="text" placeholder="Phrase">
        <input id="objectSingular" type="text" placeholder="Object">
        <input id="animalsPlural" type="text" placeholder="Animals (plural)">
        <input id="randomObjectsPlural" type="text" placeholder="Random Objects (plural)">
    `;
    document.getElementById("revealBtn").style.display = "block";
    document.getElementById("resetStoryBtn").style.display = "block";
    document.getElementById("storyOutput").innerHTML = "";
    document.getElementById("leftContent").innerHTML = "";
    document.getElementById("rightImage").src = "PICS/quill.png";
}
