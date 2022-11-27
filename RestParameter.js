//ใช้ในการส่งค่า parameter เข้าไปทำงานใน function โดยไม่จำกัดโดยใช้เครื่องหมาย 

summation=(a,b)=> {
    return a+b
}

summation=(x,y,z)=> {
    return x+y-z
}

summation_total=(...numarr) =>{
    let total = 0 
    for(let number of numarr) total += number
    return total
}
console.log(summation(55,2));
console.log(summation(55,2,5));
console.log(summation_total(200,400,500,10,10));