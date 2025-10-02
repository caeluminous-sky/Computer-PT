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

    // === STORY 1 ===
    if (currentStory === 1) {
        rightTitle = "The Weird Teacher";
        imageSrc = "PICS/teacher.png";
        let name = document.getElementById("name").value;
        let clothing = document.getElementById("clothing").value;
        let objectsPlural = document.getElementById("objectsPlural").value;
        let desk = document.getElementById("desk").value;
        let verbIng = document.getElementById("verbIng").value;
        let celebrity = document.getElementById("celebrity").value;
        let weirdObjectSingular = document.getElementById("weirdObjectSingular").value;
        let foodPlural = document.getElementById("foodPlural").value;
        let name2 = document.getElementById("name2").value;
        let verbIng2 = document.getElementById("verbIng2").value;
        let phrase = document.getElementById("phrase").value;
        let place = document.getElementById("place").value;
        let randomObjectSingular = document.getElementById("randomObjectSingular").value;

        storyText = `Today, Teacher ${name} walked into class wearing a ${clothing} made of ${objectsPlural}. Instead of teaching Math, teacher climbed onto a ${desk} and started ${verbIng} in front of everyone. The projector suddenly turned on, showing ${celebrity} dancing with a ${weirdObjectSingular}. Students tried to take notes but their pens started turning into ${foodPlural} one by one. Even the class pet, ${name2}, joined in by ${verbIng2} across the whiteboard. At that point, everyone shouted, “${phrase}!” and ran out of the ${place}. By the time the bell rang, the teacher was still standing on the ${desk}, holding up a giant ${randomObjectSingular} like it was a trophy.`;

        leftContent = `Name 1: ${name}<br>
        Clothing: ${clothing}<br>
        Objects: ${objectsPlural}<br>
        Object: ${desk}<br>
        Verb (-ing): ${verbIng}<br>
        Celebrity: ${celebrity}<br>
        Object: ${weirdObjectSingular}<br>
        Food: ${foodPlural}<br>
        Name 2: ${name2}<br>
        Verb (-ing): ${verbIng2}<br>
        Phrase: ${phrase}<br>
        Place: ${place}<br>
        Object: ${randomObjectSingular}`;
    }

    // === STORY 2 ===
    if (currentStory === 2) {
        rightTitle = "The Keyboard Problem";
        imageSrc = "PICS/keyboard.png";
        let name = document.getElementById("name").value;
        let key = document.getElementById("key").value;
        let objectsPlural = document.getElementById("objectsPlural").value;
        let phrase = document.getElementById("phrase").value;
        let randomObjectSingular = document.getElementById("randomObjectSingular").value;
        let verbIng = document.getElementById("verbIng").value;
        let foodPlural = document.getElementById("foodPlural").value;
        let celebrity = document.getElementById("celebrity").value;
        let weirdObjectSingular = document.getElementById("weirdObjectSingular").value;
        let desk = document.getElementById("desk").value;
        let schoolSupplies = document.getElementById("schoolSupplies").value;

        storyText = `${name} pressed ${key} on the keyboard, and suddenly the whole computer lab was filled with ${objectsPlural}. The teacher yelled, “${phrase}!” while trying to fix it, but accidentally knocked over the ${randomObjectSingular}. One of the computers started ${verbIng} uncontrollably, spitting out ${foodPlural} from the CD drive. The lights flickered, and suddenly ${celebrity} appeared on the smartboard holding a ${weirdObjectSingular}. Students tried to escape but the door was blocked by a pile of ${objectsPlural}. By the end, everyone was laughing while the teacher stood on a ${desk} waving ${schoolSupplies} like a weapon.`;

        leftContent = `Name: ${name}<br>
        Key: ${key}<br>
        Objects: ${objectsPlural}<br>
        Phrase: ${phrase}<br>
        Object: ${randomObjectSingular}<br>
        Verb (-ing): ${verbIng}<br>
        Food: ${foodPlural}<br>
        Celebrity: ${celebrity}<br>
        Object: ${weirdObjectSingular}<br>
        Object: ${desk}<br>
        School Supplies: ${schoolSupplies}`;
    }

    // === STORY 3 ===
    if (currentStory === 3) {
        rightTitle = "The Computer Virus";
        imageSrc = "PICS/virus.png";
        let name = document.getElementById("name").value;
        let filename = document.getElementById("filename").value;
        let objectsPlural = document.getElementById("objectsPlural").value;
        let funnyChar = document.getElementById("funnyChar").value;
        let verbIng = document.getElementById("verbIng").value;
        let randomObjectSingular = document.getElementById("randomObjectSingular").value;
        let phrase = document.getElementById("phrase").value;
        let songTitle = document.getElementById("songTitle").value;
        let celebrity = document.getElementById("celebrity").value;
        let foodPlural = document.getElementById("foodPlural").value;

        storyText = `${name} downloaded a file, called ${filename}, thinking it would help with homework. Instead, the computer caught a virus that turned every icon into ${objectsPlural} and made the wallpaper a giant picture of ${funnyChar}. Suddenly, the mouse started ${verbIng} across the desk, dragging a ${randomObjectSingular} behind it. The printer went wild, spitting out pages filled with “${phrase}” over and over again. Students screamed as the lab speakers started blasting ${songTitle} at full volume. Even ${celebrity} popped up in a pop-up window, shouting random instructions. By the end, the teacher had to unplug the entire lab while holding a pile of ${foodPlural}.`;

        leftContent = `Name: ${name}<br>
        Filename: ${filename}<br>
        Objects: ${objectsPlural}<br>
        Character: ${funnyChar}<br>
        Verb (-ing): ${verbIng}<br>
        Object: ${randomObjectSingular}<br>
        Phrase: ${phrase}<br>
        Song: ${songTitle}<br>
        Celebrity: ${celebrity}<br>
        Food: ${foodPlural}`;
    }

    // === STORY 4 ===
    if (currentStory === 4) {
        rightTitle = "The Grocery Store";
        imageSrc = "PICS/shoppingcart.png";
        let animalSingular = document.getElementById("animalSingular").value;
        let vehicleSingular = document.getElementById("vehicleSingular").value;
        let celebrity = document.getElementById("celebrity").value;
        let objectSingular = document.getElementById("objectSingular").value;
        let phrase = document.getElementById("phrase").value;
        let liquid = document.getElementById("liquid").value;
        let verbIng = document.getElementById("verbIng").value;
        let objectsPlural = document.getElementById("objectsPlural").value;
        let weirdObjectSingular = document.getElementById("weirdObjectSingular").value;
        let foodPlural = document.getElementById("foodPlural").value;

        storyText = `I went to buy a ${animalSingular} at the pet shop, but the cashier handed me a ${vehicleSingular} instead. Confused, I tried to explain, but suddenly ${celebrity} walked by holding a ${objectSingular} and yelled, “${phrase}!” Before I could react, the ceiling started leaking ${liquid}, and then it started raining down everywhere. The shopping carts began ${verbIng} on their own, crashing into shelves full of ${objectsPlural}. A manager appeared holding a ${weirdObjectSingular}, shouting for everyone to remain calm. Instead, the entire store ran outside carrying bags full of ${foodPlural} and laughing like it was a parade.`;

        leftContent = `Animal: ${animalSingular}<br>
        Vehicle: ${vehicleSingular}<br>
        Celebrity: ${celebrity}<br>
        Object: ${objectSingular}<br>
        Phrase: ${phrase}<br>
        Liquid: ${liquid}<br>
        Verb (-ing): ${verbIng}<br>
        Objects: ${objectsPlural}<br>
        Object: ${weirdObjectSingular}<br>
        Food: ${foodPlural}`;
    }

    // === STORY 5 ===
    if (currentStory === 5) {
        rightTitle = "The Haunted Hallway";
        imageSrc = "PICS/ghost.png";
        let name1 = document.getElementById("name1").value;
        let name2 = document.getElementById("name2").value;
        let place = document.getElementById("place").value;
        let adj = document.getElementById("adj").value;
        let animalSingular = document.getElementById("animalSingular").value;
        let objectsPlural = document.getElementById("objectsPlural").value;
        let verbIng = document.getElementById("verbIng").value;
        let liquid = document.getElementById("liquid").value;
        let celebrity = document.getElementById("celebrity").value;
        let foodPlural = document.getElementById("foodPlural").value;
        let phrase = document.getElementById("phrase").value;
        let objectSingular = document.getElementById("objectSingular").value;
        let animalsPlural = document.getElementById("animalsPlural").value;
        let randomObjectsPlural = document.getElementById("randomObjectsPlural").value;

        storyText = `${name1} and ${name2} were walking down ${place} when a ${adj} ${animalSingular} appeared, carrying a pile of ${objectsPlural}. The lights flickered, and the walls started ${verbIng} with a strange noise. They both tried ${verbIng} to escape, but the floor suddenly spilled with ${liquid}, making it impossible to run. Out of nowhere, ${celebrity} dropped from the ceiling holding ${foodPlural} like weapons. A door creaked open, and inside was a giant ${objectSingular} glowing mysteriously. The two of them screamed, “${phrase}!” as a group of ${animalsPlural} began chasing them through the hallway. By the time they escaped, both of them were covered in ${randomObjectsPlural} and swore never to come back.`;

        leftContent = `Name 1: ${name1}<br>
        Name 2: ${name2}<br>
        Place: ${place}<br>
        Adjective: ${adj}<br>
        Animal: ${animalSingular}<br>
        Objects: ${objectsPlural}<br>
        Verb (-ing): ${verbIng}<br>
        Liquid: ${liquid}<br>
        Celebrity: ${celebrity}<br>
        Food: ${foodPlural}<br>
        Phrase: ${phrase}<br>
        Object: ${objectSingular}<br>
        Animals: ${animalsPlural}<br>
        Random Objects: ${randomObjectsPlural}`;
    }

    // Apply results
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
