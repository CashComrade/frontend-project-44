import readlineSync from 'readline-sync';
const dialogue = () =>{
	const aname = readlineSync.question('May I have your name? ')
	console.log('Hello,', aname+'!')
};
export default dialogue;
