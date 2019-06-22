const str1 = "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.";
const isAlphabet = /^[A-Za-z]+$/;

function result() {
  let string = document.getElementById("string").value;
  let frequency = getFrequency(string);
  for (let key in frequency) {
    const li = document.createElement("li");
    li.innerHTML = `${key} --> ${frequency[key]}`
    document.getElementById('frequency').append(li)
  }
}

const getFrequency = word => {
  word = word.replace(/[^A-Za-z]/g, " ");
  word = word.replace(/\s/g, "");
  var freq = {};
  for (var i = 0; i < word.length; i++) {
    var character = word.charAt(i);
    if (freq[character]) {
      freq[character]++;
    } else {
      freq[character] = 1;
    }
  }
  return freq;
};

getFrequency(str1);