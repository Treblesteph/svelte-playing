export const getUnique = (array, count) => {
    const remaining = array.slice(array);
    let choices = [];

    for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * remaining.length);
        const removed = remaining.splice(index, 1);
        choices.push(removed[0]);
    }
    return choices;  
}

export const shuffle = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

export const stripString = string => string.toLowerCase().split(" ").join("").split("'").join("")
