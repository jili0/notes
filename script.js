let notizZettelName = document.querySelector(".notizZettelName").innerText;
const notizContainer = document.querySelector(
  `.notizContainer${notizZettelName}`
);

const splitStringToArray = (string) => {
  let array = string.split("- ");
  return array;
};

const editNotiz = () => {
  console.log("editNotiz");
};

const deleteNotiz = () => {
  console.log("deleteNotiz");
};

const displayNotiz = (notiz) => {
  let neuNotiz = splitStringToArray(notiz).slice(1);

  for (let i = 0; i < neuNotiz.length; i++) {
    /* innercontainer */
    const innerContainer = document.createElement("div");
    innerContainer.className = "innerContainer";
    notizContainer.appendChild(innerContainer);
    /* buttons */
    const buttons = document.createElement("div");
    buttons.className = "editDeleteButtons";
    const editButton = document.createElement("button");
    editButton.className = "editButton";
    editButton.textContent = "🍏";
    editButton.onclick = editNotiz;
    const deleteButton = document.createElement("button");
    deleteButton.className = "deleteButton";
    deleteButton.textContent = "🍎";
    deleteButton.onclick = deleteNotiz;
    buttons.appendChild(editButton);
    buttons.appendChild(deleteButton);
    innerContainer.appendChild(buttons);
    /* notiz */
    const einzelnNotiz = document.createElement("div");
    einzelnNotiz.className = "einzelnNotiz";
    innerContainer.appendChild(einzelnNotiz);

    let index;
    let array = [];

    array.push(notiz);

    return array.length >= 0 ? array : [notiz];
  }

  handleNotiz(neuNotiz[i], 0).forEach((line) => {
    const einzelnLine = document.createElement("pre");
    einzelnLine.className = "einzelnLine";
    einzelnLine.textContent = line;
    einzelnNotiz.appendChild(einzelnLine);
  });
};

if (notizZettelName == "HTML") {
  displayNotiz(htmlNotizen);
} else if (notizZettelName == "CSS") {
  displayNotiz(cssNotizen);
} else if (notizZettelName == "JS") {
  displayNotiz(jsNotizen);
} else if (notizZettelName == "React") {
  displayNotiz(reactNotizen);
} else if (notizZettelName == "Shortcuts") {
  displayNotiz(shortcutsNotizen);
} else if (notizZettelName == "Terminal") {
  displayNotiz(terminalNotizen);
} else if (notizZettelName == "Tools") {
  displayNotiz(toolsNotizen);
} else if (notizZettelName == "Problems") {
  displayNotiz(problemsNotizen);
}
