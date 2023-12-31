class ForExam {
  constructor() {
    this.initData();
  }

  initData() {
    const config = {
      baseArray: ['피카츄', '라이츄', '꼬부기'],
      specialProblems: [10, 16, 17, 18, 19, 20],
      htmlTagProblems: [22, 23, 25, 27, 29, 30],
      startProblemIndex: 1,
      endProblemIndex: 30
    };

    for (let i = config.startProblemIndex; i <= config.endProblemIndex; i++) {
      this['problem' + i] = this.generateProblemData(
        i,
        config.baseArray,
        config.specialProblems
      );
    }
    
    this.problem16 = [
      ['피카츄','라이츄'], 
      ['꼬부기','이브이']
    ];

    this.assembleHTMLTags(config.htmlTagProblems);
  }

  generateProblemData(problemNumber, baseArray, specialProblems) {
    if (specialProblems.includes(problemNumber)) {
      return [...baseArray, '이브이'];
    }
    return baseArray.slice();
  }

  assembleHTMLTags(htmlTagProblems) {
    for (let problem of htmlTagProblems) {
      this['problem' + problem] = this['problem' + problem].map(item => {
        if (item.includes('<')) {
          return item;
        }
        return `<li>${item}</li>`;
      });
    }
  }
}

let forExam = new ForExam();
console.dir(forExam);

// 1. forExam.problem1의 배열의 모든 요소를 대문자로 변환하세요.
for (let i = 0; i < forExam.problem1.length; i++) {
  forExam.problem1[i] = forExam.problem1[i].toUpperCase();
}
console.log(forExam.problem1);

// 2. forExam.problem2의 배열에서 이름에 '이'가 포함된 포켓몬만 필터링하세요.
forExam.problem2.filter((item) => item.includes('이'));

console.log(forExam.problem2)

// 3. forExam.problem3의 배열의 모든 요소를 하나의 문자열로 합치세요.
forExam.problem3 = forExam.problem3.join('');

console.log(forExam.problem3);

// 4. forExam.problem4의 배열을 사용하여 각 포켓몬의 이름을 키로, 이름의 길이를 값으로 하는 객체를 생성하세요.
let pokemonLengths = {};

for(let i = 0; i < forExam.problem4.length; i++) {
  let pokemonName = forExam.problem4[i];
  let nameLength = pokemonName.length;

  pokemonLengths[pokemonName] = nameLength;
}

console.log(pokemonLengths);

// 5. forExam.problem5의 배열을 알파벳 순서로 정렬하세요.
forExam.problem5.sort();

console.log(forExam.problem5);

// 6. forExam.problem6의 배열에서 첫 번째로 '이'가 포함된 포켓몬을 찾으세요.
const problem6 = forExam.problem6.find((item) => {
  return typeof item === 'string' && item.includes('이');
});

console.log(problem6);

// 7. forExam.problem7의 배열의 모든 포켓몬 이름이 '이'를 포함하고 있는지 확인하세요.
const problem7 = forExam.problem7.every((item) => {
  return typeof item === 'string' && item.includes('이');
});

console.log(problem7);

// 8. forExam.problem8의 배열 중에서 최소 하나의 포켓몬 이름이 '꼬'로 시작하는지 확인하세요.
const problem8 = forExam.problem8.some((item) => {
  return typeof item === 'string' && item.startsWith('꼬');
});

console.log(problem8);

// 9. forExam.problem9의 배열에서 '이브이'를 추가하고, 결과를 출력하세요.
forExam.problem9.push('이브이');

console.log(forExam.problem9);

// 10. forExam.problem10의 배열에서 마지막 요소를 제거하고, 결과를 출력하세요.
forExam.problem10.pop();

console.log(forExam.problem10);

// 11. forExam.problem11의 배열의 첫 번째 요소를 제거하고 결과를 출력하세요.
forExam.problem11.shift();

console.log(forExam.problem11);

// 12. forExam.problem12의 배열의 시작 부분에 '피카츄'를 추가하고 결과를 출력하세요.
forExam.problem12.unshift();

console.log(forExam.problem12);

