const loadLessons = () => {
    fetch("")// promise of response 
        .then((res) => res.json()) // promise of json data
        .then((json) => console.log(json.data));
};

const displayLessons = (lessons) => {
    //1. get the container

    const levelContainer = document.getElementById
    //2.get into every lessons
    for (let lesson of lessons) {
        //3. create element

        const btnDiv = document.createElement("div")
        btnDiv = `

        `
        //4. append into container
        levelContainer.append(btnDiv);

    }
};
loadLessons();