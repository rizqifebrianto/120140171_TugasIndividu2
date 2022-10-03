let promise = false;

const Promises = new Promise((resolve, reject) => {
	if(promise){
		resolve('promises has been kept')
	}else{
		reject('promise not kept')
	}
})

Promises
.then(res => console.log(`Ok ${res} !`))
.catch(res => console.log(`Its Ok ! ${res}`))