// 13. forExam.problem13의 배열에서 '라이츄'를 '이브이'로 변경하세요.
const index = forExam.problem13.indexOf('라이츄');
if (index !== -1) {
  forExam.problem13.splice(index, 1, '이브이');
}

console.log(forExam.problem13);

// 14. forExam.problem14의 배열을 복제하고, 복제된 배열에 '이브이'를 추가하세요. 원본 배열과 복제된 배열을 출력하세요.
const clonedArray = forExam.problem14.slice();
clonedArray.push('이브이');

console.log('원본 배열:', forExam.problem14);
console.log('복제된 배열:', clonedArray);

// 15. forExam.problem15의 배열에서 마지막 두 요소만 가져오세요.
const problem15 = forExam.problem15.slice(-2);

console.log('마지막 두 요소:', problem15);

// 16. forExam.problem16의 두 배열을 하나의 배열로 합치세요.
forExam.problem16.concat();

console.log(forExam.problem16);

// 17. forExam.problem17의 배열에서 '라이츄'를 찾아 그 인덱스를 출력하세요.
const problem17 = forExam.problem17.indexOf('라이츄');

console.log(problem17);

// 18. forExam.problem18의 배열을 거꾸로 순서를 뒤집어 출력하세요.
forExam.problem18.reverse();

console.log(forExam.problem18)

// 19. forExam.problem19의 배열에서 각 포켓몬의 이름 길이를 배열로 만드세요.
const problem19 = forExam.problem19.map(pokemon => pokemon.length);

console.log(problem19);

// 20. forExam.problem20의 배열에서 이름 길이가 3글자 이상인 포켓몬만 필터링하세요.
const problem20 = forExam.problem20.filter((pokemon) => pokemon.length === 3)

console.log(problem20);

// 21. forExam.problem21의 배열의 각 요소를 리스트 아이템(<li>)으로 변환하세요.
const problem21 = forExam.problem21.map(pokemon => `<li>${pokemon}</li>`);

console.log(problem21);

// 22. forExam.problem22의 배열을 하나의 리스트(<ul>) 문자열로 합치세요.
const problem22 = forExam.problem22.map(pokemon => `<li>${pokemon}</li>`)
const ulString = `<ul>${forExam.problem22.join('')}</ul>`;

console.log(ulString);

// 23. forExam.problem23의 배열에서 '지우'가 포함된 태그만 필터링하세요.
const problem23 = forExam.problem23.filter(pokemon => pokemon.includes('지우'));

console.log(problem23);

// 24. forExam.problem24의 배열의 각 요소를 <option> 태그로 감싸고, 전체를 <select> 태그로 감싸세요.
const problem24 = forExam.problem24.map(pokemon => `<option>${pokemon}</option>`);
const selectTag  = `<select>${problem24.join('')}</select>`;

console.log(selectTag);

// 25. forExam.problem25의 배열을 모두 포함하는 <nav> 태그를 만드세요.
const problem25 = `<nav>${forExam.problem25.join('')}</nav>`;

console.log(problem25);

// 26. forExam.problem26의 배열의 각 요소를 <section> 태그로 감싸고, 전체를 <article> 태그로 감싸세요.
const problem26 = forExam.problem26.map(pokemon => `<section>${pokemon}</section>`);
const articleTag  = `<article>${problem26.join('')}</article>`;

console.log(articleTag);

// 27. forExam.problem27의 배열의 모든 <li> 태그를 <ol> 태그로 감싸세요.
const olTag  = forExam.problem27.map((item) => `<ol>${item}</ol>`);

console.log(olTag);

// 28. forExam.problem28의 배열의 각 요소를 <input> 태그의 placeholder로 설정하세요. 결과는 <input> 태그의 배열이어야 합니다. 
const problem28 = forExam.problem28.map((item) => `<input placeholder=${item}>`);

console.log(problem28);

// 29. forExam.problem29의 배열을 <footer> 태그로 감싸세요.
const footerTag  = `<footer>${forExam.problem29}</footer>`;

console.log(footerTag);

// 30. forExam.problem30의 배열을 하나의 HTML 문자열로 병합한 후, 전체를 <div> 태그로 감싸세요.
const divTag  = `<div>${forExam.problem30}</div>`;

console.log(divTag);