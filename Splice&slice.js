//splice (ตำเเหน่งที่จะลบ จำนวนที่จะลบ) and (ตำเเหน่งที่จะลบ จำนวนที่จะลบ สมาชิกที่ต้องการเเทรกเข้าไปในตำเเหน่ง) 
//spice (ตำเเหน่งเริ่มต้น ตำเเหน่งสุดท้าย -1)
const data = [10,20,30,40,50,60]
data.splice(1,3) 
console.log(data)
data.splice(1,2,999)
console.log(data)

const data2 = [123,456,789,741,852]
const lastdata = data2.slice(1,4)
console.log(lastdata) //ดึงข้อมูลใน Arrays