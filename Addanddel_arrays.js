const data = [100,200,300]
const data2 = [222,333]
console.log(data)

const result = data.join() //การเเปลง array
console.log(result)
const x = data.join("-")
console.log(x)
console.log(data.join())

const alldata = data.concat(data2)
console.log(alldata)

//psuh, pop, shift, unshift

const f = [10,20,30]
f.push(45) //นำข้อมูลไปต่อท้าย
console.log(f)