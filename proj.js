let currentStory = 0;

function story1() {
    currentStory = 1;
    document.getElementById("leftHeader").innerHTML = "Story 1";
    document.getElementById("filler").innerHTML = "Fill in the blanks on the right, then click Reveal Story to see your creation! If you'd like to start over again, just click Reset Story.";
    document.getElementById("imageFiller").src = "PICS/oiauia.gif"
    document.getElementById("rightHeader").innerHTML = "Fill in the blanks!";
    document.getElementById("storyForm").style.display = "block";
    document.getElementById("storyForm").innerHTML = `
        <input id="name" type="text" placeholder="Name">
        <input id="clothing" type="text" placeholder="Clothing Item">
        <input id="objectsPlural" type="text" placeholder="Object (plural)">
        <input id="desk" type="text" placeholder="Desk/Chair">
        <input id="verbIng" type="text" placeholder="Verb ending in -ing">
        <input id="celebrity" type="text" placeholder="Celebrity/YouTuber">
        <input id="weirdObject" type="text" placeholder="Weird Object">
        <input id="foodPlural" type="text" placeholder="Food (plural)">
        <input id="animal" type="text" placeholder="Animal">
        <input id="verbIng2" type="text" placeholder="Verb ending in -ing">
        <input id="phrase" type="text" placeholder="Funny Phrase">
        <input id="place" type="text" placeholder="Place">
        <input id="randomObject" type="text" placeholder="Random Object">
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
    document.getElementById("filler").innerHTML = "Fill in the blanks on the right, then click Reveal Story to see your creation! If you'd like to start over again, just click Reset Story.";
    document.getElementById("imageFiller").src = "PICS/angy.gif"
    document.getElementById("rightHeader").innerHTML = "Fill in the blanks!";
    document.getElementById("storyForm").style.display = "block";
    document.getElementById("storyForm").innerHTML = `
        <input id="name" type="text" placeholder="Name">
        <input id="key" type="text" placeholder="Random Key on Keyboard">
        <input id="objectsPlural" type="text" placeholder="Object (plural)">
        <input id="phrase" type="text" placeholder="Funny Phrase">
        <input id="randomObject" type="text" placeholder="Random Object">
        <input id="verbIng" type="text" placeholder="Verb ending in -ing">
        <input id="foodPlural" type="text" placeholder="Food (plural)">
        <input id="celebrity" type="text" placeholder="Celebrity">
        <input id="weirdObject" type="text" placeholder="Weird Object">
        <input id="desk" type="text" placeholder="Desk">
        <input id="schoolSupplies" type="text" placeholder="School Supply (plural)">
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
    document.getElementById("filler").innerHTML = "Fill in the blanks on the right, then click Reveal Story to see your creation! If you'd like to start over again, just click Reset Story.";
    document.getElementById("imageFiller").src = "PICS/huh.gif"
    document.getElementById("rightHeader").innerHTML = "Fill in the blanks!";
    document.getElementById("storyForm").style.display = "block";
    document.getElementById("storyForm").innerHTML = `
        <input id="name" type="text" placeholder="Name">
        <input id="filename" type="text" placeholder="Weird Filename">
        <input id="objectsPlural" type="text" placeholder="Object (plural)">
        <input id="funnyChar" type="text" placeholder="Funny Person/Character">
        <input id="verbIng" type="text" placeholder="Verb ending in -ing">
        <input id="randomObject" type="text" placeholder="Random Object">
        <input id="phrase" type="text" placeholder="Funny Phrase">
        <input id="songTitle" type="text" placeholder="Weird Song Title">
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
    document.getElementById("filler").innerHTML = "Fill in the blanks on the right, then click Reveal Story to see your creation! If you'd like to start over again, just click Reset Story.";
    document.getElementById("imageFiller").src = "PICS/maxwell.gif"
    document.getElementById("rightHeader").innerHTML = "Fill in the blanks!";
    document.getElementById("storyForm").style.display = "block";
    document.getElementById("storyForm").innerHTML = `
        <input id="animal" type="text" placeholder="Animal">
        <input id="vehicle" type="text" placeholder="Vehicle">
        <input id="celebrity" type="text" placeholder="Celebrity">
        <input id="object" type="text" placeholder="Object">
        <input id="phrase" type="text" placeholder="Funny Phrase">
        <input id="liquid" type="text" placeholder="Liquid">
        <input id="verbIng" type="text" placeholder="Verb ending in -ing">
        <input id="objectsPlural" type="text" placeholder="Object (plural)">
        <input id="weirdObject" type="text" placeholder="Weird Object">
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
    document.getElementById("filler").innerHTML = "Fill in the blanks on the right, then click Reveal Story to see your creation! If you'd like to start over again, just click Reset Story.";
    document.getElementById("imageFiller").src = "PICS/uhm.gif"
    document.getElementById("rightHeader").innerHTML = "Fill in the blanks!";
    document.getElementById("storyForm").style.display = "block";
    document.getElementById("storyForm").innerHTML = `
        <input id="name1" type="text" placeholder="Name 1">
        <input id="name2" type="text" placeholder="Name 2">
        <input id="place" type="text" placeholder="Place">
        <input id="adj" type="text" placeholder="Adjective">
        <input id="animal" type="text" placeholder="Animal">
        <input id="objectsPlural" type="text" placeholder="Object (plural)">
        <input id="verbIng" type="text" placeholder="Verb ending in -ing">
        <input id="liquid" type="text" placeholder="Liquid">
        <input id="celebrity" type="text" placeholder="Celebrity">
        <input id="foodPlural" type="text" placeholder="Food (plural)">
        <input id="phrase" type="text" placeholder="Phrase">
        <input id="object" type="text" placeholder="Object">
        <input id="animalsPlural" type="text" placeholder="Animal (plural)">
        <input id="randomObjectsPlural" type="text" placeholder="Random Object (plural)">
    `;
    document.getElementById("revealBtn").style.display = "block";
    document.getElementById("resetStoryBtn").style.display = "block";
    document.getElementById("storyOutput").innerHTML = "";
    document.getElementById("leftContent").innerHTML = "";
    document.getElementById("rightImage").src = "PICS/quill.png";
}



