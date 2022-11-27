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

//psuh, pop ต่อท้าย, shift, unshift ด้านหน้า

const f = [10,20,30]
f.push(45) //นำข้อมูลไปต่อท้าย
f.push(...[255,78])
console.log(f)

f.pop()//delete ด้านหลังสุด
console.log(f)

f.shift()
console.log(f)

f.unshift(789)
console.log(f)

