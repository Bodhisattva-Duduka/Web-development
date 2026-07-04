function createCard(titleOfVideo, channelName, viewNum, monthsOld, duration, thumbnail) {

    let viewcount = numeral(viewNum).format('0a');

    let containerDiv = document.createElement('div');
    containerDiv.className = 'container';
    document.body.appendChild(containerDiv);

    let cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    containerDiv.appendChild(cardDiv);

    let imageDiv = document.createElement('div');
    imageDiv.className = 'image';
    cardDiv.appendChild(imageDiv)


    let picture = document.createElement('img');
    imageDiv.appendChild(picture);
    picture.setAttribute('src', `${thumbnail}`);

    let time = document.createElement('span');
    time.className = 'time';
    time.innerText = `${duration}`;
    imageDiv.appendChild(time);

    let textPart = document.createElement('div');
    textPart.className = 'text-part';
    cardDiv.appendChild(textPart);

    let title = document.createElement('div');
    title.className = 'title';
    title.innerText = `${titleOfVideo}`;
    textPart.appendChild(title);

    let details = document.createElement('div');
    details.className = 'details';
    textPart.appendChild(details);

    let cName = document.createElement('span');
    cName.className = 'cName';
    details.appendChild(cName);
    cName.innerText = `${channelName}`

    let dot = document.createElement('span');
    dot.className = 'dot'
    details.appendChild(dot);
    dot.innerText = ' • '

    let views = document.createElement('span');
    views.className = 'views';
    dot.insertAdjacentElement('afterend', views)
    views.innerText = `${viewcount} views`

    let dot2 = document.createElement('span');
    dot2.className = 'dot'
    details.appendChild(dot2);
    dot2.innerText = ' • '

    let months = document.createElement('span')
    months.className = 'months'
    details.appendChild(months)
    months.innerText = `${monthsOld} months ago`
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
createCard(
    "Basic Structure of an HTML Website | Sigma Web Development Course - Tutorial #3",
    "CodeWithHarry",
    1000000,
    1,
    "13:12",
    "https://i.ytimg.com/vi/BGeDBfCIqas/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAOpE-jqfC5twD183Onwd0gRQ7mJQ"
);
createCard(
    "Heading, Paragraphs and Links | Sigma Web Development Course - Tutorial #4",
    "CodeWithHarry",
    964000,
    1,
    "19:34",
    "https://i.ytimg.com/vi/nXba2-mgn1k/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAFhYbablM1xyDRXmQfRYeJOan64w"
);

createCard(
    "Image, Lists, and Tables in HTML | Sigma Web Development Course - Tutorial #5",
    "CodeWithHarry",
    958000,
    1,
    "18:20",
    "https://i.ytimg.com/vi/1BsVhumGlNc/hqdefault.jpg?sqp=-oaymwEnCPYBEIoBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDNQ0UU5eXdPvkyJHs0el9S4-ANjw"
);

