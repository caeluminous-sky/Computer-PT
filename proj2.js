function revealStory() {
    let rightTitle = "";
    let storyText = "";
    let leftContent = "";
    let imageSrc = "PICS/quill.png";

    const inputs = document.querySelectorAll("#storyForm input");
    for (let input of inputs) {
        if (!input.value.trim()) {
            alert("⚠️ Please fill in all blanks before submitting!");
            return; 
        }
    }
    document.getElementById("filler").innerHTML = "";
    document.getElementById("imageFiller").src = "";
    document.getElementById("storyForm").style.display = "none";
    document.getElementById("revealBtn").style.display = "none";
    document.getElementById("resetStoryBtn").style.display = "none";

    if (currentStory === 1) {
        rightTitle = "The Weird Teacher";
        imageSrc = "PICS/teacher.png";
        let name = document.getElementById("name").value;
        let clothing = document.getElementById("clothing").value;
        let objectsPlural = document.getElementById("objectsPlural").value;
        let desk = document.getElementById("desk").value;
        let verbIng = document.getElementById("verbIng").value;
        let celebrity = document.getElementById("celebrity").value;
        let weirdObject = document.getElementById("weirdObject").value;
        let foodPlural = document.getElementById("foodPlural").value;
        let animal = document.getElementById("animal").value;
        let verbIng2 = document.getElementById("verbIng2").value;
        let phrase = document.getElementById("phrase").value;
        let place = document.getElementById("place").value;
        let randomObject = document.getElementById("randomObject").value;

        storyText = `Today, my teacher ${name} walked into class wearing a ${clothing} made of ${objectsPlural}. Instead of teaching math, they climbed onto a ${desk} and started ${verbIng} in front of everyone. The projector suddenly turned on, showing ${celebrity} dancing with a ${weirdObject}. Students tried to take notes, but their pens started turning into ${foodPlural} one by one. Even the class pet, ${animal}, joined in by ${verbIng2} across the whiteboard. At that point, everyone shouted, “${phrase}!” and ran out of the ${place}. By the time the bell rang, the teacher was still standing on the desk, holding up a giant ${randomObject} like it was a trophy.`;

        leftContent = `Name: ${name}<br>
        Clothing Item: ${clothing}<br>
        Object (plural): ${objectsPlural}<br>
        Desk/Chair: ${desk}<br>
        Verb (-ing): ${verbIng}<br>
        Celebrity/YouTuber: ${celebrity}<br>
        Weird Object: ${weirdObject}<br>
        Food (plural): ${foodPlural}<br>
        Animal: ${animal}<br>
        Verb (-ing): ${verbIng2}<br>
        Funny Phrase: ${phrase}<br>
        Place: ${place}<br>
        Random Object: ${randomObject}`;
    }

    if (currentStory === 2) {
        rightTitle = "The Keyboard Problem";
        imageSrc = "PICS/keyboard.png";
        let name = document.getElementById("name").value;
        let key = document.getElementById("key").value;
        let objectsPlural = document.getElementById("objectsPlural").value;
        let phrase = document.getElementById("phrase").value;
        let randomObject = document.getElementById("randomObject").value;
        let verbIng = document.getElementById("verbIng").value;
        let foodPlural = document.getElementById("foodPlural").value;
        let celebrity = document.getElementById("celebrity").value;
        let weirdObject = document.getElementById("weirdObject").value;
        let desk = document.getElementById("desk").value;
        let schoolSupplies = document.getElementById("schoolSupplies").value;

        storyText = `${name} pressed ${key}, and suddenly the whole computer lab filled with ${objectsPlural}. The teacher yelled, “${phrase}!” while trying to fix it, but accidentally knocked over a ${randomObject}. One of the computers started ${verbIng} uncontrollably, spitting out ${foodPlural} from the CD drive. The lights flickered, and ${celebrity} appeared on the smartboard holding ${weirdObject}. Students tried to escape, but the door was blocked by a pile of ${objectsPlural}. By the end, everyone was laughing while the teacher stood on a ${desk} waving ${schoolSupplies} like a weapon.`;

        leftContent = `Name: ${name}<br>
        Key: ${key}<br>
        Objects (plural): ${objectsPlural}<br>
        Funny Phrase: ${phrase}<br>
        Random Object: ${randomObject}<br>
        Verb (-ing): ${verbIng}<br>
        Food (plural): ${foodPlural}<br>
        Celebrity: ${celebrity}<br>
        Weird Object: ${weirdObject}<br>
        Desk: ${desk}<br>
        School Supplies: ${schoolSupplies}`;
    }

    if (currentStory === 3) {
        rightTitle = "The Computer Virus";
        imageSrc = "PICS/virus.png";
        let name = document.getElementById("name").value;
        let filename = document.getElementById("filename").value;
        let objectsPlural = document.getElementById("objectsPlural").value;
        let funnyChar = document.getElementById("funnyChar").value;
        let verbIng = document.getElementById("verbIng").value;
        let randomObject = document.getElementById("randomObject").value;
        let phrase = document.getElementById("phrase").value;
        let songTitle = document.getElementById("songTitle").value;
        let celebrity = document.getElementById("celebrity").value;
        let foodPlural = document.getElementById("foodPlural").value;

        storyText = `${name} downloaded a file called ${filename}, thinking it would help with homework. Instead, the computer caught a virus that turned every icon into ${objectsPlural} and made the wallpaper a giant picture of ${funnyChar}. Suddenly, the mouse started ${verbIng} across the desk, dragging ${randomObject} behind it. The printer went wild, spitting out pages filled with “${phrase}” over and over again. Students screamed as the lab speakers started blasting ${songTitle} at full volume. Even ${celebrity} popped up in a pop-up window, shouting random instructions. By the end, the teacher had to unplug the entire lab while holding a pile of ${foodPlural}.`;

        leftContent = `Name: ${name}<br>
        Weird Filename: ${filename}<br>
        Objects (plural): ${objectsPlural}<br>
        Funny Character: ${funnyChar}<br>
        Verb (-ing): ${verbIng}<br>
        Random Object: ${randomObject}<br>
        Funny Phrase: ${phrase}<br>
        Song Title: ${songTitle}<br>
        Celebrity: ${celebrity}<br>
        Food (plural): ${foodPlural}`;
    }

    if (currentStory === 4) {
        rightTitle = "The Grocery Store";
        imageSrc = "PICS/shoppingcart.png";
        let animal = document.getElementById("animal").value;
        let vehicle = document.getElementById("vehicle").value;
        let celebrity = document.getElementById("celebrity").value;
        let object = document.getElementById("object").value;
        let phrase = document.getElementById("phrase").value;
        let liquid = document.getElementById("liquid").value;
        let verbIng = document.getElementById("verbIng").value;
        let objectsPlural = document.getElementById("objectsPlural").value;
        let weirdObject = document.getElementById("weirdObject").value;
        let foodPlural = document.getElementById("foodPlural").value;

        storyText = `I went to buy ${animal} at the grocery store, but the cashier handed me ${vehicle} instead. Confused, I tried to explain, but suddenly ${celebrity} walked by eating ${object} and yelled, “${phrase}!” Before I could react, the ceiling started leaking ${liquid}, and then ${verbIng} started raining down everywhere. The shopping carts began ${verbIng} on their own, crashing into shelves full of ${objectsPlural}. A manager appeared holding a ${weirdObject}, shouting for everyone to remain calm. Instead, the entire store ran outside carrying bags full of ${foodPlural} and laughing like it was a parade.`;

        leftContent = `Animal: ${animal}<br>
        Vehicle: ${vehicle}<br>
        Celebrity: ${celebrity}<br>
        Object: ${object}<br>
        Funny Phrase: ${phrase}<br>
        Liquid: ${liquid}<br>
        Verb (-ing): ${verbIng}<br>
        Objects (plural): ${objectsPlural}<br>
        Weird Object: ${weirdObject}<br>
        Food (plural): ${foodPlural}`;
    }

    if (currentStory === 5) {
        rightTitle = "The Haunted Hallway";
        imageSrc = "PICS/ghost.png";
        let name1 = document.getElementById("name1").value;
        let name2 = document.getElementById("name2").value;
        let place = document.getElementById("place").value;
        let adj = document.getElementById("adj").value;
        let animal = document.getElementById("animal").value;
        let objectsPlural = document.getElementById("objectsPlural").value;
        let verbIng = document.getElementById("verbIng").value;
        let liquid = document.getElementById("liquid").value;
        let celebrity = document.getElementById("celebrity").value;
        let foodPlural = document.getElementById("foodPlural").value;
        let phrase = document.getElementById("phrase").value;
        let object = document.getElementById("object").value;
        let animalsPlural = document.getElementById("animalsPlural").value;
        let randomObjectsPlural = document.getElementById("randomObjectsPlural").value;

        storyText = `${name1} and ${name2} were walking down ${place} when a ${adj} ${animal} appeared, carrying a pile of ${objectsPlural}. The lights flickered, and the walls started ${verbIng} with a strange noise. They both tried ${verbIng} to escape, but the floor suddenly spilled with ${liquid}, making it impossible to run. Out of nowhere, ${celebrity} dropped from the ceiling holding ${foodPlural} like weapons. A door creaked open, and inside was a giant ${object} glowing mysteriously. The two of them screamed, “${phrase}!” as a group of ${animalsPlural} began chasing them through the hallway. By the time they escaped, both of them were covered in ${randomObjectsPlural} and swore never to come back.`;

        leftContent = `Name 1: ${name1}<br>
        Name 2: ${name2}<br>
        Place: ${place}<br>
        Adjective: ${adj}<br>
        Animal: ${animal}<br>
        Objects (plural): ${objectsPlural}<br>
        Verb (-ing): ${verbIng}<br>
        Liquid: ${liquid}<br>
        Celebrity: ${celebrity}<br>
        Food (plural): ${foodPlural}<br>
        Phrase: ${phrase}<br>
        Object: ${object}<br>
        Animals (plural): ${animalsPlural}<br>
        Random Objects (plural): ${randomObjectsPlural}`;
    }

    // Set header + image
    document.getElementById("rightHeader").innerText = rightTitle;
    document.getElementById("rightImage").src = imageSrc;
    document.getElementById("leftContent").innerHTML = leftContent;
    document.getElementById("storyOutput").innerHTML = storyText;
}

function resetStory() {
    if (currentStory === 1) story1();
    if (currentStory === 2) story2();
    if (currentStory === 3) story3();
    if (currentStory === 4) story4();
    if (currentStory === 5) story5();
}

