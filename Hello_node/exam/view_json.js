
console.time('test');
	

// json 구조 :  {key:value }
let j = {name:'홍길동'};

// %j json 구조의 데이터를 보여달라 
console.log('%j', j );
// data의 구조형식으로 모두 보여주는 함수 : console.dir()
console.dir(j);

for(let i = 0 ; i<100; i++ ) {

	let s = '대한민국만세';
	console.log(s);
	// %s 문자열 표현
	console.log('우리나라 %s', s);
}

console.timeEnd('test');
