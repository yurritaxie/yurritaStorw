// 练习：将1-9文件从新命名
const fs = require("fs");

fs.readdir("./", (err, data) => {
  if (err) {
    console.log("读取失败");
    return;
  }
  console.log(data);
  data.forEach(item => {
    let newName;
    let index = item.split('_')[0];
    let oldName = item.split('_')[1];
    if(Number(index)<10){
        newName = '0'+index +'_'+item.split('_')[1];
        fs.rename(__dirname+`/${item}`, __dirname+`/${newName}`, err =>{
            if (err) {
                console.log('重命名失败~', err);
                return;
            }
            console.log('重命名成功~')
        })
    }
  })
});
