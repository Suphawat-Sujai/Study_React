const data = [10,20,30,40,60]

for (let i = 0 ; i < data.length;i++){
    if (data[i] >= 30) break
    console.log("ลำดับ ${i} = ${data[i]}");
}